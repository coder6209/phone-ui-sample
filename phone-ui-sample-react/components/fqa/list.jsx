"use client";

import {PlusIcon, MinusIcon} from "lucide-react";
import {motion, AnimatePresence} from "framer-motion";
import {useState} from "react";
import Link from "next/link";
import Button from "@/components/button";

export default function FQAList({title, text}) {
  let [show, setShow] = useState(false);

  return (
    <div className="flex flex-col justify-center items-center justify-items-center w-full max-w-none sm:max-w-md md:max-w-lg">
      <div className="border-black/10 border-b flex justify-between items-center w-full p-4"><h3>{title}</h3> <button onClick={() => setShow(show = !show)} className="btn-text">{show ? <MinusIcon/> : <PlusIcon/>}</button></div>
      {show && <p className="text-left w-full p-4">{text}</p>}
    </div>
  );
}
