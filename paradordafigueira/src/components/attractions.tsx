import atraction1 from "../assets/images/atracoes/atraction1.png";
import atraction10 from "../assets/images/atracoes/atraction10.png";
import atraction11 from "../assets/images/atracoes/atraction11.png";
import atraction12 from "../assets/images/atracoes/atraction12.png";
import atraction13 from "../assets/images/atracoes/atraction13.png";
import atraction14 from "../assets/images/atracoes/atraction14.png";
import atraction15 from "../assets/images/atracoes/atraction15.png";
import atraction16 from "../assets/images/atracoes/atraction16.png";
import atraction17 from "../assets/images/atracoes/atraction17.png";
import atraction18 from "../assets/images/atracoes/atraction18.png";
import atraction19 from "../assets/images/atracoes/atraction19.png";
import atraction2 from "../assets/images/atracoes/atraction2.png";
import atraction3 from "../assets/images/atracoes/atraction3.png";
import atraction4 from "../assets/images/atracoes/atraction4.png";
import atraction5 from "../assets/images/atracoes/atraction5.png";
import atraction6 from "../assets/images/atracoes/atraction6.png";
import atraction7 from "../assets/images/atracoes/atraction7.png";
import atraction8 from "../assets/images/atracoes/atraction8.png";
import atraction9 from "../assets/images/atracoes/atraction9.png";
export function Attractions() {
  return (
    <div className="flex flex-col w-full items-center gap-4 overflow-hidden mt-24 bg-gradient-to-b from-transparent via-black to-[black] pb-14">
      <h2 className="mb-8 text-custom-yellow-400 text-7xl text-center font-Glorious uppercase tracking-[0.12em] text-shadow shadow-amber-900">
        Shows
      </h2>

      <div className="flex w-full items-center justify-center gap-2">
        <img src={atraction1} alt="" className="w-[31%]" />
        <img src={atraction2} alt="" className="w-[31%]" />
        <img src={atraction3} alt="" className="w-[31%]" />
      </div>
      <div className="flex w-full items-center justify-center gap-2">
        <img src={atraction4} alt="" className="w-[31%]" />
        <img src={atraction5} alt="" className="w-[31%]" />
        <img src={atraction6} alt="" className="w-[31%]" />
      </div>
      <div className="flex w-full items-center justify-center gap-2">
        <img src={atraction7} alt="" className="w-[31%]" />
        <img src={atraction8} alt="" className="w-[31%]" />
        <img src={atraction9} alt="" className="w-[31%]" />
      </div>
      <div className="flex w-full items-center justify-center gap-2">
        <img src={atraction10} alt="" className="w-[31%]" />
        <img src={atraction11} alt="" className="w-[31%]" />
        <img src={atraction12} alt="" className="w-[31%]" />
      </div>
      <div className="flex w-full items-center justify-center gap-2">
        <img src={atraction13} alt="" className="w-[31%]" />
        <img src={atraction14} alt="" className="w-[31%]" />
        <img src={atraction15} alt="" className="w-[31%]" />
      </div>

      <div className="flex w-full items-center justify-center gap-14">
        <img src={atraction16} alt="" className="w-[31%]" />
        <img src={atraction17} alt="" className="w-[31%]" />
      </div>
      <div className="flex w-full items-center justify-center gap-14">
        <img src={atraction18} alt="" className="w-[31%]" />
        <img src={atraction19} alt="" className="w-[31%]" />
      </div>
    </div>
  );
}
