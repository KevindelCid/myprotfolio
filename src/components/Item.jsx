import * as React from "react";
import { useMotionValue, Reorder } from "framer-motion";
import { useRaisedShadow } from "./use-raised-shadow";



export const Item = ({ item }) => {
  const y = useMotionValue(0);
  const boxShadow = useRaisedShadow(y);
console.log(item)
  return (
    <Reorder.Item value={item} id={item.id} style={{ boxShadow, y }}>
      <img className='technology-img' src={item?.png} alt={item?.name} />
    </Reorder.Item>
  );
};
