import './login.scss'
import { useNavigate } from 'react-router-dom'
import { useContext, useEffect, useState } from 'react'
import { AuthContext } from '../../context/authContenxt'



function Login() {

    const [inputs, setInputs] = useState({
        email: "",
        password: ""
    })

    const [message, setMessage] = useState('')
    const { login, currentUser } = useContext(AuthContext)
    const navigate = useNavigate();

    const handleChange = e => {

        setInputs(input => ({ ...input, [e.target.name]: e.target.value }))
        setMessage("")
    }

    const handleSubmit = async e => {
        e.preventDefault()
        if (!inputs.email || !inputs.password) {
            return setMessage("Por favor preencha todos os campos.")
        }
        try {
            const response = await login(inputs)
            setMessage("Loading..")
        } catch (err) {
            console.log(err)
            setMessage(err.response.data)
        }
    }

    useEffect(() => {
        if (currentUser) {
            navigate(`/profile/${currentUser.username}`)
        }

    }, [currentUser])


    return (
        <div className='login'>
            <h1 className='logo'>My portfolio</h1>
            <div className="login-content">
                <h1>Sign <span>in</span></h1>
                <p>Sign in and start managing your projects</p>
                <form className="inputs">
                    <input
                        type="email"
                        name='email'
                        placeholder='E-mail'
                        onChange={handleChange}

                    />
                    <input
                        type="password"
                        name='password'
                        placeholder='Password'
                        onChange={handleChange}
                    />
                    <p>Don't have an account? <span>register</span></p>
                    <span className='error-message'>{message}</span>
                    <button onClick={handleSubmit}>Login</button>
                </form>
            </div>

        </div>
    )
}

export default Login
