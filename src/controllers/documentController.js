export const homeDocument = (req, res) => {
    res.send("document home");
}

export const readDocument = (req, res) => {
    res.send('read document');
}

export const createDocument = (req, res) => {
    res.send('create document');
}

export const updateDocument = (req, res) => {
    res.send('update document');
}

export const deleteDocument = (req, res) => {
    res.send('delete document');
}