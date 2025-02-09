import { useState, useMemo } from "react";

const usePagination = (data, itemsPerPage = 5) => {
  console.log("inside pagiantion hook");
  const [currentPage, setCurrentPage] = useState(1);

  const totalPage = Math.ceil(data.length / itemsPerPage);

  const paginatedData = useMemo(() => {
    const startIndex = (currentPage - 1) * itemsPerPage;
    return data.slice(startIndex, startIndex + itemsPerPage);
  }, [data, currentPage, itemsPerPage]);

  const goToPage = (page) => {
    if (page < 1 || page > totalPage) return;
    setCurrentPage(page);
  };

  return { paginatedData, totalPage, currentPage, goToPage };
};
export default usePagination;
