import infosBg from "../assets/images/infos.png";
export function Infos() {
  return (
    <div className="flex flex-col mt-10 items-center relative">
      <img src={infosBg} alt="" className="w-[95%]" />

      <div className="flex flex-col w-[95%] absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2">
        <h2 className="text-custom-yellow-400 text-5xl text-center font-Glorious uppercase tracking-[0.1em] text-shadow shadow-amber-900">
          Entrada Gratuita
        </h2>
        <p className="text-custom-yellow-100 text-center mb-6 uppercase text-3xl tracking-[0.1em] font-Glorious text-shadow shadow-amber-900">
          Das 17H as 22H
        </p>

        <h2 className="text-custom-yellow-400 text-5xl text-center font-Glorious uppercase tracking-[0.1em] text-shadow shadow-amber-900">
          De Quarta a Domingo
        </h2>
        <p className="text-custom-yellow-100 text-center mb-6 uppercase text-3xl tracking-[0.1em] font-Glorious text-shadow shadow-amber-900">
          No estacionamento externo do iguatemi, acesso B
        </p>

        <h2 className="text-custom-yellow-400 text-5xl text-center font-Glorious uppercase tracking-[0.1em] text-shadow shadow-amber-900">
          Shows ao vivo
        </h2>
        <p className="text-custom-yellow-100 text-center mb-6 uppercase text-3xl tracking-[0.1em] font-Glorious text-shadow shadow-amber-900">
          De Quinta a Domingo, das 19H as 21H
        </p>
      </div>
    </div>
  );
}
