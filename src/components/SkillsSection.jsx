import SectionHeading from "./SectionHeading";
import SkillTag from "./SkillTag";

export default function SkillsSection() {
    return (
        <section id="skills" className="mt-8">
            <SectionHeading title="Skills" subtitle="What I work with." />
            <div className="mt-4">
                <div className="mb-4">
                    <h3 className="font-bold text-black text-base">Languages</h3>
                    <div className="mt-1">
                        <SkillTag name="HTML" />
                        <SkillTag name="CSS" />
                        <SkillTag name="JavaScript" />
                        <SkillTag name="Java" />
                    </div>
                </div>
                <div className="mb-4">
                    <h3 className="font-bold text-black text-base">Frameworks</h3>
                    <div className="mt-1">
                        <SkillTag name="React" />
                        <SkillTag name="Tailwind CSS" />
                        <SkillTag name="Bootstrap" />
                    </div>
                </div>
                <div className="mb-4">
                    <h3 className="font-bold text-black text-base">Tools</h3>
                    <div className="mt-1">
                        <SkillTag name="Git" />
                        <SkillTag name="VS Code" />
                        <SkillTag name="MySQL" />
                        <SkillTag name="Figma" />
                    </div>
                </div>
            </div>
        </section>
    );
}