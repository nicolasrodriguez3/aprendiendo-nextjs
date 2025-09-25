/**
 * Generates an array of pagination numbers with ellipsis for large page counts.
 * Shows all pages if totalPages <= MAX_VISIBLE_PAGES, otherwise shows a window around currentPage.
 * @param currentPage - The current active page (1-based).
 * @param totalPages - The total number of pages.
 * @returns An array of numbers and ellipsis strings representing the pagination.
 */
export const generatePaginationNumbers = (
  currentPage: number,
  totalPages: number
): (number | string)[] => {
  const MAX_VISIBLE_PAGES = 7;
  const WINDOW_SIZE = 2;
  const ELLIPSIS = '...';

  // Edge case: No pages or invalid totalPages
  if (totalPages <= 0) {
    return [];
  }

  // Clamp currentPage to valid range
  const clampedCurrentPage = Math.max(1, Math.min(currentPage, totalPages));

  // If totalPages is small, show all pages
  if (totalPages <= MAX_VISIBLE_PAGES) {
    return Array.from({ length: totalPages }, (_, i) => i + 1);
  }

  // Calculate bounds for the window around currentPage
  const leftBound = Math.max(1, clampedCurrentPage - WINDOW_SIZE);
  const rightBound = Math.min(totalPages, clampedCurrentPage + WINDOW_SIZE);

  // Determine if ellipsis is needed
  const showLeftEllipsis = leftBound > 2;
  const showRightEllipsis = rightBound < totalPages - 1;

  const pages: (number | string)[] = [];

  // Always include first page
  pages.push(1);

  // Add left ellipsis if needed
  if (showLeftEllipsis) {
    pages.push(ELLIPSIS);
  }

  // Add pages in the window
  for (let i = leftBound; i <= rightBound; i++) {
    pages.push(i);
  }

  // Add right ellipsis if needed
  if (showRightEllipsis) {
    pages.push(ELLIPSIS);
  }

  // Always include last page if not already included
  if (totalPages > 1) {
    pages.push(totalPages);
  }

  return pages;
};