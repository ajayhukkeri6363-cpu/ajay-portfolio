export const personalInfo = {
  name: "Ajay Hukkeri",
  firstName: "Ajay",
  lastName: "Hukkeri",
  initials: "AH",
  title: "Computer Science Engineering Student",
  role: "Full Stack & Web Application Developer",
  location: "Bangalore, Karnataka, India",
  phone: "7975226006",
  university: "REVA University, Bangalore",
  degree: "B.Tech in Computer Science and Engineering",
  timeline: "2024 — Present",
  email: "ajayhukkeri6363@gmail.com",
  github: "https://github.com/ajayhukkeri6363-cpu",
  linkedin: "https://linkedin.com/in/ajay-hukkeri-45094233a/",
  resumeUrl: "/resume/Ajay-Hukkeri-Resume.pdf",
  bio: "Designed and implemented responsive web pages with a focus on user-centric features, improving website usability, performance, and overall user experience.",
  languages: ["English", "Kannada"],
  achievements: [
    "Completed Salesforce Trailhead learning modules and hands-on exercises",
    "Completed technical certifications in COPADO-AI",
  ],
  status: "🟢 Open for Internships & Projects",
  availabilityTag: "Available for Opportunities",
};

export const heroHighlights = [
  {
    tag: "Education",
    text: "B.Tech CSE Student • REVA University, Bangalore",
  },
  {
    tag: "Core Focus",
    text: "Web Applications • Frontend & Backend Systems",
  },
  {
    tag: "Stack",
    text: "C, C++, Java, Python, JavaScript, React & MySQL",
  },
  {
    tag: "Problem Solving",
    text: "Clean Architecture, Usability & Performance Focus",
  },
];

export const keyMetrics = [
  {
    value: "12+",
    label: "Technical Skills & Tools",
  },
  {
    value: "9",
    label: "Verified Certifications",
  },
  {
    value: "B.Tech",
    label: "Computer Science & Engineering",
  },
];

export const marqueeSkills = [
  "C",
  "C++",
  "Java",
  "Python",
  "HTML",
  "CSS",
  "JavaScript",
  "React",
  "MySQL",
  "Git",
  "GitHub",
  "Salesforce",
  "Data Cleaning",
  "Data Analysis",
  "DevOps Fundamentals",
  "Agile & Azure Boards",
];

export const skillCategories = [
  {
    id: "languages",
    title: "Programming Languages",
    iconName: "Code2",
    accentBg: "bg-amber-500/10",
    accentText: "text-amber-500",
    description:
      "Core languages used for problem solving, object-oriented software engineering, and application development.",
    skills: ["C", "C++", "Java", "Python"],
  },
  {
    id: "web",
    title: "Web Technologies",
    iconName: "Layout",
    accentBg: "bg-amber-500/10",
    accentText: "text-amber-400",
    description:
      "Modern web standards and libraries for building responsive, accessible, and interactive user interfaces.",
    skills: ["HTML", "CSS", "JavaScript", "React"],
  },
  {
    id: "database",
    title: "Databases & Backend",
    iconName: "Database",
    accentBg: "bg-emerald-500/10",
    accentText: "text-emerald-500",
    description:
      "Relational database management, schema design, and server-side scripting for data persistence.",
    skills: ["MySQL", "Flask (Python)", "Database Schema Design"],
  },
  {
    id: "tools",
    title: "Tools & Platforms",
    iconName: "Terminal",
    accentBg: "bg-purple-500/10",
    accentText: "text-purple-500",
    description:
      "Version control, collaboration workflows, CRM, and developer platforms for software delivery.",
    skills: ["Git", "GitHub", "Salesforce", "Azure Boards"],
  },
  {
    id: "data",
    title: "Data & Analytics",
    iconName: "Cloud",
    accentBg: "bg-rose-500/10",
    accentText: "text-rose-500",
    description:
      "Data manipulation, preprocessing, statistical analysis, and trend reporting foundations.",
    skills: ["Data Cleaning", "Data Analysis", "Data Fundamentals"],
  },
];

