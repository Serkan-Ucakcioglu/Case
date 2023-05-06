import Logo from "../assets/Logo";
function Header() {
  return (
    <div className="flex flex-col">
      <div className="flex flex-col items-center">
        <Logo />
        <h1 className="head-title mt-[45px] font-bold">ETKİNLİKLER</h1>
      </div>
      <div className="flex w-full mt-[40px]">
        <ul className="flex gap-x-8">
          <li className="active">Tüm Etkinlikler</li>
          <li>Tiyatro</li>
          <li>Konser</li>
          <li>Stand Up</li>
          <li>Sinema</li>
          <li>Cocuk</li>
        </ul>
        <div className=" flex ml-auto">se</div>
      </div>
    </div>
  );
}

export default Header;
