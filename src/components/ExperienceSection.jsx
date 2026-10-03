import SectionHeading from "./SectionHeading";
import TimelineItem from "./TimelineItem";

export default function ExperienceSection() {
    return (
        <section id="experience" className="max-w-4xl mx-auto px-6 py-16 border-t border-stone-200 scroll-mt-16">
            <SectionHeading title="Experience" subtitle="Where I have learned and worked." />
            <ol className="mt-8 space-y-8 border-l border-stone-200">
                <TimelineItem
                    period="2024 - Present"
                    title="BS Information Technology"
                    place="Cebu Institute of Technology - University"
                    description="Taking up web development, databases, and systems analysis."
                />
                <TimelineItem
                    period="2024"
                    title="IT Intern"
                    place="Recososa Law Firm, IT Park"
                    description="Set up software, and created a simple website for the firm."
                />
                <TimelineItem
                    period="2022 - 2024"
                    title="Robotics Club Officer"
                    place="University of Cebu - Main"
                    description="Built Arduino-based robots."
                />
            </ol>
        </section>
    );
}