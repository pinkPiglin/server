import { Router } from "express";
import EventController from "./EventController.js";
import UserController from "./UserController.js";

const router = new Router();

router.get('/events/:userId', EventController.getAll)

router.post('/events/addOne/:userId', EventController.create)
router.post('/events/createMany/:userId', EventController.createAnything)
router.delete('/events/delete', EventController.delete)
router.post('/events/edit/:userId', EventController.edit)

router.post('/users', UserController.create)
router.post('/users/signIn', UserController.signIn)
export default router