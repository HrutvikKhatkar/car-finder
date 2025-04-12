import React, { useState, useEffect } from "react";
import Navbar from "@/components/Navbar";
import FilterSidebar from "@/components/FilterSidebar";
import CarGrid from "@/components/CarGrid";
import Pagination from "@/components/Pagination";
import SearchBar from "@/components/SearchBar";
import { CarFilters } from "@/types/Car";
import { getCars } from "@/services/carService";
import { ThemeProvider } from "@/context/ThemeContext";
import { WishlistProvider } from "@/context/WishlistContext";
import { Separator } from "@/components/ui/separator";

const Index = () => {
  const [filters, setFilters] = useState<CarFilters>({
    page: 1,
  });

  const [cars, setCars] = useState<any[]>([]);
  const [loading, setLoading] = useState<boolean>(true);
  const [totalCars, setTotalCars] = useState<number>(0);
  const [searchQuery, setSearchQuery] = useState<string>("");

  const loadCars = async () => {
    setLoading(true);
    try {
      const result = await getCars(filters);
      setCars(result.cars);
      setTotalCars(result.total);
    } catch (error) {
      console.error("Failed to fetch cars:", error);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    loadCars();
  }, [filters]);

  const handleFilterChange = (newFilters: CarFilters) => {
    setFilters({ ...filters, ...newFilters, page: 1 });
  };

  const handlePageChange = (page: number) => {
    setFilters({ ...filters, page });
  };

  const handleSearch = (term: string) => {
    setSearchQuery(term);
    // In a real app, we would pass the search term to the API
    // For this demo, we'll keep it simple
    setFilters({ ...filters, page: 1 });
  };

  const handleResetFilters = () => {
    setFilters({
      page: 1,
    });
    setSearchQuery("");
  };

  const totalPages = Math.ceil(totalCars / 10);

  return (
    <ThemeProvider>
      <WishlistProvider>
        <div className="flex min-h-screen flex-col">
          <Navbar />
          
          <main className="flex-1">
            <div className="container py-6">
              <div className="mb-6">
                <h1 className="text-3xl font-bold">Find Your Perfect Car</h1>
                <p className="text-muted-foreground">
                  Browse our selection of quality vehicles
                </p>
              </div>
              
              <div className="mb-6">
                <SearchBar onSearch={handleSearch} />
              </div>
              
              <div className="grid grid-cols-1 gap-6 md:grid-cols-[300px_1fr]">
                <aside className="h-fit md:sticky md:top-20">
                  <FilterSidebar 
                    filters={filters} 
                    onFilterChange={handleFilterChange} 
                    onReset={handleResetFilters} 
                  />
                </aside>
                
                <div>
                  <div className="mb-4 flex items-center justify-between">
                    <h2 className="text-xl font-semibold">
                      {loading
                        ? "Loading cars..."
                        : `${totalCars} cars found`}
                    </h2>
                    
                    {searchQuery && (
                      <p className="text-sm text-muted-foreground">
                        Search results for: <span className="font-medium">{searchQuery}</span>
                      </p>
                    )}
                  </div>
                  
                  <Separator className="mb-6" />
                  
                  <CarGrid cars={cars} loading={loading} />
                  
                  {!loading && totalPages > 1 && (
                    <Pagination
                      currentPage={filters.page}
                      totalPages={totalPages}
                      onPageChange={handlePageChange}
                    />
                  )}
                </div>
              </div>
            </div>
          </main>
          
          <footer className="border-t py-6">
            <div className="container flex flex-col items-center justify-between gap-4 md:flex-row">
              <p className="text-center text-sm leading-loose text-muted-foreground md:text-left">
                © 2025 CarFinder. All rights reserved.
              </p>
              <p className="text-center text-sm leading-loose text-muted-foreground md:text-right">
                Built with React, Tailwind CSS and ShadCN UI
              </p>
            </div>
          </footer>
        </div>
      </WishlistProvider>
    </ThemeProvider>
  );
};

export default Index;
