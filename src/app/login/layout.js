'use client'
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import React from 'react'


const Layout = ({children}) => {
    const pathName=usePathname();
  return (
    <div>
       {
        pathName!="/login/loginteacher"?
        <ul className="flex justify-center gap-10 p-2 bg-blue-500 text-white font-bold">
        <li>
            pathName: {pathName}
        </li>
        <li>
            <h1>Login Navbar</h1>
        </li>
        <li>
            <Link href="/login">Login page</Link>
        </li>
        <li>
            <Link href="/login/loginstudent">Login Student page</Link>
        </li>
        <li>
            <Link href="/login/loginteacher">Login Teacher page</Link>
        </li>

    </ul>:null
       }
        {children}
    </div>
  )
}

export default Layout;