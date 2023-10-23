import DropDown from "../dropDown__header/DropDown";
import PublicIcon from "@mui/icons-material/Public";
import ContentPasteIcon from "@mui/icons-material/ContentPaste";
import MoreHorizIcon from "@mui/icons-material/MoreHoriz";
import TuneIcon from "@mui/icons-material/Tune";

const Header = () => {
  return (
    <div className="flex items-center justify-between w-[100vw] p-4 bg-header__bg text-text__color">
      <div className="left__header flex gap-3 items-center ml-2 ">
        <h1 className="uppercase font-bold text-xl">FE-Assignment</h1>
        <div className="flex gap-3 items-center">
          <PublicIcon fontSize="12px" />
          <p className="font-semibold">Public</p>
        </div>
        <div className=" bg-button-bg board__button flex items-center gap-1 px-2 py-1 rounded-sm text-header__bg cursor-pointer hover:bg-text__color transiti  duration-150">
          <ContentPasteIcon fontSize="12px" />
          <p className="font-semibold  ">Board</p>
        </div>
        <DropDown className="hover:bg-slate-300" />
      </div>
      <div className="right__header flex items-center gap-[5px]">
        <div className="flex gap-2">
          <TuneIcon />
          <p>Filters</p>
        </div>
        <span className="border-r-[1px] h-4 ">&nbsp;</span>
        <div className="flex items-center gap-2">
          <div className="profile bg-secondary rounded-2xl px-[8px] py-1.5 cursor-pointer text-sm">
            AE
          </div>
          <MoreHorizIcon />
        </div>
      </div>
    </div>
  );
};

export default Header;
