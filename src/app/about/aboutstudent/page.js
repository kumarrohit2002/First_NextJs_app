import Link from 'next/link';
import React from 'react'

const AboutStudent = () => {
  return (
    <div>
        <div className="bg-orange-500 p-2 text-center font-bold text-3xl text-white">About Student Page</div>
        <Link href="/about" className="text-center text-blue-700 text-xl font-bold underline">
                Go to About Page
        </Link>
        <br/>
        <Link href="/" className="text-center text-blue-700 text-xl font-bold underline">
                Go to Home Page
        </Link>
    </div>
  )
}

export default AboutStudent;