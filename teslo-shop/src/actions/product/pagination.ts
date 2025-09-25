"use server";

import type { Gender } from "@/generated/prisma";
import prisma from "@/lib/prisma";

interface PaginationOptions {
  page?: number;
  take?: number;
  gender?: Gender | null;
}

const getProductsCount = async (category: Gender | null) =>
  prisma.product.count({
    where: {
      gender: category ? category : undefined,
    },
  });

const getProducts = async (
  take: number,
  skip: number,
  category: Gender | null,
) => {
  return await prisma.product.findMany({
    take,
    skip,
    include: {
      ProductImage: {
        take: 2,
        select: {
          url: true,
        },
      },
    },
    where: {
      gender: category ? category : undefined,
    },
  });
};

export const getPaginaterProductsWithImages = async ({
  page = 1,
  take = 12,
  gender = null,
}: PaginationOptions) => {
  if (Number.isNaN(page)) page = 1;
  if (Number.isNaN(take)) take = 12;
  if (page < 1) page = 1;
  if (take < 1) take = 12;
  if (take > 100) take = 100;

  const skip = (page - 1) * take;

  try {
    // Obtener los productos y el total de productos
    const { products, totalProducts } = await Promise.all([
      getProducts(take, skip, gender),
      getProductsCount(gender),
    ]).then(([products, totalProducts]) => {
      return { products, totalProducts };
    });

    // Calcular el total de páginas
    const totalPages = Math.ceil(totalProducts / take);

    return {
      currentPage: page,
      totalPages,
      products: products.map((product) => ({
        ...product,
        images: product.ProductImage.map((image) => image.url),
      })),
    };
  } catch (error) {
    console.log(error);
    throw new Error("Error al obtener los productos con imágenes");
  }
};
