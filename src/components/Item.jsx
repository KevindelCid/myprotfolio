import * as React from "react";
import { useMotionValue, Reorder } from "framer-motion";
import { useRaisedShadow } from "./use-raised-shadow";
import { motion } from "framer-motion";



export const Item = ({ item }) => {
  const y = useMotionValue(0);
  const boxShadow = useRaisedShadow(y);
console.log(item)
  return (
    <Reorder.Item value={item} id={item.id} style={{ boxShadow, y }}>
      <motion.img 
      className='technology-img' src={item?.png} alt={item?.name}
      whileHover={{
        rotate: 360,
        transition: { duration: .3 },
      }}
     
      
     animate={{ y: [item.id*-100, 10, 0], x: [item.id*10, 10, 0] }}
     transition={{ easeOut: "ease", duration: item.id/3 }}
      />
    </Reorder.Item>
  );
};
