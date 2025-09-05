import { motion } from 'framer-motion';
import { useLanguage } from '../contexts/LanguageContext';
import SectionHeader from './SectionHeader';

const About = () => {
  const { t } = useLanguage();
  const skills = [
    "Python", "TensorFlow", "PyTorch", "Scikit-learn", "Pandas", "NumPy",
    "JavaScript", "React", "Node.js", "SQL", "Docker", "Git",
    "Machine Learning", "Deep Learning", "Computer Vision", "NLP", "Data Analysis",
    "Model Deployment", "Data Visualization", "And more..."
  ];

  const timeline = [
    {
      year: t('about.timeline1.year'),
      title: t('about.timeline1.title'),
      company: t('about.timeline1.company'),
      description: t('about.timeline1.description')
    },
    {
      year: t('about.timeline2.year'),
      title: t('about.timeline2.title'),
      company: t('about.timeline2.company'),
      description: t('about.timeline2.description')
    },
    {
      year: t('about.timeline3.year'),
      title: t('about.timeline3.title'),
      company: t('about.timeline3.company'),
      description: t('about.timeline3.description')
    }
  ];

  return (
    <section id="about" className="bg-white section-padding">
      <div className="container">
        <SectionHeader
          title={t('about.title')}
          subtitle={t('about.subtitle')}
        />

        <div className="grid lg:grid-cols-2 gap-16 mt-16">
          {/* Bio Section */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="space-y-6"
          >
            <h3 className="text-2xl font-semibold text-black mb-4">{t('about.myJourney')}</h3>
            <p className="text-gray-700 leading-relaxed text-lg">
              {t('about.bio1')}
            </p>
            <p className="text-gray-700 leading-relaxed text-lg">
              {t('about.bio2')}
            </p>

            {/* Skills */}
            <div className="pt-6">
              <h4 className="text-xl font-semibold text-black mb-4">{t('about.skillsTitle')}</h4>
              <div className="flex flex-wrap gap-3">
                {skills.map((skill, index) => (
                  <motion.span
                    key={skill}
                    initial={{ opacity: 0, scale: 0.8 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    transition={{ duration: 0.3, delay: index * 0.05 }}
                    viewport={{ once: true }}
                    className="bg-gray-100 text-gray-800 px-4 py-2 rounded-full text-sm font-medium 
                             hover:bg-gray-200 transition-colors cursor-default"
                  >
                    {skill}
                  </motion.span>
                ))}
              </div>
            </div>
          </motion.div>

          {/* Timeline Section */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            viewport={{ once: true }}
            className="space-y-6"
          >
            <h3 className="text-2xl font-semibold text-black mb-6">{t('about.timelineTitle')}</h3>
            <div className="space-y-8">
              {timeline.map((item, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  viewport={{ once: true }}
                  className="relative pl-8 border-l-2 border-gray-200 last:border-l-0"
                >
                  <div className="absolute -left-2 top-0 w-4 h-4 bg-black rounded-full"></div>
                  <div className="space-y-2">
                    <div className="flex items-center gap-3">
                      <span className="bg-black text-white px-3 py-1 rounded-full text-sm font-medium">
                        {item.year}
                      </span>
                    </div>
                    <h4 className="text-lg font-semibold text-black">{item.title}</h4>
                    <p className="text-gray-600 font-medium">{item.company}</p>
                    <p className="text-gray-700 leading-relaxed">{item.description}</p>
                  </div>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default About;
