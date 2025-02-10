import React, { useState } from 'react'

const EventsFunctionState = () => {

    const sayHello = () => {
        alert("sayhello")
    }


    const [firstname, setFirstname] = useState('rushi')

    const changeName = () => {
        setFirstname("Rushikesh Bhingare")
    }
    return (
        <>
            <h1>Events Function And State</h1>
            <button onClick={() => alert('hello rushi')}>click event</button>
            <button onClick={sayHello}>Say Hello</button>

            <h3>my name is {firstname}</h3>
            <button onClick={changeName}>change name  State</button>
        </>
    )
}

export default EventsFunctionState
