import React, { useState } from "react";

function NewNote(props) {
    const [note, setNote] = useState({
        title: "",
        content: ""
    });

    function handleChange(event) {
        const newValue = event.target.value;
        const name = event.target.name;
        setNote((prevValue) => {
            if (name === "title") {
                return {
                    title: newValue,
                    content: prevValue.content
                }
            } else if (name === "content") {
                return {
                    title: prevValue.title,
                    content: newValue
                }
            }
        });
    }

    function handleAddNote(event) {
        props.onAdd(note)
        setNote({
            title: "",
            content: ""
        });
        event.preventDefault();
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
                <textarea
                    onChange={handleChange}
                    name="content"
                    value={note.content}
                    placeholder="Take a note..."
                    rows="3"
                />
                <button>Add</button>
            </form>
        </div>
    );
}

export default NewNote;