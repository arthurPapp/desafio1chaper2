import { Request, Response } from 'express';

import { ListAllUsersUseCase } from './ListAllUsersUseCase';

class ListAllUsersController {
  constructor(private listAllUsersUseCase: ListAllUsersUseCase) {}

  handle(request: Request, response: Response): Response {
   try {
    let { user_id } = request.headers;
    user_id = user_id as string;
    const users = this.listAllUsersUseCase.execute({ user_id });
    return response.send(users);
   } catch (error) {
     return response.status(400).send({error:"User not found!"});
   }
    
  }
}

export { ListAllUsersController };
