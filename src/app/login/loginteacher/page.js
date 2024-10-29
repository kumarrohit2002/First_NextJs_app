import Link from 'next/link'
import React from 'react'

const LoginTeacher = () => {
  return (
    <div>
        <div className="text-3xl text-center">Login Teacher Page</div>
        <Link href="/login" className="underline text-blue-500">Go to login page</Link>
    </div>
  )
}

export default LoginTeacher