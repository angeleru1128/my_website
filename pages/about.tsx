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

    <div className="font-mono text-2xl lg:w-3/4 mx-auto">
      <div className="p-1 text-center">
        <p className="text-2lg font-bold">Ayaka Tsutsui | 筒井 彩華 </p>
        <p className="text-sm font-bold">University of Tsukuba, Digital Nature Group</p>
        <p className="text-sm font-bold">ayakatsutsui1128@digitalnature.slis.tsukuba.ac.jp</p>
      </div>

      <div className="flex justify-center font-mono text-sm m1">
      <div className="space-x-5">
        <a href="https://scholar.google.co.jp/citations?hl=ja&user=X8KCWFUAAAAJ&view_op=list_works&sortby=title" target="_blank" rel="noopener noreferrer">Google Scholar</a>
        <a href="https://github.com/angeleru1128" target="_blank" rel="noopener noreferrer">Github</a>
        <a href="https://www.linkedin.com/in/ayaka-tsutsui-a34637187/?originalSubdomain=jp" target="_blank" rel="noopener noreferrer">LinkedIn</a>
        <a href="https://twitter.com/angel_eru1128" target="_blank" rel="noopener noreferrer">X</a>
        <a href="https://note.com/ayakatsutsuidesu/" target="_blank" rel="noopener noreferrer">Blog</a>
      </div>
    </div>

    {/* Educations */}
    <div className="h-0.5 bg-black"></div>

    <div className="flex justify-center p-7">
        <p className="text-lg font-bold">Educations</p>
    </div>

    <div className="flex justify-center items-center p-4">
      <div className="flex lg:w-11/12">
        <div className="w-1/4 p-0">
          <p className="text-base">2023-2025</p>
        </div>
        <div className="w-3/4">
          <p className="text-base text-right">University of Tsukuba, Japan</p>
          <p className="text-base text-right">Master Programs in Informatics,</p>
          <p className="text-base text-right">Graduate School of Comprehensive Human Sciences</p>
          <p className="text-sm text-right">Supervisor: Yoichi Ochiai and Tatsuki Fushimi</p>
        </div>
      </div>
    </div>

    <div className="flex justify-center items-center p-4 ">
      <div className="flex lg:w-11/12 ">
        <div className="w-1/4 p-0">
          <p className="text-base">2021-2023</p>
        </div>
        <div className="w-3/4 ">
          <p className="text-base text-right">University of Tsukuba, Japan</p>
          <p className="text-base text-right">College of Knowledge and Library Sciences,</p>
          <p className="text-base text-right">School of Informatics, Knowledge Information Systems</p>
          <p className="text-sm text-right">Supervisor: Yoichi Ochiai and Tatsuki Fushimi</p>
        </div>
      </div>
    </div>

    <div className="flex justify-center items-center p-4">
      <div className="flex lg:w-11/12 ">
        <div className="w-1/4 p-0">
          <p className="text-base">2014-2016</p>
        </div>
        <div className="w-3/4 ">
          <p className="text-base text-right">Japan College of Foreign Language</p>
          <p className="text-base text-right">(diploma)</p>
        </div>
      </div>
    </div>

    <div className="h-0.5 bg-black"></div>

{/* work experiment */}
<div className="flex justify-center p-7">
  <p className="text-lg font-bold">Work Experiment</p>
</div>

<div className="flex justify-center items-center p-4">
      <div className="flex lg:w-11/12">
        <div className="w-1/4 p-0">
          <p className="text-base">2022-2023</p>
        </div>
        <div className="w-3/4">
          <p className="text-base text-right">Panda CO., LTD.,</p>
          <p className="text-sm text-right">Intern</p>
        </div>
      </div>
</div>

<div className="flex justify-center items-center p-4">
      <div className="flex lg:w-11/12">
        <div className="w-1/4 p-0">
          <p className="text-base">2019-2020</p>
        </div>
        <div className="w-3/4">
          <p className="text-base text-right">China Airline CO., LTD.,</p>
          <p className="text-base text-right">Flight Attentdant</p>
          <p className="text-sm text-right">Full Time</p>
        </div>
      </div>
</div>

<div className="flex justify-center items-center p-4">
      <div className="flex lg:w-11/12">
        <div className="w-1/4 p-0">
          <p className="text-base">2016-2019</p>
        </div>
        <div className="w-3/4">
          <p className="text-base text-right">ALL NIPPON AIRWAYS CO., LTD.,</p>
          <p className="text-base text-right">Flight Attentdant</p>
          <p className="text-sm text-right">Full Time</p>
        </div>
      </div>
