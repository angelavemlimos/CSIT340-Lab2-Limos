import SectionHeading from "./SectionHeading";
import TimelineItem from "./TimelineItem";

export default function ExperienceSection() {
    return (
        <section id="experience" className="mt-8">
            <SectionHeading title="Experience" subtitle="Where I have learned and worked." />
            <ul className="mt-4 p-0">
                <TimelineItem
                    period="1. 2024 - Present"
                    title="BS Information Technology"
                    place="Cebu Institute of Technology - University"
                    description="Taking up web development, databases, and systems analysis."
                />
                <TimelineItem
                    period="2. 2025"
                    title="Student Assistant"
                    place="CCS Computer Laboratory"
                    description="Set up lab machines and helped students with software installs."
                />
                <TimelineItem
                    period="3. 2022 - 2024"
                    title="Senior High School, ICT Strand"
                    place="Talisay City National High School"
                    description="Built my first web page and got hooked."
                />
            </ul>
        </section>
    );
}