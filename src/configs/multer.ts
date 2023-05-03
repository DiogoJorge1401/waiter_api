import multer from 'multer';
import { randomUUID } from 'node:crypto';
import path from 'node:path';

export const upload = multer({
  storage: multer.diskStorage({
    destination(req, file, cb) {
      cb(null, path.resolve(__dirname, '..', '..', 'uploads'));
    },
    filename(req, file, cb) {
      cb(null, `${randomUUID()}-${file.originalname}`);
    },
  }),
});
