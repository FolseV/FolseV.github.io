import github_white from "../svg/github-mark-white.svg";
import github_mark from "../svg/github-mark.svg";

type PortfolioProps = {
  title: string;
  imgUrl: string;
  stack: string[];
  link: string;
  theme: string;
};

const PortfolioItem = ({ title, imgUrl, stack, link, theme }: PortfolioProps) => {
  return (
    <>
      <div className="border-2 border-stone-900 dark:border-white rounded-md overflow-hidden">
        <a
          href={link}
          className=" display: inline-block m-2 p-1 z-10 left-2 top-2 dark:bg-stone-900 text-lg rounded-md object-contain h-9 w-9 cursor-pointer"
          target="_black"
          rel="noopener noreferrer"
        >
          {theme === "dark" ? <img src={github_white} alt="github-logo" /> : <img src={github_mark} alt="github-logo-white" />}
        </a>
        <img src={imgUrl} alt="portfolio" className="w-full h-36 md:h-48 object-cover" />
        <div className="w-full p-4">
          <h3 className="text-lg md:text-xl mb-2 md:mb-3 font-semibold dark:text-white">{title}</h3>
          <p className="flex flex-wrap gap-2 flex-row items-center justify-start text-xs md:text-sm dark:text-white">
            {stack.map((item) => (
              <span className="inline-block px-2 py-1 font-semibold border-2 border-stone-900  dark:border-white rounded-md">{item}</span>
            ))}
          </p>
        </div>
      </div>
    </>
  );
};

export default PortfolioItem;
