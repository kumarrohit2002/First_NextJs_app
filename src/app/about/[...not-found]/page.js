import Link from 'next/link';
import React from 'react'

const AboutNotFound = () => {
  return (
    <div>
        <h1 className="text-3xl text-center">This about page Not Found</h1>
        <Link href='/about' className="text-blue-500 underline">Go to About Page</Link>
    </div>
  )
}

export default AboutNotFound;