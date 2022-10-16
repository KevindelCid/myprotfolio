import react, { useState } from "react";
import { useMotionValue, Reorder } from "framer-motion";
import { useRaisedShadow } from "./use-raised-shadow";
import { motion } from "framer-motion";

export const Item = ({ item }) => {
  const y = useMotionValue(0);
  const [grayFilter, setGrayFilter] = useState("gray-scale-filter");

  const boxShadow = useRaisedShadow(y);
  console.log(item);
  return (
    // <Reorder.Item value={item} id={item.id} style={{ boxShadow, y }}>
    <motion.div
      className="item-container"
      drag
      dragConstraints={{
        top: -45,
        left: -20,
        right: 20,
        bottom: 160,
      }}
    >
      <motion.img
        className={`technology-img ${grayFilter}`}
        onHoverStart={() => setGrayFilter("normal-filer")}
        onHoverEnd={() => setGrayFilter("gray-scale-filter")}
        src={item?.png}
        alt={item?.name}
        whileHover={{
          rotate: 360,
          transition: { duration: 0.3 },
        }}
        animate={{
          y: [item.id * -100, 55],
          x: [item.id * 10, 10, 0],
        }}
        transition={{ easeOut: "ease", duration: item.id / 3 }}
      />

      <motion.p animate={{ y: [item.id * -100, 55] }}>
        <span className=" gradiant-effect-for-text1 normalize-medium-text">
          {item.exp.substring(0, 2)}
        </span>
        {item.exp.substring(2)}
      </motion.p>
    </motion.div>
    // </Reorder.Item>
  );
};
