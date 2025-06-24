import Image from "next/image";
import avatar from "@/assets/images/avatar-jessica.jpeg"
import SocialLinks from '@/components/SocialLinks'

export default function Home() {
  return (
    
  
      <div className="container px-4 md:px-8">
        <div 
      style={{ backgroundColor: 'var(--foreground)' }}
      className="w-full max-w-[375px] md:max-w-[900px] lg:max-w-[1440px] p-6 pb-10 mx-auto text-center bg-gray-700 md:p-14 rounded-lg"
      >
      
    <Image
      src={avatar}
      alt='avatar'
      width={80}
      height={80}
      style={{ maxWidth: '100%', height: 'auto' }}
      className='rounded-full mx-auto mb-5'
      />

    <h1 className="text-white text-2xl">Jessica Randall <span style={{ color: 'var(--pcolor)' }} className="block mt-1 text-sm">London, United Kingdom</span></h1>
    <p className="my-5 text-white/80 text-sm">&quot;Front-end developer and avid reader.&quot;</p> 
  
    <SocialLinks/>

      </div>
  
    </div>


  );
}
