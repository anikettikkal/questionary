import React from "react";
import { useState } from "react";

const UserForm = () => {

    const [name, setName] = useState("")
    const [email, setEmail] = useState("")
    const [password, setPassword] = useState("")
    return (
        <>
            <div className="">
                <h1>User Form</h1>
                <input type="text" value={name}
                    onChange={(e) => {
                        setName(e.target.value)
                    }} placeholder="enter name" /> <br />
                <input type="email" placeholder="enter email"
                    value={email}
                    onChange={(e) => {
                        setEmail(e.target.value)
                    }} /> <br />
                <input type="password"
                    value={password}
                    onChange={(e) => {
                        setPassword(e.target.value)
                    }} placeholder="enter password" />
            </div>

            <div>
                <h1>Display Data</h1>
                <span>{name}</span> <br />
                <span>{email}</span> <br />
                <span>{password}</span> <br />
            </div>
        </>
    )
}

export default UserForm