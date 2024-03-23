import React, { useState } from "react";
import Header from "./Header";
import Footer from "./Footer";
import Note from "./Note";
import NewNote from "./NewNote";
import notes from "../notes";

function createNote(note){
    return (
        <Note
            title={note.title}
            content={note.content}
        />
    );
}
function App() {
    const [currentNotes, setCurrentNotes] = useState(notes);

    return (
        <div>
            <Header />
            <NewNote />
            {notes.map(createNote)}
            <Footer />
        </div>
    );
}

export default App;