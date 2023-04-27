import './contact.scss'
//import { FaLinkedinIn, FaGithub, FaInstagram, FaFacebook } from "react-icons/Fa"
import { BsFacebook, BsInstagram, BsLinkedin, BsGithub } from "react-icons/bs"



function Contact(props) {
    const socialsNetworks = [
        { id: 1, name: 'linkedin', link: `${props.linkedin}`, icon: <BsLinkedin /> },
        { id: 2, name: 'git-hub', link: `${props.github}`, icon: <BsGithub /> },
        { id: 3, name: 'instagran', link: `${props.instagran}`, icon: <BsInstagram /> },
        { id: 4, name: 'facebook', link: `${props.facebook}`, icon: <BsFacebook /> }
    ]
    return (
        <section className='contact' id='contact'>
            <h2>CONTACT <hr /></h2>
            <div className='content'>
                <div className="left-content">
                    <h1>Let´s Talk</h1>
                    <p>
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                        Pellentesque consequat eget nulla morbi magna enim. Ultricies
                        massa arcu ultricies quis.
                    </p>
                    <div className="socials-networks">
                        {socialsNetworks.map((netkwork) => {
                            return (
                                <a href={netkwork.link} key={netkwork.id} className={netkwork.name}>{netkwork.icon}</a>
                            )
                        })}
                    </div>
                </div>
                <form action="submit" className='rigth-content'>
                    <label htmlFor="name">Name</label>
                    <input type="text" id='name' name='name' />
                    <label htmlFor="email">E-mail</label>
                    <input type="text" id='email' name='email' />
                    <label htmlFor="message">Message</label>
                    <textarea name="message" id="message" cols="30" rows="10"></textarea>
                    <button>Send Message</button>
                </form>
            </div>


        </section>
    )
}

export default Contact
