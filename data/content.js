// data/content.js
// All site content as window globals — no ES modules (no import/export).
// Edit this file to update site content without touching any HTML or JS logic.

// ---------------------------------------------------------------------------
// SITE META
// ---------------------------------------------------------------------------

window.SITE_META = {
  name: "Thạch Thị Huệ Trinh",
  role: "Frontend Developer & UI/UX-Oriented IT Graduate",
  email: "trinhfokko@gmail.com",
  github: "https://github.com/huetrinh204",
  linkedin: "https://www.linkedin.com/in/huetrinh204/",
  cv: "portfolio/1_CV_ThachThiHueTrinh.pdf",
  photo: "portfolio/cv.png",
  headline: "Building interfaces that work — and feel right.",
  subheadline: "I'm an IT graduate from Trà Vinh University who builds full-stack products with a focus on clean frontend and thoughtful UI. Clean code, considered design, real things shipped."
};

// ---------------------------------------------------------------------------
// TIMELINE
// ---------------------------------------------------------------------------

window.TIMELINE = [
  {
    year: "[Year]",
    label: "Enrolled at Trà Vinh University",
    description: "IT major, focused on frontend development and UI/UX design"
  },
  {
    year: "[Year]",
    label: "HABITU Project",
    description: "Web-based healthy habit tracking platform built with PHP and MySQL"
  },
  {
    year: "2025",
    label: "VIORA Graduation Project",
    description: "Full-stack mobile healthy lifestyle app with AI coaching and gamification"
  },
  {
    year: "2026",
    label: "Expected Graduation",
    description: "Bachelor of Information Technology, Trà Vinh University"
  },
  {
    year: "Soon",
    label: "Career Start",
    description: ""
  }
];

// ---------------------------------------------------------------------------
// SKILLS
// ---------------------------------------------------------------------------

window.SKILLS = [
  {
    category: "Frontend",
    items: ["HTML5", "CSS3", "JavaScript (ES6+)", "Tailwind CSS"]
  },
  {
    category: "Backend",
    items: ["PHP", "Node.js", "Express.js", "REST API"]
  },
  {
    category: "Mobile",
    items: ["Flutter", "Dart"]
  },
  {
    category: "Database",
    items: ["MySQL", "Sequelize ORM"]
  },
  {
    category: "Tools",
    items: ["Git", "GitHub", "Docker", "MySQL Workbench", "VS Code"]
  },
  {
    category: "Design & UI/UX",
    items: ["Figma", "Wireframing", "Prototyping", "Color Theory"]
  }
];

// ---------------------------------------------------------------------------
// PROJECTS
// ---------------------------------------------------------------------------

window.PROJECTS = [
  {
    id: "viora",
    number: "01",
    name: "VIORA",
    tagline: "Healthy lifestyle mobile app with AI coaching and gamification.",
    description: "A full-featured mobile application that helps users build sustainable healthy habits through gamification, AI-powered coaching, and social encouragement. Developed as a graduation project — designed, built, and deployed end-to-end.",
    role: "Full Stack Developer & UI/UX Designer",
    stack: ["Flutter", "Node.js", "Express.js", "MySQL", "Firebase Cloud Messaging", "Gemini AI API", "Google OAuth"],
    highlights: [
      "AI coaching chatbot powered by Gemini AI API",
      "Habit streak system with Freeze Token mechanic",
      "Google OAuth & OTP email authentication",
      "Virtual plant gamification + XP level system"
    ],
    placeholder: {
      type: "gradient",
      value: "linear-gradient(135deg, #6366F1 0%, #a5b4fc 100%)"
    },
    caseStudyUrl: "viora.html"
  },
  {
    id: "habitu",
    number: "02",
    name: "HABITU",
    tagline: "Web platform for healthy habit tracking and community building.",
    description: "A web-based healthy lifestyle platform featuring habit management, community posts, streak tracking, notifications, and a full admin dashboard. Built with PHP and MySQL as a team project.",
    role: "Full Stack Developer",
    stack: ["PHP", "MySQL", "HTML5", "CSS3", "JavaScript", "Tailwind CSS", "Google API", "PHPMailer"],
    highlights: [
      "Google Login integration",
      "Community Post + Comment system",
      "Email notifications via PHPMailer",
      "Admin management dashboard"
    ],
    placeholder: {
      type: "gradient",
      value: "linear-gradient(135deg, #e0e7ff 0%, #c7d2fe 100%)"
    },
    caseStudyUrl: "habitu.html"
  }
];

