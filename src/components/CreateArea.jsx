import React, { useState } from "react";
import AddIcon from '@material-ui/icons/Add';
import Fab from '@material-ui/core/Fab';
import Zoom from '@material-ui/core/Zoom';



function CreateArea(props) {
  const [noteData, updateNoteData] = useState({
    title: "",
    body: ""
  });

  const [zoomStatus, updateZoom] = useState(false);

  function zoomHandler(){
    updateZoom(true);
  }

  function addData(event) {
    const { name, value } = event.target;

    updateNoteData(prevValue => {
      return {
        ...prevValue,
        [name]: value
      };
    });
  }

  function clickEvent(event) {
    props.addToArr(noteData);
    updateNoteData({
      title: "",
      body: ""
    });
    event.preventDefault();
  }

  return (
    <div>
      <form className="create-note">
        <input
        onClick={zoomHandler}
          onChange={addData}
          name="title"
          placeholder="Title"
          value={noteData.title}
        />
     {zoomStatus ? 
           <textarea
          onChange={addData}
          name="body"
          placeholder="Take a note..."
          rows="1"
          value={noteData.body}
        /> : null}
        <Zoom in={true}>
        <Fab onClick={clickEvent}> <AddIcon /> </Fab>
        </Zoom>
      </form>
    </div>
  );
}

export default CreateArea;
