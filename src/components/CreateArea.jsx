import React, { useState } from "react";

function CreateArea(props) {
  const [noteData, updateNoteData] = useState({
    title: "",
    body: ""
  });

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
      <form>
        <input
          onChange={addData}
          name="title"
          placeholder="Title"
          value={noteData.title}
        />
        <textarea
          onChange={addData}
          name="body"
          placeholder="Take a note..."
          rows="3"
          value={noteData.body}
        />
        <button onClick={clickEvent}>Add</button>
      </form>
    </div>
  );
}

export default CreateArea;
