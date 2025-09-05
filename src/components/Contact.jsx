import { motion } from 'framer-motion';
import { useLanguage } from '../contexts/LanguageContext';
import SectionHeader from './SectionHeader';

const Contact = () => {
  const { t } = useLanguage();

  return (
    <section id="contact" className="bg-gray-50 section-padding">
      <div className="container">
        <SectionHeader
          title={t('contact.title')}
          subtitle={t('contact.subtitle')}
        />

        <div className="max-w-2xl mx-auto mt-16">
          {/* Contact Methods */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="bg-white rounded-2xl shadow-lg p-8 space-y-8"
          >
            {/* Email Contact */}
            <motion.a
              href="mailto:lathanhtoan01@gmail.com"
              whileHover={{ scale: 1.02 }}
              className="block text-center p-6 border-2 border-gray-100 rounded-xl hover:border-black transition-colors cursor-pointer"
            >
              <div className="w-16 h-16 bg-black rounded-full flex items-center justify-center mx-auto mb-4">
                <svg className="w-8 h-8 text-white" fill="currentColor" viewBox="0 0 20 20">
                  <path d="M2.003 5.884L10 9.882l7.997-3.998A2 2 0 0016 4H4a2 2 0 00-1.997 1.884z" />
                  <path d="M18 8.118l-8 4-8-4V14a2 2 0 002 2h12a2 2 0 002-2V8.118z" />
                </svg>
              </div>
              <h3 className="text-xl font-bold text-black mb-2">{t('contact.emailTitle')}</h3>
              <p className="text-gray-600 mb-3">{t('contact.emailDesc')}</p>
              <p className="text-black font-semibold">lathanhtoan01@gmail.com</p>
            </motion.a>

            {/* GitHub Contact */}
            <motion.div
              whileHover={{ scale: 1.02 }}
              className="text-center p-6 border-2 border-gray-100 rounded-xl hover:border-black transition-colors cursor-pointer"
              onClick={() => window.open('https://github.com/LockMan04', '_blank')}
            >
              <div className="w-16 h-16 bg-black rounded-full flex items-center justify-center mx-auto mb-4">
                <svg className="w-8 h-8 text-white" fill="currentColor" viewBox="0 0 20 20">
                  <path fillRule="evenodd" d="M10 0C4.477 0 0 4.484 0 10.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.531 1.032 1.531 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0110 4.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.203 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.942.359.31.678.921.678 1.856 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0020 10.017C20 4.484 15.522 0 10 0z" clipRule="evenodd" />
                </svg>
              </div>
              <h3 className="text-xl font-bold text-black mb-2">{t('contact.githubTitle')}</h3>
              <p className="text-gray-600 mb-3">{t('contact.githubDesc')}</p>
              <p className="text-black font-semibold">github.com/LockMan04</p>
            </motion.div>
          </motion.div>

          {/* Additional Info */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            viewport={{ once: true }}
            className="text-center mt-8"
          >
            <p className="text-gray-600">
              {t('contact.responseTime')}
            </p>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