// ---------------------------------------------------------------------------
// VIORA CASE STUDY CONTENT — 14 sections
// ---------------------------------------------------------------------------

window.VIORA_CONTENT = {

  overview: {
    title: "Overview",
    body: "VIORA is a full-featured mobile application for building and maintaining healthy habits. It combines daily habit tracking with gamification mechanics, an AI-powered coaching chatbot, push notifications, and a social community — all inside a single Flutter app backed by a Node.js/Express REST API and a MySQL database. The project was developed as a graduation project, with every layer — UI/UX design, mobile frontend, backend, and database — built by a single developer."
  },

  problem: {
    title: "The Problem",
    body: "Most people want to build better habits but struggle to stay consistent without structure and motivation. Generic reminder apps lack the feedback loops that drive long-term behavior change. Users need a system that tracks their progress, rewards consistency, and offers personalized guidance when they fall off track — not just another to-do list with notifications."
  },

  goal: {
    title: "Project Goal",
    items: [
      "Build a cross-platform mobile app (Android-first) that makes daily habit tracking frictionless",
      "Implement a streak system with a Freeze Token mechanic to protect progress without breaking accountability",
      "Integrate gamification — XP points, level progression, and a virtual plant that grows with consistent habits",
      "Add an AI coaching chatbot (Gemini AI) for personalized advice and motivation",
      "Deliver reliable push notifications via Firebase Cloud Messaging (FCM)",
      "Support secure authentication via Google OAuth and OTP email verification"
    ]
  },

  myRole: {
    title: "My Role",
    role: "Full Stack Developer & UI/UX Designer",
    teamSize: "Solo developer",
    body: "I was the sole developer on VIORA. My responsibilities spanned the entire product: I designed all screens in Figma, built the Flutter frontend with custom animations and state management, architected and developed the Node.js/Express REST API, designed and managed the MySQL database schema, and integrated all external services — Firebase Cloud Messaging, Gemini AI API, and Google OAuth. I also handled the APK build and deployment."
  },

  userFlow: {
    title: "User Flow",
    description: "The core user journey follows a linear onboarding-to-habit loop, with daily check-ins at the center:",
    flow: [
      { step: "1. Auth", detail: "User registers via email + OTP, or signs in with Google OAuth" },
      { step: "2. Onboarding", detail: "User sets their name, selects health goals, and picks initial habit categories" },
      { step: "3. Habit Setup", detail: "User creates habits with a target frequency (daily / weekly), reminder times, and difficulty level" },
      { step: "4. Daily Check-In", detail: "User opens the app each day and marks habits as done. Completing all habits increments the streak counter" },
      { step: "5. Streak & Freeze Token", detail: "Missing a day normally breaks the streak. Users can spend a Freeze Token to protect their streak for one missed day" },
      { step: "6. Gamification", detail: "Completions earn XP points. XP fills a level bar and grows the user's virtual plant — a visual reward tied directly to consistency" },
      { step: "7. AI Coaching", detail: "The AI chatbot (Gemini AI) responds to user messages with personalized habit advice, motivation, and behavior analysis based on their history" },
      { step: "8. Community", detail: "Users can post updates and comment on others' posts for social accountability" },
      { step: "9. Notifications", detail: "FCM sends push reminders at user-configured times and motivational messages when streaks are at risk" }
    ]
  },

  uiux: {
    title: "UI/UX Design",
    philosophy: "The design goal was to reduce friction at every interaction. A user checking in on a habit should never feel like they're doing admin work. The interface uses a calm, light color palette anchored by soft indigo accents — energetic enough to feel motivating, subdued enough to not create visual noise.",
    principles: [
      "Lightweight layout: generous white space, minimal chrome, one primary action per screen",
      "Friendly typography: rounded sans-serif, large tap targets, clear visual hierarchy",
      "Calm color palette: white base with indigo accent — avoids the high-stimulation red/orange common in fitness apps",
      "Micro-feedback: animated check marks, plant growth transitions, and streak counter updates give immediate positive reinforcement",
      "Consistency: the same card component pattern is used throughout — habit cards, community cards, level cards — to minimize cognitive load"
    ]
  },

  keyFeatures: {
    title: "Key Features",
    features: [
      {
        name: "Email + OTP Authentication",
        detail: "Secure registration and login with one-time password verification sent via email"
      },
      {
        name: "Google OAuth Login",
        detail: "One-tap sign-in using Google accounts via OAuth 2.0"
      },
      {
        name: "Habit Management",
        detail: "Create, edit, and delete habits with custom names, categories, frequencies, and reminder times"
      },
      {
        name: "Daily Check-In",
        detail: "Mark habits as complete each day; progress resets at midnight per user timezone"
      },
      {
        name: "Streak Tracking",
        detail: "Consecutive-day streak counter per habit; streaks reset on missed days unless a Freeze Token is used"
      },
      {
        name: "Freeze Token Mechanic",
        detail: "Users earn Freeze Tokens via XP milestones and can spend one to protect a streak on a missed day"
      },
      {
        name: "XP & Level System",
        detail: "Completing habits earns XP; XP fills a level bar with increasing thresholds; higher levels unlock rewards"
      },
      {
        name: "Virtual Plant",
        detail: "A plant avatar grows through visual stages tied to the user's streak and XP level — a tangible metaphor for consistent effort"
      },
      {
        name: "AI Coaching Chatbot",
        detail: "Powered by Gemini AI API; responds to natural language questions with habit-specific advice, motivation, and behavior pattern analysis"
      },
      {
        name: "Push Notifications",
        detail: "FCM delivers configurable reminders, streak warnings, and motivational messages to the device"
      },
      {
        name: "Community Posts",
        detail: "Users can publish progress updates and like/comment on others' posts for social accountability"
      },
      {
        name: "Progress Dashboard",
        detail: "Visual summary of habit completion rates, streak history, XP progression, and level status"
      }
    ]
  },

  architecture: {
    title: "System Architecture",
    description: "VIORA follows a classic 3-tier architecture: Flutter mobile client, Node.js/Express application server, and MySQL database. External services plug in at the application layer.",
    tiers: [
      {
        name: "Presentation Layer — Flutter",
        components: ["Dart/Flutter UI screens", "State management (Provider/Bloc)", "HTTP client (Dio)", "FCM message handler", "Local storage (SharedPreferences)"]
      },
      {
        name: "Business Logic Layer — Node.js/Express",
        components: ["RESTful API routes", "JWT authentication middleware", "Request validation middleware", "Controllers (per resource)", "Services (business logic)", "Gemini AI API client", "FCM push notification service"]
      },
      {
        name: "Data Layer — MySQL",
        components: ["Relational schema", "Sequelize ORM", "Migrations and seeds", "Connection pooling"]
      }
    ],
    externalServices: [
      "Firebase Cloud Messaging (FCM) — push notifications",
      "Gemini AI API — AI coaching chatbot and behavior analysis",
      "Google OAuth 2.0 — social authentication"
    ]
  },

  database: {
    title: "Database Design",
    description: "The MySQL schema is normalized to third normal form. Key tables and their relationships:",
    tables: [
      {
        name: "users",
        description: "Core user account data — id, name, email, password hash, OAuth provider, XP, level, Freeze Token count, created_at"
      },
      {
        name: "habits",
        description: "User-defined habits — id, user_id (FK), name, category, frequency, target days per week, reminder time, is_active"
      },
      {
        name: "habit_logs",
        description: "Daily completion records — id, habit_id (FK), user_id (FK), completed_date, is_completed"
      },
      {
        name: "streaks",
        description: "Streak state per habit — id, habit_id (FK), current_streak, longest_streak, freeze_used_date, last_completed_date"
      },
      {
        name: "xp_levels",
        description: "Level thresholds configuration — id, level_number, xp_required, reward_description"
      },
      {
        name: "community_posts",
        description: "User posts — id, user_id (FK), content, like_count, created_at"
      },
      {
        name: "post_comments",
        description: "Comments on community posts — id, post_id (FK), user_id (FK), content, created_at"
      },
      {
        name: "notifications",
        description: "Notification log — id, user_id (FK), type, message, is_read, sent_at"
      }
    ]
  },

  backend: {
    title: "API & Backend",
    description: "The backend is a Node.js/Express RESTful API. All endpoints are prefixed with `/api/v1/`.",
    patterns: [
      "JWT authentication: access token in Authorization header, refresh token in HTTP-only cookie",
      "Middleware pipeline: CORS → rate limiter → auth guard → request validator → controller",
      "Controller/Service separation: controllers handle HTTP concerns, services contain business logic",
      "Sequelize ORM for all database interactions — no raw SQL in application code",
      "Centralized error handler middleware — all errors flow to a single response formatter"
    ],
    routeGroups: [
      { prefix: "/auth", endpoints: ["POST /register", "POST /login", "POST /login/google", "POST /verify-otp", "POST /refresh", "POST /logout"] },
      { prefix: "/habits", endpoints: ["GET /", "POST /", "PATCH /:id", "DELETE /:id"] },
      { prefix: "/habit-logs", endpoints: ["POST /check-in", "GET /history/:habitId"] },
      { prefix: "/streaks", endpoints: ["GET /:habitId", "POST /freeze/:habitId"] },
      { prefix: "/community", endpoints: ["GET /posts", "POST /posts", "POST /posts/:id/comments", "POST /posts/:id/like"] },
      { prefix: "/ai", endpoints: ["POST /chat"] },
      { prefix: "/notifications", endpoints: ["GET /", "PATCH /:id/read"] }
    ]
  },

  aiIntegration: {
    title: "AI Integration — Gemini AI",
    description: "VIORA uses the Gemini AI API to power a coaching chatbot and a basic behavior analysis feature.",
    chatbot: {
      name: "AI Coaching Chatbot",
      detail: "Users open a chat interface and type questions about their habits, motivation, or health goals. The app sends the message — along with a brief context summary of the user's current habits and recent streak data — to the Gemini AI API. The response is streamed back and displayed as a chat bubble. This gives the chatbot context-awareness without fine-tuning."
    },
    behaviourAnalysis: {
      name: "Behavior Analysis & Motivational Messages",
      detail: "Periodically, the app generates a short AI analysis of the user's recent habit completion patterns. This is surfaced as a personalized insight card on the dashboard — for example, flagging habits with declining completion rates or celebrating improvement streaks. Prompts are structured to return concise, actionable text."
    },
    implementation: [
      "Uses the official Gemini AI Node.js SDK on the backend — API key stored in environment variables",
      "All Gemini calls go through the backend; the API key is never exposed to the Flutter client",
      "Prompts include a system instruction block that scopes the AI to healthy habit coaching and avoids off-topic responses",
      "Responses are sanitized before returning to the client"
    ]
  },

  challenges: {
    title: "Challenges & Solutions",
    items: [
      {
        challenge: "Integrating Firebase Cloud Messaging with Flutter while keeping the backend in control of notification logic",
        solution: "The Flutter app registers its FCM device token on login and stores it server-side. The Node.js backend uses the Firebase Admin SDK to send push messages — this keeps notification logic (timing, content, targeting) on the server, where it can be updated without an app release."
      },
      {
        challenge: "Designing the Freeze Token mechanic so it protects streaks fairly without making streaks meaningless",
        solution: "Freeze Tokens are a finite resource earned through XP milestones, not purchased. A freeze can only be used once per streak gap (no consecutive freezes), and the streak counter displays a distinct 'frozen' state rather than incrementing — so the visual record stays honest while still protecting the user's progress."
      },
      {
        challenge: "Making the Gemini AI chatbot context-aware without exposing user data or exceeding token limits",
        solution: "A lightweight context summary is constructed server-side before each API call — listing the user's active habits, their current streak lengths, and a 7-day completion rate. This summary is injected as a system-level prompt prefix and stays well under the token limit while giving the AI enough context to give personalized, relevant responses."
      },
      {
        challenge: "Handling timezone differences for daily habit resets (midnight rollover)",
        solution: "Habit completion dates are stored as UTC timestamps. The daily reset logic compares dates against the user's stored timezone offset, so a user in GMT+7 gets their 'new day' at 7:00 AM UTC rather than midnight UTC. This prevents premature resets for users in non-UTC timezones."
      }
    ]
  },

  outcome: {
    title: "Outcome",
    summary: "VIORA was completed as a fully functional mobile application and submitted as a graduation project.",
    deliverables: [
      "Flutter Android APK — built and deployed for testing and evaluation",
      "Node.js/Express REST API — all endpoints implemented and functional",
      "MySQL database — schema designed, migrated, and seeded with test data",
      "Firebase Cloud Messaging integration — push notifications working on device",
      "Gemini AI chatbot — functioning coaching interface with context-aware responses",
      "Google OAuth authentication — one-tap login working end-to-end"
    ],
    metrics: [
      { label: "User-reported habit adherence improvement", value: "[Outcome metric TBD]" },
      { label: "Average daily active users during testing", value: "[Outcome metric TBD]" },
      { label: "AI chatbot response satisfaction rating", value: "[Outcome metric TBD]" },
      { label: "App store / evaluation grade", value: "[Outcome metric TBD]" }
    ]
  },

  lessonsLearned: {
    title: "Lessons Learned",
    items: [
      {
        area: "Full-Stack Mobile Development",
        lesson: "Building a mobile app solo — from Figma frames to deployed APK — gave me end-to-end ownership that taught me how decisions in one layer cascade into others. A database schema choice made early (like storing dates as UTC strings vs. Date objects) created debugging work two layers up in the Flutter client. Thinking vertically across the stack from the start saves time."
      },
      {
        area: "AI Integration",
        lesson: "Integrating a generative AI API into a product is less about the API call and more about prompt engineering and output handling. Getting the Gemini AI to consistently produce concise, on-topic coaching advice required iteration on the system prompt, output format constraints, and a sanitization pass on responses. Treating the AI as a component with its own interface contract — not just a magic text box — made the integration stable."
      },
      {
        area: "Gamification Design",
        lesson: "Gamification mechanics need to feel earned to be motivating. Early prototypes rewarded XP too easily, which made the virtual plant grow too fast and removed the sense of achievement. Calibrating XP thresholds and making Freeze Tokens scarce (earned, not free) brought back the tension that makes the system engaging. Good gamification is about pacing, not just points."
      },
      {
        area: "Scope Management",
        lesson: "As a solo developer on a graduation project, scope creep is the main risk. Several features — a social leaderboard, custom habit categories with icons, and a dark mode — were cut during development to protect the core experience. Learning to cut features deliberately, and documenting them as future work rather than failures, is a practical skill."
      }
    ]
  }
};

