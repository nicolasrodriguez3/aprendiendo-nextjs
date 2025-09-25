"use client";

import Link from "next/link";
import { redirect, usePathname, useSearchParams } from "next/navigation";
import { IoChevronBackOutline } from "react-icons/io5";
import { generatePaginationNumbers } from "@/utils";

interface PaginationProps {
  totalPages: number;
}

export const Pagination = ({ totalPages }: PaginationProps) => {
  const pathName = usePathname();
  const searchParams = useSearchParams();

  const pageString = searchParams.get("page") ?? "1";
  const currentPage = Number(pageString);

  if (currentPage < 1 || Number.isNaN(currentPage)) {
    redirect(pathName);
  }

  const allPages = generatePaginationNumbers(currentPage, totalPages);

  // const createPageUrl = (pageNumber: number | string) => {
  //   const params = new URLSearchParams(searchParams);

  //   if (pageNumber === "...") {
  //     return `${pathName}?${params.toString()}`;
  //   }

  //   if (+pageNumber === 0) {
  //     return pathName;
  //   }

  //   if (+pageNumber > totalPages) {
  //     return `${pathName}?${params.toString()}`;
  //   }

  //   params.set("page", pageNumber.toString());
  //   return `${pathName}?${params.toString()}`;
  // };

  const createPageUrl = (pageNumber: number) => {
    const params = new URLSearchParams(searchParams);
    params.set("page", pageNumber.toString());
    return `${pathName}?${params.toString()}`;
  };

  const NavButton = ({
    page,
    disabled,
    icon,
  }: {
    page: number;
    disabled: boolean;
    icon?: "prev" | "next";
  }) => {
    console.log({ page });
    const className =
      "relative block py-1.5 px-3 rounded transition text-gray-800 hover:bg-gray-200";
    const iconEl =
      icon === "prev" ? (
        <IoChevronBackOutline size={24} />
      ) : icon === "next" ? (
        <IoChevronBackOutline size={24} className="rotate-180" />
      ) : (
        page
      );

    return disabled ? (
      <span className="relative block py-1.5 px-3 rounded text-gray-500 pointer-events-none">
        {iconEl}
      </span>
    ) : (
      <Link href={createPageUrl(page)} className={className}>
        {iconEl}
      </Link>
    );
  };

  return (
    <div className="flex justify-center mt-10 mb-32">
      <nav aria-label="Page navigation">
        <ul className="flex items-center list-style-none gap-1">
          {/* Botón Previous */}
          <li>
            {currentPage === 1 ? (
              <span className="relative block py-1.5 px-3 rounded text-gray-500 pointer-events-none">
                <IoChevronBackOutline size={24} />
              </span>
            ) : (
              <Link
                href={createPageUrl(currentPage - 1)}
                className="relative block py-1.5 px-3 rounded text-gray-800 hover:bg-gray-200 transition"
              >
                <IoChevronBackOutline size={24} />
              </Link>
            )}
          </li>

          {/* Números de página */}
          {allPages.map((page, index) => (
            <li key={`${page} - ${+index}`}>
              <Link
                href={createPageUrl(page as number)}
                className={`relative block py-1.5 px-3 rounded transition 
                  ${
                    page === currentPage
                      ? "bg-blue-600 text-white shadow-md"
                      : "text-gray-800 hover:bg-gray-200"
                  }`}
              >
                {page}
              </Link>
            </li>
          ))}

          {/* Botón Next */}
          <li>
            {currentPage === totalPages ? (
              <span className="relative block py-1.5 px-3 rounded text-gray-500 pointer-events-none">
                <IoChevronBackOutline size={24} className="rotate-180" />
              </span>
            ) : (
              <Link
                href={createPageUrl(currentPage + 1)}
                className="relative block py-1.5 px-3 rounded text-gray-800 hover:bg-gray-200 transition"
              >
                <IoChevronBackOutline size={24} className="rotate-180" />
              </Link>
            )}
          </li>
        </ul>
      </nav>
    </div>
  );
};
