/**
 * Centralized Subject Materials Data
 * Used by home.html for search and resources.html for filtered views.
 */

export const subjectMaterials = {
    'oose': {
        fullName: 'Object Oriented Software Engineering',
        shortName: 'OOSE',
        courseCode: 'CCS356',
        icon: 'fas fa-code-branch',
        bgImage: 'oose/oose_bg.png',
        semester: 6,
        syllabus: [
            {
                unit: 'UNIT I',
                title: 'SOFTWARE PROCESS AND AGILE DEVELOPMENT',
                topics: 'Introduction to Software Engineering, Software Process, Perspective and Specialized Process Models –Introduction to Agility-Agile process-Extreme programming-XP Process-Case Study.'
            },
            {
                unit: 'UNIT II',
                title: 'REQUIREMENTS ANALYSIS AND SPECIFICATION',
                topics: 'Requirement analysis and specification – Requirements gathering and analysis – Software Requirement Specification – Formal system specification – Finite State Machines – Petrinets –Object modelling using UML – Use case Model – Class diagrams – Interaction diagrams – Activity diagrams – State chart diagrams – Functional modelling – Data Flow Diagram- CASE TOOLS.'
            },
            {
                unit: 'UNIT III',
                title: 'SOFTWARE DESIGN',
                topics: 'Software design – Design process – Design concepts – Coupling – Cohesion – Functional independence – Design patterns – Model-view-controller – Publish-subscribe – Adapter – Command – Strategy – Observer – Proxy – Facade – Architectural styles – Layered - Client Server - Tiered - Pipe and filter- User interface design-Case Study.'
            },
            {
                unit: 'UNIT IV',
                title: 'SOFTWARE TESTING AND MAINTENANCE',
                topics: 'Testing – Unit testing – Black box testing– White box testing – Integration and System testing– Regression testing – Debugging - Program analysis – Symbolic execution – Model Checking- Case Study'
            },
            {
                unit: 'UNIT V',
                title: 'PROJECT MANAGEMENT',
                topics: 'Software Project Management- Software Configuration Management - Project Scheduling- DevOps: Motivation-Cloud as a platform-Operations- Deployment Pipeline:Overall Architecture Building and Testing-Deployment- Tools- Case Study'
            }
        ],
        materials: [
            { name: 'Unit 1: Software Process & Agile', file: 'oose/notes/oose_u1.pdf' },
            { name: 'Unit 2: Requirements Analysis', file: 'oose/notes/oose_u2.pdf' },
            { name: 'Unit 3: Software Design', file: 'oose/notes/oose_u3.pdf' },
            { name: 'Unit 4: Testing & Maintenance', file: 'oose/notes/oose_u4.pdf' },
            { name: 'Unit 5: Project Management', file: 'oose/notes/oose_u5.pdf' },
            { name: '2-Mark Question Bank', file: 'oose/2m/oose_2m.pdf' }
        ],
        previousYearQuestions: [
            { year: 'Apr/May 2024', file: 'oose/qn/CCS356-Object-Oriented-Software-Engineering-Apr-May-2024-Question-Paper-Download.pdf' }
        ],
        importantQuestions: [
            { 
                unit: '1', 
                firstHalf: [
                    'Software Process Models (Waterfall, RAD, Spiral) (or) Perspective Models'
                ],
                secondHalf: [
                    'Agile Process Models and Principles',
                    'Extreme Programming (XP) Process'
                ]
            },
            { 
                unit: '2', 
                firstHalf: [
                    'Software Requirement Analysis and Gathering', 
                    'Software Requirement Specification (SRS)'
                ],
                secondHalf: [
                    'Object Modelling using UML (Case Study) (15 Marks)', 
                    'Petrinets'
                ]
            },
            { 
                unit: '3', 
                firstHalf: [
                    'Software Design Principles: Coupling and Cohesion'
                ],
                secondHalf: [
                    'Architectural Styles (Layered, Client-Server, Pipe and Filter)', 
                    'Design Patterns: MVC, Observer, Proxy, Facade'
                ]
            },
            { 
                unit: '4', 
                firstHalf: [
                    'Compare Black-box and White-box Testing', 
                    'Levels of Testing: Unit, Integration, and System Testing'
                ],
                secondHalf: [
                    'Regression Testing and its Importance', 
                    'Debugging Process and Techniques'
                ]
            },
            { 
                unit: '5', 
                firstHalf: [
                    'Software Project Management (SPM)', 
                    'Project Scheduling'
                ],
                secondHalf: [
                    'DevOps: Motivation and Deployment Architecture', 
                    'Cloud as a Platform (Case Study)'
                ]
            }
        ]
    },
    'vce': {
        fullName: 'Video Creation and Editing',
        shortName: 'VCE',
        courseCode: 'CCS371',
        icon: 'fas fa-video',
        bgImage: 'vce/vce_bg.png',
        semester: 6,
        syllabus: [
            {
                unit: 'UNIT I',
                title: 'FUNDAMENTALS',
                topics: 'Evolution of filmmaking - linear editing - non-linear digital video - Economy of Expression - risks associated with altering reality through editing.'
            },
            {
                unit: 'UNIT II',
                title: 'STORYTELLING',
                topics: 'Storytelling styles in a digital world through jump cuts, L-cuts, match cuts, cutaways, dissolves, split edits - Consumer and pro NLE systems - digitizing images - managing resolutions - mechanics of digital editing - pointer files - media management.'
            },
            {
                unit: 'UNIT III',
                title: 'USING AUDIO AND VIDEO',
                topics: 'Capturing digital and analog video importing audio putting video on exporting digital video to tape recording to CDs and VCDs.'
            },
            {
                unit: 'UNIT IV',
                title: 'WORKING WITH FINAL CUT PRO',
                topics: 'Working with clips and the Viewer - working with sequences, the Timeline, and the canvas - Basic Editing - Adding and Editing Testing Effects - Advanced Editing and Training Techniques - Working with Audio - Using Media Tools - Viewing and Setting Preferences.'
            },
            {
                unit: 'UNIT V',
                title: 'WORKING WITH AVID XPRESS DV 4',
                topics: 'Starting Projects and Working with Project Window - Using Basic Tools and Logging - Preparing to Record and Recording - Importing Files - Organizing with Bins - Viewing and Making Footage - Using Timeline and Working in Trim Mode - Working with Audio - Output Options.'
            }
        ],
        materials: [
            { name: 'Unit 1: Fundamentals', file: 'vce/notes/VCE_U1.pdf' },
            { name: 'Unit 2: Storytelling', file: 'vce/notes/VCE_U2.pdf' },
            { name: 'Unit 3: Using Audio and Video', file: 'vce/notes/VCE_U3.pdf' },
            { name: 'Unit 4: Working with Final Cut Pro', file: 'vce/notes/VCE_U4.pdf' },
            { name: 'Unit 5: Working with Avid Xpress DV4', file: 'vce/notes/VCE_U5.pdf' },
            { name: '2-Mark Question Bank', file: 'vce/2m/VCE_2M.pdf' }
        ],
        previousYearQuestions: [
            { year: 'Apr/May 2024', file: 'vce/qn papers/April May 2024.pdf' },
            { year: 'Nov/Dec 2024', file: 'vce/qn papers/Nov Dec 2024.pdf' },
            { year: 'Apr/May 2025', file: 'vce/qn papers/April May 2025.pdf' }
        ],
        importantQuestions: [
            { 
                unit: '1', 
                firstHalf: [
                    'Evolution of Film Making', 
                    'Linear Editing',
                    'Non-Linear Editing'
                ],
                secondHalf: [
                    'Video Editing Process', 
                    'Economy of expression'
                ]
            },
            { 
                unit: '2', 
                firstHalf: [
                    'Storytelling Techniques', 
                    'Various Cuts in Video Editing (jump cuts, L-cuts, match cuts, cutaways, dissolves, split edits)'
                ],
                secondHalf: [
                    'Storyboard in Digital Video Editing', 
                    'Digitizing Images', 
                    'Media Management'
                ]
            },
            { 
                unit: '3', 
                firstHalf: [
                    'Capture Digital Video and Analog Video',
                    'Importing Audio'
                ],
                secondHalf: [
                    'Exporting Digital video to tape', 
                    'Recording Techniques in CD and VCD ',
                    'Storing Files in CD and VCD / Process of Burning DVDs'

                ]
            },
            { 
                unit: '4', 
                firstHalf: [
                    'Steps to Use Final Cut Pro, Tools Used in Final Cut Pro', 
                    'Working with Clips and Viewer', 
                    'Working with Sequence, Timeline & Canvas'
                ],
                secondHalf: [
                    'Advanced Editing and Trimming Techniques',
                    'Working with audio'
                ]
            },
            { 
                unit: '5', 
                firstHalf: [
                    'Working with Project Window, basic tools and logging in Avid Xpress Dv 4', 
                    'Organizing / Importing Files'
                ],
                secondHalf: [
                    'Using Timeline and Working in Trim Mode', 
                    'Viewing and Making Footage'
                ]
            }
        ]
    },
    'esia': {
        fullName: 'Environmental and Social Impact Assessment',
        shortName: 'ESIA',
        courseCode: 'OCE351',
        icon: 'fas fa-leaf',
        bgImage: 'esia/esia_bg.png',
        semester: 6,
        syllabus: [
            {
                unit: 'UNIT I',
                title: 'INTRODUCTION',
                topics: 'Impacts of Development on Environment – Rio Principles of Sustainable Development Environmental Impact Assessment (EIA) – Objectives – Historical development – EIA Types – EIA in project cycle –EIA Notification and Legal Framework–Stakeholders and their Role in EIA– Selection & Registration Criteria for EIA Consultants'
            },
            {
                unit: 'UNIT II',
                title: 'ENVIRONMENTAL ASSESSMENT',
                topics: 'Screening and Scoping in EIA – Drafting of Terms of Reference,Baseline monitoring, Prediction and Assessment of Impact on land, water, air, noise and energy, flora and fauna - Matrices – Networks – Checklist Methods - Mathematical models for Impact prediction – Analysis of alternatives'
            },
            {
                unit: 'UNIT III',
                title: 'ENVIRONMENTAL MANAGEMENT PLAN',
                topics: 'Plan for mitigation of adverse impact on water, air and land, water, energy, flora and fauna – Environmental Monitoring Plan – EIA Report Preparation – Review of EIA Reports – Public Hearing-Environmental Clearance Post Project Monitoring'
            },
            {
                unit: 'UNIT IV',
                title: 'SOCIO ECONOMIC ASSESSMENT',
                topics: 'Baseline monitoring of Socio economic environment – Identification of Project Affected Personal – Rehabilitation and Resettlement Plan- Economic valuation of Environmental impacts – Cost benefit Analysis'
            },
            {
                unit: 'UNIT V',
                title: 'CASE STUDIES',
                topics: 'EIA case studies pertaining to Infrastructure Projects – Real Estate Development - Roads and Bridges – Mass Rapid Transport Systems - Ports and Harbor – Airports - Dams and Irrigation projects - Power plants – CETPs- Waste Processing and Disposal facilities – Mining Projects.'
            }
        ],
        materials: [
            { name: 'Unit 1: Introduction', file: 'esia/notes/esia_u1.pdf', isUpdated: true },
            { name: 'Unit 2: Environmental Assessment', file: 'esia/notes/esia_u2.pdf', isUpdated: true },
            { name: 'Unit 3: Environmental Management Plan', file: 'esia/notes/esia_u3.pdf', isUpdated: true },
            { name: 'Unit 4: Socio Economic Assessment', file: 'esia/notes/esia_u4.pdf', isUpdated: true },
            { name: 'Unit 5: Case Studies', file: 'esia/notes/esia_u5.pdf', isUpdated: true },
            { name: '2-Mark Question Bank', file: 'esia/2m/esia_2m.pdf', isUpdated: true }
        ],
        previousYearQuestions: [
            { year: 'Apr/May 2024', file: 'esia/qn/Apr May 2024.pdf' },
            { year: 'Nov/Dec 2021', file: 'esia/qn/EIA qn 2021.pdf' }
        ],
        importantQuestions: [
            { 
                unit: '1', 
                firstHalf: [
                    'Rio Principles in Sustainable development',
                    'Environmental Impact Assessment'
                ],
                secondHalf: [
                    'EIA Notification and Legal Framework',
                    'Selection & Registration Criteria for EIA Consultants'
                ]
            },
            { 
                unit: '2', 
                firstHalf: [
                    'Baseline monitoring',
                    'Prediction and Assessment of Impact on land, water, air, noise and energy, flora and fauna'
                ],
                secondHalf: [
                    'Mathematical models for Impact prediction',
                    'Checklist method'
                ]
            },
            { 
                unit: '3', 
                firstHalf: [
                    'Plan for mitigation of adverse impact on water, air and land, water, energy, flora and fauna',
                    'Environment Monitoring Plan(EMP)'
                ],
                secondHalf: [
                    'EIA Report Preparation',
                    'Review of EIA Report'
                ]
            },
            { 
                unit: '4', 
                firstHalf: [
                    'Baseline monitoring of Socio economic environment',
                    'Rehabilitation and Resettlement Plan'
                ],
                secondHalf: [
                    'Cost-Benefit Analysis',
                    'Economic valuation of Environmental impacts'
                ]
            },
            { 
                unit: '5', 
                firstHalf: [
                    'Case Study for Infrastructure projects',
                    'Case Study for Roads & Bridges',
                    'Case Study for Mass Rapid Transport System(MRTS)'
                ],
                secondHalf: [
                    'Case Study for Power plants',
                    'Case Study for Dams & Irrigation',
                    'Case Study for Mining Projects'
                ]
            }
        ]
    },
    'ppl': {
        fullName: 'Principles of Programming Languages',
        shortName: 'PPL',
        courseCode: 'CCS358',
        icon: 'fas fa-terminal',
        bgImage: 'ppl/ppl_bg.png',
        semester: 6,
        syllabus: [
            {
                unit: 'UNIT I',
                title: 'SYNTAX AND SEMANTICS',
                topics: 'Evolution of programming languages – describing syntax – context-free grammars – attribute grammars – describing semantics – lexical analysis – parsing – recursive-descent – bottom up parsing'
            },
            {
                unit: 'UNIT II',
                title: 'DATA, DATA TYPES, AND BASIC STATEMENTS',
                topics: 'Names – variables – binding – type checking – scope – scope rules – lifetime and garbage collection – primitive data types – strings – array types – associative arrays – record types – union types – pointers and references – Arithmetic expressions – overloaded operators – type conversions – relational and Boolean expressions – assignment statements – mixed mode assignments – control structures – selection – iterations – branching – guarded statements'
            },
            {
                unit: 'UNIT III',
                title: 'SUBPROGRAMS AND IMPLEMENTATIONS',
                topics: 'Subprograms – design issues – local referencing – parameter passing – overloaded methods – generic methods – design issues for functions – semantics of call and return – implementing simple subprograms – stack and dynamic local variables – nested subprograms – blocks – dynamic scoping'
            },
            {
                unit: 'UNIT IV',
                title: 'OBJECT-ORIENTATION, CONCURRENCY, AND EVENT HANDLING',
                topics: 'Object-orientation – design issues for OOP languages – implementation of object-oriented constructs – concurrency – semaphores – monitors – message passing – threads – statement level concurrency – exception handling – event handling'
            },
            {
                unit: 'UNIT V',
                title: 'FUNCTIONAL AND LOGIC PROGRAMMING LANGUAGES',
                topics: 'Introduction to lambda calculus – fundamentals of functional programming languages – Programming with Scheme – Programming with ML – Introduction to logic and logic programming – Programming with Prolog – multi-paradigm languages'
            }
        ],
        materials: [
            { name: 'Unit 1: Syntax and Semantics', file: 'ppl/notes/ppl_u1.pdf', isUpdated: true },
            { name: 'Unit 2: Data, Data Types, and Basic Statements', file: 'ppl/notes/ppl_u2.pdf', isUpdated: true },
            { name: 'Unit 3: Subprograms and Implementation', file: 'ppl/notes/ppl_u3.pdf', isUpdated: true },
            { name: 'Unit 4: Object-Orientation, Concurrency, and Event Handling', file: 'ppl/notes/ppl_u4.pdf', isUpdated: true },
            { name: 'Unit 5: Functional and Logic Programming Languages', file: 'ppl/notes/ppl_u5.pdf', isUpdated: true },
            { name: 'Principles of PL Full notes', file: 'ppl/PPL.pdf' },
            { name: 'Full Lecture Notes by EnggTree.com', file: 'ppl/CCS358-Principles-of-Programming-Languages-Lecture-Notes-1.pdf' },
            { name: '2-Mark Question Bank', file: 'ppl/2m/ppl_2m.pdf', isUpdated: true }
        ],
        importantQuestions: [
            { 
                unit: '1', 
                firstHalf: [
                    'Evolution of Programming Languages', 
                    'Describing Syntax', 
                    'Context Free Grammar (CFG)'
                ],
                secondHalf: [
                    'Describing Semantics', 
                    'Parsing, Bottom-Up Parsing'
                ]
            },
            { 
                unit: '2', 
                firstHalf: [
                    'Primitive Data Types', 
                    'Strings, Arrays', 
                    'Record Type, Union Type', 
                    'Pointers and References'
                ],
                secondHalf: [
                    'Arithmetic Expressions', 
                    'Relational and Boolean Expressions', 
                    'Control Structures'
                ]
            },
            { 
                unit: '3', 
                firstHalf: [
                    'Subprogram Implementation'
                ],
                secondHalf: [
                    'Nested Subprogram', 
                    'Blocks and Dynamic Scoping'
                ]
            },
            { 
                unit: '4', 
                firstHalf: [
                    'Exception Handling', 
                    'Statement Level Concurrency',
                    'Event Handling'
                ],
                secondHalf: [
                    'Semaphores', 
                    'Monitor', 
                    'Threads'
                ]
            },
            { 
                unit: '5', 
                firstHalf: [
                    'Functional Programming Languages', 
                    'Programming with ML'
                ],
                secondHalf: [
                    'Programming with Prolog',
                    'Multi-paradigm languages'
                ]
            }
        ]
    },
    'ba': {
        fullName: 'Business Analytics',
        shortName: 'BA',
        courseCode: 'CCW331',
        icon: 'fas fa-chart-line',
        bgImage: 'ba/ba_bg.png',
        semester: 6,
        syllabus: [
            {
                unit: 'UNIT I',
                title: 'INTRODUCTION TO BUSINESS ANALYTICS',
                topics: 'Analytics and Data Science – Analytics Life Cycle – Types of Analytics – Business Problem Definition – Data Collection – Data Preparation – Hypothesis Generation – Modeling – Validation and Evaluation – Interpretation – Deployment and Iteration'
            },
            {
                unit: 'UNIT II',
                title: 'BUSINESS INTELLIGENCE',
                topics: 'Data Warehouses and Data Mart - Knowledge Management –Types of Decisions - Decision Making Process - Decision Support Systems – Business Intelligence –OLAP – Analytic functions'
            },
            {
                unit: 'UNIT III',
                title: 'BUSINESS FORECASTING',
                topics: 'Introduction to Business Forecasting and Predictive analytics - Logic and Data Driven Models – Data Mining and Predictive Analysis Modelling –Machine Learning for Predictive analytics.'
            },
            {
                unit: 'UNIT IV',
                title: 'HR & SUPPLY CHAIN ANALYTICS',
                topics: 'Human Resources – Planning and Recruitment – Training and Development - Supply chain network - Planning Demand, Inventory and Supply – Logistics – Analytics applications in HR & Supply Chain - Applying HR Analytics to make a prediction of the demand for hourly employees for a year.'
            },
            {
                unit: 'UNIT V',
                title: 'MARKETING & SALES ANALYTICS',
                topics: 'Marketing Strategy, Marketing Mix, Customer Behaviour –selling Process – Sales Planning – Analytics applications in Marketing and Sales - predictive analytics for customers\' behaviour in marketing and sales.'
            }
        ],
        materials: [
            { name: 'Unit 1: Introduction to Business Analytics', file: 'ba/notes/ba_u1.pdf', isUpdated: true },
            { name: 'Unit 2: Business Intelligence', file: 'ba/notes/ba_u2.pdf', isUpdated: true },
            { name: 'Unit 3: Business Forecasting', file: 'ba/notes/ba_u3.pdf', isUpdated: true },
            { name: 'Unit 4: HR & Supply Chain Analytics', file: 'ba/notes/ba_u4.pdf', isUpdated: true },
            { name: 'Unit 5: Marketing & Sales Analytics', file: 'ba/notes/BA_u5.pdf', isUpdated: true },
            { name: 'Timesaver: Short Notes', file: 'ba/notes/ba_shorts.pdf', tag: 'Timesaver', isUpdated: true },
            { name: '2-Mark Question Bank', file: 'ba/2m/BA_2m.pdf', isUpdated: true }
        ],
        previousYearQuestions: [
            { year: 'Apr/May 2024', file: 'ba/qn/Apr May 2024.pdf' },
            { year: 'Nov/Dec 2025', file: 'ba/qn/Nov Dec 2025.pdf' }
        ],
        importantQuestions: [
            { 
                unit: '1', 
                firstHalf: [
                    'Types of Analytics and its Lifecycle'
                ],
                secondHalf: [
                    'Data collection & Data Preparation',
                    'Hypothesis Generation'
                ]
            },
            { 
                unit: '2', 
                firstHalf: [
                    'Types of Decisions', 
                    'Decision Making Process'
                ],
                secondHalf: [
                    'DSS (Decision Support System)', 
                    'OLAP'
                ]
            },
            { 
                unit: '3', 
                firstHalf: [
                    'Business Forecasting & Predictive Analytics'
                ],
                secondHalf: [
                    'Logic and Data Driven Model', 
                    'Data Mining and Predictive Analysis Modelling'
                ]
            },
            { 
                unit: '4', 
                firstHalf: [
                    'Supply chain Network'
                ],
                secondHalf: [
                    'Analytical Applications in HR & Supply chain', 
                    'Logistics'
                ]
            },
            { 
                unit: '5', 
                firstHalf: [
                    'Marketing Mix and Marketing Strategies', 
                    'Customer Behaviour'
                ],
                secondHalf: [
                    'Sales Planning And Selling Process'
                ]
            }
        ]
    },
    'eh': {
        fullName: 'Ethical Hacking',
        shortName: 'EH',
        courseCode: 'CCS344',
        icon: 'fas fa-user-secret',
        bgImage: 'eh/eh_bg.png',
        semester: 6,
        syllabus: [
            {
                unit: 'UNIT I',
                title: 'INTRODUCTION',
                topics: 'Ethical Hacking Overview - Role of Security and Penetration Testers .- Penetration-Testing Methodologies- Laws of the Land - Overview of TCP/IP- The Application Layer - The Transport Layer - The Internet Layer - IP Addressing .- Network and Computer Attacks - Malware - Protecting Against Malware Attacks.- Intruder Attacks - Addressing Physical Security'
            },
            {
                unit: 'UNIT II',
                title: 'FOOT PRINTING, RECONNAISSANCE AND SCANNING NETWORKS',
                topics: 'Footprinting Concepts - Footprinting through Search Engines, Web Services, Social Networking Sites, Website, Email - Competitive Intelligence - Footprinting through Social Engineering - Footprinting Tools - Network Scanning Concepts - Port-Scanning Tools - Scanning Techniques - Scanning Beyond IDS and Firewall'
            },
            {
                unit: 'UNIT III',
                title: 'ENUMERATION AND VULNERABILITY ANALYSIS',
                topics: 'Enumeration Concepts - NetBIOS Enumeration – SNMP, LDAP, NTP, SMTP and DNS Enumeration - Vulnerability Assessment Concepts - Desktop and Server OS Vulnerabilities - Windows OS Vulnerabilities - Tools for Identifying Vulnerabilities in Windows- Linux OS Vulnerabilities- Vulnerabilities of Embedded Oss'
            },
            {
                unit: 'UNIT IV',
                title: 'SYSTEM HACKING',
                topics: 'Hacking Web Servers - Web Application Components- Vulnerabilities - Tools for Web Attackers and Security Testers Hacking Wireless Networks - Components of a Wireless Network – Wardriving- Wireless Hacking - Tools of the Trade -'
            },
            {
                unit: 'UNIT V',
                title: 'NETWORK PROTECTION SYSTEMS',
                topics: 'Access Control Lists. - Cisco Adaptive Security Appliance Firewall - Configuration and Risk Analysis Tools for Firewalls and Routers - Intrusion Detection and Prevention Systems - Network-Based and Host-Based IDSs and IPSs - Web Filtering - Security Incident Response Teams – Honeypots.'
            }
        ],
        materials: [
            { name: 'Unit 1: INTRODUCTION', file: 'eh/notes/e1.pdf', isUpdated: true },
            { name: 'Unit 2: FOOTPRINTING & SCANNING', file: 'eh/notes/e2.pdf', isUpdated: true },
            { name: 'Unit 3: ENUMERATION & VULNERABILITY', file: 'eh/notes/e3.pdf', isUpdated: true },
            { name: 'Unit 4: SYSTEM HACKING', file: 'eh/notes/e4.pdf', isUpdated: true },
            { name: 'Unit 5: NETWORK PROTECTION SYSTEMS', file: 'eh/notes/e5.pdf', isUpdated: true },
            { name: '2-Mark Question Bank', file: 'eh/2m/e_2m.pdf', isUpdated: true }
        ],
        previousYearQuestions: [
            { year: 'Nov/Dec 2023', file: 'eh/qn/CCS344-Ethical-Hacking-Nov-Dec-2023-Question-Paper-Download.pdf' }
        ],
        importantQuestions: [
            { 
                unit: '1', 
                firstHalf: [
                    'Penetration Testing Methodologies',
                    'TCP/IP (Application Layer, Transport Layer, Internet Layer, Network Layer)'
                ],
                secondHalf: [
                    'Network and Computer Attacks',
                    'Malware & its types'
                ]
            },
            { 
                unit: '2', 
                firstHalf: [
                    'Footprinting through Search Engines, Web Services, Social Networking Sites, Website and Email (or) Competitive Intelligence',
                    'Footprinting through Social Engineering'
                ],
                secondHalf: [
                    'Network Scanning (Port Scanning Tools, Scanning Techniques, Scanning IDS and Firewalls)'
                ]
            },
            { 
                unit: '3', 
                firstHalf: [
                    'Enumeration Concepts (NetBIOS, SNMP, LDAP, NTP, SMTP and DNS Enumeration)',
                    'Vulnerability Assessment / Vulnerabilities'
                ],
                secondHalf: [
                    'Desktop and Server OS Vulnerability',
                    'Tools for Identifying Vulnerabilities in Windows- Linux OS Vulnerabilities'
                ]
            },
            { 
                unit: '4', 
                firstHalf: [
                    'Web Application Components',
                    'Hacking Wireless Networks',
                    'Wireless Hacking'
                ],
                secondHalf: [
                    'Tools for Web Attackers and Security Testers',
                    'Vulnerabilities (Refer Unit 3)'
                ]
            },
            { 
                unit: '5', 
                firstHalf: [
                    'Cisco ASA firewall',
                    'Configuration and Risk Analysis',
                    'Tools for Firewalls and Routers'
                ],
                secondHalf: [
                    'Intrusion Detection and Prevention',
                    'Network-based and Host-based IDS',
                    'Honeypots'
                ]
            }
        ]
    },
    'hve': {
        fullName: 'Human Values and Ethics',
        shortName: 'HVE',
        courseCode: 'GE3791',
        icon: 'fas fa-balance-scale',
        bgImage: 'hve/hve_bg.png',
        semester: 7,
        syllabus: [
            {
                unit: 'UNIT I',
                title: 'DEMOCRATIC VALUES',
                topics: 'Understanding Democratic values: Equality, Liberty, Fraternity, Freedom, Justice, Pluralism, Tolerance, Respect for All, Freedom of Expression, Citizen Participation in Governance – World Democracies: French Revolution, American Independence, Indian Freedom Movement. Reading Text: Excerpts from John Stuart Mills’ On Liberty'
            },
            {
                unit: 'UNIT II',
                title: 'SECULAR VALUES',
                topics: 'Understanding Secular values – Interpretation of secularism in Indian context - Disassociation of state from religion – Acceptance of all faiths – Encouraging non-discriminatory practices. Reading Text: Excerpt from Secularism in India: Concept and Practice by Ram Puniyani'
            },
            {
                unit: 'UNIT III',
                title: 'SCIENTIFIC VALUES',
                topics: 'Scientific thinking and method: Inductive and Deductive thinking, Proposing and testing Hypothesis, Validating facts using evidence based approach – Skepticism and Empiricism – Rationalism and Scientific Temper. Reading Text: Excerpt from The Scientific Temper by Antony Michaelis R'
            },
            {
                unit: 'UNIT IV',
                title: 'SOCIAL ETHICS',
                topics: 'Application of ethical reasoning to social problems – Gender bias and issues – Gender violence – Social discrimination – Constitutional protection and policies – Inclusive practices. Reading Text: Excerpt from 21 Lessons for the 21st Century by Yuval Noah Harari'
            },
            {
                unit: 'UNIT V',
                title: 'SCIENTIFIC ETHICS',
                topics: 'Transparency and Fairness in scientific pursuits – Scientific inventions for the betterment of society - Unfair practices in scientific research, ethical issues in science and technology.'
            }
        ],
        materials: [
            { name: 'Unit 1: Democratic Values', file: 'hve/notes/HVE_unit_1.pdf' },
            { name: 'Unit 2: Secular Values', file: 'hve/notes/HVE_unit_2.pdf' },
            { name: 'Unit 3: Scientific Values', file: 'hve/notes/HVE_unit_3.pdf' },
            { name: 'Unit 4: Social Ethics', file: 'hve/notes/HVE_unit_4.pdf' },
            { name: 'Unit 5: Scientific Ethics', file: 'hve/notes/HVE_unit_5.pdf' },
            { name: '2-Mark Question Bank', file: 'hve/2m/hve_2m.pdf' }
        ],
        previousYearQuestions: [
            { year: 'Nov/Dec 2024', file: 'hve/qn/GE3791-Human-Values-and-Ethics-Nov-Dec-2024.pdf' }
        ],
        importantQuestions: [
            {
                unit: '1',
                firstHalf: [
                    'Understanding Democratic Values: Equality, Liberty, Fraternity',
                    'Citizen Participation in Governance'
                ],
                secondHalf: [
                    'World Democracies: French Revolution, American Independence',
                    'Critical analysis of J.S. Mill\'s On Liberty'
                ]
            },
            {
                unit: '2',
                firstHalf: [
                    'Secular Values and the Indian Context',
                    'Disassociation of State from Religion'
                ],
                secondHalf: [
                    'Acceptance of All Faiths & Anti-Discriminatory Practices',
                    'Discussion on Secularism by Ram Puniyani'
                ]
            },
            {
                unit: '3',
                firstHalf: [
                    'Scientific thinking and inductive/deductive reasoning',
                    'Proposing and testing Hypotheses with evidence'
                ],
                secondHalf: [
                    'Skepticism, Empiricism, and Rationalism',
                    'Role of Antony Michaelis\' Scientific Temper'
                ]
            },
            {
                unit: '4',
                firstHalf: [
                    'Application of ethical reasoning to Gender bias/violence',
                    'Social discrimination & constitutional protections'
                ],
                secondHalf: [
                    'Inclusive practices in modern educational institutes',
                    'Ethical insights from Harari\'s 21 Lessons'
                ]
            },
            {
                unit: '5',
                firstHalf: [
                    'Transparency and fairness in scientific pursuits',
                    'Scientific inventions for societal betterment'
                ],
                secondHalf: [
                    'Unfair practices and ethical issues in research',
                    'Case study of intellectual property rights in STEM'
                ]
            }
        ]
    },
    'prw': {
        fullName: 'Project Report Writing',
        shortName: 'PRW',
        courseCode: 'OHS352',
        icon: 'fas fa-file-signature',
        bgImage: 'prw/prw_bg.png',
        semester: 7,
        syllabus: [
            {
                unit: 'UNIT I',
                title: 'WRITING SKILLS',
                topics: 'Writing Skills – Essential Grammar and Vocabulary – Passive Voice, Reported Speech, Concord, Signpost words, Cohesive Devices – Paragraph writing - Technical Writing vs. General Writing.'
            },
            {
                unit: 'UNIT II',
                title: 'PROJECT REPORT FUNDAMENTALS',
                topics: 'Project Report – Definition, Structure, Types of Reports, Purpose – Intended Audience – Plagiarism – Report Writing in STEM fields – Experiment – Statistical Analysis.'
            },
            {
                unit: 'UNIT III',
                title: 'STRUCTURE OF THE REPORT (PART 1)',
                topics: 'Structure of the Project Report: Framing a Title – Content – Acknowledgement – Funding Details - Abstract – Introduction – Aim of the Study – Background - Writing the research question - Need of the Study/Project Significance, Relevance – Determining the feasibility – Theoretical Framework.'
            },
            {
                unit: 'UNIT IV',
                title: 'STRUCTURE OF THE REPORT (PART 2)',
                topics: 'Structure of the Project Report: Literature Review, Research Design, Methods of Data Collection - Tools and Procedures - Data Analysis - Interpretation - Findings – Limitations - Recommendations – Conclusion – Bibliography.'
            },
            {
                unit: 'UNIT V',
                title: 'PROOF READING AND PRESENTATION',
                topics: 'Proof reading a report – Avoiding Typographical Errors – Bibliography in required Format – Font – Spacing – Checking Tables and Illustrations – Presenting a Report Orally – Techniques.'
            }
        ],
        materials: [
            { name: 'Unit 1: Writing Skills', file: 'prw/notes/PRW_unit_1.pdf', isUpdated: true },
            { name: 'Unit 2: Project Report Fundamentals', file: 'prw/notes/PRW_unit_2.pdf', isUpdated: true },
            { name: 'Unit 3: Structure of the Report (Part 1)', file: 'prw/notes/PRW_unit_3.pdf', isUpdated: true }
        ],
        previousYearQuestions: [],
        importantQuestions: []
    },
    'itas': {
        fullName: 'IT in Agricultural System',
        shortName: 'ITAS',
        courseCode: 'AI3021',
        icon: 'fas fa-tractor',
        bgImage: 'itas/itas_bg.png',
        semester: 7,
        syllabus: [
            {
                unit: 'UNIT I',
                title: 'PRECISION FARMING',
                topics: 'Precision agriculture and agricultural management – Ground based sensors, Remote sensing, GPS, GIS and mapping software, Yield mapping systems, Crop production modeling.'
            },
            {
                unit: 'UNIT II',
                title: 'ENVIRONMENT CONTROL SYSTEMS',
                topics: 'Artificial light systems, management of crop growth in greenhouses, simulation of CO2 consumption in greenhouses, on-line measurement of plant growth in the greenhouse, models of plant production and expert systems in horticulture.'
            },
            {
                unit: 'UNIT III',
                title: 'AGRICULTURAL SYSTEMS MANAGEMENT',
                topics: 'Agricultural systems - managerial overview, Reliability of agricultural systems, Simulation of crop growth and field operations, Optimizing the use of resources, Linear programming, Project scheduling, Artificial intelligence and decision support systems.'
            },
            {
                unit: 'UNIT IV',
                title: 'WEATHER PREDICTION MODELS',
                topics: 'Importance of climate variability and seasonal forecasting, Understanding and predicting world’s climate system, Global climatic models and their potential for seasonal climate forecasting, General systems approach to applying seasonal climate forecasts.'
            },
            {
                unit: 'UNIT V',
                title: 'E-GOVERNANCE IN AGRICULTURAL SYSTEMS',
                topics: 'Expert systems, decision support systems, Agricultural and biological databases, e-commerce, e-business systems & applications, Technology enhanced learning systems and solutions, e-learning, Rural development and information society.'
            }
        ],
        materials: [
            { name: 'Unit 1: Precision Farming', file: 'itas/notes/ITAS_unit_1.pdf', isUpdated: true },
            { name: 'Unit 2: Environment Control Systems', file: 'itas/notes/ITAS_unit_2.pdf', isUpdated: true }
        ],
        previousYearQuestions: [],
        importantQuestions: []
    },
    'pom': {
        fullName: 'Principles of Management',
        shortName: 'PoM',
        courseCode: 'GE3751',
        icon: 'fas fa-tasks',
        bgImage: 'pom/pom_bg.png',
        semester: 7,
        syllabus: [
            {
                unit: 'UNIT I',
                title: 'INTRODUCTION TO MANAGEMENT AND ORGANIZATIONS',
                topics: 'Definition of Management – Science or Art – Manager Vs Entrepreneur- types of managers- managerial roles and skills – Evolution of Management – Scientific, human relations, system and contingency approaches– Types of Business organization- Sole proprietorship, partnership, company-public and private sector enterprises- Organization culture and Environment – Current trends and issues in Management.'
            },
            {
                unit: 'UNIT II',
                title: 'PLANNING',
                topics: 'Nature and purpose of planning – Planning process – Types of planning – Objectives – Setting objectives – Policies – Planning premises – Strategic Management – Planning Tools and Techniques – Decision making steps and process.'
            },
            {
                unit: 'UNIT III',
                title: 'ORGANISING',
                topics: 'Nature and purpose – Formal and informal organization – Organization chart – Organization structure – Types – Line and staff authority – Departmentalization – delegation of authority – Centralization and decentralization – Job Design - Human Resource Management – HR Planning, Recruitment, selection, Training and Development, Performance Management, Career planning and management.'
            },
            {
                unit: 'UNIT IV',
                title: 'DIRECTING',
                topics: 'Foundations of individual and group behaviour– Motivation – Motivation theories – Motivational techniques – Job satisfaction – Job enrichment – Leadership – types and theories of leadership – Communication – Process of communication – Barrier in communication – Effective communication – Communication and IT.'
            },
            {
                unit: 'UNIT V',
                title: 'CONTROLLING',
                topics: 'System and process of controlling – Budgetary and non - Budgetary control techniques – Use of computers and IT in Management control – Productivity problems and management – Control and performance – Direct and preventive control – Reporting.'
            }
        ],
        materials: [],
        previousYearQuestions: [],
        importantQuestions: []
    },
    'ece': {
        fullName: 'English for Competitive Examinations',
        shortName: 'ECE',
        courseCode: 'OHS551',
        icon: 'fas fa-language',
        bgImage: 'ece/ece_bg.png',
        semester: 7,
        syllabus: [
            {
                unit: 'UNIT I',
                title: 'VOCABULARY AND VERBAL ABILITY',
                topics: 'Orientation on different formats of competitive exams - Vocabulary – Verbal ability – Verbal reasoning - Exploring the world of words – Essential words – Meaning and their usage – Synonyms-antonyms – Word substitution – Word analogy – Idioms and phrases – Commonly confused words – Spellings – Word expansion – New words in use.'
            },
            {
                unit: 'UNIT II',
                title: 'GRAMMAR AND SENTENCE STRUCTURE',
                topics: 'Grammar – Sentence improvement –Sentence completion – Rearranging phrases into sentences – Error identification –Tenses – Prepositions – Adjectives – Adverbs – Subject-verb agreement – Voice – Reported speech – Articles – Clauses – Speech patterns.'
            },
            {
                unit: 'UNIT III',
                title: 'READING AND COMPREHENSION',
                topics: 'Reading - Specific information and detail – Identifying main and supporting ideas – Speed reading techniques – Improving global reading skills – Linking ideas – Summarising – Understanding argument – Identifying opinion/attitude and making inferences - Critical reading.'
            },
            {
                unit: 'UNIT IV',
                title: 'WRITING AND ARGUMENTATION',
                topics: 'Writing – Pre-writing techniques – Mindmap - Describing pictures and facts - Paragraph structure – organising points – Rhetoric writing – Improving an answer – Drafting, writing and developing an argument – Focus on cohesion – Using cohesive devices –Analytic writing – Structure and types of essay – Mind maps – Structure of drafts, letters, memos, emails – Statements of Purpose – Structure, Content and Style.'
            },
            {
                unit: 'UNIT V',
                title: 'LISTENING AND SPEAKING',
                topics: 'Listening and Speaking – Contextual listening – Listening to instructions – Listening for specific information – Identifying detail, main ideas – Following signpost words – Stress, rhythm and intonation - Speaking to respond and elicit ideas – Guided speaking – Opening phrases – Interactive communication – Dysfluency - Sentence stress – Speaking on a topic – Giving opinions – Giving an oral presentation – Telling a story or a personal anecdote – Talking about oneself - Utterance – Speech acts- Brainstorming ideas – Group discussion.'
            }
        ],
        materials: [],
        previousYearQuestions: [],
        importantQuestions: []
    }
};


