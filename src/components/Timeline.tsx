import timeline from "../data/timeline";
import TinelineItem from "./TinelineItem";
import Title from "./Title";
type Props = {
  lang: string;
};
const Timeline = ({ lang }: Props) => {
  return (
    <div className="flex flex-col md:flex-row justify-center  my-20 ">
      <div className="w-full md:w-7/12">
        <Title id="">Timeline</Title>
        {timeline.map((item) => (
          <TinelineItem
            year={lang === "ENG" ? item.year : item.year_ru}
            title={lang === "ENG" ? item.title : item.title_ru}
            duration={lang === "ENG" ? item.duration : item.duration_ru}
            details={lang === "ENG" ? item.details : item.details_ru}
          />
        ))}
      </div>
    </div>
  );
};

export default Timeline;
