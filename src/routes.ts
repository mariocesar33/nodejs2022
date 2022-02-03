import { Router } from "express";

import { CreateProductController } from "./modules/products/useCases/createProduct/CreateProductController";

const routes = Router();

const createProductController = new CreateProductController()

routes.post("/products", createProductController.handle);

export { routes };