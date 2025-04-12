
import React from "react";
import { Button } from "@/components/ui/button";
import { ChevronLeft, ChevronRight } from "lucide-react";

interface PaginationProps {
  currentPage: number;
  totalPages: number;
  onPageChange: (page: number) => void;
}

const Pagination: React.FC<PaginationProps> = ({
  currentPage,
  totalPages,
  onPageChange,
}) => {
  const generatePageNumbers = () => {
    const pages = [];
    const maxButtons = 5;
    
    if (totalPages <= maxButtons) {
      for (let i = 1; i <= totalPages; i++) {
        pages.push(i);
      }
    } else {
      const leftSide = Math.floor(maxButtons / 2);
      const rightSide = maxButtons - leftSide;
      
      // If close to the beginning
      if (currentPage <= leftSide) {
        for (let i = 1; i <= maxButtons - 1; i++) {
          pages.push(i);
        }
        pages.push(-1); // represent dots
        pages.push(totalPages);
      }
      // If close to the end
      else if (currentPage >= totalPages - rightSide) {
        pages.push(1);
        pages.push(-1); // represent dots
        for (let i = totalPages - maxButtons + 2; i <= totalPages; i++) {
          pages.push(i);
        }
      }
      // In the middle
      else {
        pages.push(1);
        pages.push(-1); // represent dots
        for (let i = currentPage - 1; i <= currentPage + 1; i++) {
          pages.push(i);
        }
        pages.push(-2); // represent dots
        pages.push(totalPages);
      }
    }
    
    return pages;
  };

  if (totalPages <= 1) return null;

  return (
    <div className="flex flex-wrap items-center justify-center gap-1 py-4">
      <Button
        variant="outline"
        size="icon"
        onClick={() => onPageChange(currentPage - 1)}
        disabled={currentPage === 1}
      >
        <ChevronLeft className="h-4 w-4" />
      </Button>

      {generatePageNumbers().map((page, index) => 
        page < 0 ? (
          <span key={`dots-${index}`} className="px-2">...</span>
        ) : (
          <Button
            key={page}
            variant={currentPage === page ? "default" : "outline"}
            size="icon"
            onClick={() => onPageChange(page)}
          >
            {page}
          </Button>
        )
      )}

      <Button
        variant="outline"
        size="icon"
        onClick={() => onPageChange(currentPage + 1)}
        disabled={currentPage === totalPages}
      >
        <ChevronRight className="h-4 w-4" />
      </Button>
    </div>
  );
};

export default Pagination;
