import NavBar from "../../components/navBar/NavBar"
import Footer from '../../components/footer/Footer'
import MainHeader from "../../components/header/MainHeader"
import About from "../../components/about/About"
import Works from "../../components/work/Works"
import Contact from "../../components/contact/Contact"
import { AuthContext } from "../../context/authContenxt"
import { useContext, useEffect, useState, } from "react"
import { useLocation, useNavigate } from "react-router-dom"
import axios from "axios"


function Home() {

    const { profileUser, user } = useContext(AuthContext);
    const location = useLocation()
    const userName = location.pathname.split("/")[2]

    const [usuario, setUsuario] = useState([])
    const navigate = useNavigate()

    useEffect(() => {
        const user = async () => {
            try {
                const response = await axios.get(`/api/users/${userName}`)
                setUsuario(response.data)
            } catch (err) {
                console.log(err)
            }
        }
        user()
    }, [userName])

    const {
        email,
        fullname,
        facebook_link,
        github_link,
        instagran_link,
        linkedin_link,
        profession,
        sobre,
        tecnologias,
        username } = usuario;

    return (
        <>
            <NavBar />
            <MainHeader
                name={username}
                profession={profession}
                facebook={facebook_link}
                github={github_link}
                instagran={instagran_link}
                linkedin={linkedin_link}
                email={email}
            />
            <About
                name={fullname}
                sobre={sobre}

            />
            <Works />
            <Contact
                facebook={facebook_link}
                github={github_link}
                instagran={instagran_link}
                linkedin={linkedin_link}
            />
            <Footer />
        </>

    )
}

export default Home
