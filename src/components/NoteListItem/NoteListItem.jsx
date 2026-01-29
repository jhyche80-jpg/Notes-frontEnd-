import { useState } from "react";

import { updateNote, deleteNote } from "../../utilities/notes-api";

export default function NoteListItem({ note, notes, setNotes }) {
    const [isEditing, setIsEditing] = useState(false);
    const [formData, setFormData] = useState({ title: note.title, body: note.body });

    // Delete note
    async function handleDelete() {
        try {
            await deleteNote(note._id);
            setNotes(notes.filter((n) => n._id !== note._id));
        } catch (error) {
            console.error(error);
        }
    }

    // Update note
    async function handleUpdate(event) {
        event.preventDefault();
        try {
            const updated = await updateNote(note._id, formData);
            setNotes(notes.map((n) => (n._id === note._id ? updated : n)));
            setIsEditing(false);
        } catch (error) {
            console.error(error);
        }
    }

    if (isEditing) {
        return (
            <form onSubmit={handleUpdate}>
                <input
                    type="text"
                    name="title"
                    value={formData.title}
                    onChange={(e) => setFormData({ ...formData, title: e.target.value })}
                />
                <input
                    type="text"
                    name="body"
                    value={formData.body}
                    onChange={(e) => setFormData({ ...formData, body: e.target.value })}
                />
                <button type="submit">Save</button>
                <button type="button" onClick={() => setIsEditing(false)}>Cancel</button>
            </form>
        );
    }

    return (
        <div>
            <h2>{note.title}</h2>
            <p>{note.body}</p>
            <button onClick={() => setIsEditing(true)}>Edit</button>
            <button onClick={handleDelete}>Delete</button>
        </div>
    );
}