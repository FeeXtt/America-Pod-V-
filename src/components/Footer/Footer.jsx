import Map from './Map/Map';

export default function Footer() {
  return (
    <>
      <footer className="bg-slate-700 p-6 text-white text-center sm-full mt-auto">

        <div className="lg:flex">
        <div className="lg:w-3/5 w-full sm:flex gap-4 border-r border-white ">

        <div className="p-5 border-r border-white" >
            <h1 className="text-3xl font-bold ">Hello world!</h1>
            <p className="underline">© 2020 Your Company, Inc. All rights reserved.</p>
          </div>

          <div className="p-5 border-r border-white">
          <h1 className="text-3xl font-bold   ">Hello world!</h1>
            <p className="underline">© 2020 Your Company, Inc. All rights reserved.</p>
          </div>

          <div className="p-5 border-r border-white">
          <h1 className="text-3xl font-bold   ">Hello world!</h1>
            <p className="underline">© 2020 Your Company, Inc. All rights reserved.ewewqewqewq e wewqewqewqewqewqoni we jwhn</p>
            <p>zewqgewezwuqgewqzgeqwezgu</p>
          </div>
          
        </div>
        
        <div className="lg:w-2/5 w-full ">
         <Map/>
        </div>

        </div>

        <div className="pt-6">
          <p className="bold">gwewqguewqeugwqezguwq.</p>
          <p>© 2024 Všechna práva vyhrazena.</p>
        </div>

      </footer>
    </>
  )
}
