import Image from "next/image";
import Link from 'next/link';

export default function Home() {
  return (
<main className="flex min-h-screen flex-col items-center justify-between lg:w-3/4 p-10 mx-auto">
{/* バー */}
<div className="flex justify-end font-mono text-base lg:w-3/4">
  <div className="space-x-5 p-5">
    <Link href="/about">About</Link>
    <Link href="/publication">Publication</Link>
    <a href="/document/AyakaTsutsui_Resume .pdf">CV</a>
  </div>
</div>
{/* 名前 */}
<div className="justify-start font-mono text-2xl lg:w-3/4">
  <div className="space-x-9">
    <p>Ayaka Tsutsui</p>
  </div>
</div>
{/* プロフィール欄 */}
<div className="font-mono text-2xl lg:w-3/4 mx-auto">
  <div className="p-7 text-center">
    <p className="text-lg font-bold">Profile</p>
  </div>
  <div className="flex flex-col lg:flex-row items-start">
    <div className="lg:w-11/12 p-0">
      <p className="text-base">Ayaka Tsutsui is currently pursuing her Master's degree at the Digital Nature Group under Associate Prof. Yoichi Ochiai at the University of Tsukuba. She joined the Digital Nature Group in 2022 and obtained her Bachelor's degree from the University of Tsukuba, also under the guidance of Associate Prof. Yoichi Ochiai. Her projects have been presented at various top-tier international conferences, including ACM SIGGRAPH and CHI. In 2022, during her senior year of undergraduate studies, she secured a budget of 1 million yen through the AIP Challenge Program. She has a keen interest in digital fabrication and ultrasonics, with her work being published in SIGGRAPH Labs and CHI. Additionally, she is actively involved in developing accessibility technologies for individuals with disabilities, such as the visually impaired. Her contributions in this area have been recognized with awards and featured in the CHI Video showcase, Campus Genius Contest, and Creative Hack Award.</p>
    </div>
  <div className="flex justify-end p-0 mt-0">
    <Image
      className=""
      src="/profile.png"
      alt="profile"
      width={290}
      height={290}
      priority
    />
  </div>
</div>
</div>

{/* 興味 */}
<div className="font-mono text-2xl lg:w-3/4 mx-auto ">
  <div className="p-10 text-center">
    <p className="text-lg font-bold">Research Field / Interests</p>
  </div>
  <div className="flex flex-col lg:flex-row items-start">
    <div className="p-0">
    <p className="text-base">My primary areas of interest lie at the intersection of technology and human engagement, specifically in Human-Computer Interaction (HCI), Digital Fabrication, Ultrasonics, Human Interfaces, and Accessibility. </p>
  </div>
</div>
</div>

{/* プロジェクト */}
<div className="font-mono text-2xl lg:w-3/4 mx-auto ">
  <div className="p-10 text-center">
    <p className="text-lg font-bold">Projects</p>
  </div>

{/* CHI HIFU */}
  <div className="flex flex-col lg:flex-row items-start">
    <div className="lg:flex-1 p-3 ">
      <h2 className="text-xl font-bold mb-2">Project Y </h2>
      <p className="text-base">特許の都合上まだ非公開です</p>
    </div>
    <div className="lg:flex-1 p-3">
      <img src="/text_to_haptics.gif" alt="text_to_haptics.gif" className="w-full h-auto" />
    </div>
  </div>

{/* LVB */}
  <div className="flex flex-col lg:flex-row items-start">
    <div className="lg:flex-1 p-3 ">
      <h2 className="text-xl font-bold mb-2">Low Vision Boxing</h2>
      <p className="text-sm">Kenta Yamamoto, Ayaka Tsutsui, Zhao Yinan, Ippei Suzuki, Kengo Tanaka, Yoichi Ochiai</p>
    </div>
    <div className="lg:flex-1 p-3 ">
      <img src="/low_vision_boxing.gif" alt="low_vision_boxing.gif" className="w-full h-auto" />
    </div>
  </div>

{/* tactile */}
  <div className="flex flex-col lg:flex-row items-start">
    <div className="lg:flex-1 p-3 ">
      <h2 className="text-xl font-bold mb-2">Text to Haptics: Method and Case Studies of Designing Tactile Graphics for Inclusive Tactile Picture Books by Digital Fabrication and Generative AI </h2>
      <p className="text-sm">Kengo Tanaka, Fushimi Tatsuki, Ayaka Tsutsui, Yoichi Ochiai</p>
    </div>
    <div className="lg:flex-1 p-3">
      <img src="/text_to_haptics.gif" alt="text_to_haptics.gif" className="w-full h-auto" />
    </div>
  </div>

{/* hifu siggraph */}
  <div className="flex flex-col lg:flex-row items-start">
    <div className="lg:flex-1 p-3 ">
      <h2 className="text-xl font-bold mb-2">Project X</h2>
      <p className="text-base">特許の都合上まだ非公開です</p>
    </div>
    <div className="lg:flex-1 p-3">
      <img src="/text_to_haptics.gif" alt="text_to_haptics.gif" className="w-full h-auto" />
    </div>
  </div>

</div>
</main>
  );
}

