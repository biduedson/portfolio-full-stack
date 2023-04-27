import "./mainheader.scss"
import axios from "axios"
import BtnEdit from "../btnEdit/BtnEdit"
import { BsFacebook, BsInstagram, BsLinkedin, BsGithub } from "react-icons/bs"
import { TbEdit } from 'react-icons/tb'
import { MdClose } from 'react-icons/md'
import avatar from '../../assets/1670776962806.jpg'
import background from '../../assets/1767974.jpg'
import { AuthContext } from '../../context/authContenxt'
import { useContext, useState } from "react"
import { useNavigate } from "react-router-dom"




function MainHeader(props) {

    const { currentUser, profileUser } = useContext(AuthContext);
    const [openEditLinks, setOpenEditLinks] = useState(false)
    const [openEditProfile, setOpenEditProfile] = useState(false)
    const navigate = useNavigate()

    const [inputs, setInputs] = useState({
        username: "",
        fullname: "",
        profession: "",
        img: "",
        id: !currentUser ? "" : currentUser.id

    })

    const [inputsLinks, setInputsLinks] = useState({
        github_link: "",
        linkedin_link: "",
        instagran_link: "",
        facebook_link: "",
        id: !currentUser ? "" : currentUser.id
    })

    const socialMedia = [
        { name: "linkedin", icon: <BsLinkedin />, link: `${props.linkedin}` },
        { name: "github", icon: <BsGithub />, link: `${props.github}` },
        { name: "instagran", icon: <BsInstagram />, link: `${props.instagran}` },
        { name: "facebook", icon: <BsFacebook />, link: `${props.facebook}` }
    ]
    const style = {
        backgroundImage: `url(${background})`,
    }
    const editStyle = {
        backgroundColor: '#020202',
    }
    const handleChange = e => {
        setInputs(input => ({ ...input, [e.target.name]: e.target.value }))
    }
    const handleChanceLinks = e => {
        setInputsLinks(inputs => ({ ...inputs, [e.target.name]: e.target.value }))
        console.log(inputsLinks)
    }

    const handleSubmit = async e => {
        e.preventDefault()
        try {
            const response = await axios.patch('/api/users/update', inputs)
            navigate(`/profile/${inputs.username}`)
        } catch (err) {
            console.log(err)
        }
    }

    const handlesubmitLinks = async e => {
        e.preventDefault()
        try {
            const response = await axios.patch('/api/users/social', inputsLinks)
            console.log(response.data)
            navigate(`/profile/${currentUser.username}`)
        } catch (err) {
            console.log(err)
        }
    }


    return (
        <header style={style}>
            <div className="header-profile" id="home">
                {
                    currentUser && currentUser.email === props.email &&
                    <div className={openEditProfile ? 'edit-home' : "edit-home display-none"}>
                        <p onClick={() => setOpenEditProfile(open => !open)}><MdClose /></p>
                        <img src={avatar} alt="profile-avatar" />
                        <button>{<TbEdit />}Image</button>
                        <form action="submit">
                            <label htmlFor="username">Username</label>
                            <input type="text"
                                name="username"
                                id="username"
                                onChange={handleChange}
                            />

                            <label htmlFor="fullname">Fullname</label>
                            <input type="text"
                                name="fullname"
                                id="fullname"
                                onChange={handleChange}
                            />


                            <label htmlFor="profession">Profession</label>
                            <input
                                type="text"
                                name="profession"
                                id="professione"
                                onChange={handleChange}
                            />
                            <div className="btns-submit"></div>
                            <div className="btns-submit">
                                <button onClick={() => setOpenEditProfile(open => !open)}>Cancel</button>
                                <button onClick={handleSubmit}>Save</button>
                            </div>
                        </form>
                    </div>
                }
                <img src={avatar} alt="" />
                <h1>{props.name}</h1>
                <p>{`I am ${props.profession}`}</p>
                <BtnEdit function={() => setOpenEditProfile(open => !open)} email={props.email} />
            </div>
            <div className="socials-networks">
                {socialMedia.map((media) => {
                    return (
                        <a className={media.name} href={media.link} key={media.name}>{media.icon}</a>

                    )
                })}
                {currentUser && currentUser.email === props.email &&
                    <a id="btn-edit-links" onClick={() => setOpenEditLinks(open => !open)}><TbEdit /></a>}

            </div>
            {currentUser && currentUser.email === props.email &&
                <div className={openEditLinks ? 'edit-socials-networks' : 'edit-socials-networks display-none'}>
                    <form action="submit" className="form-social-networks">
                        <label htmlFor="edit-linkedin">{<BsLinkedin />}</label>
                        <input type="text"
                            name="linkedin_link"
                            id="edit-linkedin"
                            onChange={handleChanceLinks}

                        />

                        <label htmlFor="edit-github">{<BsGithub />}</label>
                        <input type="text"
                            name="github_link"
                            id="edit-github"
                            onChange={handleChanceLinks}

                        />

                        <label htmlFor="edit-instagran">{<BsInstagram />}</label>
                        <input type="text"
                            name="instagran_link"
                            id="edit-instagran"
                            onChange={handleChanceLinks}

                        />
                        <label htmlFor="edit-facebook">{<BsFacebook />}</label>
                        <input type="text"
                            name="facebook_link"
                            id="edit-facebook"
                            onChange={handleChanceLinks}

                        />
                        <div className="btns-social-links">
                            <button>Cancel</button>
                            <button onClick={handlesubmitLinks}>Save</button>
                        </div>
                    </form>
                </div>}
        </header>
    )
}

export default MainHeader
