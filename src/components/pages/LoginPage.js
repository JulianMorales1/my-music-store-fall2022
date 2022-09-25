import { useState } from 'react'

import { useNavigate } from 'react-router-dom'

function LoginPage({ onLogin, isLogged }) {

    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');

    const navigate = useNavigate()

    const submitHandler = (event) => {



        event.preventDefault()
        console.log({
            email,
            password
        })

        const user = {
            email,
            password
        }

        if (user.email === 'test@gmail.com' && user.password === 'test') {
            onLogin(user)
            navigate('/')
        } else {
            alert('Invalid Credentials')
        }



    }

    const logoutHanlder = () => {

    }

    return (
        <>
            <h2>Login Here</h2>

            {!isLogged && <form onSubmit={submitHandler}>
                <input type='email' onChange={(e) => setEmail(e.target.value)} placeholder='email' />
                <input type='password' onChange={(e) => setPassword(e.target.value)} placeholder='your password' />

                <button type='submit'>Sign in</button>
            </form>}

            {isLogged && <button onClick={logoutHanlder}>Logout</button>}
        </>
    )
}

export default LoginPage