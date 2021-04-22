import { Request, Response } from "express";

import { UsersRepository } from "../repositories/UsersRepository";
import { UsersService } from "../services/UsersService";
class UsersController {

  async create(request: Request, reponse: Response): Promise<Response> {
    const { email } = request.body;

    const usersService = new UsersService();
    const user = await usersService.create(email);

    return reponse.json(user);

  }

}
export { UsersController };