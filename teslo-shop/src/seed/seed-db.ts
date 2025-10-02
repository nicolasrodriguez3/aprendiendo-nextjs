import prisma from "../lib/prisma";
import { initialData } from "./seed";

async function main() {
  // Limpiar la base de datos
  await prisma.user.deleteMany();
  await prisma.productImage.deleteMany();
  await prisma.product.deleteMany();
  await prisma.category.deleteMany();

  const { categories, products, users } = initialData;

  // Crear los usuarios
  await prisma.user.createMany({
    data: users,
  });

  // Crear las categorias
  const categoriesData = categories.map((category) => ({
    name: category,
  }));

  await prisma.category.createMany({
    data: categoriesData,
  });

  const categoriesDB = await prisma.category.findMany();

  const categoriesMap = categoriesDB.reduce(
    (acc, category) => {
      acc[category.name.toLowerCase()] = category.id;
      return acc;
    },
    {} as Record<string, string>,
  );

  // Crear los productos
  products.forEach(async (product) => {
    const { images, type, ...productData } = product;

    const productDB = await prisma.product.create({
      data: {
        ...productData,
        categoryId: categoriesMap[type] as string,
      },
    });

    const imagesData = images.map((image) => ({
      url: image,
      productId: productDB.id,
    }));

    await prisma.productImage.createMany({
      data: imagesData,
    });
  });

  console.log("Seed ejecutado correctamente");
}

(() => {
  if (process.env.NODE_ENV === "production") return;

  main();
})();
