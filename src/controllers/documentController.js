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
  /**
   * 기본적으로 get 요청이다.
   * get 요청은 request body를 받지 않는다...
   * get은 params와 query를 받을 수 있다. 둘의 차이는 아래 링크에서 확인
   * https://codeday.me/ko/qa/20190315/71870.html
   */
  // res.send("read document");
  const { id } = req.params;
  try {
    const document = await Document.findById(id);
    res.send(document);
  } catch (e) {
    console.log(e);
  }
};

export const createDocument = (req, res) => {
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
