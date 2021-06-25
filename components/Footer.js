export default function Footer() {
    return (
      <footer className=" bg-black relative overflow-hidden text-white pt-4">
        <div className="w-screen sm:flex justify-evenly">
          <div className=" sm:w-1/4">
            <hr className="border-1 border-yellow-400 mt-3"></hr>
          </div>
          <div>
            <h1 className="text-3xl text-center">DEBONAIRS</h1>
          </div>
          <div className="sm:w-1/4">
            <hr className="border-1 border-yellow-400 mt-3"></hr>
          </div>
        </div>
        <div className="sm:flex justify-evenly pt-10">
          <div>
            <ul className="text-center">
              <a href="/">
                <li> HOME</li>
              </a>
              <a href="/project-principles">
                <li>MENU</li>
              </a>
              <a href="/gallery">
                <li>DOWNLOAD MENU</li>
              </a>
            </ul>
          </div>
          <div className="flex justify-evenly sm:py-0 py-10">
            <img src="/facebook.svg"></img>
            <img className="px-5" src="/twitter.svg"></img>
            <img src="/instagram.svg"></img>
          </div>
          <div>
            <ul className="text-center">
              <a href="/contact-us">
                <li> ORDER </li>
              </a>
              <a href="/cv">
                <li>CALL US</li>
              </a>
              <a href="/about">
                <li>GO TO STEERS</li>
              </a>
            </ul>
          </div>
        </div>
        <div className="pt-32 mb-3">
          <p className="text-center"> © 2021 | MAINTAINED BY KG</p>
        </div>
        <div className="absolute bg-yellow-400 w-screen h-2 right-0 left-0 top-0 "></div>
      </footer>
    );
  }
  