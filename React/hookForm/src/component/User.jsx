import React from "react";
import { useState } from "react";
const User = () => {
    const [firstName,setFirstName] = useState("")
    const [lastName,setLastName] = useState("")
    const [email,setEmail] = useState("")
    const [password,setPassword] = useState("")
    const [ConfPassword,setConfPassword] = useState("")
    const [firstNameError, setFirstNameError] = useState("")
    const [lastNameError,setLastNameError] = useState("")
    const [emailError,setEmailError] = useState("")
    const [passwordError,setPasswordError] = useState("")
    const [confPassError,setConfPassError] = useState("")
    



    const handleFirstName = e =>{
        if(e.target.value.length < 2) setFirstNameError("First name should be at least 2 characters")
        else{
            setFirstNameError("")
        }
        setFirstName(e.target.value)
    }
    const handleLastName = e =>{
        if(e.target.value.length < 2) setLastNameError("Last name should be at least 2 characters")
        else{
            setLastNameError("")
        }
        setLastName(e.target.value)
    }
    const handleEmail = e =>{
        if(e.target.value.length < 5) setEmailError("Email should be at least 5 characters")
        else{
            setEmailError("")
        }
        setEmail(e.target.value)
    }
    const handlePassword = e =>{
        if(e.target.value.length < 8) setPasswordError("Password should be at least 8 characters")
        else{
            setPasswordError("")
        }
        setPassword(e.target.value)
    } 
    const handleConfPassword = e =>{
        if(e.target.value !== password) setConfPassError("Confirm Password should matchs password")
        else{
            setConfPassError("")
        }
        setConfPassword(e.target.value)
    }
    
    return (
        <>
        <form>
            <div>
                <label htmlFor="firstName">First Name</label>
                <input type="text" name="firstName" onChange={handleFirstName} value={firstName} />
                {
                    firstNameError?
                    <p>{firstNameError}</p>:
                    ""
                    
                }
            </div>
            <div>
                <label htmlFor="lastName">Last Name</label>
                <input type="text" name="lastName" onChange={handleLastName}  value={lastName} />
                {
                    lastNameError?
                    <p>{lastNameError}</p>:
                    ""
                }
            </div>
            <div>
                <label htmlFor="email">Email</label>
                <input type="text" name="email" onChange={handleEmail} value={email}/>
                {
                    emailError?
                    <p>{emailError}</p>:
                    ""
                }
            </div>
            <div>
                <label htmlFor="password">Password</label>
                <input type="password" name="password" onChange={handlePassword} value={password}  />
                {
                    passwordError?
                    <p>{passwordError}</p>:
                    ""
                }
            </div>
            <div>
                <label htmlFor="ConfPassword">Confirm Password</label>
                <input type="password" name="ConfPassword" onChange={handleConfPassword} value={ConfPassword}  />
                {
                    confPassError?
                    <p>{confPassError}</p>:
                    ""
                }
            </div>
        </form>

        <div>
            <p>
                First Name: {firstName}
            </p>
            <p>
                Last Name: {lastName}
            </p>
            <p>
                Email: {email}
            </p>
            <p>
                Password: {password}
            </p>
            <p>
                Confirm Password: {ConfPassword}
            </p>
        </div>


        </>
    )
}
    
export default User;