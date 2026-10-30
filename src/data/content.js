// All facts here are drawn directly from the uploaded resume (BS22B029).
// Nothing here is invented. Where the resume doesn't provide something
// (e.g. a project-specific repo URL, an email, a live demo), a clearly
// marked placeholder is used instead of a fabricated value.

export const personal = {
  name: "Pratik Panwar",
  rollNumber: "BS22B029",
  institute: "Indian Institute of Technology Madras",
  degree: "Dual Degree, Biotechnology",
  tagline: "Software engineer with a biotechnology foundation.",
  eyebrow: "IIT MADRAS — SOFTWARE ENGINEERING, SYSTEMS, FULL-STACK",
  links: {
    linkedin: "https://linkedin.com/in/PratikPanwar",
    github: "https://github.com/Pratik464iitm",
    codeforces: "https://codeforces.com/profile/pratik_cf464",
    email: "pratikpanwar464@gmail.com",
  },
  resumeFile: "/resume.pdf",
};

export const education = [
  {
    school: "Indian Institute of Technology Madras",
    detail: "Dual Degree in Biotechnology · CGPA 7.98/10",
    date: "Nov '22 – May '27",
  },
  {
    school: "Shri Kanwartara Public Hr. Sec. School, Mandleshwar",
    detail: "Class 12, CBSE · 92.6%",
    date: "May '21 – Mar '22",
  },
  {
    school: "Shri Kanwartara Public Hr. Sec. School, Mandleshwar",
    detail: "Class 10, CBSE · 91.0%",
    date: "May '19 – Mar '20",
  },
];

export const scholastic = [
  {
    title: "NTSE Scholar",
    detail: "Qualified the National Talent Search Examination, placing in the top 0.1% among 1M+ candidates.",
    year: "2020",
  },
  {
    title: "JEE Main & Advanced",
    detail: "Top 1% of 1.1M+ candidates in JEE Main, and top 4% of 250K+ candidates in JEE Advanced.",
    year: "2022",
  },
];


export const experience = [
  {
    company: "Soil Sarthi",
    role: "Full-Stack Developer",
    date: "Mar '25 – May '25",
    stack: [
      "React.js",
      "Node.js",
      "Express.js",
      "MongoDB",
      "Mongoose",
      "OpenAI Whisper API",
      "LinkedIn API",
      "Postman",
    ],
    summary:
      "Built a full-stack AgriTech platform to enable digital farming services and improve accessibility for farmers.",
    points: [
      "Built a full-stack AgriTech platform using React.js, Node.js, Express.js, and MongoDB to enable digital farming services.",
      "Developed RESTful APIs and designed MongoDB schemas with Mongoose, testing and validating endpoints using Postman.",
      "Automated publishing of 30+ blog posts through the LinkedIn API, reducing manual content publishing effort.",
      "Built a voice-based farmer query feature using the OpenAI Whisper API to convert spoken agricultural queries into text, enabling more accessible platform interaction.",
    ],
    flow: [
      "Farmer's voice query",
      "OpenAI Whisper API",
      "Speech-to-text conversion",
      "Text-based query",
    ],
  },
];


