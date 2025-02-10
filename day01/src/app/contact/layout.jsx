
//common layout

// import { usePathname } from "next/navigation"

// const layout = ({ children }) => {
//     const currentpathname = usePathname()
//     return (
//         <>
//             <h1>common layout for contact page</h1>
//             {
//                 children
//             }
//         </>
//     )
// }


// conditional layout


'use client'
import { usePathname } from "next/navigation"

const layout = ({ children }) => {
    const currentpathname = usePathname()

    return (
        <>
            {
                currentpathname !== '/contact/company' ? <h1>common layout</h1> : null
            }
            {children}
        </>
    )
}










export default layout
