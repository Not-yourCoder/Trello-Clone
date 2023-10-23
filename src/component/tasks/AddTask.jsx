import Stack from "@mui/material/Stack";
import Button from "@mui/material/Button";
import AddIcon from "@mui/icons-material/Add";
import { useState } from "react";

// eslint-disable-next-line react/prop-types
export default function AddTask({ onDataFromChild }) {
  const [addTask, setAddtask] = useState(false);

  const handleAddtask = () => {
    setAddtask(true)
    console.log(addTask);
    onDataFromChild(true);
  };
  return (
    <Stack spacing={2} direction="row">
      <Button
        variant="text"
        size="small"
        sx={{
          color: "#9ca3af",
          ":hover": {
            bgcolor: "#27272a",
            color: "white",
          },
        }}
        onClick={handleAddtask}
      >
        <AddIcon fontSize="small" />
        <p>add task</p>
      </Button>
    </Stack>
  );
}
