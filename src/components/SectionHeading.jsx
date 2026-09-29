export default function SectionHeading({ title, subtitle }) {
    return (
        <>
            <h2 className="text-2xl font-bold font-serif text-black mt-6">{title}</h2>
            <p className="text-black font-normal text-base my-2">{subtitle}</p>
        </>
    );
}
