import Link from 'next/link';
import React from 'react'

const AboutCollage = () => {
  return (
    <div>
        <div className="bg-orange-500 text-center text-3xl text-white p-2 font-bold">About Collage Page</div>
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

export default AboutCollage;