'use client'
const EmployeeDetails = ({ params }) => {
    console.log(params);
    return (
        <div>
            <h1>Employee details page</h1>

            <h3>user name is : {params.details}</h3>

        </div>
    )
}

export default EmployeeDetails
