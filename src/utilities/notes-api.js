export async function getNotes() {
    try {
        const response = await fetch(`${import.meta.env.VITE_API_URL}/api/notes`);
        if (!response.ok) throw new Error("API Error! Response was not ok.");
        const data = await response.json();
        return data;
    } catch (error) {
        console.error(error);
    }
}

export async function createNote(formData) {
    try {
        const response = await fetch(`${import.meta.env.VITE_API_URL}/api/notes`, {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify(formData)
        });
        if (!response.ok) throw new Error("API Error! Response was not ok.");
        const data = await response.json();
        console.log(data);
        return data;
    } catch (error) {
        console.error(error);
    }
}

export async function deleteNote(id) {
    const response = await fetch(`${import.meta.env.VITE_API_URL}/api/notes/${id}`, {
        method: "DELETE"
    });
    if (!response.ok) throw new Error("Failed to delete note");
    return await response.json();
}

export async function updateNote(id, data) {
    const response = await fetch(`${import.meta.env.VITE_API_URL}/api/notes/${id}`, {
        method: "PUT",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(data)
    });
    if (!response.ok) throw new Error("Failed to update note");
    return await response.json();
}