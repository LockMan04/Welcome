import { useState, useEffect } from 'react';
// eslint-disable-next-line no-unused-vars
import { motion, AnimatePresence } from 'framer-motion';

const AppLoader = ({ children }) => {
  // Kiểm tra xem đã load trang trước đó chưa
  const [loading, setLoading] = useState(() => {
    // Chỉ loading nếu chưa từng load trang này
    return !sessionStorage.getItem('hasLoaded');
  });
  const [progress, setProgress] = useState(0);

  useEffect(() => {
    if (!loading) return;
    
    // Đánh dấu đã load
    sessionStorage.setItem('hasLoaded', 'true');
    
    // Simulate loading process  
    const timer = setTimeout(() => {
      setLoading(false);
    }, 3000); // 3 seconds loading

    // Simulate progress
    const progressTimer = setInterval(() => {
      setProgress(prev => {
        if (prev >= 100) return 100;
        return prev + 20;
      });
    }, 600);

    return () => {
      clearTimeout(timer);
      clearInterval(progressTimer);
    };
  }, [loading]);

  return (
    <AnimatePresence mode="wait">
      {loading ? (
        <motion.div
          key="loader"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          className="fixed inset-0 bg-white z-50 flex items-center justify-center"
        >
          <div className="text-center">
            {/* Simple loading animation */}
            <div className="relative w-16 h-16 mx-auto mb-6">
              <div className="absolute inset-0 w-16 h-16 border-4 border-blue-200 rounded-full"></div>
              <div className="absolute inset-0 w-16 h-16 border-4 border-blue-500 rounded-full border-t-transparent animate-spin"></div>
            </div>

            <h2 className="text-2xl font-bold text-black mb-2">THANH TOAN</h2>
            <p className="text-gray-600 mb-6">AI Specialist Portfolio</p>

            {/* Progress bar */}
            <div className="w-64 mx-auto">
              <div className="bg-gray-200 rounded-full h-2 mb-2">
                <div 
                  className="bg-blue-500 h-2 rounded-full transition-all duration-500"
                  style={{ width: `${progress}%` }}
                />
              </div>
              <p className="text-sm text-gray-500">{progress}% Complete</p>
            </div>
          </div>
        </motion.div>
      ) : (
        <motion.div
          key="content"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.5 }}
        >
          {children}
        </motion.div>
      )}
    </AnimatePresence>
  );
};

export default AppLoader;
