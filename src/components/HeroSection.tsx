import React from 'react'
import Link from 'next/link'
import { Spotlight } from './ui/Spotlight'
import { Button } from "@/components/ui/moving-border";

function HeroSection() {
  return (
    <div className='h-auto md:h-[40rem] w-full rounded-md flex
    flex-col items-center justify-center relative overflow-hidden  mx-auto py-10 md:py-0 '>
 <div className='p-4 relative text-white z-10 w-full text-center'>
 <Spotlight
        className="-top-40 left-0 md:left-60 md:-top-20"
        fill="white"
      />
    <h1 className='mt-20 md:mt-0 text-4xl md:text-7xl
    font-bold bg-clip-text text-transparent bg-gradient-to-b from-neutral-50 to-neutral-400'>Master the art of coding</h1>
    <p className='mt-4 font-normal text-base md:text-lg text-neutral-300 max-w-lg mx-auto'>Dive into our comprehensive coding course and transform your development journey today. Whether you are beginner or looking to refine your programming skill join us to unlock your true coding potential</p>
<div className="mt-4">
    <Link href={'/courses'}>
     <Button
     borderRadius='1.73rem'
     className="bg-slate-400 dark:bg-slate-900 text-white dark:text-white border-black dark:border-slate-800"
     >
     Explore courses
     </Button>
    </Link>
</div>

    </div>   

    </div>
  )
}

export default HeroSection