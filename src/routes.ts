import {Router} from 'express'
import { CreateUserController } from './controllers/CreateUserController'; 
import { CreateTagController } from './controllers/CreateTagController';
import { CreateComplimentController } from './controllers/CreateComplimentController';
import { AuthenticateUserController } from './controllers/AuthenticateUserController';
import { ensureAdmin } from './middlewares/ensureAdmin';
import { ensureAuthenticated } from './middlewares/ensureAuthenticated';
import { ListUserReceivedComplimentsController } from './controllers/LIstUserReceivedComplementsController';
import { ListUserSendComplimentsController } from './controllers/ListUserSendComplimentsController';
import { ListTagsController } from './controllers/ListTagsController';
import { ListUsersController } from './controllers/ListUsersController';

const createUserController = new CreateUserController()
const createTagController = new CreateTagController()
const createComplimentController = new CreateComplimentController()
const authenticateUserController = new AuthenticateUserController()
const listUserSentComplimentsController = new ListUserSendComplimentsController()
const listUserReceivedComplimentsController = new ListUserReceivedComplimentsController()
const listTagsController = new ListTagsController()
const listUsersController = new ListUsersController()

const router = Router();


router.post("/users",createUserController.handle)

router.post("/tags",ensureAuthenticated,ensureAdmin,createTagController.handle)

router.post("/login",authenticateUserController.handle)

router.post("/compliments",ensureAuthenticated,createComplimentController.handle)

router.get("/users/compliments/send",ensureAuthenticated,listUserSentComplimentsController.handle)

router.get("/users/compliments/receive",ensureAuthenticated,listUserReceivedComplimentsController.handle)

router.get("/tags",listTagsController.handle)

router.get("/users",listUsersController.handle)

export {router}