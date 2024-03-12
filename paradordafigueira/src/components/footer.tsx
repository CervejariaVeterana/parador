import logo from "../assets/images/logo_horizontal.png";
import map from "../assets/images/mapa.png";
export function Footer() {
  return (
    <div className="flex flex-col items-center text-center mt-16 pb-16 bg-gradient-to-b from-transparent to-[rgba(0,0,0,0.24)]">
      <h2 className="mb-3 text-custom-yellow-400 text-6xl text-center font-Glorious uppercase tracking-[0.1em] text-shadow shadow-amber-900">
        Local
      </h2>
      <p className="text-custom-yellow-100 flex flex-col text-lg font-Flexo text-shadow shadow-amber-900">
        É bem fácil de localizar o Parador: estamos no estacionamento ao lado do
        prédio Business Iguatemi, e o melhor acesso é pela
      </p>
      <a
        href="https://maps.app.goo.gl/mZ6CDhmPssz3dGWv5"
        className="text-white text-2xl mt-4 mb-10 underline font-Flexo text-shadow shadow-amber-900"
        target="_blank"
      >
        AV ANTÔNIO CARLOS BERTA, 51 <br /> BOA VISTA, PORTO ALEGRE.
      </a>

      <img src={map} alt="" className="w-[90%]" />

      <img src={logo} alt="" className="w-[65%] mt-12" />
    </div>
  );
}
