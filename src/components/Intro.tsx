type Props = {
  lang: string;
};

const Intro = ({ lang }: Props) => {
  let text = "";
  if (lang === "ENG") {
    text = `Hi! I'm Vlad and I am front-end web developer doing all things creative to make web a more unique and awesome place. Passionate
  about learning and development with desire to apply skills on a larger development team. Eager to tackle more complex problems and
  continue to find ways to maximize user efficiency.`;
  } else {
    text = `Привет! Меня зовут Влад, и я веб-разработчик, занимаюсь всем творческим подходом, чтобы сделать Интернет более уникальным и потрясающим. Страстный
    об обучении и развитии с желанием применить навыки в более крупной команде разработчиков. Стремление решать более сложные проблемы и
    продолжать искать способы максимизировать эффективность пользователей.`;
  }

  return (
    <div className="flex items-center justify-center flex-col text-center pt-20 pb-6">
      <h1 className="text-4xl md:text-7xl dark:text-white mb-1 md:mb-3 font-bold">Vlad Drevilo</h1>
      <p className="text-base md:text-xl mb-3 font-medium">Software Engineer & Web developer</p>
      <p className="text-sm max-w-xl mb6 font-bold">{text}</p>
    </div>
  );
};

export default Intro;
