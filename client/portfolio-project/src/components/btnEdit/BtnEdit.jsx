import React, { useContext } from 'react'
import { AuthContext } from '../../context/authContenxt'
import { TbEdit } from 'react-icons/tb'

function BtnEdit(props) {
    const { currentUser } = useContext(AuthContext)
    return (
        <>
            {currentUser && currentUser.email === props.email && <button onClick={props.function} className="btn-edit-name"><TbEdit />Edit</button>}
        </>
    )
}

export default BtnEdit
