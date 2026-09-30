export default function ProjectCard({ year, title, description, tech, link }) {
    return (
        <article className="mb-6">
            <p className="text-xs font-normal text-black">{year}</p>
            <h3 className="text-lg font-bold font-serif text-black mt-1">{title}</h3>
            <p className="text-black font-normal text-base my-1 max-w-xl">{description}</p>
            <p className="text-sm text-black">{tech}</p>
            <a href={link} className="text-blue-600 underline inline-block mt-1">View on GitHub</a>
        </article>
    );
}