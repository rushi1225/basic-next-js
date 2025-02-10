'use client'
import Link from "next/link"
import { useRouter } from "next/navigation"


const Home = () => {
    const router = useRouter();
    const navigate = (name) => {
        router.push(name)
    }

    return (
        <>
            <h1>Home Page</h1>

            <Link href='/about'>About Page</Link>

            {/* link and navigation */}

            <button onClick={() => router.push("/about")}> About page </button>
            <button onClick={() => navigate("/about")}> About page </button>
        </>
    )
}

export default Home
