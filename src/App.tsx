import { useState, useEffect } from "react";
import Intro from "./components/Intro";
import Contact from "./components/Contact";
import Footer from "./components/Footer";
import Portfolio from "./components/Portfolio";
import Timeline from "./components/Timeline";
import Sun from "./svg/sun.svg";
import Moon from "./svg/moon.svg";
import github_white from "./svg/github-mark-white.svg";
import github_mark from "./svg/github-mark.svg";

function App() {
  const [theme, setTheme] = useState(null || "");
  const [lang, setLang] = useState("ENG");

  useEffect(() => {
    if (window.matchMedia("(prefers-color-scheme:dark)").matches) {
      setTheme("dark");
    } else {
      setTheme("light");
    }
  }, []);

  const handleThemeSwitch = () => {
    setTheme(theme === "dark" ? "light" : "dark");
  };

  const handleLangSwitch = () => {
    setLang(lang === "RU" ? "ENG" : "RU");
  };

  useEffect(() => {
    if (theme === "dark") {
      document.documentElement.classList.add("dark");
    } else {
      document.documentElement.classList.remove("dark");
    }
  }, [theme]);

  return (
    <>
      <button
        type="button"
        onClick={handleLangSwitch}
        className="fixed p-2 z-10 right-20 top-4 text-sm bg-slate-300 dark:bg-yellow-100 rounded-md"
      >
        {lang}
      </button>
      <button
        type="button"
        onClick={handleThemeSwitch}
        className="fixed p-2 z-10 right-5 top-4 bg-slate-300 dark:bg-yellow-100 text-lg rounded-md"
      >
        {theme === "dark" ? <img src={Sun} alt="sun" className="w-5" /> : <img src={Moon} alt="sun" className="w-5" />}
      </button>
      <a
        target="_black"
        rel="noopener noreferrer"
        className="fixed p-2 z-10 left-5 top-4 bg-slate-300 dark:bg-yellow-100 text-lg rounded-md"
        href="https://github.com/FolseV"
      >
        {theme === "dark" ? (
          <img src={github_mark} alt="github-logo" className="w-5" />
        ) : (
          <img src={github_white} alt="github-logo-white" className="w-5" />
        )}
      </a>

      <div className="bg-white dark:bg-stone-900 text-stone-900 dark:text-stone-300 min-h-screen font-inter">
        <div className="max-w-5x1 w-11/12 mx-auto">
          <Intro lang={lang} />
          <Portfolio theme={theme} />
          <Timeline lang={lang} />
          <Contact lang={lang} />
          <Footer />
        </div>
      </div>
    </>
  );
}

export default App;
