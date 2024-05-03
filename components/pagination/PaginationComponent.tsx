import React from 'react';

type PaginationProps = {
  currentPage: number;
  totalPages: number;
  onPageChange: (page: number) => void;
  previousLabel: string;
  nextLabel: string;
};

const Pagination: React.FC<PaginationProps> = ({ currentPage, totalPages, onPageChange, previousLabel, nextLabel }) => {
  const handlePreviousClick = () => {
    onPageChange(currentPage - 1);
  };

  const handleNextClick = () => {
    onPageChange(currentPage + 1);
  };

  return (
    <div className="flex items-center space-x-2">
      <button
        className="bg-gray-200 hover:bg-gray-300 text-gray-700 font-semibold py-2 px-4 rounded-l"
        onClick={handlePreviousClick}
        disabled={currentPage === 1}
      >
        {previousLabel}
      </button>
      <span className="bg-gray-200 text-gray-700 py-2 px-4">{currentPage}</span>
      <button
        className="bg-gray-200 hover:bg-gray-300 text-gray-700 font-semibold py-2 px-4 rounded-r"
        onClick={handleNextClick}
        disabled={currentPage === totalPages}
      >
        {nextLabel}
      </button>
    </div>
  );
};

export default Pagination;
