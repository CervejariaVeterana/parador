import { useEffect, useState } from "react";
import paradorImg from "./assets/images/cabecalho.png";
import { Attractions } from "./components/attractions";
import { Footer } from "./components/footer";
import { Header } from "./components/header";
import { Infos } from "./components/infos";
import { Notice } from "./components/notice";
import { Schedule } from "./components/schedule";
import "./index.css";

function App() {
  const [width, setWidth] = useState<number>(window.innerWidth);

  function handleWindowSizeChange() {
    setWidth(window.innerWidth);
  }

  useEffect(() => {
    window.addEventListener("resize", handleWindowSizeChange);
    return () => {
      window.removeEventListener("resize", handleWindowSizeChange);
    };
  }, []);

  const isMobile = width <= 768;

  return (
    <div className="bg-def-400 w-full h-[100vh] overflow-auto">
      {isMobile ? (
        <>
          <Header />
          <Infos />
          <Notice />
          <Attractions />
          <Schedule />
          <Footer />
        </>
      ) : (
        <div className="flex flex-col gap-12 items-center w-full h-full">
          <img src={paradorImg} alt="" className="w-[28%] h-[70%]" />
          <p className="text-white text-2xl">Acesso Via dispositivo Mobile</p>
        </div>
      )}
    </div>
  );
}

export default App;
