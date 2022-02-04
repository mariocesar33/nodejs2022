import { Request, Response } from "express";

import { ListAllProductUseCase } from "./ListAllProductUsecase";

export class ListAllProductController {
  async handle(request: Request, response: Response) {
    const { id } = request.body;

    const listAllProductUseCase = new ListAllProductUseCase();

    const produts = await listAllProductUseCase.execute();

    return response.json(produts);
  }
}