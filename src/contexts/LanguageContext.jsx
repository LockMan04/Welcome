import { createContext, useContext, useState } from 'react';

const LanguageContext = createContext();

export const useLanguage = () => {
  const context = useContext(LanguageContext);
  if (!context) {
    throw new Error('useLanguage must be used within a LanguageProvider');
  }
  return context;
};

export const translations = {
    en: {
    // Navbar
    nav: {
      home: 'Home',
      about: 'About',
      projects: 'Projects',
      contact: 'Contact',
      getInTouch: 'Get in touch'
    },
    // Hero
    hero: {
      greeting: "Hi, I'm",
      name: 'Thanh Toan',
      title: 'Aspiring AI Specialist',
      description:
        'Passionate about artificial intelligence and building innovative solutions that create positive impact.',
      viewWork: 'View projects',
      downloadCV: 'Download CV'
    },
    // Projects
    projects: {
      title: 'Featured Projects',
      subtitle:
        'Exploring the intersection of AI, machine learning, and real-world applications',
      demo: 'Demo',
      code: 'Source',
      // Project content
      project1: {
        title: "What's for Dinner?",
        description:
          'Build a complete AI application combining computer vision and generative AI to deliver a creative cooking experience. The app recognizes ingredients from images and suggests unique recipes based on those ingredients.'
      },
      project2: {
        title: 'AI Agent Meeting',
        description:
          'Develop an autonomous multi-agent AI system using the CrewAI framework to automate the entire meeting workflow: preparation, execution, and post-meeting analysis.'
      },
      project3: {
        title: 'Vietnamese Text Emotion Recognition',
        description:
          'Research and implement a deep learning model to analyze and detect emotions (positive, negative, neutral) in Vietnamese text. Use LSTM for sequence processing to improve classification accuracy.'
      },
      project4: {
        title: 'Supermarket Product Recognition System',
        description:
          'Develop a computer vision system that automatically detects and classifies products on shelves, aiming for applications in inventory management and automated checkout.'
      },
      project5: {
        title: 'Spam Email Classification',
        description:
          'Build a deep learning model to automatically analyze email content and filter unwanted messages, improving efficiency and user security.'
      },
      project6: {
        title: 'Agent Bot for Discord',
        description:
          'Create a Discord bot powered by AI to automate tasks and provide helpful information. Instead of memorizing complex commands, users can interact with the bot using natural language.'
      }
    },
    // About
    about: {
      title: 'About Me',
      subtitle:
        'Passionate about applying AI to solve real-world problems and create meaningful impact',
      myJourney: 'My Journey',
      bio1:
        "I'm a final-year Information Technology student with a clear career goal of becoming an AI Specialist. My passion lies in applying intelligent algorithms to tackle complex, real-world problems.",
      bio2:
        'I aspire to work in a professional environment where I can apply my knowledge to help build breakthrough AI products. I am always eager to learn new technologies and continually improve my skills to contribute to an organization’s success.',
      skillsTitle: 'Skills & Technologies',
      timelineTitle: 'Experience Timeline',
      // Timeline items
      timeline1: {
        year: 'Present',
        title: 'AI Research Intern',
        company: ' ',
        description: 'Worked on computer vision projects and neural network optimization'
      },
      timeline2: {
        year: '2023',
        title: 'Machine Learning Course',
        company: ' ',
        description:
          'Completed a comprehensive ML specialization with a focus on practical applications'
      },
      timeline3: {
        year: '2022',
        title: 'Artificial Intelligence Student',
        company: 'University',
        description:
          'Began focusing on AI and machine learning fundamentals'
      }
    },
    // Contact
    contact: {
      title: 'Get in Touch',
      subtitle:
        "I'm always open to discussing new opportunities, collaborations, or simply chatting about AI",
      emailTitle: 'Send Email',
      emailDesc: 'Drop me a line for any inquiries or collaborations',
      githubTitle: 'GitHub',
      githubDesc: 'Check out my projects and contributions',
      responseTime: 'Response time: Usually within 24 hours'
    },
    // Footer
    footer: {
      description:
        'An aspiring AI specialist passionate about building innovative solutions and exploring the frontiers of artificial intelligence.',
      copyright: 'All rights reserved.',
      builtWith: 'Built with React, Vite, TailwindCSS & Framer Motion'
    }
  },

  vi: {
    // Navbar
    nav: {
      home: 'Trang chủ',
      about: 'Giới thiệu',
      projects: 'Dự án',
      contact: 'Liên hệ',
      getInTouch: 'Liên hệ ngay'
    },
    // Hero
    hero: {
      greeting: 'Xin chào, tôi là',
      name: 'Thanh Toàn',
      title: 'Chuyên gia AI tương lai',
      description: 'Đam mê trí tuệ nhân tạo và xây dựng các giải pháp sáng tạo tạo ra tác động tích cực.',
      viewWork: 'Xem dự án',
      downloadCV: 'Tải CV'
    },
    // Projects
    projects: {
      title: 'Dự án nổi bật',
      subtitle: 'Khám phá sự giao thoa giữa AI, machine learning và các ứng dụng thực tế',
      demo: 'Demo',
      code: 'Mã nguồn',
      // Project content
      project1: {
        title: 'Món gì đây?',
        description: 'Phát triển một ứng dụng AI hoàn chỉnh, kết hợp thị giác máy tính và AI tạo sinh để mang lại trải nghiệm nấu ăn sáng tạo cho người dùng. Ứng dụng nhận diện nguyên liệu từ hình ảnh và đề xuất công thức nấu ăn độc đáo dựa trên các nguyên liệu đó.'
      },
      project2: {
        title: 'Ai Agent Meeting',
        description: 'Xây dựng một hệ thống AI đa tác nhân tự trị, sử dụng framework CrewAI để tự động hóa toàn diện quy trình chuẩn bị, thực thi và phân tích sau cuộc họp.'
      },
      project3: {
        title: 'Nhận dạng cảm xúc văn bản tiếng Việt',
        description: 'Nghiên cứu và triển khai mô hình học sâu để phân tích và nhận diện cảm xúc (tích cực, tiêu cực, trung tính) trong các đoạn văn bản tiếng Việt. Sử dụng LSTM để xử lý chuỗi và cải thiện độ chính xác phân loại cảm xúc.'
      },
      project4: {
        title: 'Hệ thống nhận diện sản phẩm trong siêu thị',
        description: 'Phát triển một hệ thống thị giác máy tính có khả năng tự động nhận diện và phân loại các sản phẩm trên kệ hàng, hướng tới ứng dụng trong quản lý tồn kho và thanh toán tự động.'
      },
      project5: {
        title: 'Phân loại thư rác',
        description: 'Xây dựng một mô hình học sâu để tự động phân tích nội dung email và lọc các thư không mong muốn, nâng cao hiệu quả và bảo mật cho người dùng.'
      },
      project6: {
        title: 'Agent Bot Discord',
        description: 'Xây dựng một bot Discord sử dụng AI để tự động hóa các tác vụ và cung cấp thông tin hữu ích cho người dùng. Thay vì nhớ những câu lệnh phức tạp, người dùng có thể giao tiếp với bot bằng ngôn ngữ tự nhiên.'
      }
    },
    // About
    about: {
      title: 'Về tôi',
      subtitle: 'Đam mê việc ứng dụng AI để giải quyết các vấn đề thực tế và tạo ra tác động có ý nghĩa',
      myJourney: 'Hành trình của tôi',
      bio1: 'Tôi hiện là sinh viên năm cuối ngành Công nghệ Thông tin với định hướng sự nghiệp rõ ràng là trở thành một Chuyên viên Trí tuệ Nhân tạo (AI Specialist). Niềm đam mê của tôi nằm ở việc ứng dụng các thuật toán thông minh để giải quyết những bài toán phức tạp trong thực tế.',
      bio2: 'Tôi mong muốn được làm việc trong một môi trường chuyên nghiệp, nơi tôi có thể áp dụng kiến thức của mình để tham gia phát triển các sản phẩm AI đột phá. Tôi luôn sẵn sàng học hỏi những công nghệ mới và không ngừng nâng cao kỹ năng để đóng góp vào sự thành công của tổ chức.',
      skillsTitle: 'Kỹ năng & Công nghệ',
      timelineTitle: 'Lịch sử kinh nghiệm',
      // Timeline items
      timeline1: {
        year: 'Hiện tại',
        title: 'Thực tập sinh Nghiên cứu AI',
        company: ' ',
        description: 'Làm việc trên các dự án computer vision và tối ưu hóa mạng neural'
      },
      timeline2: {
        year: '2023',
        title: 'Khóa học Machine Learning',
        company: ' ',
        description: 'Hoàn thành chuyên ngành ML toàn diện với trọng tâm vào ứng dụng thực tế'
      },
      timeline3: {
        year: '2022',
        title: 'Sinh viên Trí tuệ Nhân tạo',
        company: 'Đại học',
        description: 'Bắt đầu tập trung vào các nguyên tắc cơ bản của AI và machine learning'
      }
    },
    // Contact
    contact: {
      title: 'Liên hệ',
      subtitle: 'Tôi luôn sẵn sàng thảo luận về các cơ hội mới, hợp tác hoặc chỉ đơn giản là trò chuyện về AI',
      emailTitle: 'Gửi Email',
      emailDesc: 'Liên hệ với tôi cho bất kỳ câu hỏi hoặc hợp tác nào',
      githubTitle: 'GitHub',
      githubDesc: 'Xem các dự án và đóng góp của tôi',
      responseTime: 'Thời gian phản hồi: Thường trong vòng 24 giờ'
    },
    },
    // Footer
    footer: {
      description: 'Chuyên gia AI tương lai đam mê xây dựng các giải pháp sáng tạo và khám phá những ranh giới của trí tuệ nhân tạo.',
      copyright: 'Bảo lưu mọi quyền.',
      builtWith: 'Được xây dựng với React, Vite, TailwindCSS & Framer Motion'
    }
};

export const LanguageProvider = ({ children }) => {
  const [language, setLanguage] = useState('vi');

  const toggleLanguage = () => {
    setLanguage(prev => prev === 'en' ? 'vi' : 'en');
  };

  const t = (key) => {
    const keys = key.split('.');
    let value = translations[language];
    
    for (const k of keys) {
      value = value?.[k];
    }
    
    return value || key;
  };

  return (
    <LanguageContext.Provider value={{ language, toggleLanguage, t }}>
      {children}
    </LanguageContext.Provider>
  );
};
