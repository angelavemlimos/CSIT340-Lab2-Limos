export default function ContactLink({ label, href, text }) {
    return (
        <li className="mb-2" list-none>
            <span className="inline-block w-20 text-black font-normal">{label}:</span>
            <a href={href} className="text-blue-600 underline">{text}</a>
        </li>
    );
}