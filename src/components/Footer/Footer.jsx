import Map from "./Map/Map";

export default function Footer() {
  return (
    <>
      <footer className="bg-slate-700 p-6 text-white sm-full mt-auto">
        <div className="lg:flex mx-12">
          <div className="lg:w-3/5 w-full text-center sm:text-start sm:flex gap-4 ">

            <div className="sm:w-1/3 p-5">
              <h1 className="text-2xl font-notable ">Rozvoz</h1>
              <br/>
              <a href="https://www.foodora.cz/restaurant/iqu6/america-pod-vezi" className="underline ">Foodora
              </a>
            </div>

            <div className="sm:w-1/3 p-5">
              <h1 className="text-2xl font-notable  ">Kontakt </h1>
              <br/>
              <p>
                Tel: 326 322 007
              </p>
            </div>

            <div className="sm:w-1/3 p-5 leading-7">
              <h1 className="text-2xl font-notable  ">Adresa</h1>
              <br/>
              <p>
                Komenského nám. 61, 293 01 Mladá Boleslav 1
              </p>
            </div>
          </div>

          <div className="lg:w-2/5 p-5 max-w-full">
              <Map />
          </div>

        </div>

        <div className="pt-3 text-center text-sm">
          <p className="bold">Vytvořil: Lukáš Pavlíček, Michal Dvořák a Stanislav Cinkl</p>
          <p>© 2024 Všechna práva vyhrazena.</p>
        </div>
      </footer>
    </>
  );
}
