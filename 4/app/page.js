'use client';
import React, { useState } from "react";
import Image from "next/image";

import star from "@/assets/images/icon-star.svg"
import plus from "@/assets/images/icon-plus.svg"
import minus from "@/assets/images/icon-minus.svg"
import bgDesktop from "@/assets/images/background-pattern-desktop.svg"
import bgMobile from "@/assets/images/background-pattern-mobile.svg"

const faqItems = [
  {
    question: "What is Frontend Mentor, and how will it help me?",
    answer:   "Frontend Mentor offers realistic coding challenges to help developers improve their frontend coding skills with projects in HTML, CSS, and JavaScript. Its suitable for all levels and ideal for portfolio building."
  },
  {
    question: "Is Frontend Mentor free?",
    answer: "Yes, Frontend Mentor offers both free and premium coding challenges, with the free option providing access to a range of projects suitable for all skill levels."
  },
  {
    question: "Can I use Frontend Mentor projects in my portfolio?",
    answer: "Yes, you can use projects completed on Frontend Mentor in your portfolio. It's an excellent way to showcase your skills to potential employers!"
  },
  {
    question: "How can I get help if I'm stuck on a Frontend Mentor challenge?",
    answer: "The best place to get help is inside Frontend Mentor's Discord community. There's a help  channel where you can ask questions and seek support from other community members."
  }
]

export default function Home() {
  const [openIndex, setOpenIndex] = useState(null);

  const toggleIndex = (index) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <div className="relative">
      <div className="hidden md:block">
        <Image
        src={bgDesktop}
        alt="bgDesktop"
        width={1140}
        height={320}
        style={{ width: '100%' }}
        />
      </div>

      <div className="md:hidden">
        <Image
        src={bgMobile}
        alt="bgMobile"
        width={375}
        height={232}
        style={{ width: '100%' }}
        />
      </div>
      
      <div className="absolute left-1/2 -translate-x-1/2 rounded-2xl bg-white w-full max-w-[330px] md:max-w-[700px] p-7 md:p-9 -mt-30 md:-mt-25">

          <div className="flex gap-4">
          <Image
        src={star}
        alt="star"
        width={40}
        height={40}
        />
        <h1 className="text-3xl md:text-5xl font-bold">FAQs</h1>
          </div>

          {faqItems.map((item, index) =>(
            <div key={index} 
            className={`mt-6 ${index !== faqItems.length - 1 ? 'border-b border-gray-200' : ''}`}
            >
              <button
              onClick={() => toggleIndex(index)}
              className="flex justify-between md:justify-between w-full items-center btnHover cursor-pointer py-2 md:py-3">
                <h2 className="font-bold text-md md:text-lg text-left">
                  {item.question}
                </h2>
                <div className="flex-shrink-0 ml-6 md:ml-0"> 
                  <Image 
                  src={openIndex === index ? minus : plus } 
                  alt={openIndex === index ? "minus" : "plus" } 
                  width={30}
                  height={30}
                  
                  />
                </div>
              </button>

              {openIndex === index && (
                <p className="text-sm md:text-md mb-3 text-gray-500">
                  {item.answer}
                </p>
              )}

            </div>
          ))}

      </div>
    </div>
  );
}
