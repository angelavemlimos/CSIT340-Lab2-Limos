export default function NavLink({ href, label }) {
    return (
        <a href={href} className="text-blue-600 underline mr-1.5">
            {label}
        </a>
    );
}