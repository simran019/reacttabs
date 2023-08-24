"use client";

import Image from "next/image";
import logo from "./assets/react-logo.png";
import { useState } from "react";

export default function Home() {

  const [choice, setChoice]=useState(0);

  const content = [
    [
      "React is extremely popular",
      "It makes building complex, interactive UIs a breeze",
      "It's powerful & flexible",
      "It has a very active and versatile ecosystem"
    ],
    [
      "Components, JSX & Props",
      "State",
      "Hooks (e.g., useEffect())",
      "Dynamic rendering"
    ],
    [
      "Official web page (react.dev)",
      "Next.js (Fullstack framework)",
      "React Native (build native mobile apps with React)"
    ]
  ];

  const clickHandler=(val:number)=>{
    setChoice(val);
    
  }

  return (
    <main className="flex w-1/2 min-h-screen flex-col items-center body-[#242222]">
      <div className="header w-full flex bg-[#242222] items-center p-2 gap-2 bg-[#242222]">
        <div>
          <Image src={logo} alt="React-Logo" width="100" height="100" />
        </div>
        <div className="text-[#48d9f3]">
          <div className="text-4xl font-extrabold">React.js</div>
          <div>i.e., using the React library for rendering the UI</div>
        </div>
      </div>
      <div className="tabs w-full bg-[#242222] p-2">
        <div className="flex gap-1">
        <button 
            className="bg-gray-600 active:bg-[#48d9f3] focus:bg-[#48d9f3] focus:outline-none text-gray-200 rounded-t-md p-2"
            onClick={()=>{clickHandler(0)}}
            type="button"
            autoFocus
            >
                Why React
          </button>
            <button 
            className="bg-gray-600 active:bg-[#48d9f3] focus:bg-[#48d9f3] text-gray-200 rounded-t-md p-2"
            onClick={()=>{clickHandler(1)}}>
                Core Features
          </button>
          <button 
            className="bg-gray-600 active:bg-[#48d9f3] focus:bg-[#48d9f3] text-gray-200 rounded-t-md p-2"
            onClick={()=>{clickHandler(2)}}>
                Related Resources
          </button>
        </div>
        <div className="w-full bg-gray-300 p-2">
          <ul className="list-disc list-inside">
            {
              content[choice].map((item)=>{
                return(
                    <li className="p-2" key={item}>{item}</li>
                )
              })
            }
          </ul>
        </div>
      </div>
    </main>
  );
}
