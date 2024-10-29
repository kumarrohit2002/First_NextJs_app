import Link from 'next/link';
import React from 'react'

const NotFound = () => {
  return (
    <div>
        <h1 className="text-3xl text-center">This Page Not Available</h1>
        <h3>
            <Link href="/" className='underline text-blue-500'>Go to Home</Link>
        </h3>
    </div>
  )
}

export default NotFound;