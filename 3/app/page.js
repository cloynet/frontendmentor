import Image from "next/image";
import article from "@/assets/images/illustration-article.svg"
import avatar from "@/assets/images/image-avatar.webp"

export default function Home() {
  return (
    <section className="bg-white p-4 rounded-xl shadow-[10px_10px_0px_black] border max-w-[500px] mx-auto">
      <div>
        <Image
      src={article}
      alt="article"
      width={200}
      height={200}
      className="rounded-xl w-full"
      />
      </div>
    <div>
    <h2
    className="text-xl py-[3px] px-[8px] inline-block mt-6 mb-4 mx-0"
    style={{ backgroundColor:'var(--background)'}}
    >
    Learning
    </h2>
    <p className="mb-4 text-gray-900">Published 21 Dec 2023</p>
    <h1 className="mb-4 text-2xl h1hover transition cursor-pointer font-bold">HTML & CSS foundations</h1>
    <p className="text-gray-400 mb-8">These languages are the backbone of every website, defining structure, content, and presentation.</p>
    
    <ul className="flex items-center gap-4">
      <li>
        <Image
        src={avatar}
        alt="avatar"
        width={80}
        height={80}
        />
      </li>
      <li className="font-bold">Greg Hooper</li>
    </ul>
    </div>
    </section>
  );
}
