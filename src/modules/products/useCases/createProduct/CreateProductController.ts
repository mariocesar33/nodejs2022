import { Request, Response } from "express";

import { CreateProductUseCase } from "./CreateProductUseCase";

export class CreateProductController {
  async handle(request: Request, response: Response){
    const { productname, price } = request.body;

    const createProductUseCase = new CreateProductUseCase();

    const result = await createProductUseCase.execute({
      productname,
      price
    });

    return response.json(result);
  }
}