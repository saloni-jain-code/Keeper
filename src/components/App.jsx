import React, { useState } from "react";
import Header from "./Header";
import Footer from "./Footer";
import Note from "./Note";
import NewNote from "./NewNote";
import notes from "../notes";


function App() {
    const [currentNotes, setCurrentNotes] = useState(notes);

    function addNewNote(newNote){
        setCurrentNotes((prevNotes) => {
            return [...prevNotes, newNote];
        });    
    }

    function deleteNote(noteID){ 
        setCurrentNotes((prevNotes) => {
            return prevNotes.filter((noteItem, index) => index !== noteID);
        });
    }

    function createNote(note, index){
        return (
            <Note
                key={index}
                id={index}
                title={note.title}
                content={note.content}
                onDelete={deleteNote}
            />
        );
    }

    return (
        <div>
            <Header />
            <NewNote 
            onAdd={addNewNote}/>
            {currentNotes.map((note, index) => createNote(note, index))}
            <Footer />
        </div>
    );
}

export default App;