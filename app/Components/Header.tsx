import Logo from "../assets/Logo";
import Search from "../assets/Search";
import SearchBar from "./SearchBar";
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
          <li className="focus:active">Tiyatro</li>
          <li>Konser</li>
          <li>Stand Up</li>
          <li>Sinema</li>
          <li>Cocuk</li>
        </ul>
        <SearchBar />
      </div>
    </div>
  );
}

export default Header;
