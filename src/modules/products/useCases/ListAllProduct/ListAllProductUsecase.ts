import { prisma } from "../../../../database/prismaClients";

export class ListAllProductUseCase {
  async execute() {
    const products = await prisma.products.findMany();

    return products;
  }
}