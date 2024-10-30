import { Router } from "express";
import { verifyToken } from "../middlewares/authMiddleware";
import { createBook, getBooks, getBookById, updateBook, deleteBook,} from "../controllers/BookController";

const router = Router();

// Endpoint untuk buku, dilindungi oleh verifikasi token
router.post("/", verifyToken, createBook);
router.get("/", getBooks);
router.get("/:id", getBookById);
router.put("/:id", verifyToken, updateBook);
router.delete("/:id", verifyToken, deleteBook);

export default router;
