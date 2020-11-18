import React from 'react';
import { motion } from 'framer-motion';

export default function AnimatedRoute({ children, ...rest }) {
  return (
    <motion.div
      initial={{ x: 200 }}
      animate={{ x: 0 }}
      exit={{ scale: 0 }}
      //   transition={{ duration: 0.2 }}
    >
      {children}
    </motion.div>
  );
}
