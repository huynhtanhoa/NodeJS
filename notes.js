const fs = require('fs')
const getNotes = () => {
    return 'your notes...';
}

const addNote = (title, body) => {
    const notes = loadNotes();

    notes.push({
        title: title,
        body: body
    })

    saveNotes(notes)
}

const saveNotes = (notes) => {
    const dataJSON = JSON.stringify(notes)
    fs.writeFileSync('notes.json', dataJSON)
}

const loadNotes = () => {
    try {
        const dataBuffer = fs.readFileSync('notes .json'); //read file json
        const dataJSON = dataBuffer.toString();  // convert data to into String
        return JSON.parse(dataJSON);
    }
    catch (e) {
        return []
    }
}

module.exports = {
    getNotes: getNotes,
    addNote: addNote
}
