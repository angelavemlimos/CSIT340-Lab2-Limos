import SectionHeading from './SectionHeading';
import ContactLink from './ContactLink';

export default function ContactSection() {
    return (
        <section id="contact" className="mt-8">
            <SectionHeading title="Contact" subtitle="Say hi." />
            <ul className="mt-4 p-0">
                <ContactLink
                    label="Email"
                    href="mailto:angelavem.limos@cit.edu"
                    text="angelavem.limos@cit.edu"
                />
                <ContactLink
                    label="GitHub"
                    href="https://github.com/angelavemlimos"
                    text="github.com/angelavemlimos"
                />
                <ContactLink
                    label="LinkedIn"
                    href="https://www.linkedin.com/in/angelavemlimos/"
                    text="linkedin.com/in/angelavemlimos"
                />
            </ul>
        </section>
    );
}