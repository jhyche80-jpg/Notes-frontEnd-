import { useState, useEffect } from 'react';
import { getNotes } from '../../utilities/notes-api';
import CreateNoteForm from "../../components/CreateNoteForm/CreateNoteForm";
import NoteList from "../../components/NoteList/NoteList";

export default function HomePage() {
    const [notes, setNotes] = useState(null);

    useEffect(() => {
        getNotes().then(data => setNotes(data));
    }, []);

    return (
        <div>
            <CreateNoteForm notes={notes} setNotes={setNotes} />
            <NoteList notes={notes} />
        </div>
    );
}