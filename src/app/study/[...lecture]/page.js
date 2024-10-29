'use client'
import React, { useEffect, useState } from 'react'

const Lecture = ({params}) => {


    const [lecture,setLecture]=useState('');

    const getLectureName = async () => {
        const resolvedParams = await params;
        if (resolvedParams.lecture) {
            setLecture(resolvedParams.lecture);
        }
    };

    useEffect(() => {
        getLectureName();
    }, [params]);


  return (
    <div>
        <h1 className="text-3xl text-center ">Lecture Details</h1>
        <h3>Lecture No {lecture || "Loading..."}</h3>
    </div>

  )
}

export default Lecture;