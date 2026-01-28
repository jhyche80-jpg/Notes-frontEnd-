import { useState } from 'react';
import { createNote } from '../../utilities/notes-api';

export default function CreateNoteForm({ notes, setNotes }) {
    const [formData, setFormData] = useState({
        title: '',
        body: ''
    });

    function handleChange(event) {
        setFormData({
            ...formData,
            [event.target.name]: event.target.value
        });
    }

    async function handleSubmit(event) {
        event.preventDefault();
        try {
            const data = await createNote(formData);

            // Method 1
            setNotes([...notes, data]);

            // Method 2
            // const notes = await getNotes();
            // setNotes(notes)
        } catch (error) {
            console.error(error);
        }
    }

    return (
        <form onSubmit={handleSubmit}>
            <input
                type='text'
                placeholder='Enter a title...'
                name='title'
                value={formData.title}
                onChange={handleChange}
            />
            <input
                type='text'
                placeholder='Enter a body...'
                name='body'
                value={formData.body}
                onChange={handleChange}
            />
            <input type='submit' />
        </form>
    );
}