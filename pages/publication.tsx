import React from 'react'; 
import Image from "next/image";
import Link from 'next/link';
import "./globals.css"; 

const Publication = () => {
  return ( 
  <main className="flex min-h-screen flex-col items-center  lg:w-3/4 p-10 mx-auto">
  {/* バー */}
  <div className="flex justify-end font-mono text-base lg:w-3/4">
    <div className="space-x-5 p-5">
      <a href="https://ayakatsutsuidesu.com/">Home</a>
      <Link href="/about">About</Link>
       <Link href="/publication">Publication</Link>
      <a href="/document/AyakaTsutsui_Resume .pdf">CV</a>
    </div>
  </div>

    <div className="">
        <p className="text-lg font-bold">Demos  Peer-reviewed</p>
    </div>

<div className="flex justify-end font-mono text-base p-3">
  <p className="text-base">[1] Kengo Tanaka, Tatsuki Fushimi, Ayaka Tsutsui , and Yoichi Ochiai. “Text to Haptics: Method and
  Case Studies of Designing Tactile Graphics for Inclusive Tactile Picture Books by Digital Fabrication and
  Generative AI”, In Special Interest Group on Computer Graphics and Interactive Techniques Conference
  Labs (SIGGRAPH ’23 Labs), August 06–10, 2023, Los Angeles, CA, USA. ACM, New York, NY, USA 2
  Pages. https://doi.org/10.1145/3588029.3595471</p>
</div>

</main>
);
}

export default Publication;
