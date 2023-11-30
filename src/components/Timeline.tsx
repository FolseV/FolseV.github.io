import timeline from "../data/timeline";
import TinelineItem from "./TinelineItem";
import Title from "./Title";

const Timeline = () => {
  return (
    <div className="flex flex-col md:flex-row justify-center  my-20 ">
      <div className="w-full md:w-7/12">
        <Title id="">Timeline</Title>
        {timeline.map((item) => (
          <TinelineItem year={item.year} title={item.title} duration={item.duration} details={item.details} />
        ))}
      </div>
    </div>
  );
};

export default Timeline;
