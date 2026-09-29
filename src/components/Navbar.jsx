import NavLink from './Navlink';

export default function Navbar() {
    return (
        <nav>
            <div>
                <a href="#top" className="text-blue-600 underline">Juan dela Cruz</a>
                <div className="text-blue-600 underline">
                    <NavLink href="#about" label="About " />
                    <NavLink href="#skills" label="Skills " />
                    <NavLink href="#projects" label="Projects " />
                    <NavLink href="#experience" label="Experience " />
                    <NavLink href="#contact" label="Contact " />
                </div>
            </div>
        </nav>
    );
}