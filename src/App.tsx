import { useState, useEffect } from "react";
import Intro from "./components/Intro";
import Contact from "./components/Contact";
import Footer from "./components/Footer";
import Portfolio from "./components/Portfolio";
import Timeline from "./components/Timeline";
import Sun from "./assets/sun.svg";
import Moon from "./assets/moon.svg";

function App() {
  const [theme, setTheme] = useState(null || "");

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
        onClick={handleThemeSwitch}
        className="fixed p-2 z-10 right-5 top-4 bg-slate-300 dark:bg-orange-200 text-lg rounded-md"
      >
        {theme === "dark" ? <img src={Sun} alt="sun" className="w-5" /> : <img src={Moon} alt="sun" className="w-5" />}
      </button>

      <div className="bg-white dark:bg-stone-900 text-stone-900 dark:text-stone-300 min-h-screen font-inter">
        <div className="max-w-5x1 w-11/12 mx-auto">
          <Intro />
          <Portfolio />
          <Timeline />
          <Contact />
          <Footer />
        </div>
      </div>
    </>
  );
}

export default App;
