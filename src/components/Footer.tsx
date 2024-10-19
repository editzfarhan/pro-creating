import { footer } from 'framer-motion/client'
import React from 'react'

const Footer = () => {
  return (
    <footer className='bg-black text-gray-400 py-12 bottom-0 left-0 w-full'>
    <div className='max-w-6xl mx-auto grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 px-4 sm:px-6 lg:px-8'>
    <div>
        <h3 className='text-lg font-bold text-white mb-4 '>About us</h3>
        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit.</p>
    </div>
    <div>
        <h3 className='text-lg font-bold text-white mb-4'>
            link
        </h3>
        <ul>
            <li><a href="/"className='hover:text-slate-300'>home</a></li>
            <li><a href="/courses"className='hover:text-slate-300'>courses</a></li>
            <li><a href="/about"className='hover:text-slate-300'>about</a></li>
            <li><a href="/contact"className='hover:text-slate-300'>contact</a></li>
        </ul>
    </div>
    <div>
        <h3 className='text-lg font-bold text-white mb-4'>follow us</h3>
        <li><a href="/"className='hover:text-slate-300'>home</a></li>
            <li><a href="/courses"className='hover:text-slate-300'>courses</a></li>
            <li><a href="/about"className='hover:text-slate-300'>about</a></li>
            <li><a href="/contact"className='hover:text-slate-300'>contact</a></li>
    </div>
    <div>
        <h3 className='text-lg font-bold text-white mb-4'>contact us</h3>
        <p>email <a href="/.mail@gmail.com">farhaneditz24525@gmail.com</a></p>
        <p>phone: <span className='hover:text-white'>03017611852</span></p>
    </div>
    </div>
     <p className='flex justify-center p-2'> Lorem ipsum dolor sit amet consectetur adipisicing elit. </p>
     </footer>
  )
}

export default Footer