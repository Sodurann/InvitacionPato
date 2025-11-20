import { motion } from 'framer-motion';
import InvitationCard from '../components/invitationcard';

export const invitationPage = () => {
  return (
    <motion.div
      className="invitation-bg"
      initial={{ opacity: 0, y: 50 }} 
      animate={{ opacity: 1, y: 0 }}   
      exit={{ opacity: 0, y: -50 }}    
      transition={{ duration: 0.5 }}
    >
     <InvitationCard/>
    </motion.div>
  );
};