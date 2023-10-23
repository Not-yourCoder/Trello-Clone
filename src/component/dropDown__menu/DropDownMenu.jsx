import CloseIcon from "@mui/icons-material/Close";
import DragIndicatorIcon from "@mui/icons-material/DragIndicator";
import LockOutlinedIcon from "@mui/icons-material/LockOutlined";
import ListIcon from "@mui/icons-material/List";
import TableChartIcon from "@mui/icons-material/TableChart";
import ArticleIcon from "@mui/icons-material/Article";
import TimelineIcon from "@mui/icons-material/Timeline";
import DashboardIcon from "@mui/icons-material/Dashboard";
import FmdGoodIcon from "@mui/icons-material/FmdGood";
import { Link } from "react-router-dom";

const DropDownMenu = () => {
  return (
    <div className="bg-dropDownMenu_bg w-[20rem]">
      <div className="menu__header p-4 text-dropDown-text">
        <div className="flex items-center justify-end m-3 bg-black text-color__Dropdown relative">
          <p className="absolute left-16 text-[14px] font-semibold">Upgrade for Views</p>
          <CloseIcon className="cursor-pointer absolute hover:bg-body__bg " fontSize="12px" />
        </div>
        <div className="flex gap-2 mb-3.5 text-color__Dropdown items-center">
          <DragIndicatorIcon />
          <input type="checkbox" name="board" id="board" />
          <ListIcon fontSize="16px" />
          <p>Board</p>
        </div>
        <div className="flex justify-between items mb-3.5 cursor-not-allowed items-center">
          <div className="flex gap-2 items-center">
            <DragIndicatorIcon />
            <input type="checkbox" name="board" id="board" disabled />
            <TableChartIcon fontSize="16px" />
            <p>Table</p>
          </div>
          <LockOutlinedIcon fontSize="14px" />
        </div>
        <div className="flex justify-between mb-3.5 cursor-not-allowed items-center">
          <div className="flex gap-2 items-center">
            <DragIndicatorIcon />
            <input type="checkbox" name="board" id="board" disabled />
            <ArticleIcon fontSize="16px" />
            <p>Calender</p>
          </div>
          <LockOutlinedIcon fontSize="14px" />
        </div>
        <div className="flex justify-between mb-3.5 cursor-not-allowed items-center">
          <div className="flex gap-2 items-center">
            <DragIndicatorIcon />
            <input type="checkbox" name="board" id="board" disabled />
            <TimelineIcon fontSize="16px" />
            <p>Timeline</p>
          </div>
          <LockOutlinedIcon fontSize="14px" />
        </div>
        <div className="flex justify-between mb-3.5 cursor-not-allowed items-center">
          <div className="flex gap-2 items-center">
            <DragIndicatorIcon />
            <input type="checkbox" name="board" id="board" disabled />
            <DashboardIcon fontSize="16px" />
            <p>Dashboard</p>
          </div>
          <LockOutlinedIcon fontSize="14px" />
        </div>
        <div className="flex justify-between mb-3.5 cursor-not-allowed items-center">
          <div className="flex gap-2 items-center">
            <DragIndicatorIcon />
            <input type="checkbox" name="board" id="board" disabled />
            <FmdGoodIcon fontSize="16px" />
            <p>Map</p>
          </div>
          <LockOutlinedIcon fontSize="14px" />
        </div>
        <div className="text-color__Dropdown ml-2">
          <p className="my-[1.5rem] text-lg font-semibold ">See your work in new ways</p>
          <p className="my-4 text-[14px]">View key timelines, assignments, data, and more directly from your Trello board with Trello Premium.</p>
        </div>
        <Link to="https://trello.com/premium" className="ml-10 text-color__Dropdown text-sm">Learn more about Trello Premium</Link>
      </div>
    </div>
  );
};

export default DropDownMenu;
