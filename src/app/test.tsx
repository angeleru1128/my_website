import React from 'react';
import Image from "next/image";
import Link from 'next/link';

const About = () => {
  return (

<main className="flex min-h-screen flex-col items-center justify-between lg:w-3/4 p-10 mx-auto">
{/* バー */}
<div className="flex justify-end font-mono text-base lg:w-3/4">
  <div className="space-x-5 p-0">
    <Link href="/about">About</Link>
    <Link href="/publication">Publication</Link>
    <Link href="/cv">CV</Link>
    <a href="https://note.com/ayakatsutsuidesu/" target="_blank" rel="noopener noreferrer">Blog</a>
  </div>
</div>

    <div className="z-10 flex justify-end items-center font-mono text-sm lg:w-full border border-solid border-yellow-900">
        <div className="space-x-8">
        <p>aaaaaaaa</p>
        </div>
      
      <div className="z-10 flex flex-col items-center font-mono text-sm lg:w-1/2 border border-solid border-black-800 p-4">
        <p className="text-lg font-bold">PROfile</p>
      </div>
    </div>
    </main>
  );
}

export default About;