export const examEvents = [
    { id: 'oose-exam', name: 'OOSE Exam', date: '2026-04-28T10:00:00', reviewDate: '2026-04-28T13:00:00', color: '#6366f1' },
    { id: 'vce-exam-3', name: 'VCE Exam  ', date: '2026-05-02T10:00:00', reviewDate: '2026-05-02T16:30:00', color: '#ec4899' },
    { id: 'esia-exam-v2', name: 'ESIA Exam', date: '2026-05-07T10:00:00', reviewDate: '2026-05-07T13:15:00', color: '#10b981' },
    { id: 'ppl-exam', name: 'PPL Exam', date: '2026-05-11T14:00:00', reviewDate: '2026-05-11T17:00:00', color: '#fbbf24' },
    { id: 'ba-exam', name: 'BA Exam', date: '2026-05-15T10:00:00', reviewDate: '2026-05-15T13:00:00', color: '#8b5cf6' },
    { id: 'eh-exam', name: 'EH Exam', date: '2026-05-19T10:00:00', reviewDate: '2026-05-19T13:00:00', color: '#f43f5e' }
];

export const girlEmails = [
    "mahesviswa22@gmail.com", "bhavanapriya878@gmail.com", "harinimitra31@gmail.com", 
    "ranjani107107@gmail.com", "priyapriya26591@gmail.com", "sanjurenuka8296@gmail.com", 
    "kowsalyark28@gmail.com", "nikithaelangovan22@gmail.com", "sanjanameenagp@gmail.com", 
    "sandhiya.sandhu2911@gmail.com", "ran9342583446@gmail.com", "priyaanitha458@gmail.com", 
    "ksowmi2023@gmail.com", "sarumathy1108@gmail.com", "hemamalini653k@gmail.com",
    "vishnuasvichu14@gmail.com"
];
