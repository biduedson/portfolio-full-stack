import './footer.scss'
//import { FaLinkedinIn, FaGithub, FaInstagram, FaFacebook } from "react-icons/Fa"
import { BsFacebook, BsInstagram, BsLinkedin, BsGithub } from "react-icons/bs"

const socialMedia = [
    { id: 1, name: "linkedin", icon: <BsLinkedin />, link: "http://linkedin.com" },
    { id: 2, name: "github", icon: <BsGithub />, link: "http://github.com" },
    { id: 3, name: "instagran", icon: <BsInstagram />, link: "http://instagran.com" },
    { id: 4, name: "facebook", icon: <BsFacebook />, link: "http://facebook.com" }
]

function Footer() {
    return (
        <footer>
            <nav>
                <ul>
                    <li><a href="#">HOME</a></li>
                    <li><a href="#">ABOUT</a></li>
                    <li><a href="#">WORK</a></li>
                    <li><a href="#">CONTACT</a></li>
                </ul>
            </nav>
            <h2>EGA<span>design</span></h2>
            <div className="social-networks">
                {socialMedia.map((social) => {
                    return (
                        <a href="#" key={social.id} className={social.name}>{social.icon}</a>
                    )
                })}
            </div>
            <p>copyright by Edson Gomes Arruda Junior 2023</p>
        </footer>
    )
}

export default Footer
