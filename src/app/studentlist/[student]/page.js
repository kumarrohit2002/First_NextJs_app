'use client';
import Link from 'next/link';
import { useEffect, useState } from 'react';

export default function Student({ params }) {
    const [studentName, setStudentName] = useState("");

    useEffect(() => {
        const getStudentName = async () => {
            const resolvedParams = await params;
            if (resolvedParams.student) {
                setStudentName(resolvedParams.student);
            }
        };

        getStudentName();
    }, [params]);

    return (
        <div>
            <h1 className="text-3xl text-center">Student Details</h1>
            <Link href="/studentlist" className="text-blue-500 underline">Go to Student List</Link>
            <h3 className="text-center">Student Name: {studentName || "Loading..."}</h3>
        </div>
    );
}
