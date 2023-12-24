import React from "react";
import { FaRegFileAlt } from "react-icons/fa";
import { LuDownload } from "react-icons/lu";
import { IoIosClose } from "react-icons/io";
import { motion } from "framer-motion";
const Card = ({ data, refernce }) => {
  return (
    <motion.div
      drag
      dragConstraints={refernce}
      whileDrag={{
        scale: 1.1,
        boxShadow: "0px 0px 4px 2px rgb(223, 255, 174,0.5)",
      }}
      whileHover={{
        scale: 1.051,
        transition: { duration: 0.3 },
      }}
      className="relative w-60 h-72 bg-zinc-900/90 rounded-[25px] p-5 text-white overflow-hidden flex-shirnk-0"
    >
      <FaRegFileAlt />
      <p className="text-sm leading-tight mt-5 font-semibold">{data.desc}</p>
      <div className="footer absolute bottom-0 w-full left-0 over">
        <div className="flex items-center justify-between mb-5 px-5">
          <h5>{data.filesize}</h5>
          <span className="w-6 h-6  rounded-full flex items-center justify-center bg-sky-500">
            {data.close ? (
              <IoIosClose />
            ) : (
              <LuDownload size={15} color="black" />
            )}
          </span>
        </div>
        {data.tag.isOpen && (
          <div
            className={`tag w-full bg-green-600 py-4 h-10 flex justify-center items-center`}
          >
            <h3 className="text-sm font-samibold">{data.tag.tagTitle} </h3>
          </div>
        )}
      </div>
    </motion.div>
  );
};

export default Card;
