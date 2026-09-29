import SectionHeading from './SectionHeading.jsx';
import Fact from './Fact.jsx';

export default function AboutSection() {
    return (
        <section id="about" className="mt-8">
            <SectionHeading title="About" subtitle="A little about who I am." />
            <p className="text-black font-normal text-base my-4">
                I grew up in Talisay and moved to Cebu City for college. I picked IT because I
                wanted to build things people actually open. So far my favorite part is the moment
                something finally runs.
            </p>
            <dl className="mt-4">
                <Fact label="Course" value="BS Information Technology" />
                <Fact label="Year level" value="Third Year" />
                <Fact label="School" value="CIT-U" />
                <Fact label="Based in" value="Cebu City" />
            </dl>
        </section>
    );
}