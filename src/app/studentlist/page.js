import Link from 'next/link';
import React from 'react'

const StudentList = () => {
  return (
    <div>
        <h1 className="text-3xl text-center">Student List</h1>
        <h3>Dynamic Routes</h3>
        <Link href="/studentlist"  className="text-blue-500 underline">Go to Student List</Link>
        <ul className="text-center text-blue-500 underline">
            <li>
                <Link href="/studentlist/Rohit" >Rohit</Link>
            </li>
            <li>
                <Link href="/studentlist/Ankita" >Ankita</Link>
            </li>
            <li>
                <Link href="/studentlist/Aditya" >Aditya</Link>
            </li>
            <li>
                <Link href="/studentlist/Sudhansu" >Sudhansu</Link>
            </li>
        </ul>
    </div>
  )
}

export default StudentList;