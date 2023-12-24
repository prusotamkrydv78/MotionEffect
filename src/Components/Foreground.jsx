import React, { useRef, useState } from "react";
// import Card from "./Card";
import { motion } from "framer-motion";

import { FaRegFileAlt } from "react-icons/fa";
import { LuDownload } from "react-icons/lu";
import { IoIosClose } from "react-icons/io";
import Card from "./Card";
const Foreground = () => {
  const constraintsRef = useRef(null);
  const data = [
    {
      desc: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Nulla, alias?",
      filesize: "1.5mb",
      close: false,
      tag: {
        isOpen: false,
        tagTitle: "Download Now",
        tagColor: "green",
      },
    },
    {
      desc: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Nulla, alias?",
      filesize: "1.5mb",
      close: true,
      tag: {
        isOpen: true,
        tagTitle: "Download Now",
        tagColor: "green",
      },
    },
    {
      desc: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Nulla, alias?",
      filesize: "1.5mb",
      close: false,
      tag: {
        isOpen: true,
        tagTitle: "Download Now",
        tagColor: "red",
      },
    },
    {
      desc: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Nulla, alias?",
      filesize: "1.5mb",
      close: true,
      tag: {
        isOpen: false,
        tagTitle: "Download Now",
        tagColor: "green",
      },
    },
  ];
  // useState()
  return (
    <motion.div ref={constraintsRef} className=" fixed w-full z-[3] top-0 left-0 h-full bg-zinc-800/50 relative flex gap-5 flex-wrap p-5 ">
      {data.map((item, index) => {
        return (
            <Card data={item} refernce={constraintsRef} key={index}/>

        );
      })}
    </motion.div>
  );
};

export default Foreground;
