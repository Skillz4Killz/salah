import { Chapter as ChapterType } from "@/constants/chapters";
import Section from "./Section";

export function Chapter(props: ChapterProps) {
  return (
    <div>
      <h2 className="text-3xl text-red-300">{props.chapter.name}</h2>
      <p className="text-cyan-100">{props.chapter.subheading}</p>
      {props.chapter.sections.map((section, i) => (
        <Section key={i} section={section} />
      ))}
    </div>
  );
}

export default Chapter;

interface ChapterProps {
  chapter: ChapterType;
}
