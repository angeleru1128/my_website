import React from 'react'; 
import Image from "next/image";
import Link from 'next/link';
import "./globals.css"; 

const Publication = () => {
  return (
    <main className="flex min-h-screen flex-col items-center justify-between lg:w-3/4 p-10 mx-auto">
    {/* バー */}
    <div className="flex justify-end font-mono text-base lg:w-3/4">
      <div className="space-x-5 p-5">
        <Link href="/about">Home</Link>
        <Link href="/about">About</Link>
        <a href="/document/AyakaTsutsui_Resume .pdf">CV</a>
        <a href="https://note.com/ayakatsutsuidesu/" target="_blank" rel="noopener noreferrer">Blog</a>
      </div>
    </div>
    {/* 名前 */}
    <div className="justify-start font-mono text-2xl lg:w-3/4">
      <div className="space-x-9">
        <p>Ayaka Tsutsui</p>
      </div>
    </div>

    {/* パブリッシュ */}
    <div className="font-mono text-2xl lg:w-3/4 mx-auto ">
      <div className="p-7 ">
        <p className="text-lg font-bold">Conference Papers  Peer-reviewed </p>
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
        <p className="text-lg font-bold">Demos  Peer-reviewed </p>
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
        <p className="text-lg font-bold">Video Showcase  Peer-reviewed</p>
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
        <p className="text-lg font-bold">Conference Papers  Peer-reviewed </p>
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
        <p className="text-lg font-bold">Invited</p>
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
        <p className="text-lg font-bold">Grants</p>
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
        <p className="text-lg font-bold">Patents</p>
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

export default Publication;
