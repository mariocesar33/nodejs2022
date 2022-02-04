import { Router } from "express";

import { CreateProductController } from "./modules/products/useCases/createProduct/CreateProductController";
import { ListAllProductController } from "./modules/products/useCases/ListAllProduct/ListAllProductController";

const routes = Router();

const createProductController = new CreateProductController();
const listAllProductController = new ListAllProductController();

routes.post("/products", createProductController.handle);
routes.get("/products/allproducts", listAllProductController.handle);

export { routes };