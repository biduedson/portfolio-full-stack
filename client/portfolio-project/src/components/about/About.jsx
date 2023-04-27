import './about.scss'
import avatar from '../../assets/1670776962806.jpg';
import { AuthContext } from '../../context/authContenxt';
import { useContext } from 'react';


function About(props) {

    const skills = [
        { id: 1, technology: 'Photoshop' },
        { id: 2, technology: 'HTML' },
        { id: 3, technology: 'CSS' },
        { id: 4, technology: 'Sass' },
        { id: 5, technology: 'React' },
        { id: 6, technology: 'Javascript' },
    ]
    const currentUser = useContext(AuthContext)

    return (
        <section className="about" id='about'>
            <figure className="left-content">
                <div className="shadow-box"></div>
                <img src={avatar} alt="" />
            </figure>
            <div className="rigth-content">
                <article className='about-article'>
                    <h2>ABOUT <hr /> </h2>
                    <h1>{props.name}</h1>
                    <p>
                        {props.sobre}
                    </p>
                </article>
                <article className='skills-article'>
                    <h2>SKILLS <hr /> </h2>
                    <div className='skills'>
                        {skills.map((skill) => {
                            return (
                                <li key={skill.id}><span>{skill.technology}</span></li>
                            )
                        })}
                    </div>
                </article>
            </div>
        </section>
    )
}

export default About
