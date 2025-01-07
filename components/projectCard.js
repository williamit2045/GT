import { motion } from "framer-motion";
import Link from "next/link";

const ProjectCard = ({ title, description, Icon, status, color, link }) => (
  <Link href={link}>
    <motion.div
      whileHover={{ scale: 1.05 }}
      whileTap={{ scale: 0.98 }}
      className="bg-gradient-to-br from-gray-800 via-gray-700 to-gray-600 rounded-xl p-6 border border-gray-500 shadow-lg hover:shadow-xl transition-shadow duration-300 cursor-pointer flex flex-col justify-between h-[62.5%] min-h-[300px] max-h-[600px]"
    >
      <div className="flex items-center space-x-4">
        {Icon && <Icon className="h-10 w-10 text-primary-500 animate-pulse" />}
        <div>
          <h3 className="text-xl font-semibold text-white">{title}</h3>
          <span className={`text-sm ${color}`}>{status}</span>
        </div>
      </div>
      <p className="text-gray-300 mt-4 flex-grow">{description}</p>
    </motion.div>
  </Link>
);

export default ProjectCard;
