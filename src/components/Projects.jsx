import ProjectCard from './ProjectCard';
import SectionHeader from './SectionHeader';
import { useLanguage } from '../contexts/LanguageContext';

const Projects = () => {
  const { t } = useLanguage();
  
  const projects = [
    {
      // Món gì đây?
      title: t('projects.project1.title'),
      description: t('projects.project1.description'),
      tags: ["Python", "Computer Vision", "Generative AI", "TensorFlow/PyTorch", "React", "API"],
      demoUrl: "https://lockman04.github.io/SavoryAI/",
      codeUrl: "https://github.com/LockMan04/SavoryAI",
      image: '/images/project1.png'
    },
    {
      // Ai Agent Meeting
      title: t('projects.project2.title'),
      description: t('projects.project2.description'),
      tags: ["Python", "CrewAI", "Large Language Models (LLMs)", "LangChain", "Automation"],
      demoUrl: null,
      codeUrl: "https://github.com/LockMan04/AIAgentMeeting",
      image: "/images/project2.png"
    },
    {
      // Nhận dạng cảm xúc văn bản tiếng Việt
      title: t('projects.project3.title'),
      description: t('projects.project3.description'),
      tags: ["Python", "NLP", "LSTM", "TensorFlow/Keras", "Scikit-learn"],
      demoUrl: null,
      codeUrl: null,
      image: "/images/project3.png"
    },
    {
      // Hệ thống nhận diện sản phẩm trong siêu thị
      title: t('projects.project4.title'),
      description: t('projects.project4.description'),
      tags: ["Python", "TensorFlow/PyTorch", "OpenCV", "CNNs", "Computer Vision"],
      demoUrl: null,
      codeUrl: null,
      image: "/images/project4.png"
    },
    {
      // Phân loại thư rác
      title: t('projects.project5.title'),
      description: t('projects.project5.description'),
      tags: ["Python", "NLP", "TensorFlow/Keras", "Scikit-learn", "Pandas"],
      demoUrl: null,
      codeUrl: null,
      image: "/images/project5.png"
    },
    {
      // Agent Bot Discord
      title: t('projects.project6.title'),
      description: t('projects.project6.description'),
      tags: ["Python", "Discord API", "Natural Language Processing", "AI", "Agent"],
      demoUrl: null,
      codeUrl: "https://github.com/LockMan04/BotDiscord",
      image: "/images/project6.png"
    }
  ];

  return (
    <section id="projects" className="bg-gray-50 section-padding">
      <div className="container">
        <SectionHeader
          title={t('projects.title')}
          subtitle={t('projects.subtitle')}
        />
        
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mt-12 items-stretch">
          {projects.map((project, index) => (
            <ProjectCard
              key={index}
              project={project}
              index={index}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;
