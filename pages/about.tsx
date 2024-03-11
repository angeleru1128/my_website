import React from 'react'; 
import Image from "next/image";
import Link from 'next/link';
import "./globals.css"; 

const About = () => {
  return (
    <main className="flex min-h-screen flex-col items-center justify-between lg:w-3/4 p-10 mx-auto">
    {/* バー */}
    <div className="flex justify-end font-mono text-base lg:w-3/4">
      <div className="space-x-5 p-5">
        <Link href="/about">Home</Link>
        <Link href="/publication">Publication</Link>
        <a href="/document/AyakaTsutsui_Resume .pdf">CV</a>
      </div>
    </div>
   
    {/* パブリッシュ */}
    <Image
      className="flex justify-center"
      src="/ayakatsutsui.png"
      alt="profile2"
      width={290}
      height={290}
      priority
    />

    <div className="font-mono text-2xl lg:w-3/4 mx-auto border border-solid border-black">
  <div className="p-7 text-center">
        <p className="text-lg font-bold">Ayaka Tsutsui | 筒井 彩華 </p>
        <p className="text-sm font-bold">University of Tsukuba, Digital Nature Group</p>
        <p className="text-sm font-bold">ayakatsutsui1128@digitalnature.slis.tsukuba.ac.jp</p>
      </div>

      <div className="flex justify-center font-mono text-sm m1">
      <div className="space-x-5">
        <Link href="/about">Google Scholar</Link>
        <Link href="/about">Github</Link>
        <Link href="/publication">X</Link>
        <a href="https://note.com/ayakatsutsuidesu/" target="_blank" rel="noopener noreferrer">Blog</a>
      </div>
    </div>


    <div className="flex justify-center p-7 border border-solid border-black">
        <p className="text-lg font-bold">Educations</p>
      </div>
      <div className="flex flex-col lg:flex-row items-start">
        <div className="lg:w-11/12 p-0　">
          <p className="text-base border border-solid border-black"> aaaaaaa</p>
          <p className="text-base"> aaaaaaa</p>
          <p className="text-base"> aaaaaaa</p>
          <p className="text-base"> aaaaaaa</p>
        </div>
      </div>


      <div className="p-7 ">
        <p className="text-lg font-bold">Work Experiments</p>
      </div>
      <div className="flex flex-col lg:flex-row items-start">
        <div className="lg:w-11/12 p-0">
          <p className="text-base"> aaaaaaa</p>
          <p className="text-base"> aaaaaaa</p>
          <p className="text-base"> aaaaaaa</p>
          <p className="text-base"> aaaaaaa</p>
        </div>
      </div>

   

      <div className="p-7 ">
        <p className="text-lg font-bold">University Operations</p>
      </div>
      <div className="flex flex-col lg:flex-row items-start">
        <div className="lg:w-11/12 p-0">
          <p className="text-base"> aaaaaaa</p>
          <p className="text-base"> aaaaaaa</p>
          <p className="text-base"> aaaaaaa</p>
          <p className="text-base"> aaaaaaa</p>
        </div>
      </div>

      <div className="p-7 ">
        <p className="text-lg font-bold">Scholarships</p>
      </div>
      <div className="flex flex-col lg:flex-row items-start">
        <div className="lg:w-11/12 p-0">
          <p className="text-base"> aaaaaaa</p>
          <p className="text-base"> aaaaaaa</p>
          <p className="text-base"> aaaaaaa</p>
          <p className="text-base"> aaaaaaa</p>
        </div>
      </div>

      <div className="p-7 ">
        <p className="text-lg font-bold">Awards</p>
      </div>
      <div className="flex flex-col lg:flex-row items-start">
        <div className="lg:w-11/12 p-0">
          <p className="text-base"> aaaaaaa</p>
          <p className="text-base"> aaaaaaa</p>
          <p className="text-base"> aaaaaaa</p>
          <p className="text-base"> aaaaaaa</p>
        </div>
      </div>
      
      <div className="p-7 ">
        <p className="text-lg font-bold">Media</p>
      </div>
      <div className="flex flex-col lg:flex-row items-start">
        <div className="lg:w-11/12 p-0">
          <p className="text-base"> aaaaaaa</p>
          <p className="text-base"> aaaaaaa</p>
          <p className="text-base"> aaaaaaa</p>
          <p className="text-base"> aaaaaaa</p>
        </div>
      </div>

      <div className="p-7 ">
        <p className="text-lg font-bold">Radio</p>
      </div>
      <div className="flex flex-col lg:flex-row items-start">
        <div className="lg:w-11/12 p-0">
          <p className="text-base"> aaaaaaa</p>
          <p className="text-base"> aaaaaaa</p>
          <p className="text-base"> aaaaaaa</p>
          <p className="text-base"> aaaaaaa</p>
        </div>
      </div>

      <div className="p-7 ">
        <p className="text-lg font-bold">Others</p>
      </div>
      <div className="flex flex-col lg:flex-row items-start">
        <div className="lg:w-11/12 p-0">
          <p className="text-base"> aaaaaaa</p>
          <p className="text-base"> aaaaaaa</p>
          <p className="text-base"> aaaaaaa</p>
          <p className="text-base"> aaaaaaa</p>
        </div>
      </div>

    </div>
    



</main>
  
  );
}

export default About;
