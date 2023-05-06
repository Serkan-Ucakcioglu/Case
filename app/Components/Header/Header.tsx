import Logo from "@/app/assets/Logo";
import Main from "./Main/Main";
import Bar from "./Bar/Bar";

function Header() {
  return (
    <div className="flex flex-col w-full">
      <div className="flex flex-col items-center">
        <Logo />
        <h1 className="head-title mt-[45px] font-bold">ETKİNLİKLER</h1>
      </div>
      <Main />
      <Bar />
    </div>
  );
}

export default Header;
