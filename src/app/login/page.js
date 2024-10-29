'use client'
import Link from 'next/link'
import React from 'react'

const Page = () => {

    return (
        <div>
            <h1 className="text-3xl text-center p-3 rounded-md bg-red-500 font-bold">Login Page</h1>
            <Link href="/" className="text-center text-blue-700 text-xl font-bold underline">
                Go to Home Page
            </Link>
        </div>
    );
}

export default Page;
