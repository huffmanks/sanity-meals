import { NavLink } from "react-router-dom"

export default function Navbar() {
    return (
        <header>
            <nav>
                <NavLink to='/' exact>
                    Home
                </NavLink>
                <NavLink to='/category'>
                    Categories
                </NavLink>
            </nav>
        </header>
    )
}
