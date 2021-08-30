import { NavLink } from "react-router-dom"

export default function Navbar() {
    return (
        <header className="max-w-full py-6 px-8 bg-indigo-600 text-white text-2xl leading-tight">
            <nav className="flex justify-between">
                <NavLink to='/' exact className="pt-1 pb-2 pl-3 pr-4">
                    Recipe App
                </NavLink>
                <NavLink to='/category' className="pt-1 pb-2 pl-3 pr-4 bg-white text-indigo-600 leading-tight rounded-lg">
                    Categories
                </NavLink>
            </nav>
        </header>
    )
}