</div>

<div className="h-0.5 bg-black"></div>

{/* University Operations */}
      <div className="flex justify-center p-7">
        <p className="text-lg font-bold">University Operations</p>
      </div>

      <div className="flex justify-center items-center p-4">
        <div className="flex lg:w-11/12">
          <div className="w-1/4 p-0">
            <p className="text-base">2023-2023</p>
          </div>
          <div className="w-3/4">
            <p className="text-base text-right">Research Assistant at Digital Nature Group</p>
          </div>
        </div>
      </div>   

      <div className="flex justify-center items-center p-4">
        <div className="flex lg:w-11/12">
          <div className="w-1/4 p-0">
            <p className="text-base">2023</p>
          </div>
          <div className="w-3/4">
            <p className="text-base text-right">Teaching Assistant of Introduction to Programming</p>
          </div>
        </div>
      </div>   

      <div className="flex justify-center items-center p-4">
        <div className="flex lg:w-11/12">
          <div className="w-1/4 p-0">
            <p className="text-base">2023</p>
          </div>
          <div className="w-3/4">
            <p className="text-base text-right">Teaching Assistant of Media Art</p>
          </div>
        </div>
      </div>   

      <div className="flex justify-center items-center p-4">
        <div className="flex lg:w-11/12">
          <div className="w-1/4 p-0">
            <p className="text-base">2022</p>
          </div>
          <div className="w-3/4">
            <p className="text-base text-right">Official on-campus tutor for international students</p>
          </div>
        </div>
      </div>   


<div className="h-0.5 bg-black"></div>

{/* Awards */}
      <div className="flex justify-center p-7 ">
        <p className="text-lg font-bold">Awards</p>
      </div>
    

      <div className="flex justify-center items-center p-4">
        <div className="flex lg:w-11/12">
          <div className="w-1/4 p-0">
            <p className="text-base">2024</p>
          </div>
          <div className="w-3/4">
            <p className="text-base text-right">29th Student CG Contest, Game & Interaction Category, Best Award</p>
          </div>
        </div>
      </div>   

      <div className="flex justify-center items-center p-4">
        <div className="flex lg:w-11/12">
          <div className="w-1/4 p-0">
            <p className="text-base">2023</p>
          </div>
          <div className="w-3/4">
            <p className="text-base text-right">WIRED CREATIVE HACK AWARD 2023, Runner-Up Prize</p>
          </div>
        </div>
      </div>   

      <div className="flex justify-center items-center p-4">
        <div className="flex lg:w-11/12">
          <div className="w-1/4 p-0">
            <p className="text-base">2021</p>
          </div>
          <div className="w-3/4">
            <p className="text-base text-right">Business plan contest for students in Ibaraki Prefecture 2021</p>
          </div>
        </div>
      </div>   

      <div className="flex justify-center items-center p-4">
        <div className="flex lg:w-11/12">
          <div className="w-1/4 p-0">
            <p className="text-base">2023</p>
          </div>
          <div className="w-3/4">
            <p className="text-base text-right">Business plan contest 2021 presented by The Chiba Bank and The Bank of Yokohama</p>
          </div>
        </div>
      </div>   



      <div className="h-0.5 bg-black"></div>

{/* radio */}
      <div className="flex justify-center p-7">
        <p className="text-lg font-bold">Radio</p>
      </div>

      <div className="flex justify-center items-center p-4">
        <div className="flex lg:w-11/12">
          <div className="w-1/4 p-0">
            <p className="text-base">2022</p>
          </div>
          <div className="w-3/4">
            <p className="text-base text-right">UTURES 落合陽一　RADIO PIXIE DUST</p>
            <p className="text-right">
              <a href="https://audee.jp/voice/show/42708" target="_blank" rel="noopener noreferrer" className="text-sm">link</a>
            </p>
          </div>
        </div>
      </div>   

      <div className="h-0.5 bg-black"></div>

      <div className="flex justify-center p-7">
        <p className="text-lg font-bold">Others</p>
      </div>
      <div className="flex justify-center p-7 ">
        <div className="lg:w-11/12 p-0">
        {/* <p className="text-base border border-solid border-black"></p> */}
        </div>
      </div>




      

    </div>
    



</main>
  
  );
}

export default About;
