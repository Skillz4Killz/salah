import { ChapterSection } from "@/constants/chapters";
import Content from "./Content";

export function Section(props: SectionProps) {
    return (
        <div>
            <h3 className="text-2xl font-bold">{props.section.name}</h3>
            <br />
            {props.section.content.map((content, i) => (
                <Content key={i} content={content} />
            ))}
        </div>
    )
}

export default Section;

interface SectionProps {
    section: ChapterSection;
}