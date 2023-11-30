type Props = {
  year: string;
  title: string;
  duration: string;
  details: string;
};

const TinelineItem = ({ year, title, duration, details }: Props) => {
  return (
    <div>
      <ol className="flex flex-col md:flex-row realtive border-l border-stone-200 dark:border-stone-700">
        <li className="marker:text-grey-300 list-outside list-disc  mb-10 ml-4">
          <p className="flex flex-wrap gap-4 flex-row items-center justify-start text-xs md:text-sm">
            <span className="inline-block px-2 py-1 font-semibold text-white dark:text-stone-900 bg-stone-900 dark:bg-white rounded-md">
              {year}
            </span>
            <h3 className="text-lg font-semibold text-stone-900 dark:text-white">{title}</h3>
            <div className="my-1 text-sm font-normal leading-none text-stone-400 dark:text-stone-500">{duration}</div>
          </p>
          <p className="my-2 text-base font-normal text-stone-500 dark:text-stone-400">{details}</p>
        </li>
      </ol>
    </div>
  );
};

export default TinelineItem;
