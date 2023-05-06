import Search from "../assets/Search";

function SearchBar() {
  return (
    <>
      <div className="flex items-center border border-gray-200 py-3 px-2 focus:border-black hover:border-gray-400">
        <Search />
        <input
          type="text"
          placeholder="Etkinlik Ara"
          className="outline-none ml-1 w-[130px]"
        />
      </div>
    </>
  );
}

export default SearchBar;
