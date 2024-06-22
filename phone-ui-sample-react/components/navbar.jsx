"use client";

import {Menu, X} from "lucide-react";
import {motion, AnimatePresence} from "framer-motion";
import {navLinks} from "@/constants";
import {useState} from "react";
import Link from "next/link";
import Button from "@/components/button";

export default function NavBar() {
  let [showMenu, setShowMenu] = useState(false);

  return (
    <nav className="bg-white border-black/10 border-b layout justify-around w-full sticky top-0 gap-0 mb-6 py-5 z-10">
      <Link href={"/"} className="layout hover:opacity-80 transition-all p-0">
        <h3>Phone UI sample</h3>
      </Link>

      <div className="hidden lg:flex justify-center gap-3">
        <ul className="flex justify-center items-center mx-auto gap-3">
          {navLinks.map((map) => <Link href={map.href} key={map.key}><Button buttonClass={"btn-hidden"}>{map.label}</Button></Link>)}
        </ul>

        <Link href={"/license"}>
          <Button buttonClass={"btn bg-green-200 text-green-500"}>license</Button>
        </Link>
      </div>

      <AnimatePresence>
        {showMenu &&
          <motion.div initial={{opacity:0}} animate={{opacity:1}} exit={{opacity:0}} className="bg-white layout lg:hidden h-full w-full fixed inset-0 p-0 z-10">
            <motion.div initial={{scale:0.9, opacity:0}} animate={{scale:1, opacity:1}} exit={{scale:0.9, opacity:0}} className="flex flex-col justify-center justify-items-center items-start text-left h-full">
              {navLinks.map((map) => <Link href={map.href} key={map.key} className="my-3 btn-text"><h2>{map.label}</h2></Link>)}
              <Link href={"/license"}>
                <Button buttonClass={"btn bg-green-200 text-green-500 mt-6"}>Book a call</Button>
              </Link>
            </motion.div>
          </motion.div>
        }
      </AnimatePresence>


      <Button buttonClass={'z-20 lg:hidden'} buttonOnClick={() => setShowMenu(showMenu =! showMenu)}>
        {showMenu ? <X/> : <Menu/>}
      </Button>
    </nav>
  );
}
