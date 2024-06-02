import Map from "./Map/Map";
import FacebookLogo from "./FacebookLogo.png";
import InstagramLogo from "./InstagramLogo.png";
import "./Footer.css";

export default function Footer() {
  return (
    <>
      <footer className="bg-slate-900 p-6 md-full mt-auto">
        <div className="lg:flex  text-center ">
          <div className="lg:w-3/4 w-full text-center md:text-left sm:flex gap-4 ">

            <div className="md:w-1/3 p-5">

              <h1 className="text-2xl font-notable text-center">Otevírací Doba</h1>
              <br />
              <div className="2xl:w-3/5 xl:w-4/5 sm:w-full w-2/4 mx-auto flex text-right xl:text-right">
                <div className="w-1/5 ">
                  <p className="my-0.5">Pondělí:</p>
                  <p className="my-0.5">Úterý:</p>
                  <p className="my-0.5">Středa:</p>
                  <p className="my-0.5">Čtvrtek:</p>
                  <p className="my-0.5">Pátek:</p>
                  <p className="my-0.5">Sobota:</p>
                  <p className="my-0.5">Neděle:</p>
                </div>
                <div className="w-4/5 text-right xl:">
                  <p className="my-0.5">11:00 - 22:00</p>
                  <p className="my-0.5">11:00 - 22:00</p>
                  <p className="my-0.5">11:00 - 22:00</p>
                  <p className="my-0.5">11:00 - 22:00</p>
                  <p className="my-0.5">11:00 - 22:00</p>
                  <p className="my-0.5">11:30 - 22:00</p>
                  <p className="my-0.5">ZAVŘENO</p>
                </div>
              </div>
            </div>

            <div className="sm:w-1/3  m-5 text-center">
              <h1 className="text-2xl font-notable  ">Kontakt </h1>
              <br />
              <p>Tel: 326 322 007</p>

              <h1 className="text-2xl font-notable mt-11 ">Rozvoz</h1>
              <br />
              <a
                href="https://www.foodora.cz/restaurant/iqu6/america-pod-vezi"
                className="underline "
              >
                Foodora
              </a>
              <br/>
              <br/>
            </div>

            <div className="sm:w-1/4 text-center sm:text-left m-5  leading-7">
              <h1 className="text-2xl font-notable  ">Adresa</h1>
              <br />
              <p>Komenského nám. 61, 293 01 Mladá Boleslav 1</p>
            </div>
          </div>

          <div className="lg:w-2/5 p-5 max-w-full z-0">
            <Map />
          </div>
        </div>

        <div className="pt-3 text-center text-sm">
          <div className="flex gap-6 justify-center mb-3">
            <a href="https://www.facebook.com/America-POD-V%C4%9A%C5%BD%C3%8D-1587036434862535">
              <img src={FacebookLogo} alt="Facebook" className=" max-h-8" />
            </a>
            <a href="https://www.instagram.com/americapodvezi/">
              <img src={InstagramLogo} alt="Facebook" className=" max-h-8" />
            </a>
          </div>
          <p className="bold">
            Vytvořil: Lukáš Pavlíček, Michal Dvořák a Stanislav Cinkl
          </p>
          <p>© 2024 Všechna práva vyhrazena.</p>
        </div>
      </footer>
    </>
  );
}
