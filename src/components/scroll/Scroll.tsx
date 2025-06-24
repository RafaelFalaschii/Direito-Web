// FadeInOnScroll.tsx
import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";

interface Props {
  children: React.ReactNode;
}

export const FadeInOnScroll: React.FC<Props> = ({ children }) => {
  const { ref, inView } = useInView({
    triggerOnce: false, 
    threshold: 0.2,    
  });

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 100 }}
      animate={inView ? { opacity: 1, y: 0 } : {}} 
      transition={{ duration: 0.6, ease: "easeOut" }}
      className="mb-10"
    >
      {children}
    </motion.div>
  );
};