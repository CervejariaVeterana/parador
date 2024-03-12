export function Notice() {
  return (
    <div className="flex flex-col items-center text-white mt-8">
      <div className="flex flex-col w-[90%] gap-3">
        <p className="text-center text-base uppercase font-Flexo">
          *Em caso de chuva o evento poderá ser cancelado.
        </p>
        <p className="border border-white text-center text-sm p-1 font-Flexo">
          Proibido a venda de bebida alcoólica para menores de <br /> 18 anos.
          Se beber não dirija
        </p>

        {/* <button className="cursor-pointer p-2 bg-gradient-to-r from-[#ff4e2e] to-[#FA692D] rounded-full mt-6 text-4xl text-center font-Glorious uppercase tracking-[0.12em]">
          Quero Saber mais
        </button> */}
      </div>
    </div>
  );
}