export const projects = [
  {
    id: "syncboard",
    name: "SyncBoard",
    tag: "Real-Time Collaborative Workspace",
    stackLine: "MERN · JWT · Socket.IO",
    oneLiner: "A workspace where boards, tasks and teammates stay in sync the instant anything changes.",
    problem:
      "Teams working on shared boards need changes — a new task, a moved column, a renamed workspace — to appear for every collaborator immediately, without refreshing or stepping on each other's permissions.",
    build:
      "A MERN application structured around Workspaces, Boards, Columns and Tasks, each with full CRUD support behind a RESTful API. Access is scoped with JWT authentication and role-based access control at the workspace level, so members only see and edit what they're permitted to.",
    engineering: [
      "RESTful APIs for Workspaces, Boards, Columns and Tasks with complete CRUD across every module.",
      "JWT authentication paired with RBAC for workspace-level member permissions.",
      "Socket.IO integration for real-time synchronization across connected clients.",
      "Search, pagination, input validation and centralized error handling for reliability at scale.",
    ],
    stack: ["React.js", "Node.js", "Express.js", "MongoDB", "Socket.IO", "JWT", "RBAC"],
    flow: ["Client", "Workspace / Board / Task API", "MongoDB", "Socket.IO", "Live collaborators"],
    github: "https://github.com/Pratik464iitm/syncBoard_pp",
    demo: null,
  },
  {
    id: "huffzip",
    name: "HuffZip",
    tag: "Lossless File Compression Utility",
    stackLine: "C++ · STL · OOP · File I/O",
    oneLiner: "A Huffman-coding compressor that rebuilds files bit-for-bit from a tree it grows from their own character frequencies.",
    problem:
      "Text files carry redundant, fixed-width encoding — every character costs the same number of bits regardless of how often it appears. A compressor needs to exploit that redundancy losslessly.",
    build:
      "A Huffman Coding–based compression system in C++. Character frequencies build a greedy-constructed binary tree, which in turn generates variable-length binary codes — frequent characters get shorter codes — before the result is packed into a compact binary file.",
    engineering: [
      "Huffman Tree construction and code generation from character frequency analysis.",
      "Bit packing and binary file I/O for space-efficient compressed output.",
      "A modular pipeline with separate encoding, decoding and file-handling components.",
      "Greedy algorithm design using STL containers for the frequency table and priority queue.",
    ],
    stack: ["C++", "STL", "OOP", "File I/O"],
    flow: ["Input file", "Frequency analysis", "Huffman tree", "Binary codes", "Compressed file"],
    github: "https://github.com/Pratik464iitm/HuffZip__pp",
    demo: null,
  },
  {
    id: "chatrelay",
    name: "ChatRelay",
    tag: "Real-Time C++ Messaging Engine",
    stackLine: "Multithreading · Boost.Asio",
    oneLiner: "A client-server chat engine that keeps many concurrent connections talking over raw TCP without blocking.",
    problem:
      "Real-time chat needs many clients connected at once, each able to send and receive without stalling the others while the server routes messages correctly.",
    build:
      "A C++ client-server application built on TCP sockets with Boost.Asio handling asynchronous, multithreaded client connections. A structured messaging protocol on top supports private messaging, renaming and tracking of active clients.",
    engineering: [
      "Multithreaded, asynchronous client handling with Boost.Asio for concurrent, non-blocking communication.",
      "A structured messaging protocol supporting private messaging, user renaming and active client tracking.",
      "Efficient message routing across connected clients over raw TCP sockets.",
    ],
    stack: ["C++", "Boost.Asio", "TCP Sockets", "Multithreading"],
    flow: ["Client", "TCP socket", "Server (Boost.Asio)", "Concurrent clients"],
    github: "https://github.com/Pratik464iitm/chatRealy_pp",
    demo: null,
  },
  {
    id: "quicklink",
    name: "QuickLink",
    tag: "Scalable URL Shortening Service",
    stackLine: "MERN · JWT · Redis",
    oneLiner: "A URL shortener that reaches for Redis before it ever asks MongoDB — and tracks every click.",
    problem:
      "Shortened URLs get requested constantly and unevenly — a handful of links account for most of the traffic. Hitting the database for every redirect wastes capacity.",
    build:
      "A MERN service issuing short links with custom aliases, expiry and click analytics behind JWT-authenticated RESTful APIs. Reads follow a cache-aside pattern: Redis is checked first, and only a miss falls through to indexed MongoDB lookups.",
    engineering: [
      "Cache-aside architecture serving frequently accessed URLs from Redis to cut database load.",
      "MongoDB indexing for fast fallback lookups on cache misses.",
      "JWT authentication, custom aliases, URL expiry and click analytics.",
      "Input validation and a secure backend architecture for link retrieval.",
    ],
    stack: ["React.js", "Node.js", "Express.js", "MongoDB", "Redis", "JWT"],
    flow: ["Short URL request", "Redis cache", "MongoDB (on miss)", "Redirect + analytics"],
    github: "https://github.com/Pratik464iitm/QuickLink",
    demo: null,
  },
];

export const skills = [
  {
    category: "Languages",
    items: ["C++", "C", "Python", "JavaScript", "SQL"],
  },
  {
    category: "Web",
    items: ["React.js", "Node.js", "Express.js", "HTML", "CSS"],
  },
  {
    category: "Data & Tools",
    items: ["MongoDB", "Redis", "Git", "GitHub", "Postman"],
  },
];

