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
documentRouter.get(routes.create_document, createDocument);
documentRouter.get(routes.update_document, updateDocument);
documentRouter.get(routes.delete_document, deleteDocument);

export default documentRouter;