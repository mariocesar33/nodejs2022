import { prisma } from "../../../../database/prismaClients";

interface ICreateProduct {
  productname: string;
  price: string;
}

export class CreateProductUseCase {
  async execute({productname, price}: ICreateProduct) {
    // verificar se o produto já existe
    const productExist = await prisma.products.findFirst({
      where: {
        productname
      }
    });

    if(productExist) {
      throw new Error("Produto já registrado");
    } 

    // Registrar o produto no banco de dados
    const product = await prisma.products.create({
      data: {
        productname,
        price
      }
    });

    return product;
  }
}