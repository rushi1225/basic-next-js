
import Link from 'next/link'

const EmployeePage = () => {
    return (
        <div>
            <h1>Welcome to employees page</h1>
            <p>dynamic routing</p>

            <ul>
                <li>
                    <Link href='/employees/rushi'>Rushi</Link>
                </li>
                <li>
                    <Link href='/employees/sumit'>Sumit</Link>
                </li>
                <li>
                    <Link href='/employees/rahul'>Rahul</Link>
                </li>
            </ul>
        </div>
    )
}

export default EmployeePage
