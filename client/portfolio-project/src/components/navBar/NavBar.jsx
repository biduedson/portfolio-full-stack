import { GoThreeBars } from 'react-icons/go'
import { MdOutlineClose } from 'react-icons/md'
import { BiLogOutCircle, BiLogInCircle } from 'react-icons/bi'
import { useContext, useEffect, useState } from 'react'
import { AuthContext } from '../../context/authContenxt'
import "./navbar.scss"
import { useNavigate } from 'react-router-dom'


function NavBar() {

    const [openCloseNavBar, setOpenCloseNavBar] = useState(false)
    const [toogleClass, setToogleClass] = useState('nav-bar')
    const { currentUser, logout } = useContext(AuthContext)
    const [logged, setLogged] = useState(false)
    const navigate = useNavigate()

    window.addEventListener('scroll', () => {
        window.scrollY > 0 ?
            setToogleClass("nav-bar scroll")
            : setToogleClass("nav-bar")

    })
    const login_logout = () => {
        if (currentUser) {
            return logout
        }

        return navigate("/")
    }



    const openClose = () => {
        setOpenCloseNavBar(onOff => !onOff)
    }


    return (
        <div className={toogleClass}>
            <nav >
                <div className="logo">
                    <h1>EGA<span>design</span></h1>
                </div>
                <ul className={!openCloseNavBar ? "display-none" : ""}>
                    <li><a href="#home">HOME</a></li>
                    <li><a href="#about">ABOUT</a></li>
                    <li><a href="#works">WORK</a></li>
                    <li><a href="#contact">CONTACT</a></li>
                    <li>{currentUser ?
                        <span onClick={(logout)}><BiLogOutCircle /> LOGOUT</span>
                        : <span onClick={() => navigate('/')}><BiLogInCircle /> LOGIN</span>}
                    </li>
                </ul>
                <div className='nav-mobile' onClick={openClose}>
                    {openCloseNavBar ? <MdOutlineClose /> : <GoThreeBars />}
                </div>
            </nav>
        </div>
    )
}

export default NavBar
