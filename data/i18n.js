// data/i18n.js
// Vietnamese translations for the portfolio.
// Assign to window.I18N_VI — English content lives in content.js (window.SITE_META, etc.)
// i18n.js applies on top of content.js when lang === 'vi'.

window.I18N_VI = {

  // -------------------------------------------------------------------------
  // NAV
  // -------------------------------------------------------------------------
  nav: {
    about:    'Giới thiệu',
    skills:   'Kỹ năng',
    projects: 'Dự án',
    contact:  'Liên hệ',
    downloadCv: 'Tải CV',
  },

  // -------------------------------------------------------------------------
  // HERO
  // -------------------------------------------------------------------------
  hero: {
    eyebrow:    'Frontend Developer',
    subtitle:   'Lập trình viên Frontend & Sinh viên IT tốt nghiệp',
    subheadline:'Mình là sinh viên tốt nghiệp ngành CNTT tại Đại học Trà Vinh, xây dựng các sản phẩm full-stack với trọng tâm là giao diện sạch và UI có tư duy. Code gọn, thiết kế có chủ đích, sản phẩm thực tế.',
    viewProjects: 'Xem dự án',
    downloadCv:   'Tải CV',
    contactMe:    'Liên hệ →',
  },

  // -------------------------------------------------------------------------
  // ABOUT
  // -------------------------------------------------------------------------
  about: {
    eyebrow: 'Giới thiệu',
    heading: 'Xây dựng thứ hoạt động tốt — và cảm giác đúng.',
    bio: [
      'Mình là sinh viên Công nghệ thông tin tại Đại học Trà Vinh, chuyên về lập trình frontend với khiếu thẩm mỹ UI/UX. Mình quan tâm đến bức tranh toàn diện — từ cảm giác của trang web trên điện thoại đến cách API được thiết kế ở phía sau.',
      'Dự án tốt nghiệp VIORA kết hợp Flutter, Node.js, MySQL và Gemini AI thành một sản phẩm hoàn chỉnh. Trước đó, HABITU cho mình kinh nghiệm lập trình web full-stack với PHP và làm việc nhóm thực tế.',
      'Mình đang tìm kiếm vị trí frontend hoặc full-stack để tiếp tục tạo ra những sản phẩm có giá trị và phát triển cùng những người coi trọng chất lượng.'
    ],
    timelineLabel: 'Timeline',
  },

  // -------------------------------------------------------------------------
  // TIMELINE (label & description only — years stay as-is)
  // -------------------------------------------------------------------------
  timeline: [
    { label: 'Nhập học Đại học Trà Vinh',       description: 'Ngành CNTT, tập trung phát triển frontend và thiết kế UI/UX' },
    { label: 'Dự án HABITU',                     description: 'Nền tảng web theo dõi thói quen lành mạnh xây dựng bằng PHP và MySQL' },
    { label: 'Đồ án tốt nghiệp VIORA',           description: 'Ứng dụng mobile full-stack về lối sống lành mạnh tích hợp AI và gamification' },
    { label: 'Tốt nghiệp dự kiến',               description: 'Cử nhân Công nghệ thông tin, Đại học Trà Vinh' },
    { label: 'Bắt đầu sự nghiệp',                description: '' },
  ],

  // -------------------------------------------------------------------------
  // SKILLS
  // -------------------------------------------------------------------------
  skills: {
    eyebrow: 'Kỹ năng',
    heading: 'Công nghệ tôi sử dụng',
  },

  // -------------------------------------------------------------------------
  // PROJECTS
  // -------------------------------------------------------------------------
  projects: {
    eyebrow: 'Dự án nổi bật',
    heading: 'Những thứ tôi đã xây dựng',
    roleLabel: 'Vai trò',
    viewCaseStudy: 'Xem Case Study →',
    comingSoon: 'Sắp ra mắt',
  },

  projectList: [
    {
      tagline:     'Ứng dụng mobile hỗ trợ lối sống lành mạnh với AI coaching và gamification.',
      description: 'Ứng dụng mobile đầy đủ tính năng giúp người dùng xây dựng thói quen lành mạnh bền vững thông qua gamification, AI coaching và khuyến khích cộng đồng. Phát triển như đồ án tốt nghiệp — thiết kế, xây dựng và triển khai từ đầu đến cuối.',
      role:        'Lập trình viên Full Stack & Nhà thiết kế UI/UX',
      highlights: [
        'AI coaching chatbot được hỗ trợ bởi Gemini AI API',
        'Hệ thống streak thói quen với cơ chế Freeze Token',
        'Xác thực Google OAuth & OTP qua email',
        'Gamification cây ảo + hệ thống XP và cấp độ'
      ],
    },
    {
      tagline:     'Nền tảng web theo dõi thói quen lành mạnh và xây dựng cộng đồng.',
      description: 'Nền tảng web về lối sống lành mạnh với quản lý thói quen, bài đăng cộng đồng, theo dõi streak, thông báo và bảng quản trị đầy đủ. Xây dựng bằng PHP và MySQL trong dự án nhóm.',
      role:        'Lập trình viên Full Stack',
      highlights: [
        'Tích hợp đăng nhập Google',
        'Hệ thống bài đăng + bình luận cộng đồng',
        'Thông báo email qua PHPMailer',
        'Bảng quản trị admin'
      ],
    },
  ],

  // -------------------------------------------------------------------------
  // CONTACT
  // -------------------------------------------------------------------------
  contact: {
    eyebrow:    'Liên hệ',
    heading:    'Hãy cùng làm việc',
    subtext:    'Mình đang mở với các cơ hội frontend và full-stack. Liên hệ để mình cùng nói chuyện nhé.',
    downloadCv: 'Tải CV',
  },

  // -------------------------------------------------------------------------
  // FOOTER
  // -------------------------------------------------------------------------
  footer: {
    builtWith: 'Được xây dựng với tâm huyết.',
  },
};
