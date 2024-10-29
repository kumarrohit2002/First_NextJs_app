import Link from 'next/link';
import React from 'react'

const Page = () => {
  return (
    <div>
        <h1 className="text-3xl text-center p-3 rounded-md bg-cyan-500 ">About Page</h1>
        <Link href="/" className='text-center text-blue-700 text-xl font-bold underline'>Go to Home Page</Link>
        <br/>
        <Link href="/about/aboutstudent" className='text-center text-blue-700 text-xl font-bold underline'>Go to About Student Page</Link>
        <br/>
        <Link href="/about/aboutcollage" className='text-center text-blue-700 text-xl font-bold underline'>Go to About Collage Page</Link>
        <br/>
    </div>
  )
}

export default Page;