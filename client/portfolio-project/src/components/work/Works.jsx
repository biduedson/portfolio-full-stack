import './works.scss'
import project1 from '../../assets/img/react-Gyn1.png'
import project2 from '../../assets/img/react-Gyn2.png'
import project3 from '../../assets/img/EGAhost.png'
import { FaGithub } from 'react-icons/fa'
import { CgWebsite } from 'react-icons/cg'

const projects = [
    { id: 1, name: 'React-fitness1', image: `${project1}` },
    { id: 2, name: 'React-fitness2', image: `${project2}` },
    { id: 3, name: 'Ega-host', image: `${project3}` }
]
const socialsNetwork = [
    { icon: <FaGithub /> }
]

function Works() {
    return (
        <section className='works' id='works'>
            <h2>WORK  <hr /></h2>
            <nav>
                <li><p>ALL</p></li>
                <li><p>WEB DESIGN</p></li>
                <li><p>DIGITAL ART</p></li>
            </nav>
            <div className="cards-projects">
                {projects.map((project) => {
                    return (
                        <div className='card-project' key={project.id}>
                            <img src={project.image} alt="" />
                            <p>{project.name}</p>
                            <div className="btns">
                                <a href="#">{<FaGithub />}</a>
                                <a href="#">{<CgWebsite />}</a>
                            </div>
                        </div>
                    )
                })}
            </div>
        </section>
    )
}

export default Works
