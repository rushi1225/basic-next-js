'use client'
import Link from 'next/link'
import { useRouter } from 'next/navigation'
import React from 'react'

const Contact = () => {
    const route = useRouter()
    return (
        <>
            <h1>Contact page </h1>

            <Link href='/contact/company'>Company Page </Link>
            <button onClick={() => route.push('/contact/employee')}>Employee Page</button>
            <Link href='/home'>Go home</Link>
        </>
    )
}

export default Contact
