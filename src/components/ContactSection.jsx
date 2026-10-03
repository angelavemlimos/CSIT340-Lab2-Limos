import SectionHeading from './SectionHeading';
import ContactLink from './ContactLink';

export default function ContactSection() {
    return (
        <section id="contact" className="max-w-4xl mx-auto px-6 py-16 border-t border-stone-200 scroll-mt-16">
            <SectionHeading title="Contact" subtitle="Say hi." />
            <ul className="mt-8 space-y-3">
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