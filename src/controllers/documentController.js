import Document from "../models/documentSchema";

export const homeDocument = async (req, res) => {
  try {
    const documents = await Document.find();
    res.send(documents);
  } catch (e) {
    console.log(e);
  }
};

export const readDocument = async (req, res) => {
  // res.send("read document");
  const { _id } = req.body;
  console.log(res.body);
  try {
    const document = await Document.findById(_id);
    res.send(document);
  } catch (e) {
    console.log(e);
  }
};

export const createDocument = (req, res) => {
  console.log("create document : ", req.body);
  const { title, content } = req.body;
  try {
    Document.create({ title, content }, o => console.log(o));
    res.send("✅ complete create document");
  } catch (e) {
    console.error(e);
    res.send("❌ complete fail document");
  }
};

export const updateDocument = (req, res) => {
  res.send("update document");
};

export const deleteDocument = (req, res) => {
  res.send("delete document");
};
