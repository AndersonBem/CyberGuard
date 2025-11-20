// componentes/PageTransition/PageTransition.jsx
import { motion } from "framer-motion";

export default function PageTransition({ children, fromFooter = false }) {
  const defaultVariants = {
    initial: { opacity: 0, x: 20 },
    animate: { opacity: 1, x: 0 },
    exit: { opacity: 0, x: -20 },
  };

  const footerVariants = {
    initial: { opacity: 0, y: 60 },
    animate: { opacity: 1, y: 0 },
    exit: { opacity: 0, y: 60 },
  };

  const variants = fromFooter ? footerVariants : defaultVariants;

  return (
    <motion.div
      initial={variants.initial}
      animate={variants.animate}
      exit={variants.exit}
      transition={{ duration: 0.3 }}
      style={{ height: "100%" }}
    >
      {children}
    </motion.div>
  );
}
