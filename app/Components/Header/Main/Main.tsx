import SearchBar from "./SearchBar";

function Main() {
  return (
    <>
      <div className="flex relative  justify-center px-4 items-center mt-[40px]">
        <ul className="flex gap-x-4 sm:gap-x-8">
          <li className="active">Tüm Etkinlikler</li>
          <li className="focus:active">Tiyatro</li>
          <li>Konser</li>
          <li>Stand Up</li>
          <li>Sinema</li>
          <li>Cocuk</li>
        </ul>
        <SearchBar />
      </div>
    </>
  );
}

export default Main;
