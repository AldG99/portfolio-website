import { motion } from "framer-motion";
import { useState } from "react";

const Test = () => {
  const [open, setOpen] = useState(false);

  const variants = {
    visible: (i) => ({
      opacity: 1,
      x: 100,
      transition: { delay: i * 0.3 },
    }),
    hidden: { opacity: 0 },
  };

  const items = ["item1", "item2", "item3", "item4"];

  return (
    <div className="course">
      <motion.ul initial="hidden" animate="visible">
        {items.map((item, i) => (
          <motion.li
            variants={variants}
            custom={i}
            key={item}
            initial="hidden"
            animate="visible"
          >
            {item}
          </motion.li>
        ))}
      </motion.ul>
    </div>
  );
};

export default Test;
