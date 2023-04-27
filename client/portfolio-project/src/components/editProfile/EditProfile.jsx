import './editprofile.scss'
import { AuthContext } from '../../context/authContenxt'
import { useContext } from 'react'

function EditProfile() {

    const { currentUser } = useContext(AuthContext)
    return (
        <div className='edit-container'>
            <section>
                <h1>PROFILE EDITING</h1>

            </section>
        </div>

    )
}

export default EditProfile