// Which projects / experience each skill shows up in — powers the
// hover-to-highlight constellation in the Skills section.
export const skillLinks = {
  "C++": ["huffzip", "chatrelay"],
  "C": ["huffzip"],
  "Python": [],
  "JavaScript": ["syncboard", "quicklink"],
  "SQL": [],
  "React.js": ["syncboard", "quicklink", "soilsarthi"],
  "Node.js": ["syncboard", "quicklink", "soilsarthi"],
  "Express.js": ["syncboard", "quicklink", "soilsarthi"],
  "HTML": ["syncboard", "quicklink"],
  "CSS": ["syncboard", "quicklink"],
  "MongoDB": ["syncboard", "quicklink", "soilsarthi"],
  "Redis": ["quicklink"],
  "Git": ["syncboard", "huffzip", "chatrelay", "quicklink"],
  "GitHub": ["syncboard", "huffzip", "chatrelay", "quicklink"],
  "Postman": ["syncboard", "quicklink", "soilsarthi"],
};

// Labels shown when a skill lights up a node that isn't one of the four
// showcased projects.
export const extraNodes = {
  soilsarthi: "Soil Sarthi internship",
};

export const competitive = [
  { label: "Codeforces (max)", value: "1667", suffix: "", meta: "Expert" },
  { label: "LeetCode", value: "1809", suffix: "", meta: "Knight · top 7.75%" },
  { label: "ICPC 2025 Winter Challenge", value: "488", suffix: "", meta: "of 36K+ participants · powered by Huawei" },
  { label: "Goldman Sachs India Hackathon 2026", value: "416", suffix: "", meta: "of 14K+ participants · CS challenge" },
];

export const contests = [
  {
    title: "InMobi Codies 2026",
    detail: "Recognized among the top performers in InMobi's coding contest, earning a PPI at InMobi.",
  },
  {
    title: "Codeforces Round 1102 (Div. 2)",
    detail: "Global Rank 386.",
  },
  {
    title: "Order Capital Round 2 (Div. 1 + 2)",
    detail: "Global Rank 496.",
  },
  {
    title: "CodeChef Starters 241",
    detail: "Global Rank 101.",
  },
  {
    title: "ICPC 2025 Online Winter Challenge",
    detail: "Global Rank 488 among 36,000+ participants, powered by Huawei.",
  },
  {
    title: "Goldman Sachs India Hackathon 2026 — CS Challenge",
    detail: "Rank 416 among 14,000+ participants.",
  },
  {
    title: "Reverse Coding Contest",
    detail: "Ranked 18th among 250+ participants.",
  },
  {
    title: "Heuristics Contest — Programming Club",
    detail: "Ranked 11th.",
  },
  {
    title: "DSA Hackathon — Programming Club",
    detail: "Ranked 12th.",
  },
];

export const leadership = [
  {
    org: "Alumni Relations Cell, IIT Madras",
    role: "Strategist",
    date: "Apr '24 – May '25",
    points: [
      "Led Recall, ARC's flagship mentorship initiative — 10 alumni sessions, ₹5+ lakh budget.",
      "Ran an internship program to 100% placement — 12 hires from 500+ applicants.",
    ],
  },
  {
    org: "GN6106",
    role: "Teaching Assistant",
    date: "May '23 – Mar '24",
    points: ["Supported course coordination and academic activities for 90+ students under Prof. Sridhar Boovaraghavan."],
  },
  {
    org: "SAATHI",
    role: "Mentor",
    date: null,
    points: ["Mentored 3 freshmen, supporting their transition to college through peer engagement."],
  },
];

export const beyondCode = {
  intro:
    "Outside the codebase, cricket has been a constant — a different kind of team sport, with its own pressure and its own scoreboard.",
  items: [
    "Selected for the 20-member Cricket NSO Contingent at IIT Madras, from a competitive pool of 200+ applicants.",
    "Selected for the IIT Madras Inter-IIT Cricket Contingent.",
    "Represented Brahmaputra (2024) and Godavari (2025–26) in the institute's Inter-Hostel Cricket League (Schorters).",
    "2nd Runner-up in the Inter-Departmental Cricket League, and named 2nd Most Valuable Player.",
  ],
};

export const nav = [
  { id: "about", label: "About" },
  { id: "experience", label: "Experience" },
  { id: "projects", label: "Projects" },
  { id: "skills", label: "Skills" },
  { id: "competitive", label: "Competitive" },
  { id: "impact", label: "Impact" },
  { id: "beyond", label: "Beyond Code" },
  { id: "contact", label: "Contact" },
];
