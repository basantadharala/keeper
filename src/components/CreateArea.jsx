import React, { useState } from "react";
import AddIcon from "@mui/icons-material/Add";
import Fab from "@mui/material/Fab";
import Zoom from "@mui/material/Zoom";

function CreateArea(props) {
  const [note, setNote] = useState({
    title: "",
    content: "",
  });

  const [isFirst, setFirst] = useState(false);

  function handleChange(event) {
    const { name, value } = event.target;

    setNote((prevNote) => {
      return {
        ...prevNote,
        [name]: value,
      };
    });
  }

  function submitNote(event) {
    props.onAdd(note);
    setNote({
      title: "",
      content: "",
    });
    event.preventDefault();
  }

  function handleClick() {
    setFirst(true);
  }

  return (
    <div>
      <form className="create-note">
        {/* <input
          name="title"
          onChange={handleChange}
          value={note.title}
          placeholder="Title"
        /> */}
        {isFirst ? (
          <div>
            <input
              name="title"
              onChange={handleChange}
              value={note.title}
              placeholder="Title"
            />
            <textarea
              name="content"
              onChange={handleChange}
              value={note.content}
              placeholder="Take a note..."
              rows="3"
            />
            <Zoom in={true}>
              <Fab onClick={submitNote}>
                <AddIcon />
              </Fab>
            </Zoom>
          </div>
        ) : (
          <textarea
            name="content"
            onClick={handleClick}
            onChange={handleChange}
            value={note.content}
            placeholder="Take a note..."
            rows="1"
          />
        )}
      </form>
    </div>
  );
}

export default CreateArea;
