export const MOCK_USERS = [
  {
    id: "usr-anil",
    name: "Dr. Anil Sahasrabudhe",
    role: "LEADERSHIP",
    designation: "Director General",
    initials: "DR",
    bureau: "AICTE HQ"
  },
  {
    id: "usr-rajive",
    name: "Prof. Rajive Kumar",
    role: "BUREAU_OFFICIAL",
    designation: "Member Secretary & PGRC In-charge",
    initials: "RK",
    bureau: "Public Grievance Redressal Cell (PGRC)"
  },
  {
    id: "usr-manna",
    name: "Dr. M. S. Manna",
    role: "BUREAU_OFFICIAL",
    designation: "Director, Regulation Bureau",
    initials: "MM",
    bureau: "Regulation Bureau (RB)"
  },
  {
    id: "usr-neha",
    name: "Er. Neha Sharma",
    role: "CASE_HANDLER",
    designation: "Senior Technical Officer",
    initials: "NS",
    bureau: "Approval & Affiliation Bureau"
  }
];

export const MOCK_KPIS = {
  totalIntake: 21,
  institutionsCount: 8,
  activeInReview: 17,
  slaOverdue: 6,
  dueNext48h: 2,
  unassigned: 4,
  resolved: 4
};

export const MOCK_BUREAU_WORKLOAD = [
  {
    id: "bur-ab",
    name: "Approval & Affiliation Bureau",
    code: "BUR-APP",
    active: 6,
    overdue: 1,
    color: "#2563eb"
  },
  {
    id: "bur-policy",
    name: "Policy & Academic Planning Bureau",
    code: "BUR-POL",
    active: 4,
    overdue: 3,
    color: "#f59e0b"
  },
  {
    id: "bur-rb",
    name: "Regulation, Redressal & Vigilance Bureau",
    code: "BUR-RB",
    active: 4,
    overdue: 0,
    color: "#10b981"
  },
  {
    id: "bur-fdc",
    name: "Faculty Development & Welfare Cell",
    code: "BUR-FDC",
    active: 2,
    overdue: 2,
    color: "#ef4444"
  },
  {
    id: "bur-pgrc",
    name: "Student Grievance Redressal Cell",
    code: "BUR-PGRC",
    active: 1,
    overdue: 0,
    color: "#8b5cf6"
  }
];

export const MOCK_CASES = [
  {
    id: "CASE-2026-0121",
    institution: "National Institute of Technology, Raipur",
    institutionId: "INST-NIT-RR",
    category: "Approval & Infrastructure Norms",
    bureau: "Approval & Affiliation Bureau",
    bureauCode: "BUR-APP",
    status: "Open",
    priority: "High",
    slaStatus: "Due in 3 days",
    slaOverdue: false,
    assignedTo: "Prof. Rajive Kumar",
    createdAt: "2026-10-21",
    lastUpdated: "2026-10-21",
    description: "Faculty ratio deficit reported in Computer Science department along with unauthorized intake quota.",
    events: [
      {
        date: "10/21/2026",
        action: "CREATED",
        badge: "Open",
        detail: "Case initiated in Nexus 0 coordination system",
        user: "Prof. Rajive Kumar",
        userRole: "bureau official"
      }
    ]
  },
  {
    id: "CASE-2026-0101",
    institution: "Sardar Vallabhbhai Patel Institute of Tech, Gujarat",
    institutionId: "INST-SVIT-GJ",
    category: "Fee Irregularity & Capitation Charge",
    bureau: "Regulation, Redressal & Vigilance Bureau",
    bureauCode: "BUR-RB",
    status: "In Review",
    priority: "Critical",
    slaStatus: "Overdue by 48h",
    slaOverdue: true,
    assignedTo: "Er. Neha Sharma",
    createdAt: "2026-10-06",
    lastUpdated: "2026-10-19",
    description: "Excessive examination fee levied against AICTE circular norms. Virtual audit recording submitted.",
    events: [
      {
        date: "10/19/2026",
        action: "NEXT ACTION_UPDATE",
        badge: "Scrutinize virtual inspection recording and cross-verify with WRO approval log",
        detail: "Target completion date set for 24 hours.",
        user: "Er. Neha Sharma",
        userRole: "case handler"
      },
      {
        date: "10/12/2026",
        action: "STATUS CHANGE",
        badge: "In Review",
        detail: "Initiated comprehensive audit of physical inspection video recordings.",
        user: "Er. Neha Sharma",
        userRole: "case handler"
      },
      {
        date: "10/10/2026",
        action: "TRANSFERRED",
        badge: "Er. Neha Sharma",
        detail: "Handed off to Senior Technical Officer for laboratory log verification.",
        user: "Prof. Rajive Kumar",
        userRole: "bureau official"
      },
      {
        date: "10/06/2026",
        action: "CREATED",
        badge: "Open",
        detail: "Case ingested from CPGRAMS portal under reference CPGRAMS/MH/2026/8941",
        user: "Dr. Anil Sahasrabudhe",
        userRole: "leadership"
      }
    ]
  },
  {
    id: "CASE-2026-0098",
    institution: "Dayananda Sagar College of Engineering, Bengaluru",
    institutionId: "INST-DSCE-BLR",
    category: "Student Grievance & Harassment Redressal",
    bureau: "Student Grievance Redressal Cell",
    bureauCode: "BUR-PGRC",
    status: "Overdue",
    priority: "Critical",
    slaStatus: "Overdue by 5 days",
    slaOverdue: true,
    assignedTo: "Dr. M. S. Manna",
    createdAt: "2026-10-01",
    lastUpdated: "2026-10-18",
    description: "Delay in Internal Complaints Committee (ICC) investigation beyond mandatory 90-day statutory limit.",
    events: [
      {
        date: "10/18/2026",
        action: "ESCALATION",
        badge: "Overdue",
        detail: "Formal notice dispatched to Principal and Governing Body Chairman.",
        user: "Dr. M. S. Manna",
        userRole: "bureau official"
      }
    ]
  },
  {
    id: "CASE-2026-0084",
    institution: "St. Xavier Technical Campus, Mumbai",
    institutionId: "INST-SXTC-MUM",
    category: "Faculty 7th Pay Scale Non-Compliance",
    bureau: "Faculty Development & Welfare Cell",
    bureauCode: "BUR-FDC",
    status: "Due Soon",
    priority: "Medium",
    slaStatus: "Due in 24 hours",
    slaOverdue: false,
    assignedTo: "Er. Neha Sharma",
    createdAt: "2026-09-28",
    lastUpdated: "2026-10-17",
    description: "Associate professors deprived of DA allowances according to 7th Central Pay Commission notifications.",
    events: [
      {
        date: "10/17/2026",
        action: "SCHEDULED_HEARING",
        badge: "Due Soon",
        detail: "Joint online hearing scheduled between management and faculty delegation.",
        user: "Er. Neha Sharma",
        userRole: "case handler"
      }
    ]
  },
  {
    id: "CASE-2026-0072",
    institution: "Kalinga Institute of Industrial Technology, Bhubaneswar",
    institutionId: "INST-KIIT-BBI",
    category: "Course Curriculum Deviation",
    bureau: "Policy & Academic Planning Bureau",
    bureauCode: "BUR-POL",
    status: "Resolved",
    priority: "Low",
    slaStatus: "Closed on time",
    slaOverdue: false,
    assignedTo: "Prof. Rajive Kumar",
    createdAt: "2026-09-15",
    lastUpdated: "2026-10-14",
    description: "Curriculum alignment with AICTE Model Syllabus verified and approved with revised syllabus annexures.",
    events: [
      {
        date: "10/14/2026",
        action: "CLOSURE",
        badge: "Resolved",
        detail: "Formal closure notice and compliance certificate stamped.",
        user: "Prof. Rajive Kumar",
        userRole: "bureau official"
      }
    ]
  }
];