// ---------------------------------------------------------------------------
// HABITU CASE STUDY CONTENT — 6 sections
// ---------------------------------------------------------------------------

window.HABITU_CONTENT = {

  overview: {
    title: "Overview",
    body: "HABITU is a web-based healthy habit tracking platform built with PHP and MySQL. It gives users a structured space to define personal health habits, log daily completions, track streaks, and engage with a community of other users. The platform includes a full admin panel for user and content management. HABITU was built as a team project with a focus on full-stack web development fundamentals — server-side rendering, relational database design, and role-based access control."
  },

  techStack: {
    title: "Tech Stack",
    stack: [
      { layer: "Frontend", technologies: ["HTML5", "CSS3", "JavaScript (vanilla)", "Tailwind CSS"] },
      { layer: "Backend", technologies: ["PHP (procedural + OOP)", "Session-based authentication"] },
      { layer: "Database", technologies: ["MySQL", "PDO (PHP Data Objects)"] },
      { layer: "Integrations", technologies: ["Google OAuth API (Google Login)", "PHPMailer (email notifications)"] },
      { layer: "Environment", technologies: ["Apache / XAMPP", "MySQL Workbench"] }
    ]
  },

  myRole: {
    title: "My Role",
    role: "Full Stack Developer",
    body: "I contributed across the full stack — designing and building UI components, implementing backend PHP logic for habit management and streaks, designing parts of the MySQL schema, and integrating Google OAuth and PHPMailer. I also built sections of the admin dashboard for user management and content moderation."
  },

  keyFeatures: {
    title: "Key Features",
    features: [
      {
        name: "Email & Password Authentication",
        detail: "Standard registration and login with password hashing (bcrypt) and session management"
      },
      {
        name: "Google Login",
        detail: "OAuth 2.0 integration allowing users to sign in with their Google account"
      },
      {
        name: "User Profile Management",
        detail: "Users can update their profile information, avatar, and personal settings"
      },
      {
        name: "Habit Management",
        detail: "Create, edit, and delete personal habits with categories and target frequencies"
      },
      {
        name: "Habit Logs & Daily Tracking",
        detail: "Log daily habit completions; view completion history by date"
      },
      {
        name: "Streak Tracking",
        detail: "Automatic streak counter per habit based on consecutive daily completions"
      },
      {
        name: "Community Posts & Comments",
        detail: "Users can share progress updates, comment on posts, and engage with others for accountability"
      },
      {
        name: "Email Notifications",
        detail: "PHPMailer sends transactional emails — account verification, password reset, and habit reminders"
      },
      {
        name: "User Feedback System",
        detail: "Users can submit feedback on the platform; feedback is surfaced to admins for review"
      },
      {
        name: "Admin Dashboard",
        detail: "Role-based admin panel for managing users, moderating community posts, and reviewing feedback"
      }
    ]
  },

  screenshots: {
    title: "Screenshots",
    note: "Screenshots will be added once available. Visual placeholders are shown below.",
    placeholders: [
      { label: "Dashboard — Habit Overview", gradient: "linear-gradient(135deg, #e0e7ff 0%, #c7d2fe 100%)" },
      { label: "Habit Log — Daily Check-In", gradient: "linear-gradient(135deg, #ddd6fe 0%, #c4b5fd 100%)" },
      { label: "Community Feed", gradient: "linear-gradient(135deg, #ede9fe 0%, #ddd6fe 100%)" },
      { label: "Admin Dashboard", gradient: "linear-gradient(135deg, #c7d2fe 0%, #a5b4fc 100%)" }
    ]
  },

  lessonsLearned: {
    title: "Lessons Learned",
    items: [
      {
        area: "PHP & Server-Side Rendering",
        lesson: "Building a full application in PHP without a framework forced a deeper understanding of the request/response cycle, session handling, and SQL injection prevention via PDO prepared statements. These fundamentals transfer to any backend language or framework."
      },
      {
        area: "Third-Party Integrations",
        lesson: "Integrating Google OAuth and PHPMailer required careful handling of tokens, redirect URIs, and email deliverability configuration. Reading documentation thoroughly and testing integrations in isolation before connecting them to the main application flow saved significant debugging time."
      },
      {
        area: "Team Collaboration",
        lesson: "Working on a shared codebase without a formal branching strategy early on led to merge conflicts and duplicated work. Establishing clear file ownership and using GitHub branches per feature earlier in the project would have reduced integration friction."
      },
      {
        area: "Database Design",
        lesson: "Designing the schema before writing application code prevented several structural changes mid-project. The one area where this broke down was the notification system, which was added late and required retrofitting foreign keys. Schema-first design is worth the upfront time."
      }
    ]
  }
};
