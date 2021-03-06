import express from "express";
import { routes } from "../routes";
import {
  homeDocument,
  readDocument,
  createDocument,
  updateDocument,
  deleteDocument
} from "../controllers/documentController";

const documentRouter = express.Router();

documentRouter.get(routes.home, homeDocument);
documentRouter.get(routes.read_document, readDocument);
documentRouter.post(routes.create_document, createDocument);
documentRouter.post(routes.update_document, updateDocument);
documentRouter.post(routes.delete_document, deleteDocument);

export default documentRouter;