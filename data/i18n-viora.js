// data/i18n-viora.js — Vietnamese copy for viora.html (load after data/i18n.js)
(function () {
  if (!window.I18N_VI) window.I18N_VI = {};

  window.I18N_VI.viora = {
    chrome: {
      skipLink: 'Chuyển tới nội dung chính',
      backPortfolio: '← Về Portfolio',
      heroEyebrow: 'Case Study 01',
      heroSubtitle: 'Đồ án tốt nghiệp — Ứng dụng lối sống lành mạnh',
      heroRole: 'Vai trò: Lập trình viên Full Stack & Nhà thiết kế UI/UX',
      stackAria: 'Công nghệ sử dụng',
      heroAria: 'Hero case study VIORA',
      docTitle: 'Case Study VIORA — Thạch Thị Huệ Trinh',
      docDescription:
        'Tìm hiểu VIORA — ứng dụng mobile lối sống lành mạnh với Flutter, Node.js và Gemini AI. Đồ án tốt nghiệp của Thạch Thị Huệ Trinh.',
    },

    ui: {
      eyebrows: {
        overview: 'Tổng quan',
        problem: 'Vấn đề',
        goal: 'Mục tiêu',
        myRole: 'Vai trò',
        userFlow: 'Luồng người dùng',
        uiux: 'UI/UX',
        features: 'Tính năng',
        architecture: 'Kiến trúc',
        database: 'Cơ sở dữ liệu',
        backend: 'API & Backend',
        ai: 'Tích hợp AI',
        challenges: 'Thử thách',
        outcome: 'Kết quả',
        reflections: 'Bài học',
      },
      designPrinciples: 'Nguyên tắc thiết kế',
      appScreens: 'VIORA — Màn hình ứng dụng',
      layers: 'Các tầng',
      externalServices: 'Dịch vụ bên ngoài',
      patterns: 'Mẫu thiết kế',
      routeGroups: 'Nhóm route',
      implementationNotes: 'Ghi chú triển khai',
      challenge: 'Thử thách',
      solution: 'Giải pháp',
      deliverables: 'Sản phẩm bàn giao',
      metrics: 'Chỉ số',
      metricCol: 'Chỉ số',
      valueCol: 'Giá trị',
      metricsAria: 'Chỉ số kết quả',
    },

    content: null,
  };

  // Full Vietnamese body — mirrors window.VIORA_CONTENT
  window.I18N_VI.viora.content = {
    overview: {
      title: 'Tổng quan',
      body:
        'VIORA là ứng dụng mobile đầy đủ tính năng giúp xây dựng và duy trì thói quen lành mạnh. Ứng dụng kết hợp theo dõi thói quen hằng ngày, gamification, chatbot coaching bằng AI, push notification và cộng đồng — trong một app Flutter duy nhất, backend Node.js/Express REST API và MySQL. Dự án được phát triển như đồ án tốt nghiệp; mọi lớp — thiết kế UI/UX, frontend mobile, backend và database — do một developer đảm nhiệm.',
    },

    problem: {
      title: 'Vấn đề',
      body:
        'Đa số mọi người muốn có thói quen tốt hơn nhưng khó duy trì nếu thiếu cấu trúc và động lực. App nhắc nhở chung chung thiếu vòng phản hồi giúp thay đổi hành vi lâu dài. Người dùng cần hệ thống theo dõi tiến độ, ghi nhận nỗ lực và gợi ý cá nhân khi lệch nhịp — không chỉ thêm một danh sách việc kèm thông báo.',
    },

    goal: {
      title: 'Mục tiêu dự án',
      items: [
        'Xây dựng app đa nền tảng (ưu tiên Android) giúp check-in thói quen hằng ngày gần như không ma sát',
        'Triển khai streak kèm cơ chế Freeze Token — bảo vệ tiến độ mà vẫn giữ trách nhiệm',
        'Tích hợp gamification: XP, cấp độ và cây ảo phát triển theo thói quen ổn định',
        'Thêm chatbot coaching AI (Gemini) cho lời khuyên và động lực cá nhân hóa',
        'Push notification ổn định qua Firebase Cloud Messaging (FCM)',
        'Xác thực an toàn: Google OAuth và xác minh email OTP',
      ],
    },

    myRole: {
      title: 'Vai trò của tôi',
      role: 'Lập trình viên Full Stack & Nhà thiết kế UI/UX',
      teamSize: 'Một mình (solo)',
      body:
        'Tôi là developer duy nhất của VIORA. Trách nhiệm trải dài toàn sản phẩm: thiết kế màn hình trên Figma, xây Flutter frontend với animation và state management, kiến trúc và phát triển REST API Node.js/Express, thiết kế và vận hành schema MySQL, tích hợp Firebase Cloud Messaging, Gemini AI API và Google OAuth. Tôi cũng build APK và triển khai.',
    },

    userFlow: {
      title: 'Luồng người dùng',
      description:
        'Hành trình chính: onboarding → vòng lặp thói quen hằng ngày, với check-in mỗi ngày ở trung tâm:',
      flow: [
        { step: '1. Xác thực', detail: 'Đăng ký email + OTP, hoặc đăng nhập Google OAuth' },
        { step: '2. Onboarding', detail: 'Đặt tên, chọn mục tiêu sức khỏe và danh mục thói quen ban đầu' },
        { step: '3. Thiết lập thói quen', detail: 'Tạo thói quen với tần suất (ngày/tuần), giờ nhắc và độ khó' },
        { step: '4. Check-in hằng ngày', detail: 'Mỗi ngày đánh dấu hoàn thành; hoàn thành tất cả thói quen tăng streak' },
        { step: '5. Streak & Freeze Token', detail: 'Bỏ lỡ một ngày thường làm mất streak; dùng Freeze Token để bảo vệ streak một ngày' },
        { step: '6. Gamification', detail: 'Hoàn thành nhận XP; thanh cấp và cây ảo phản ánh sự nhất quán' },
        { step: '7. Coaching AI', detail: 'Chatbot Gemini trả lời tin nhắn với lời khuyên và phân tích theo lịch sử thói quen' },
        { step: '8. Cộng đồng', detail: 'Đăng cập nhật và bình luận để tạo trách nhiệm xã hội' },
        { step: '9. Thông báo', detail: 'FCM gửi nhắc theo giờ cấu hình và cảnh báo khi streak sắp mất' },
      ],
    },

    uiux: {
      title: 'Thiết kế UI/UX',
      philosophy:
        'Mục tiêu thiết kế là giảm ma sát ở mọi tương tác. Check-in thói quen không nên giống làm “paperwork”. Giao diện dùng palette sáng, nhẹ, điểm nhấn indigo — đủ năng lượng để tạo động lực, đủ êm để không gây nhiễu thị giác.',
      principles: [
        'Layout nhẹ: khoảng trắng rộng, chrome tối giản, một hành động chính mỗi màn',
        'Typography thân thiện: sans-serif bo tròn, vùng chạm lớn, phân cấp rõ',
        'Màu êm: nền trắng, accent indigo — tránh kích thích đỏ/cam kiểu app fitness',
        'Micro-feedback: dấu tick animation, cây lớn dần, cập nhật streak tức thì',
        'Nhất quán: cùng pattern thẻ — thói quen, cộng đồng, cấp độ — giảm tải nhận thức',
      ],
    },

    keyFeatures: {
      title: 'Tính năng chính',
      features: [
        { name: 'Email + OTP', detail: 'Đăng ký/đăng nhập an toàn với mã một lần gửi qua email' },
        { name: 'Google OAuth', detail: 'Đăng nhập một chạm bằng tài khoản Google (OAuth 2.0)' },
        { name: 'Quản lý thói quen', detail: 'Tạo/sửa/xóa thói quen: tên, danh mục, tần suất, giờ nhắc' },
        { name: 'Check-in hằng ngày', detail: 'Đánh dấu hoàn thành mỗi ngày; reset theo timezone người dùng' },
        { name: 'Theo dõi streak', detail: 'Đếm ngày liên tiếp; mất streak khi bỏ ngày trừ khi dùng Freeze Token' },
        { name: 'Freeze Token', detail: 'Kiếm token qua cột mốc XP; dùng một token bảo vệ streak một ngày bỏ lỡ' },
        { name: 'XP & cấp độ', detail: 'Hoàn thành thói quen nhận XP; ngưỡng cấp tăng dần; phần thưởng theo cấp' },
        { name: 'Cây ảo', detail: 'Avatar cây phát triển theo streak và XP — ẩn dụ nỗ lực bền vững' },
        { name: 'Chatbot coaching AI', detail: 'Gemini API: hỏi đáp tự nhiên, lời khuyên và phân tích hành vi theo thói quen' },
        { name: 'Push notification', detail: 'FCM: nhắc cấu hình được, cảnh báo streak, tin động viên' },
        { name: 'Bài đăng cộng đồng', detail: 'Chia sẻ tiến độ, like/bình luận để giữ động lực nhóm' },
        { name: 'Dashboard tiến độ', detail: 'Tóm tắt tỷ lệ hoàn thành, lịch sử streak, XP và cấp độ' },
      ],
    },

    architecture: {
      title: 'Kiến trúc hệ thống',
      description:
        'VIORA theo kiến trúc 3 tầng: client Flutter, server Node.js/Express và MySQL. Dịch vụ ngoài gắn ở tầng ứng dụng.',
      archDiagram:
        '┌─────────────────────────────────────────────────────────┐\n' +
        '│                 Kiến trúc VIORA                         │\n' +
        '├─────────────┬──────────────────────┬────────────────────┤\n' +
        '│ Trình bày   │   Logic nghiệp vụ    │   Tầng dữ liệu     │\n' +
        '│ (Flutter)   │   (Node.js/Express)  │   (MySQL)          │\n' +
        '├─────────────┼──────────────────────┼────────────────────┤\n' +
        '│ UI Screens  │ REST API Routes      │ Bảng users         │\n' +
        '│ State Mgmt  │ Auth Middleware      │ Bảng habits        │\n' +
        '│ HTTP Client │ Controllers          │ Bảng habit_logs    │\n' +
        '│ FCM handler │ Services             │ Bảng streaks       │\n' +
        '│             │ Gemini AI client     │ Bảng community     │\n' +
        '│             │ FCM push service     │ Bảng XP/Levels     │\n' +
        '└─────────────┴──────────────────────┴────────────────────┘\n\n' +
        'Dịch vụ bên ngoài:\n' +
        '  ├── Firebase Cloud Messaging\n' +
        '  ├── Gemini AI API\n' +
        '  └── Google OAuth 2.0',
      tiers: [
        {
          name: 'Tầng trình bày — Flutter',
          components: [
            'Màn hình UI Dart/Flutter',
            'State management (Provider/Bloc)',
            'HTTP client (Dio)',
            'Handler tin FCM',
            'Local storage (SharedPreferences)',
          ],
        },
        {
          name: 'Tầng logic — Node.js/Express',
          components: [
            'Route RESTful API',
            'Middleware JWT',
            'Middleware validate request',
            'Controllers (theo resource)',
            'Services (nghiệp vụ)',
            'Client Gemini AI API',
            'Dịch vụ push FCM',
          ],
        },
        {
          name: 'Tầng dữ liệu — MySQL',
          components: [
            'Schema quan hệ',
            'Sequelize ORM',
            'Migration & seed',
            'Connection pooling',
          ],
        },
      ],
      externalServices: [
        'Firebase Cloud Messaging (FCM) — push notification',
        'Gemini AI API — chatbot coaching và phân tích hành vi',
        'Google OAuth 2.0 — đăng nhập mạng xã hội',
      ],
    },

    database: {
      title: 'Thiết kế cơ sở dữ liệu',
      description: 'Schema MySQL chuẩn hóa 3NF. Các bảng và quan hệ chính:',
      tables: [
        { name: 'users', description: 'Tài khoản — id, tên, email, hash mật khẩu, OAuth, XP, cấp, số Freeze Token, created_at' },
        { name: 'habits', description: 'Thói quen — id, user_id (FK), tên, danh mục, tần suất, ngày/tuần mục tiêu, giờ nhắc, is_active' },
        { name: 'habit_logs', description: 'Nhật ký hoàn thành — id, habit_id (FK), user_id (FK), completed_date, is_completed' },
        { name: 'streaks', description: 'Trạng thái streak — id, habit_id (FK), current/longest streak, freeze_used_date, last_completed_date' },
        { name: 'xp_levels', description: 'Ngưỡng cấp — id, level_number, xp_required, reward_description' },
        { name: 'community_posts', description: 'Bài đăng — id, user_id (FK), nội dung, like_count, created_at' },
        { name: 'post_comments', description: 'Bình luận — id, post_id (FK), user_id (FK), nội dung, created_at' },
        { name: 'notifications', description: 'Log thông báo — id, user_id (FK), type, message, is_read, sent_at' },
      ],
    },

    backend: {
      title: 'API & Backend',
      description: 'Backend là REST API Node.js/Express. Mọi endpoint có tiền tố `/api/v1/`.',
      patterns: [
        'JWT: access token trong header Authorization, refresh token cookie HTTP-only',
        'Pipeline middleware: CORS → rate limit → auth guard → validator → controller',
        'Tách Controller/Service: controller xử lý HTTP, service chứa nghiệp vụ',
        'Sequelize ORM — không raw SQL trong code ứng dụng',
        'Error handler tập trung — format response thống nhất',
      ],
      routeGroups: [
        { prefix: '/auth', endpoints: ['POST /register', 'POST /login', 'POST /login/google', 'POST /verify-otp', 'POST /refresh', 'POST /logout'] },
        { prefix: '/habits', endpoints: ['GET /', 'POST /', 'PATCH /:id', 'DELETE /:id'] },
        { prefix: '/habit-logs', endpoints: ['POST /check-in', 'GET /history/:habitId'] },
        { prefix: '/streaks', endpoints: ['GET /:habitId', 'POST /freeze/:habitId'] },
        { prefix: '/community', endpoints: ['GET /posts', 'POST /posts', 'POST /posts/:id/comments', 'POST /posts/:id/like'] },
        { prefix: '/ai', endpoints: ['POST /chat'] },
        { prefix: '/notifications', endpoints: ['GET /', 'PATCH /:id/read'] },
      ],
    },

    aiIntegration: {
      title: 'Tích hợp AI — Gemini',
      description: 'VIORA dùng Gemini AI API cho chatbot coaching và phân tích hành vi cơ bản.',
      chatbot: {
        name: 'Chatbot coaching AI',
        detail:
          'Người dùng chat hỏi về thói quen, động lực hoặc mục tiêu sức khỏe. App gửi tin nhắn kèm tóm tắt ngữ cảnh (thói quen hiện tại, streak gần đây) lên Gemini; phản hồi hiển thị dạng bubble. Chatbot “biết ngữ cảnh” mà không cần fine-tuning.',
      },
      behaviourAnalysis: {
        name: 'Phân tích hành vi & tin nhắn động viên',
        detail:
          'Định kỳ app tạo phân tích ngắn về mức hoàn thành thói quen gần đây, hiển thị trên dashboard — ví dụ cảnh báo thói quen giảm hoặc khen cải thiện streak. Prompt được cấu trúc để trả về text ngắn, hành động được.',
      },
      implementation: [
        'Dùng Gemini Node.js SDK trên backend — API key trong biến môi trường',
        'Mọi gọi Gemini qua backend; key không lộ ra client Flutter',
        'Prompt có system instruction giới hạn phạm vi coaching thói quen lành mạnh',
        'Làm sạch response trước khi trả về client',
      ],
    },

    challenges: {
      title: 'Thử thách & giải pháp',
      items: [
        {
          challenge: 'Tích hợp FCM với Flutter trong khi logic thông báo nằm ở backend',
          solution:
            'App đăng ký FCM device token khi login và lưu server. Backend dùng Firebase Admin SDK gửi push — timing, nội dung và targeting cập nhật trên server, không cần phát hành app mới.',
        },
        {
          challenge: 'Thiết kế Freeze Token vừa công bằng vừa không làm streak vô nghĩa',
          solution:
            'Freeze Token hữu hạn, kiếm qua cột mốc XP. Một khoảng trống streak chỉ freeze một lần; UI hiển thị trạng thái “đóng băng” thay vì tăng streak — lịch sử trung thực nhưng vẫn bảo vệ tiến độ.',
        },
        {
          challenge: 'Chatbot Gemini có ngữ cảnh mà không lộ dữ liệu hoặc vượt token',
          solution:
            'Server tạo tóm tắt nhẹ trước mỗi lần gọi API — thói quen active, độ dài streak, tỷ lệ hoàn thành 7 ngày — inject vào system prompt, dưới giới hạn token nhưng đủ cá nhân hóa.',
        },
        {
          challenge: 'Timezone khi reset thói quen theo ngày (nửa đêm)',
          solution:
            'Ngày hoàn thành lưu UTC; logic reset so với offset timezone người dùng — ví dụ GMT+7 có “ngày mới” đúng giờ địa phương, tránh reset sớm.',
        },
      ],
    },

    outcome: {
      title: 'Kết quả',
      summary: 'VIORA hoàn thiện như ứng dụng mobile đầy đủ chức năng và nộp đồ án tốt nghiệp.',
      deliverables: [
        'APK Flutter Android — build và triển khai thử nghiệm/đánh giá',
        'REST API Node.js/Express — đủ endpoint và hoạt động',
        'MySQL — schema, migration và seed dữ liệu test',
        'FCM — push hoạt động trên thiết bị',
        'Chatbot Gemini — coaching có ngữ cảnh',
        'Google OAuth — đăng nhập end-to-end',
      ],
      metrics: [
        { label: 'Cải thiện duy trì thói quen ( khảo sát người dùng)', value: '[Chỉ số TBD]' },
        { label: 'DAU trung bình giai đoạn test', value: '[Chỉ số TBD]' },
        { label: 'Mức hài lòng phản hồi chatbot AI', value: '[Chỉ số TBD]' },
        { label: 'Điểm đánh giá / store', value: '[Chỉ số TBD]' },
      ],
    },

    lessonsLearned: {
      title: 'Bài học rút ra',
      items: [
        {
          area: 'Phát triển mobile full-stack',
          lesson:
            'Làm solo từ Figma đến APK giúp thấy quyết định ở một tầng ảnh hưởng tầng khác — schema database sớm có thể tạo debug ở Flutter. Nghĩ theo chiều dọc stack từ đầu tiết kiệm thời gian.',
        },
        {
          area: 'Tích hợp AI',
          lesson:
            'Tích hợp generative AI ít là “gọi API” hơn là prompt engineering và xử lý output. Gemini cần lặp system prompt, ràng buộc format và bước sanitize. Coi AI như component có hợp đồng interface riêng.',
        },
        {
          area: 'Thiết kế gamification',
          lesson:
            'Gamification phải “kiếm được” mới motivative. Bản đầu thưởng XP quá dễ, cây lớn nhanh, mất cảm giác thành tựu. Hiệu chỉnh ngưỡng XP và Freeze Token khan hiếm mang lại nhịp điệu hấp dẫn.',
        },
        {
          area: 'Quản lý phạm vi',
          lesson:
            'Solo trên đồ án tốt nghiệp — scope creep là rủi ro lớn. Leaderboard, icon danh mục tùy chỉnh, dark mode bị cắt để bảo vệ core. Học cách cắt có chủ đích và ghi “future work” thay vì coi là thất bại.',
        },
      ],
    },
  };
})();
