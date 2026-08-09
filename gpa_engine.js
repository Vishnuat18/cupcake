import { auth, fs, db, doc, getDoc, setDoc, updateDoc } from "./firebase-config.js";
import { itSyllabus, gradePoints } from "./syllabus_data.js";

class GPAEngine {
    constructor() {
        this.userData = {
            semesters: {},
            cgpa: 0,
            targetCgpa: 8.5,
            friends: []
        };
        this.currentProfile = 'primary'; // 'primary' or friend index
    }

    getGradePoint(grade) {
        return gradePoints[grade] || 0;
    }

    async init() {
        return new Promise((resolve) => {
            auth.onAuthStateChanged(async (user) => {
                if (user) {
                    // Try User-Specific LocalStorage first
                    const localKey = `smack_gpa_data_${user.uid}`;
                    const local = localStorage.getItem(localKey);
                    if (local) {
                        this.userData = JSON.parse(local);
                    }

                    // Sync with Firebase
                    const userRef = doc(fs, "gpa_profiles", user.uid);
                    try {
                        const snap = await getDoc(userRef);
                        if (snap.exists()) {
                            this.userData = snap.data();
                            this.saveLocal();
                        } else {
                            // First time user, save initial state
                            await setDoc(userRef, this.userData);
                        }
                    } catch (e) {
                        console.error("Firebase sync error:", e);
                    }
                    
                    this.broadcastUpdate();
                    resolve();
                } else {
                    // Not logged in, clear sensitive data from memory
                    this.userData = { semesters: {}, cgpa: 0, targetCgpa: 8.5, friends: [] };
                    resolve();
                }
            });
        });
    }

    saveLocal() {
        const user = auth.currentUser;
        if (user) {
            localStorage.setItem(`smack_gpa_data_${user.uid}`, JSON.stringify(this.userData));
        }
    }

    async syncFirebase() {
        const user = auth.currentUser;
        if (user) {
            const userRef = doc(fs, "gpa_profiles", user.uid);
            await setDoc(userRef, this.userData, { merge: true });

            // Sync summary to users collection for profile display
            const profileRef = doc(fs, "users", user.uid);
            const syncData = {
                latestCGPA: this.userData.cgpa,
                lastAcademicUpdate: new Date().toISOString()
            };

            // Sync individual semester GPAs for quick access in profile/admin
            if (this.userData.semesters) {
                Object.keys(this.userData.semesters).forEach(sem => {
                    const gpaVal = this.userData.semesters[sem].gpa;
                    if (gpaVal && gpaVal !== "0.00") {
                        syncData[`sem${sem}GPA`] = gpaVal;
                    }
                });
            }

            await setDoc(profileRef, syncData, { merge: true });
        }
    }

    calculateGPA(semester) {
        const semData = this.userData.semesters[semester];
        if (!semData || !semData.subjects) return 0;

        let totalPoints = 0;
        let totalCredits = 0;

        semData.subjects.forEach(sub => {
            const points = gradePoints[sub.grade] || 0;
            totalPoints += (points * sub.credits);
            totalCredits += sub.credits;
        });

        return totalCredits > 0 ? (totalPoints / totalCredits).toFixed(2) : 0;
    }

    calculateCGPA() {
        let totalPoints = 0;
        let totalCredits = 0;

        Object.values(this.userData.semesters).forEach(sem => {
            sem.subjects.forEach(sub => {
                const points = gradePoints[sub.grade] || 0;
                totalPoints += (points * sub.credits);
                totalCredits += sub.credits;
            });
        });

        const cgpa = totalCredits > 0 ? (totalPoints / totalCredits).toFixed(2) : 0;
        this.userData.cgpa = cgpa;
        return cgpa;
    }

    calculateManualCGPA(gpas) {
        if (gpas.length === 0) return 0;
        const sum = gpas.reduce((a, b) => a + b, 0);
        return (sum / gpas.length).toFixed(2);
    }

    updateSemester(semester, subjects, note = '') {
        this.userData.semesters[semester] = {
            subjects,
            gpa: this.calculateGPA(semester),
            note: note,
            updatedAt: new Date().toISOString()
        };
        this.calculateCGPA();
        this.saveLocal();
        this.syncFirebase();
        this.broadcastUpdate();
    }

    broadcastUpdate() {
        window.dispatchEvent(new CustomEvent('gpa-update', { detail: this.userData }));
    }

    async clearHistory() {
        this.userData.semesters = {};
        this.userData.cgpa = 0;
        this.saveLocal();
        await this.syncFirebase();
        this.broadcastUpdate();
    }

    getPerformanceInsights() {
        const gpas = Object.values(this.userData.semesters).map(s => parseFloat(s.gpa)).filter(g => g > 0);
        if (gpas.length < 1) return "Add your first semester to see insights!";
        
        const latest = gpas[gpas.length - 1];
        const avg = gpas.reduce((a, b) => a + b, 0) / gpas.length;

        if (latest > avg) return "📈 You are improving! Your latest GPA is above your average.";
        if (latest < avg) return "📉 Consistency is key. Try to focus more on your current subjects.";
        return "✨ Stable performance. Keep up the good work!";
    }
}

export const gpaEngine = new GPAEngine();
