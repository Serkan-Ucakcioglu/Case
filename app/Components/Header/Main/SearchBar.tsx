import Search from "../../../assets/Search";
function SearchBar() {
  return (
    <>
      <div className="hidden hover:shadow md:flex items-center absolute right-60 max-w-[200px] border border-gray-200 py-3 px-2 focus:border-black hover:border-gray-400">
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
