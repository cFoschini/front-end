import React from 'react'

export default function Login(props) {
    const {values, submit} = props;
    return (
        <div>
            <form className="logInForm">
                <lable>Email:
                    <input 
                    type="text" 
                    id="email"
                    name="email"
                    value={values.email}
                    placeholder="Enter email here"/>
                </lable>
                    <br/>
                <lable>Password
                    <input 
                    type="text" 
                    id="password"
                    name="password" 
                    value={values.password}
                    placeholder="Enter password here"/>
                </lable>
                    <button>Login</button>
            </form>
        </div>
    )
}