export const projects = [
  {
    id: "dreamcity",
    title: "DreamCity",
    subtitle: "Civic Complaint Analyzer & Public Accountability Platform",
    category: "Featured Civic Tech",
    internship: "Featured Project",
    filterCategory: "featured",
    badge: "Featured Flagship",
    badgeColor: "amber",
    github: "https://github.com/ajayhukkeri6363-cpu/civic-complaint-analyzer",
    liveDemo: null,
    status: "Completed / Flagship System",
    shortDescription:
      "A civic complaint management platform that enables citizens to report local municipal issues, track complaint lifecycles, and view issues on a live map with trend analytics and image validation.",
    fullDescription:
      "DreamCity is a comprehensive civic complaint management platform designed to empower citizens and local governance authorities. Citizens can report municipal grievances with location pinning and automated image validation. The platform features an interactive live map, complaint trend clustering, resolution status lifecycles, and a public accountability board to foster municipal transparency.",
    technologies: ["HTML", "CSS", "JavaScript", "Python", "Flask", "MySQL"],
    features: [
      "Citizen Complaint Reporting & Lifecycle Tracking",
      "Interactive Live Map Visualization",
      "Complaint Trend & Category Analytics",
      "Automated Image Validation",
      "Public Accountability Board & Transparency Feed",
    ],
    highlights: [
      "Engineered full complaint submission pipeline with real-time status updates and image validation.",
      "Integrated live map visualization enabling citizens and authorities to track local municipal issues.",
      "Constructed trend analytics dashboard to detect complaint frequency and resolution efficiency.",
      "Designed clean responsive interfaces ensuring accessible reporting across mobile and desktop devices.",
    ],
    metrics: [
      { label: "Architecture", value: "Flask + MySQL" },
      { label: "Core Focus", value: "Civic Transparency & Analytics" },
      { label: "Status", value: "Open Source / Active" },
    ],
    codeSnippet: {
      filename: "civic_complaint_analyzer.py",
      language: "python",
      code: `from flask import Flask, request, jsonify
from models import db, Complaint, TrendAnalytics

@app.route('/api/complaints/report', methods=['POST'])
def report_civic_issue():
    payload = request.get_json()
    complaint = Complaint(
        title=payload['title'],
        category=payload['category'],
        description=payload['description'],
        latitude=payload['latitude'],
        longitude=payload['longitude'],
        image_url=payload.get('image_url'),
        status='SUBMITTED'
    )
    db.session.add(complaint)
    db.session.commit()
    
    # Update real-time category trend analytics
    TrendAnalytics.record_issue_cluster(complaint.category, complaint.latitude, complaint.longitude)
    return jsonify({"success": True, "tracking_id": complaint.id}), 201`,
    },
  },
  {
    id: "edumanage",
    title: "EduManage",
    subtitle: "Student Management & Academic Administration Platform",
    category: "Full Stack SaaS Platform",
    internship: "CodSoft",
    filterCategory: "codsoft",
    badge: "CodSoft Task 1",
    badgeColor: "blue",
    github: "https://github.com/ajayhukkeri6363-cpu/CODSOFT_TASKSNO",
    liveDemo: null,
    status: "Completed • Task 1",
    shortDescription:
      "A complete SaaS education management platform digitizing student administration, multi-role access (Admin, Teacher, Student), attendance tracking, exam gradebooks, and fee ledgers.",
    fullDescription:
      "EduManage is an enterprise-grade education administration system built with Next.js, TypeScript, PostgreSQL, and Prisma ORM. It establishes isolated role-based portals for administrators, educators, and students. Key capabilities include daily attendance tracking, multi-term examination records, fee collection ledgers, and database-driven analytics dashboards.",
    technologies: [
      "Next.js",
      "TypeScript",
      "PostgreSQL",
      "Prisma ORM",
      "Tailwind CSS",
      "Node.js",
    ],
    features: [
      "Multi-Role Portals (Admin, Teacher, Student)",
      "Daily Attendance Logging & Percentage Calculation",
      "Examination Gradebook & Report Generation",
      "Fee Ledger & Payment Status Monitoring",
      "Database-Driven Analytics & Administrative Overviews",
    ],
    highlights: [
      "Architected relational PostgreSQL schema with Prisma ORM encompassing 9 distinct models.",
      "Implemented strict role-based access control protecting administrative routes and private records.",
      "Built dynamic analytics dashboards aggregating real-time enrollment, fee arrears, and attendance rates.",
      "Designed responsive UI components supporting quick filtering and multi-attribute search across records.",
    ],
    metrics: [
      { label: "Role Portals", value: "Admin, Teacher, Student" },
      { label: "Database Engine", value: "Prisma + PostgreSQL" },
      { label: "Internship Task", value: "CodSoft Task 1" },
    ],
    codeSnippet: {
      filename: "student-service.ts",
      language: "typescript",
      code: `import { prisma } from "@/lib/prisma";

export async function getStudentAcademicSummary(studentId: string) {
  const student = await prisma.student.findUnique({
    where: { id: studentId },
    include: {
      user: { select: { name: true, email: true } },
      attendance: { select: { status: true, date: true } },
      examResults: { include: { examination: true } },
      feeRecords: { select: { amount: true, status: true, dueDate: true } }
    }
  });

  const totalClasses = student?.attendance.length || 0;
  const attended = student?.attendance.filter(a => a.status === "PRESENT").length || 0;
  const attendanceRate = totalClasses > 0 ? (attended / totalClasses) * 100 : 0;

  return { student, attendanceRate: attendanceRate.toFixed(1) };
}`,
    },
  },
  {
    id: "dinedesk",
    title: "DineDesk",
    subtitle: "Restaurant Ordering & Table Reservation Platform",
    category: "Full Stack Hospitality",
    internship: "CodSoft",
    filterCategory: "codsoft",
    badge: "CodSoft Task 2",
    badgeColor: "amber",
    github: "https://github.com/ajayhukkeri6363-cpu/CODSOFT_TASKSNO",
    liveDemo: null,
    status: "Completed • Task 2",
    shortDescription:
      "A modern restaurant platform with interactive digital menus, conflict-free table reservations, 5-stage order lifecycle tracking, and dedicated kitchen staff dispatch.",
    fullDescription:
      "DineDesk is a full-stack hospitality solution streamlining dining operations. Features customer-facing digital menus with allergen/dietary filters, conflict-free table booking algorithms, 5-stage order lifecycle management (Placed → Confirmed → Preparing → Ready → Completed), and kitchen dispatch queues for restaurant staff.",
    technologies: [
      "Next.js",
      "TypeScript",
      "PostgreSQL",
      "Prisma ORM",
      "Tailwind CSS",
      "Node.js",
    ],
    features: [
      "Interactive Digital Menu with Category & Dietary Filters",
      "Table Reservation Engine with Double-Booking Prevention",
      "5-Stage Kitchen Order Lifecycle Pipeline",
      "Staff & Kitchen Operational Dispatch Queue",
      "Admin Analytics for Orders, Revenue, and Popular Dishes",
    ],
    highlights: [
      "Engineered relational database models for menus, table capacities, orders, and payment states.",
      "Constructed live kitchen dashboard enabling staff to transition orders through preparation stages.",
      "Implemented validation algorithms preventing overlapping table bookings and capacity overruns.",
      "Built mobile-first ordering interface supporting rapid item customization and cart checkouts.",
    ],
    metrics: [
      { label: "Order Lifecycle", value: "5-Stage Pipeline" },
      { label: "Operations", value: "Kitchen & Staff Queue" },
      { label: "Internship Task", value: "CodSoft Task 2" },
    ],
    codeSnippet: {
      filename: "order-lifecycle.ts",
      language: "typescript",
      code: `export async function advanceOrderStatus(orderId: string, nextStatus: string) {
  const updatedOrder = await prisma.order.update({
    where: { id: orderId },
    data: {
      status: nextStatus,
      updatedAt: new Date(),
      history: {
        create: {
          status: nextStatus,
          timestamp: new Date(),
          note: \`Order transitioned to \${nextStatus}\`
        }
      }
    },
    include: { items: { include: { menuItem: true } }, table: true }
  });

  return updatedOrder;
}`,
    },
  },
  {
    id: "careerhub",
    title: "CareerHub",
    subtitle: "Job Portal & Recruitment Management Platform",
    category: "Full Stack Recruitment SaaS",
    internship: "CodSoft",
    filterCategory: "codsoft",
    badge: "CodSoft Task 3",
    badgeColor: "purple",
    github: "https://github.com/ajayhukkeri6363-cpu/CODSOFT_TASKSNO",
    liveDemo: null,
    status: "Completed • Task 3",
    shortDescription:
      "A recruitment platform connecting job seekers with recruiters, featuring multi-filter job search, applicant tracking (ATS), and candidate pipeline management.",
    fullDescription:
      "CareerHub delivers an end-to-end hiring ecosystem. Job seekers can search categorized vacancies by tech stack, experience, and compensation, submit resumes, and track their application progress. Recruiters manage job postings, review candidate submissions, and advance applicants across hiring stages.",
    technologies: [
      "Next.js",
      "TypeScript",
      "PostgreSQL",
      "Prisma ORM",
      "Tailwind CSS",
      "Node.js",
    ],
    features: [
      "Categorized Job Search with Multi-Filter Engine",
      "Recruiter Job Posting & Candidate Review Hub",
      "Application Stage Pipeline (Applied, Review, Interview, Hired)",
      "Applicant Profile & Resume Submission Flow",
      "Administrative Metrics on Vacancies and Placement",
    ],
    highlights: [
      "Built dual-role authentication isolating candidate workspaces from recruiter dashboards.",
      "Engineered flexible search and filtering for salary ranges, experience, and remote criteria.",
      "Implemented applicant tracking pipeline enabling recruiters to transition candidate stages.",
      "Designed responsive interfaces optimizing both dense desktop ATS views and mobile job searches.",
    ],
    metrics: [
      { label: "Target Roles", value: "Recruiters & Job Seekers" },
      { label: "Pipeline", value: "Multi-Stage ATS" },
      { label: "Internship Task", value: "CodSoft Task 3" },
    ],
    codeSnippet: {
      filename: "application-service.ts",
      language: "typescript",
      code: `export async function submitJobApplication(jobId: string, applicantId: string, resumeUrl: string) {
  const existingApp = await prisma.application.findFirst({
    where: { jobId, applicantId }
  });

  if (existingApp) {
    throw new Error("Application already submitted for this vacancy.");
  }

  return await prisma.application.create({
    data: {
      jobId,
      applicantId,
      resumeUrl,
      status: "APPLIED",
      appliedAt: new Date()
    }
  });
}`,
    },
  },
  {
    id: "shopsphere",
    title: "ShopSphere",
    subtitle: "Full Stack E-Commerce Platform",
    category: "E-Commerce & Storefront",
    internship: "CodeAlpha",
    filterCategory: "codealpha",
    badge: "CodeAlpha Task 1",
    badgeColor: "emerald",
    github: "https://github.com/ajayhukkeri6363-cpu/codealpha_tasks",
    liveDemo: null,
    status: "Completed • Task 1",
    shortDescription:
      "A modern full-stack e-commerce web application featuring product catalogs, category filtering, cart management, JWT authentication, and checkout simulation.",
    fullDescription:
      "ShopSphere is a full-stack e-commerce platform built with the MERN stack. Includes dynamic catalog browsing, category and price filtering, persistent cart state, user registration and login with JSON Web Tokens, order generation, and an administrative inventory control system.",
    technologies: [
      "React",
      "Vite",
      "Node.js",
      "Express.js",
      "MongoDB",
      "JWT",
      "Tailwind CSS",
    ],
    features: [
      "Dynamic Product Catalog with Category & Price Filtering",
      "Persistent Shopping Cart with Real-Time Quantity Updates",
      "Secure JWT Authentication & Protected User Profiles",
      "Order History & Simulated Checkout Pipeline",
      "Admin Product Management (Create, Edit, Delete)",
    ],
    highlights: [
      "Built full RESTful API with Express.js handling auth, product CRUD, and order management.",
      "Secured sensitive routes with JWT authentication middleware and password hashing.",
      "Configured MongoDB schemas with Mongoose for users, products, categories, and orders.",
      "Designed intuitive React frontend with responsive product cards and smooth cart checkout.",
    ],
    metrics: [
      { label: "Stack", value: "MERN Stack" },
      { label: "Auth", value: "JWT & Bcrypt" },
      { label: "Internship Task", value: "CodeAlpha Task 1" },
    ],
    codeSnippet: {
      filename: "cartController.js",
      language: "javascript",
      code: `export const calculateOrderTotal = (cartItems) => {
  const subtotal = cartItems.reduce((acc, item) => acc + item.price * item.quantity, 0);
  const tax = subtotal * 0.08;
  const shipping = subtotal > 50 ? 0 : 5.99;
  const total = subtotal + tax + shipping;

  return {
    subtotal: subtotal.toFixed(2),
    tax: tax.toFixed(2),
    shipping: shipping.toFixed(2),
    total: total.toFixed(2)
  };
};`,
    },
  },
  {
    id: "pulse-social",
    title: "Pulse",
    subtitle: "Full Stack Social Media Platform",
    category: "Social Network & Feed",
    internship: "CodeAlpha",
    filterCategory: "codealpha",
    badge: "CodeAlpha Task 2",
    badgeColor: "rose",
    github: "https://github.com/ajayhukkeri6363-cpu/codealpha_tasks",
    liveDemo: null,
    status: "Completed • Task 2",
    shortDescription:
      "An interactive social platform featuring user profiles, multimedia post feeds, optimistic likes, threaded comments, and a follow network system.",
    fullDescription:
      "Pulse is a social networking platform designed for content sharing and community interaction. Users can publish multimedia posts, follow friends, explore trending feeds, like posts with instant optimistic UI updates, add nested comments, and customize their public bios.",
    technologies: [
      "React",
      "Vite",
      "Node.js",
      "Express.js",
      "MongoDB",
      "JWT",
      "Tailwind CSS",
    ],
    features: [
      "Multimedia Post Publishing & Chronological Feed Stream",
      "Real-Time Likes & Threaded Comment System",
      "User Follow/Unfollow Graph & Follower Counts",
      "Custom User Profiles with Avatars and Bios",
      "JWT Authentication & Session Persistence",
    ],
    highlights: [
      "Engineered feed aggregation showing updates from followed users chronologically.",
      "Implemented instant like toggle and comment insertion with optimistic React state updates.",
      "Designed MongoDB Mongoose schemas modeling relational follow graphs and post interactions.",
      "Crafted clean, engaging social UI with responsive cards and active user status indicators.",
    ],
    metrics: [
      { label: "Architecture", value: "MERN REST API" },
      { label: "Interactions", value: "Likes, Comments, Follows" },
      { label: "Internship Task", value: "CodeAlpha Task 2" },
    ],
    codeSnippet: {
      filename: "postController.js",
      language: "javascript",
      code: `export const toggleLikePost = async (req, res) => {
  const { postId } = req.params;
  const userId = req.user.id;

  const post = await Post.findById(postId);
  if (!post) return res.status(404).json({ error: "Post not found" });

  const hasLiked = post.likes.includes(userId);
  if (hasLiked) {
    post.likes = post.likes.filter(id => id.toString() !== userId);
  } else {
    post.likes.push(userId);
  }

  await post.save();
  res.json({ liked: !hasLiked, totalLikes: post.likes.length });
};`,
    },
  },
  {
    id: "flowboard",
    title: "FlowBoard",
    subtitle: "Project Management & Kanban Platform",
    category: "Productivity & Team Tool",
    internship: "CodeAlpha",
    filterCategory: "codealpha",
    badge: "CodeAlpha Task 3",
    badgeColor: "blue",
    github: "https://github.com/ajayhukkeri6363-cpu/codealpha_tasks",
    liveDemo: null,
    status: "Completed • Task 3",
    shortDescription:
      "A collaborative productivity tool featuring drag-and-drop Kanban columns, task prioritization, due date alerts, and team board management.",
    fullDescription:
      "FlowBoard organizes team workflows into intuitive visual boards. Tasks can be created, tagged with priority levels (Low, Medium, High, Urgent), assigned to members, and smoothly moved across stages (Backlog, In Progress, Review, Completed) with persistent database updates.",
    technologies: [
      "React",
      "Vite",
      "Node.js",
      "Express.js",
      "MongoDB",
      "Tailwind CSS",
    ],
    features: [
      "Interactive Kanban Boards with Customizable Columns",
      "Drag-and-Drop Task Transitions & Reordering",
      "Priority Badges, Tagging, & Due Date Tracking",
      "Project Activity Logging & Task History",
      "Team Member Assignment & Board Sharing",
    ],
    highlights: [
      "Constructed responsive drag-and-drop board interaction with fluid animation states.",
      "Created MongoDB schema modeling boards, lists, task cards, checklists, and assignees.",
      "Built RESTful API endpoints for instant task reordering and attribute modifications.",
      "Implemented filtering by priority, tags, and assigned team members for efficient task tracking.",
    ],
    metrics: [
      { label: "Interface", value: "Drag-and-Drop Kanban" },
      { label: "Workflow", value: "Multi-Column Pipeline" },
      { label: "Internship Task", value: "CodeAlpha Task 3" },
    ],
    codeSnippet: {
      filename: "kanban-service.js",
      language: "javascript",
      code: `export const moveTaskCard = async (taskId, sourceCol, destCol, newIndex) => {
  const session = await mongoose.startSession();
  session.startTransaction();
  try {
    await Task.findByIdAndUpdate(taskId, { columnId: destCol, orderIndex: newIndex }, { session });
    await Column.findByIdAndUpdate(sourceCol, { $pull: { taskIds: taskId } }, { session });
    await Column.findByIdAndUpdate(destCol, { $push: { taskIds: { $each: [taskId], $position: newIndex } } }, { session });
    await session.commitTransaction();
    return { success: true };
  } catch (error) {
    await session.abortTransaction();
    throw error;
  }
};`,
    },
  },
  {
    id: "nexus-chat",
    title: "Nexus",
    subtitle: "Real-Time Chat & WebRTC Video Platform",
    category: "Real-Time Communications",
    internship: "CodeAlpha",
    filterCategory: "codealpha",
    badge: "CodeAlpha Task 4",
    badgeColor: "purple",
    github: "https://github.com/ajayhukkeri6363-cpu/codealpha_tasks",
    liveDemo: null,
    status: "Completed • Task 4",
    shortDescription:
      "A real-time communication platform supporting instant messaging, group chat rooms, live typing indicators, and peer-to-peer WebRTC video calls.",
    fullDescription:
      "Nexus facilitates instant collaboration through bidirectional WebSocket connections. Provides direct messaging, persistent channel rooms, online/offline presence tracking, live typing indicators, file sharing attachments, and direct browser-to-browser WebRTC video/audio conferencing.",
    technologies: [
      "React",
      "Vite",
      "Node.js",
      "Express.js",
      "Socket.io",
      "WebRTC",
      "MongoDB",
    ],
    features: [
      "Bidirectional Real-Time Chat with Socket.io",
      "Direct Peer-to-Peer WebRTC Video & Voice Calls",
      "Custom Chat Rooms & Public Channels",
      "Online Presence & Real-Time Typing Indicators",
      "Message History Persistence with MongoDB",
    ],
    highlights: [
      "Implemented low-latency WebSocket signaling for rooms, direct messages, and call invitations.",
      "Integrated WebRTC mesh peer connection setup with STUN/TURN server signaling.",
      "Built real-time active user roster and typing indicator event emitters.",
      "Created sleek communication UI with split channel panes, media controls, and message feeds.",
    ],
    metrics: [
      { label: "Signaling", value: "Socket.io Engine" },
      { label: "Media", value: "WebRTC Peer-to-Peer" },
      { label: "Internship Task", value: "CodeAlpha Task 4" },
    ],
    codeSnippet: {
      filename: "socket-signaling.js",
      language: "javascript",
      code: `io.on("connection", (socket) => {
  socket.on("join-room", ({ roomId, userId }) => {
    socket.join(roomId);
    socket.to(roomId).emit("user-connected", { userId, socketId: socket.id });
  });

  socket.on("send-message", ({ roomId, message }) => {
    io.to(roomId).emit("receive-message", message);
  });

  socket.on("peer-signal", ({ targetSocketId, signalData }) => {
    io.to(targetSocketId).emit("peer-signal-received", {
      senderSocketId: socket.id,
      signalData
    });
  });
});`,
    },
  },
  {
    id: "aurastream-music",
    title: "AuraStream Web Music Player",
    subtitle: "Interactive Web Audio Streaming Player",
    category: "Web Audio Application",
    internship: "SAM AI",
    filterCategory: "sam-ai",
    badge: "SAM AI Task 4",
    badgeColor: "amber",
    github: "https://github.com/ajayhukkeri6363-cpu/sam-ai-internship-music-player",
    liveDemo: "https://ajayhukkeri6363-cpu.github.io/sam-ai-internship-music-player/",
    status: "Completed • Task 4",
    shortDescription:
      "A sleek web audio player featuring custom playback controls, dynamic playlists, interactive scrubbers, volume equalization, and track metadata.",
    fullDescription:
      "AuraStream is an audio player engineered with modern HTML5 Audio APIs and vanilla ES6+ JavaScript. Features smooth track scrubbing, playlist queue management, track progress timers, volume normalization, shuffle/repeat modes, and a responsive media player UI.",
    technologies: [
      "HTML5 Audio API",
      "CSS3",
      "JavaScript ES6+",
      "GitHub Pages",
    ],
    features: [
      "Full Playback Controls (Play, Pause, Skip, Previous, Seek)",
      "Dynamic Playlist Queue with Instant Track Switching",
      "Interactive Audio Scrubber & Real-Time Duration Counters",
      "Volume Slider & Audio Mute Toggle",
      "Album Artwork Display & Metadata Tags",
    ],
    highlights: [
      "Utilized native HTML5 Audio API for robust audio stream handling and buffer management.",
      "Created custom progress scrubber synchronized with timeupdate and interactive seek events.",
      "Implemented shuffle and repeat playlist sequencing algorithms.",
      "Deployed live to GitHub Pages with zero external UI framework dependencies.",
    ],
    metrics: [
      { label: "Engine", value: "HTML5 Audio API" },
      { label: "Deployment", value: "GitHub Pages Live" },
      { label: "Internship Task", value: "SAM AI Task 4" },
    ],
    codeSnippet: {
      filename: "music-player.js",
      language: "javascript",
      code: `class AudioPlayer {
  constructor(audioElement, playlist) {
    this.audio = audioElement;
    this.playlist = playlist;
    this.currentIndex = 0;
    this.isPlaying = false;
  }

  loadTrack(index) {
    this.currentIndex = index;
    const track = this.playlist[index];
    this.audio.src = track.audioUrl;
    this.updateUI(track);
  }

  togglePlay() {
    if (this.isPlaying) {
      this.audio.pause();
      this.isPlaying = false;
    } else {
      this.audio.play();
      this.isPlaying = true;
    }
  }
}`,
    },
  },
  {
    id: "taskflow",
    title: "TaskFlow",
    subtitle: "Smart Task Manager & Productivity App",
    category: "Productivity Web App",
    internship: "SAM AI",
    filterCategory: "sam-ai",
    badge: "SAM AI Task 2",
    badgeColor: "emerald",
    github: "https://github.com/ajayhukkeri6363-cpu/sam-ai-internship-todo-app",
    liveDemo: null,
    status: "Completed • Task 2",
    shortDescription:
      "A clean productivity web application with persistent task management, category filters, priority flags, and local storage data synchronization.",
    fullDescription:
      "TaskFlow is a client-side productivity tool designed for daily task organization. Features task creation with priority levels, deadline assignment, dynamic status filtering (All, Active, Completed), instant search, and complete persistence through the Web Storage API.",
    technologies: ["HTML5", "CSS3", "JavaScript ES6+", "LocalStorage API"],
    features: [
      "Full Task CRUD (Create, Read, Update, Delete)",
      "Persistent LocalStorage Data Synchronization",
      "Priority Tagging (High, Medium, Low) & Category Sorting",
      "Quick Completion Checkbox & Inline Editing",
      "Search & Filter by Completion Status",
    ],
    highlights: [
      "Engineered client-side state management layer maintaining sync with browser LocalStorage.",
      "Implemented dynamic DOM manipulation algorithms for smooth task rendering and removal.",
      "Designed intuitive responsive UI with priority badges and completion metrics.",
      "Added keyboard accessibility and shortcut handlers for rapid task entry.",
    ],
    metrics: [
      { label: "Storage", value: "Client LocalStorage" },
      { label: "Features", value: "Priority CRUD & Filter" },
      { label: "Internship Task", value: "SAM AI Task 2" },
    ],
    codeSnippet: {
      filename: "taskManager.js",
      language: "javascript",
      code: `export const saveTasksToStorage = (tasks) => {
  localStorage.setItem("taskflow_items", JSON.stringify(tasks));
};

export const filterTasks = (tasks, activeFilter, searchQuery) => {
  return tasks.filter(task => {
    const matchesFilter = activeFilter === "all" || 
      (activeFilter === "completed" ? task.completed : !task.completed);
    const matchesQuery = task.title.toLowerCase().includes(searchQuery.toLowerCase());
    return matchesFilter && matchesQuery;
  });
};`,
    },
  },
  {
    id: "sam-developer-portfolio",
    title: "Developer Portfolio",
    subtitle: "Responsive Personal Portfolio & Showcase Platform",
    category: "Web Engineering Showcase",
    internship: "SAM AI",
    filterCategory: "sam-ai",
    badge: "SAM AI Task 1 & 3",
    badgeColor: "blue",
    github: "https://github.com/ajayhukkeri6363-cpu/sam-ai-internship-portfolio",
    liveDemo: null,
    status: "Completed • Task 1 & 3",
    shortDescription:
      "A modern developer portfolio featuring smooth section navigation, skill showcases, project galleries, and interactive contact forms.",
    fullDescription:
      "Created as part of the SAM AI Technologies internship, this portfolio demonstrates clean web fundamentals. It includes structured sections for biographical information, technical skills, project showcases, education timeline, and an interactive contact modal with form validation.",
    technologies: ["HTML5", "CSS3", "JavaScript ES6+", "Responsive Design"],
    features: [
      "Smooth Scrolling Navigation & Section Spy",
      "Interactive Skills & Technologies Grid",
      "Featured Project Gallery Cards with Hover Effects",
      "Client-Side Contact Form Validation",
      "Fully Responsive CSS Grid and Flexbox Layouts",
    ],
    highlights: [
      "Built semantic HTML5 architecture ensuring high web accessibility and SEO readability.",
      "Engineered custom CSS animations and responsive layouts across all device breakpoints.",
      "Implemented vanilla JavaScript event listeners for mobile navigation and dynamic modals.",
      "Optimized page load speed with lightweight asset bundling and minimal external overhead.",
    ],
    metrics: [
      { label: "Design", value: "Responsive Flex/Grid" },
      { label: "Tech", value: "Vanilla Web Standards" },
      { label: "Internship Task", value: "SAM AI Task 1 & 3" },
    ],
    codeSnippet: {
      filename: "portfolio-nav.js",
      language: "javascript",
      code: `const navLinks = document.querySelectorAll(".nav-link");
const sections = document.querySelectorAll("section");

window.addEventListener("scroll", () => {
  let currentSection = "";
  sections.forEach((section) => {
    const sectionTop = section.offsetTop - 120;
    if (window.scrollY >= sectionTop) {
      currentSection = section.getAttribute("id");
    }
  });

  navLinks.forEach((link) => {
    link.classList.toggle("active", link.getAttribute("href") === \`#\${currentSection}\`);
  });
});`,
    },
  },
  {
    id: "decodelabs-frontend",
    title: "DecodeLabs Frontend Application",
    subtitle: "Modular & Responsive Web Application Interface",
    category: "Frontend Web Engineering",
    internship: "DecodeLabs",
    filterCategory: "decodelabs",
    badge: "DecodeLabs Project 1",
    badgeColor: "rose",
    github: "https://github.com/ajayhukkeri6363-cpu/DecodeLabs-Internship",
    liveDemo: null,
    status: "Completed • Project 1",
    shortDescription:
      "A client-side web application engineered with modular components, interactive UI elements, client validation, and REST API integration.",
    fullDescription:
      "Developed during the DecodeLabs Full Stack Web Development internship. Focuses on robust frontend engineering standards, client-side data handling, form validation, dynamic DOM rendering, and communicating with external RESTful endpoints.",
    technologies: [
      "HTML5",
      "CSS3",
      "JavaScript",
      "REST API Integration",
      "UI/UX",
    ],
    features: [
      "Modular Frontend Component Structure",
      "Interactive Data Presentation & Tab Filtering",
      "Client-Side Form Validation & Error States",
      "Asynchronous REST API Data Fetching",
      "Cross-Browser Compatible & Responsive Design",
    ],
    highlights: [
      "Constructed reusable UI components adhering to modern JavaScript best practices.",
      "Integrated fetch API for asynchronous communication with backend service endpoints.",
      "Created comprehensive form validation providing immediate feedback to users.",
      "Implemented responsive CSS layout adapting seamlessly to tablet and mobile viewports.",
    ],
    metrics: [
      { label: "Focus", value: "Modular Frontend UI" },
      { label: "Integration", value: "Asynchronous REST" },
      { label: "Internship Project", value: "DecodeLabs Project 1" },
    ],
    codeSnippet: {
      filename: "api-client.js",
      language: "javascript",
      code: `export async function fetchUserData(endpoint) {
  try {
    const response = await fetch(endpoint, {
      headers: { "Content-Type": "application/json" }
    });
    if (!response.ok) throw new Error(\`HTTP error! status: \${response.status}\`);
    const data = await response.json();
    return { success: true, data };
  } catch (error) {
    console.error("Failed to fetch data:", error);
    return { success: false, error: error.message };
  }
}`,
    },
  },
  {
    id: "decodelabs-backend",
    title: "DecodeLabs Backend APIs",
    subtitle: "Structured RESTful Service & Data Endpoints",
    category: "Backend API Engineering",
    internship: "DecodeLabs",
    filterCategory: "decodelabs",
    badge: "DecodeLabs Project 2",
    badgeColor: "emerald",
    github: "https://github.com/ajayhukkeri6363-cpu/DecodeLabs-Internship",
    liveDemo: null,
    status: "Completed • Project 2",
    shortDescription:
      "A structured Node.js and Express backend API service handling resource routing, request validation, standard HTTP status codes, and error middleware.",
    fullDescription:
      "Developed during the DecodeLabs Full Stack Web Development internship. Demonstrates core backend engineering including RESTful route architectures (GET, POST, PUT, DELETE), JSON payload validation, central error handling middleware, and structured responses.",
    technologies: [
      "Node.js",
      "Express.js",
      "REST APIs",
      "Data Validation",
      "JSON",
    ],
    features: [
      "Structured RESTful Endpoints for Resource Management",
      "Request Body Validation & Sanitization Middleware",
      "Standardized HTTP Response & Error Handling",
      "CORS & Request Logging Configuration",
      "Modular Route Architecture & Controller Separation",
    ],
    highlights: [
      "Engineered Express router pipelines cleanly separating routes, controllers, and services.",
      "Implemented robust error-handling middleware returning informative status codes and JSON messages.",
      "Built input validation logic preventing invalid payload submissions.",
      "Configured CORS policy and environment configurations for flexible deployment.",
    ],
    metrics: [
      { label: "Runtime", value: "Node.js + Express" },
      { label: "Pattern", value: "RESTful Controllers" },
      { label: "Internship Project", value: "DecodeLabs Project 2" },
    ],
    codeSnippet: {
      filename: "routes/api.js",
      language: "javascript",
      code: `const express = require("express");
const router = express.Router();

router.post("/items", (req, res, next) => {
  const { title, category, value } = req.body;
  if (!title || !category) {
    return res.status(400).json({ error: "Title and Category are required fields." });
  }

  const newItem = { id: Date.now().toString(), title, category, value: value || 0 };
  res.status(201).json({ success: true, item: newItem });
});

module.exports = router;`,
    },
  },
];

