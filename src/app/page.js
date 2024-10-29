'use client'
import {useRouter} from "next/navigation"
import Link from "next/link"



export default function Home() {

  const onclick=(text)=>{
    alert(text)
  }

  const router=useRouter();

  const InnerComponent=()=>{
    return(
      <h1>Inner Component</h1>
    )
  }

  return (
    <div className="grid items-center justify-items-center  min-h-screen p-2 pb-5 gap-5 sm:p-20 font-[family-name:var(--font-geist-sans)]">
      <h1 className="text-2xl">Home page</h1>
      <Fun name="Rohit Kumar"/>
      <button className="bg-slate-300 p-1 rounded-md"onClick={()=>onclick("hello NEXT JS!!")}>Click Me</button>
      <InnerComponent/>
      <Link href="about" className="text-blue-500 font-bold underline">About Page</Link>
      <Link href="studentlist" className="text-blue-500 font-bold underline">StudentList Page</Link>
      <button onClick={()=>router.push('login')} className="bg-blue-600 p-1 rounded-md text-white font-bold"> GO to Login Page</button>
      {InnerComponent()}
    </div>
  );
}


const Fun=(props)=>{
  return(
    <h1>My name is {props.name}</h1>
  )
}