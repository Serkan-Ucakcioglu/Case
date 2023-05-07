"use client";
import { useEffect, useState } from "react";
import Search from "../../../assets/Search";
import useDebounce from "@/app/hooks/useDebounce";
import { useAppDispatch, useAppSelector } from "@/app/Features/store";
import { dataFilter, selectedData } from "@/app/Features/searchSlice";
import { arr } from "@/app/data/data";

const cols = ["name", "title", "tag", "color"];

function SearchBar() {
  const [value, setValue] = useState("");
  const debounce = useDebounce(value);
  const data = useAppSelector(selectedData);
  const dispatch = useAppDispatch();

  useEffect(() => {
    if (debounce == "") {
      dispatch(dataFilter(arr));
    } else {
      const filtered = data?.filter((user: any) =>
        cols.some((key: any) =>
          user[key]?.toLowerCase().includes(value.trim()?.toLowerCase())
        )
      );
      dispatch(dataFilter(filtered));
    }
  }, [debounce]);

  return (
    <>
      <div className="hidden hover:shadow md:flex items-center absolute right-60 max-w-[200px] border border-gray-200 py-3 px-2 focus:border-black hover:border-gray-400">
        <Search />
        <input
          type="text"
          value={value}
          onChange={(e) => setValue(e.target.value)}
          placeholder="Etkinlik Ara"
          className="outline-none ml-1 w-[130px]"
        />
      </div>
    </>
  );
}

export default SearchBar;
