import express from 'express';
import loginUser from '../../controllers/authentication/loginController';
const AuthenticationRouter = express.Router();

//user signup
// AuthenticationRouter.post('/signup', registerUser);
// user login
AuthenticationRouter.get('/login', loginUser);

export default AuthenticationRouter;