export const MOCK_INSTITUTIONS = [
  {
    id: "INST-NIT-RR",
    name: "National Institute of Technology, Raipur",
    aicteId: "1-42938177",
    region: "Central Region (Bhopal)",
    state: "Chhattisgarh",
    casesCount: 3,
    activeCases: 2,
    status: "Attention Required"
  },
  {
    id: "INST-SVIT-GJ",
    name: "Sardar Vallabhbhai Patel Institute of Tech, Gujarat",
    aicteId: "1-10928374",
    region: "Western Region (Mumbai)",
    state: "Gujarat",
    casesCount: 4,
    activeCases: 3,
    status: "Critical SLA"
  },
  {
    id: "INST-DSCE-BLR",
    name: "Dayananda Sagar College of Engineering, Bengaluru",
    aicteId: "1-55291039",
    region: "South-West Region (Bangalore)",
    state: "Karnataka",
    casesCount: 5,
    activeCases: 4,
    status: "Critical SLA"
  },
  {
    id: "INST-SXTC-MUM",
    name: "St. Xavier Technical Campus, Mumbai",
    aicteId: "1-22910482",
    region: "Western Region (Mumbai)",
    state: "Maharashtra",
    casesCount: 2,
    activeCases: 1,
    status: "Under Review"
  },
  {
    id: "INST-KIIT-BBI",
    name: "Kalinga Institute of Industrial Technology, Bhubaneswar",
    aicteId: "1-99201488",
    region: "Eastern Region (Kolkata)",
    state: "Odisha",
    casesCount: 3,
    activeCases: 0,
    status: "Compliant"
  }
];

export const MOCK_MONTHLY_TRENDS = [
  { month: "May 2026", received: 18, resolved: 12 },
  { month: "Jun 2026", received: 24, resolved: 19 },
  { month: "Jul 2026", received: 30, resolved: 23 },
  { month: "Aug 2026", received: 28, resolved: 22 },
  { month: "Sep 2026", received: 35, resolved: 29 },
  { month: "Oct 2026", received: 21, resolved: 17 }
];

export const MOCK_AUDIT_LOGS = [
  {
    id: "AUD-9912",
    timestamp: "2026-10-23 10:45:12",
    actor: "Er. Neha Sharma",
    role: "Case Handler",
    action: "STATUS_UPDATE",
    target: "CASE-2026-0101",
    ip: "10.14.88.23",
    hash: "0x8fa3...b401"
  },
  {
    id: "AUD-9911",
    timestamp: "2026-10-22 17:30:00",
    actor: "Dr. M. S. Manna",
    role: "Bureau Official",
    action: "CROSS_BUREAU_TRANSFER",
    target: "CASE-2026-0098",
    ip: "10.14.88.19",
    hash: "0x3e12...a90c"
  },
  {
    id: "AUD-9910",
    timestamp: "2026-10-21 11:20:44",
    actor: "Prof. Rajive Kumar",
    role: "Bureau Official",
    action: "CASE_REGISTRATION",
    target: "CASE-2026-0121",
    ip: "10.14.88.12",
    hash: "0x77c2...55da"
  },
  {
    id: "AUD-9909",
    timestamp: "2026-10-20 09:15:32",
    actor: "Dr. Anil Sahasrabudhe",
    role: "Leadership",
    action: "EXECUTIVE_OVERSIGHT_REVIEW",
    target: "BUREAU_PERFORMANCE_Q3",
    ip: "10.14.88.01",
    hash: "0x2ab1...908f"
  }
];
