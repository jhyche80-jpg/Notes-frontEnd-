import NoteListItem from "../NoteListItem/NoteListItem";

export default function NoteList({ notes }) {
    return (
        <div>
            {notes && notes.map((note) => {
                return <NoteListItem key={note._id} note={note} />
            })}
        </div>
    );
}