export const certifications = [
  {
    id: "working-with-google-cloud-sql",
    title: "Working with Google Cloud SQL",
    issuer: "Infosys Springboard",
    certificateType: "Program Completion Certificate",
    completedDate: "September 3, 2026",
    issuedDate: "September 4, 2026",
    date: "September 2026",
    recipient: "Ajay Hukkeri",
    image: "/certifications/working-with-google-cloud-sql.png",
    verificationUrl: "https://verify.onwingspan.com",
    badge: "Cloud SQL",
    badgeColor: "amber",
    category: "Cloud Infrastructure",
    description: "Program Completion Certificate for Working with Google Cloud SQL.",
  },
  {
    id: "introduction-to-devops",
    title: "Introduction to DevOps",
    issuer: "Microsoft",
    completedDate: "August 27, 2026",
    date: "August 2026",
    recipient: "Ajay Hukkeri",
    image: "/certifications/introduction-to-devops.png",
    verificationUrl: null,
    badge: "DevOps",
    badgeColor: "blue",
    category: "DevOps & CI/CD",
    description: "Introduction to DevOps principles, culture, and core practices.",
  },
  {
    id: "generative-ai-essentials",
    title: "Generative AI Essentials: Using LLMs to Work with Data",
    issuer: "IBM SkillsBuild",
    issuedDate: "August 28, 2026",
    date: "August 2026",
    recipient: "Ajay Hukkeri",
    image: "/certifications/generative-ai-essentials-llms-data.png",
    verificationUrl: "https://www.credly.com/go/3TQs9wHY",
    badge: "IBM Verified",
    badgeColor: "purple",
    category: "Generative AI & LLMs",
    description: "Generative AI Essentials: Using LLMs to Work with Data.",
  },
  {
    id: "ai-for-healthcare-systems",
    title: "AI for Healthcare Systems",
    issuer: "Coursera",
    institution: "University of Colorado",
    completedDate: "August 27, 2026",
    date: "August 2026",
    recipient: "Ajay Hukkeri",
    image: "/certifications/ai-for-healthcare-systems.png",
    verificationUrl: "https://coursera.org/verify/specialization/AYEMJE7R074C",
    badge: "Specialization",
    badgeColor: "emerald",
    category: "AI & Healthcare",
    description: "Online specialization focused on AI-relevant tools, applications, and systems for healthcare.",
  },
  {
    id: "plan-agile-github-azure",
    title: "Plan Agile with GitHub Projects and Azure Boards",
    issuer: "Microsoft",
    completedDate: "August 27, 2026",
    date: "August 2026",
    recipient: "Ajay Hukkeri",
    image: "/certifications/plan-agile-github-projects-azure-boards.png",
    verificationUrl: null,
    badge: "Agile Planning",
    badgeColor: "blue",
    category: "Agile & Azure",
    description: "Plan Agile with GitHub Projects and Azure Boards.",
  },
  {
    id: "copado-ai",
    title: "Copado AI",
    issuer: "Copado",
    certification: "Copado Salesforce DevOps certification",
    issuedDate: "August 19, 2026",
    date: "August 2026",
    certificationId: "079077",
    recipient: "Ajay Hukkeri",
    image: "/certifications/copado-ai.png",
    verificationUrl: null,
    badge: "Copado DevOps",
    badgeColor: "amber",
    category: "Salesforce DevOps",
    description: "Copado Salesforce DevOps certification.",
  },
  {
    id: "journey-to-cloud",
    title: "Journey to Cloud: Envisioning Your Solution",
    issuer: "IBM SkillsBuild",
    issuedDate: "October 25, 2025",
    date: "October 2025",
    recipient: "Ajay Hukkeri",
    image: "/certifications/journey-to-cloud-envisioning-solution.png",
    verificationUrl: "https://www.credly.com/badges/60364b6d-6ea3-415a-9ac1-27d1c933f36d",
    badge: "IBM Cloud",
    badgeColor: "purple",
    category: "Cloud Architecture",
    description: "Journey to Cloud: Envisioning Your Solution.",
  },
  {
    id: "ignite-india",
    title: "Ignite India",
    issuer: "Wadhwani Foundation",
    program: "Ignite India",
    institution: "Reva University – School of Computer Science and Engineering",
    completedDate: "October 1, 2025",
    date: "October 2025",
    trainingDuration: "42 hours",
    recipient: "Ajay Hukkeri",
    image: "/certifications/ignite-india.png",
    verificationUrl: null,
    badge: "Ignite India",
    badgeColor: "rose",
    category: "Innovation & Training",
    description: "Completed the Ignite India program with 42 hours of training.",
  },
  {
    id: "data-fundamentals",
    title: "Data Fundamentals",
    issuer: "IBM SkillsBuild",
    issuedDate: "December 23, 2024",
    date: "December 2024",
    recipient: "Ajay Hukkeri",
    image: "/certifications/data-fundamentals.png",
    verificationUrl: "https://www.credly.com/go/vCZOD4wtk",
    badge: "Data Badge",
    badgeColor: "purple",
    category: "Data Fundamentals",
    description: "Data Fundamentals certification.",
  },
];

export const education = {
  degree: "B.Tech in Computer Science and Engineering",
  institution: "REVA University, Bangalore",
  timeline: "2024 — Present",
  status: "In Progress (Undergraduate)",
  location: "Bangalore, Karnataka, India",
  highlights: [
    "Core curriculum focused on Data Structures, Algorithms, Object-Oriented Programming, and Database Management Systems.",
    "Developing practical full-stack projects combining intuitive user interfaces with robust backend architectures.",
    "Specialized coursework in software engineering methodologies, database design, and web computing.",
  ],
  coursework: [
    "Data Structures & Algorithms",
    "Database Management Systems (DBMS)",
    "Object-Oriented Programming (Java / C++)",
    "Web Application Development",
    "Computer Organization & Architecture",
    "Software Engineering & Agile",
  ],
};
