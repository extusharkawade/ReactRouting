import React from 'react'
import { NavLink, useNavigate } from 'react-router-dom'
import Header from './Components/Header'
export default function About() {
    const navigate = useNavigate();

    function onClick() {
        navigate('/Contact')
    }
    const back = () => {
        navigate(-1);
    }
    return (
        <>
            <button onClick={back}> 🔙</button>
            <div>This is about component</div>
            <button onClick={onClick}> Hit me</button>
        </>

    )
}
