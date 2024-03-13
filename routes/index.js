import express from 'express';
import AppController from '../controllers/AppController';
import UsersController from '../controllers/UsersController';
import AuthController from '../controllers/AuthController';
import FilesController from '../controllers/FilesController';

const router = express.Router();

router.get('/status', AppController.getStatus);
router.get('/stats', AppController.getStats);
router.post('/users', UsersController.postNew);
router.get('/connect', AuthController.getConnect);
router.get('/disconnect', AuthController.getDisconnect);
router.get('/users/me', UsersController.getMe);

router.post('/files', (req, res) => {
    FilesController.postUpload(req, res);
  });

router.get('/files/:id', (req, res) => {
    FilesController.getShow(req, res);
  });

  router.get('/files', (req, res) => {
    FilesController.getIndex(req, res);
  });


  router.put('/files/:id/publish', (req, res) => {
    FilesController.putPublish(req, res);
  });


  router.put('/files/:id/unpublish', (req, res) => {
    FilesController.putUnpublish(req, res);
  });


  router.get('/files/:id/data', (req, res) => {
    FilesController.getFile(req, res);
  });
}


module.exports = router;
