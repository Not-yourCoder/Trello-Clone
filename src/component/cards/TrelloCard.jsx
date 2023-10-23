import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import Typography from "@mui/material/Typography";
import TextField from "../tasks/TextField";
import { connect } from "react-redux";
import { DragDropContext, Draggable, Droppable } from "react-beautiful-dnd";

const mapStateToProps = (state) => ({
  cards: state.cards,
});

const mapDispatchToProps = {};

const BasicCard = (props) => {
  const { cards } = props;
  return (
    <Card sx={{ minWidth: 275, background: "black", color: "#919BA2" }}>
      <CardContent>
        <Typography sx={{ fontSize: 15, fontWeight: "bold" }} gutterBottom>
          To Do
        </Typography>
        <DragDropContext>
          <Droppable droppableId="cards">
            {(provided) => (
              <div
                {...provided.droppableProps}
                ref={provided.innerRef}
                className="list__item"
              >
                {cards.map((card, index) => (
                  <Draggable
                    key={card.cardId}
                    draggableId={card.cardId}
                    index={index}
                  
                  >
                    {(provided) => (
                      <div
                        className="bg-body__bg mb-2 rounded-sm p-2 text-text__color"
                        {...provided.draggableProps}
                        {...provided.dragHandleProps}
                        ref={provided.innerRef}
                      >
                        {card.newTitle}
                      </div>
                    )}
                  </Draggable>
                ))}
            {provided.placeholder}
              </div>
            )}
          </Droppable>
        </DragDropContext>
        <TextField />
      </CardContent>
    </Card>
  );
};

export default connect(mapStateToProps, mapDispatchToProps)(BasicCard);
