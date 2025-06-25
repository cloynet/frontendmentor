import Image from "next/image";
import Link from "next/link";

import memory from "@/assets/images/icon-memory.svg"
import reaction from "@/assets/images/icon-reaction.svg"
import verbal from "@/assets/images/icon-verbal.svg"
import visual from "@/assets/images/icon-visual.svg"


export default function Home() {
  return (
    <div className="min-h-screen flex items-center justify-center">
      
      <div className="flex flex-col md:flex-row md:w-full md:max-w-4xl">

      <div className="md:w-1/2 text-center px-6 rounded-br-4xl rounded-bl-4xl md:rounded-4xl shadow-xl flex flex-col items-center space-y-6 py-3 md:py-16 z-10 "
      style={{ backgroundImage: ('linear-gradient(var(--lightslate), var(--lightroyal))') }}>
        <h1 className="text-lg md:text-2xl text-white/80 mt-2">Your Result</h1>
        
        <h2 
        style={{ backgroundImage: ('linear-gradient(var(--violateblue), var(--persianblue))') }}
        className="w-40 h-40 rounded-full flex flex-col items-center justify-center mx-auto shadow-lg">
          <span className="text-5xl font-extrabold text-white">76 </span>
          <span className="text-lg text-white/50 mt-1">of 100</span>
          </h2>

        <h3 className="text-3xl text-white">Great</h3>
        <p className="text-white/60 px-4 -mt-2">You scored higher than 65% of the people who have taken these tests.</p>
      </div>

      <div className="md:w-1/2 bg-white md:rounded-tr-4xl shadow-xl flex flex-col space-y-6 pl-13 pr-6 py-[54.5px] md:py-16 z-0 md:-ml-6 -mt-12 md:-mt-0">
        <h1 className="text-lg md:text-2xl font-bold">Summary</h1>

        <ul className="flex flex-col gap-4">
          <li 
          style={{ backgroundColor: 'rgba(var(--lightred), 0.1)' }}
          className="flex justify-between p-3 rounded-xl">
            
              <span className="flex items-center gap-3">
              <Image
              src={reaction}
              alt="reaction"
              width={20}
              height={20}
              />
              <p style={{ color: 'rgba(var(--lightred))' }}>Reaction</p>
              </span>
            
              <p><strong>80</strong> / 100</p>
          </li>

          <li 
          style={{ backgroundColor: 'rgba(var(--orangeyellow),0.1)' }}
          className="flex justify-between p-3 rounded-xl">
            <span className="flex items-center gap-3">
              <Image
              src={memory}
              alt="memory"
              width={20}
              height={20}
              />
              <p style={{ color: 'rgba(var(--orangeyellow))'}}>Memory</p>
            </span>
            <p><strong>92</strong> / 100</p>
          </li>

          <li 
          style={{ backgroundColor: 'rgba(var(--greenteal),0.1)' }}
          className="flex justify-between p-3 rounded-xl">
            <span className="flex items-center gap-3">
              <Image
              src={verbal}
              alt="verbal"
              width={20}
              height={20}
              />
            <p style={{ color: 'rgba(var(--greenteal))' }}>Verbal</p>
            </span>
            <p><strong>61</strong> / 100</p>
          </li>

          <li 
          style={{ backgroundColor: 'rgba(var(--cobaltblue),0.1)' }}
          className="flex justify-between p-3 rounded-xl">
            <span className="flex items-center gap-3">
              <Image
              src={visual}
              alt="visual"
              width={20}
              height={20}
              />
            <p style={{ color: 'rgba(var(--cobaltblue))'}}>Visual</p>
            </span>
            <p><strong>72</strong> / 100</p>
          </li>

        </ul>      

          <Link
          href='#'
          className="mt-2 md:mt-6 block py-4 text-white rounded-4xl text-center btnHover"
          >Continue</Link>   
      </div>

      </div>

    </div>
  );
}
