import React from 'react'
import { NavLink } from 'react-router-dom'
export default function About() {
    return (
        <>
            <header>
                <nav>
                    <ul>
                        <li>
                            <NavLink to={'/'}> Home</NavLink >
                        </li>
                        <li>
                            <NavLink to={'/About'}>About</NavLink >
                        </li>
                        <li>
                            <NavLink to={'/Contact'}>Contact</NavLink>
                        </li>
                    </ul>
                </nav>
            </header>
            <div>This is about component</div>
        </>

    )
}
