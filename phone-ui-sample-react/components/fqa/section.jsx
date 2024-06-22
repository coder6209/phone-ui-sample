"use client";

import {fqa} from "@/constants";
import {useState} from "react";
import FQAList from "./list";

export default function FQASection() {
  let [show, setShow] = useState(false);

  return (
    <div className="section">
      <div className="layout flex-col mb-3 gap-0 p-0">
        <h3 className="uppercase">FAQs</h3>
        <p className="max-w-md text-center px-6">All what you need to know.</p>
      </div>

      {fqa.map((map) => <FQAList key={map.key} title={map.title} text={map.text}/>)}
    </div>
  );
}
