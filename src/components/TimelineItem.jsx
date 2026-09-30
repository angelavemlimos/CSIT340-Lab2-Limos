export default function TimelineItem({ period, title, place, description }) {
    return (
        <li className="mb-4 list-none">
            <p className="text-sm text-black">{period}</p>
            <h3 className="text-base font-bold font-serif text-black">{title}</h3>
            <p className="text-sm text-black">{place}</p>
            <p className="text-base text-black">{description}</p>
        </li>
    );
}