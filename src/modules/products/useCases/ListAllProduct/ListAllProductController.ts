import { Request, Response } from "express";

import { ListAllProductUseCase } from "./ListAllProductUsecase";

export class ListAllProductController {
  async handle(request: Request, response: Response) {
    const { id } = request;

    const listAllProductUseCase = new ListAllProductUseCase();

    const produts = listAllProductUseCase.execute(id);

    return response.json(produts);
  }
}