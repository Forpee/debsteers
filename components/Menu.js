export default function Menu() {
  return (
    <div className="bg-white menu overflow-x-hidden w-screen pb-4">
      <div className=" bg-black mx-auto container">
        <div className="">
          <img className="mx-auto w-full " src="/kenya-hero-image.webp" />
        </div>
        <div>
          <h1 className="text-center mx-auto text-3xl font-semibold bg-beige py-4">
            {" "}
            ESCOLHA A SUA BASE*
          </h1>
          <div className="md:h-72 w-full bg-beige md:flex md:divide-x-2 divide-black text-center  font-semibold pb-4">
            <div className=" md:w-1/4 px-4 h-full">
              <h1 className=" text-2xl text-left mb-4">ORIGINAL</h1>
              <p className="text-left my-auto md:pb-0 pb-4">
                Todas as nossas pizzas, tirando a Especialidade, são feitas com
                a base original excepto quando solicitado em contrário. Os
                preços são aplicáveis às bases large (30cm) e refl etem quanto
                tem de acrescentar sobre o preço original da pizza.
              </p>
            </div>
            <div className=' md:w-1/4'>
              <h1 className="text-2xl">THIN and crispy</h1>
              <img className="w-64 m-auto" src="Thin-Base.webp"></img>
            </div>
            <div className=' md:w-1/4'>
              <h1 className="text-2xl">Double-stack +350</h1>
              <img className="w-64 m-auto" src="Crammed_Crust.webp"></img>
            </div>
            <div className=' md:w-1/4'>
              <h1 className="text-2xl">Crammed-Crust +350</h1>
              <img className="w-64 m-auto" src="double-stack-slice.webp"></img>
            </div>
          </div>
        </div>
        <div className="md:flex w-full">
          <div className="md:w-1/3 h-full">
            <img src="menu-1.png" />
          </div>
          <div className="md:w-1/3">
            <img
              src="/kenya-original-veggie.webp"
              className="w-full overflow-hidden h-full"
            />
          </div>
          <div className="md:w-1/3">
            <img src="veg.png" />
          </div>
        </div>
        <div className="md:flex w-full">
          <div className="md:w-1/3 ">
            <img className='object-cover h-full w-full' src="/kenya-mexican-fiesta.webp" />
          </div>
          <div className="md:w-1/3">
            <img src="chicken.png" className="" />
          </div>
          <div className="md:w-1/3">
            <img className='object-cover w-full' src="/kenya-tikka-chicken.webp" />
          </div>
        </div>
        <div>
          <img src="/hal_half.png" className="w-full "></img>
        </div>
        <div className="w-full md:flex">
          <div className="md:w-1/2">
            <img className='h-full object-cover w-full' src="/meaty-cram-decker.jpg"></img>
          </div>{" "}
          <div className="md:w-1/2">
            <img  className='h-full  w-full' src="/cramed-decker-menu-1-768x424.png"></img>
          </div>
        </div>
        <div className="w-full md:flex">
          <div className="md:w-1/2 ">
            <img className="h-full object-cover " src="/creamy-chicken-triple-decker.jpg"></img>
          </div>{" "}
          <div className="md:w-1/2">
            <img className="object-cover w-full h-full" src="/trile-decker-menu.png"></img>
          </div>
        </div>
      </div>
    </div>
  );
}
