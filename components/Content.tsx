import { ChapterSectionContent } from "@/constants/chapters";
import Ayah from "./Ayah";

export function Content(props: ContentProps) {
  return (
    <div>
      <h4 className="text-xl font-bold">{props.content.name}</h4>
      <br />
      
      {props.content.text.map((text, ii) => {
        if (text.startsWith("salahayahabc")) {
          const [x, surah, ayah] = text.split("-");

          return <Ayah key={ii} surah={Number(surah)} ayah={Number(ayah)} />;
        }

        return (
          <div key={ii}>
            <p>{text}</p>
            <br />
          </div>
        );
      })}
    </div>
  );
}

export default Content;

interface ContentProps {
  content: ChapterSectionContent;
}
