import Logo from "../assets/Logo";
import Search from "../assets/Search";
function Header() {
  return (
    <div className="flex flex-col">
      <div className="flex flex-col items-center">
        <Logo />
        <h1 className="head-title mt-[45px] font-bold">ETKİNLİKLER</h1>
      </div>
      <div className="flex w-full items-center mt-[40px]">
        <ul className="flex gap-x-8">
          <li className="active">Tüm Etkinlikler</li>
          <li>Tiyatro</li>
          <li>Konser</li>
          <li>Stand Up</li>
          <li>Sinema</li>
          <li>Cocuk</li>
        </ul>
        <div className="flex items-center border border-gray-200 py-3 p-1 focus:border-black hover:border-gray-400">
          <Search />
          <input
            type="text"
            placeholder="Etkinlik Ara"
            className="outline-none ml-1"
          />
        </div>
      </div>
    </div>
  );
}

export default Header;
