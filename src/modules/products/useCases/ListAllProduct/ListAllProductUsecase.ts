import { prisma } from "../../../../database/prismaClients";

export class ListAllProductUseCase {
  async execute(id: string) {
    const products = await prisma.products.findMany({
      where: {
        id: id
      }
    });

    return products;
  }
}