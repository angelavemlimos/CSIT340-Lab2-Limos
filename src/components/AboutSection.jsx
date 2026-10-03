import SectionHeading from './SectionHeading.jsx';
import Fact from './Fact.jsx';

export default function AboutSection() {
    return (
        <section id="about" className="max-w-4xl mx-auto px-6 py-16 border-t border-stone-200 scroll-mt-16">
            <SectionHeading title="About" subtitle="A little about who I am." />
            <p className="mt-6 max-w-2xl leading-relaxed text-stone-700">
                I grew up in Cebu City and chose IT in my studies. It started
                in high school when I enrolled in the ICT strand, focusing on networking and robotics.
                I found myself drawn to web development, and I enjoy building useful systems for the people around me.
            </p>
            <dl className="mt-8 grid grid-cols-2 gap-6 sm:grid-cols-4">
                <Fact label="Course" value="BS Information Technology" />
                <Fact label="Year level" value="Third Year" />
                <Fact label="School" value="CIT-U" />
                <Fact label="Based in" value="Cebu City" />
            </dl>
        </section>
    );
}