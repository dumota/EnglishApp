import express from 'express';
import { getWords , addWords, getWordById , deleteWords, editWords} from '../controller/words-controller.js'

const router = express.Router();

router.get('/', getWords);
router.post('/add', addWords);
router.get('/:id', getWordById);
router.put('/:id',editWords);
router.delete('/:id',deleteWords);

export default router;