'use client'
import CardMenu from "@/components/CardMenu";
import { dataMenu } from "@/data";
import { motion, useScroll } from "framer-motion";
import { useRef } from "react";



export default function menu() {

  const container = useRef(null);
  const { scrollYProgress } = useScroll({
    target: container,
    offset: ['start start', 'end end ']
  })


  return (

    <div ref={container} className="mt-[90px]   ">
      {dataMenu.map((data, i) => {
        const targetScale = 1 - ((dataMenu.length - i) * 0.05)
        return <CardMenu key={i} i={i}  {...data} progres={scrollYProgress} range={[i * 0.10, 0.9]} targetScale={targetScale} />
      })}
    </div>
  );
}
