import * as React from "react";
import { TextareaAutosize as BaseTextareaAutosize } from "@mui/base/TextareaAutosize";
import { styled } from "@mui/system";
import AddTask from "./AddTask";
import CloseIcon from "@mui/icons-material/Close";
import { connect } from "react-redux";
import { editCardData, getCardData, addCardData } from "../../store/actions";

const mapStateToProps = (state) => ({
  cards: state.cards,
});

const mapDispatchToProps = {
  editCardData,
  getCardData,
  addCardData
};

const TextField = (props) => {
  const [dataFromChild, setDataFromChild] = React.useState(null);
  const [textAreaValue, setTextAreaValue] = React.useState("");

  function handleTextAreaChange(e) {
    setTextAreaValue(e.target.value);
  }

  const { addCardData } = props;

  const handleDataFromChild = (data) => {
    setDataFromChild(data);
  };

  const onEditCardDetails = () => {
    addCardData(textAreaValue);
    handleDataFromChild()
  };
  
  return (
    <div>
      {dataFromChild ? (
        <div>
          <textarea
            onChange={handleTextAreaChange}
            className="w-full rounded-sm focus:outline-none p-2 text-color__text"
            maxLength={100}
          ></textarea>
          <div className="flex items-center gap-2 mt-2">
            <button
              className="bg-button-bg p-1 rounded-sm text-sm"
              onClick={onEditCardDetails}
            >
              Add Task
            </button>

            <CloseIcon
              fontSize="medium"
              className="cursor-pointer hover:bg-dropDown-text hover:text-text__color rounded-sm "
              onClick={() => {
                setDataFromChild(false);
              }}
            />
          </div>
        </div>
      ) : (
        <AddTask onDataFromChild={handleDataFromChild} />
      )}
    </div>
  );
};

export default connect(mapStateToProps, mapDispatchToProps)(TextField);
