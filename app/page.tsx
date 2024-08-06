import Image from "next/image";
import { BsFillMoonStarsFill } from "react-icons/bs";
import { AiFillLinkedin, AiFillGithub } from "react-icons/ai";
import headshot from '../public/NathanKovacsHeadshot.jpg'

export default function Home() {
  return (
    <main className="bg-white px-10">
      <section className="min-h-screen">
        <nav className="py-10 mb-12 flex justify-between">
          <h1 className="text-xl">nate kovacs</h1>
          <ul className="flex items-center">
            <li>
              <BsFillMoonStarsFill className="cursor-pointer text-2xl"/>
            </li>
            <li>
              <a className="bg-gradient-to-r from-cyan-500 to-teal-500 text-white px-4 py-2 rounded-md ml-8" href="#">Resume</a>
            </li>
          </ul>
        </nav>
        <div className="text-center p-10">
          <h2 className="text-5xl py-2 text-teal-600 font-bold">Nate Kovacs</h2>
          <h3 className="text-2xl py-2">Developer</h3>
          <p className="text-md py-5 leading-8">Rising senior at the University of Michigan studying <strong>Computer Science</strong> with a minor in <strong>UX Design</strong></p>
        </div>
        <div className="text-5xl flex justify-center gap-16 py-3 text-gray-600">
          <AiFillLinkedin/>
          <AiFillGithub/>
        </div>
        <div className="relative mx-auto rounded-full w-80 h-80 mt-20 overflow-hidden">
          <Image src={headshot} layout="fill" objectFit="cover" alt="nate kovacs headshot" quality={100}/>
        </div>
      </section>
    </main>
  );
}
