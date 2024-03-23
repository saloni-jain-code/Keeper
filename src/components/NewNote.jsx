import React, { useState } from "react";
import notes from "../notes";

function NewNote() {
    const [note, setNote] = useState({
        id: notes.length + 1,
        title: "",
        content: ""
    });

    function handleChange(event) {
        const newValue = event.target.value;
        const name = event.target.name;
        console.log(newValue);
        setNote((prevValue) => {
            if (name === "title") {
                return {
                    id: prevValue.id,
                    title: newValue,
                    content: prevValue.content
                }
            } else if (name === "content") {
                return {
                    id: prevValue.id,
                    title: prevValue.title,
                    content: newValue
                }
            }
        });
    }

    function handleAddNote(event) {
        // create a new note
        // add the note to the notes array
        // update the notes state
        // clear the input fields
        notes.append(note)
        event.preventDefault();        
        setNote({
            id: notes.length + 1,
            title: "",
            content: ""
        });
    }

    return (
        <div>
            <form onSubmit={handleAddNote}>
                <input
                    onChange={handleChange}
                    name="title"
                    value={note.title}
                    placeholder="Title"
                />
                <input
                    onChange={handleChange}
                    name="content"
                    value={note.content}
                    placeholder="Take a note..."
                />
                <button>Add</button>
            </form>
        </div>
    );
}

export default NewNote;