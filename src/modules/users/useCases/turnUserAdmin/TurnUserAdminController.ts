import { Request, Response } from 'express';

import { TurnUserAdminUseCase } from './TurnUserAdminUseCase';

class TurnUserAdminController {
  constructor(private turnUserAdminUseCase: TurnUserAdminUseCase) {}

  handle(request: Request, response: Response): Response {
   try {
      const user_id = request.params.user_id;
      const user = this.turnUserAdminUseCase.execute({ user_id });
      return response.send(user);
   } catch (error) {
      return response.status(404).send({error:"User not found!"});
    }
    
  }
}

export { TurnUserAdminController };
