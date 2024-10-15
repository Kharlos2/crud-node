import { Router, Request, Response } from "express";
import { deleteItem, getItem, getItems, postItem, updateItem } from "../controllers/item";
import { logmiddleware } from "../middleware/log";

const router = Router();

/**
 * http://localhost:3002/item [GET]
 */
router.get('/', getItems);
router.get('/:id', logmiddleware, getItem); 
router.post('/', postItem);
router.put('/:id', updateItem);
router.delete('/:id', deleteItem);

export { router };