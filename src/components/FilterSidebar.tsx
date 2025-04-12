
import React from "react";
import { CarFilters } from "@/types/Car";
import { getCarBrands, getFuelTypes, getSeatingCapacities, getPriceRange } from "@/services/carService";
import { Button } from "@/components/ui/button";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Label } from "@/components/ui/label";
import { Slider } from "@/components/ui/slider";

interface FilterSidebarProps {
  filters: CarFilters;
  onFilterChange: (filters: CarFilters) => void;
  onReset: () => void;
}

const FilterSidebar: React.FC<FilterSidebarProps> = ({ filters, onFilterChange, onReset }) => {
  const brands = getCarBrands();
  const fuelTypes = getFuelTypes();
  const seatingCapacities = getSeatingCapacities();
  const priceRange = getPriceRange();
  
  const [localPriceRange, setLocalPriceRange] = React.useState<[number, number]>([
    filters.minPrice || priceRange.min,
    filters.maxPrice || priceRange.max,
  ]);

  const handlePriceChange = (values: number[]) => {
    setLocalPriceRange([values[0], values[1]]);
  };

  const applyPriceFilter = () => {
    onFilterChange({
      ...filters,
      minPrice: localPriceRange[0],
      maxPrice: localPriceRange[1],
    });
  };

  return (
    <div className="w-full space-y-6 rounded-lg border p-4">
      <div>
        <h2 className="mb-4 text-lg font-semibold">Filters</h2>
        <div className="space-y-4">
          <div className="space-y-2">
            <Label htmlFor="brand">Brand</Label>
            <Select
              value={filters.brand || "all_brands"}
              onValueChange={(value) =>
                onFilterChange({ ...filters, brand: value === "all_brands" ? undefined : value })
              }
            >
              <SelectTrigger id="brand">
                <SelectValue placeholder="Select brand" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="all_brands">All Brands</SelectItem>
                {brands.map((brand) => (
                  <SelectItem key={brand} value={brand}>
                    {brand}
                  </SelectItem>
                ))}
              </SelectContent>
            </Select>
          </div>

          <div className="space-y-2">
            <Label>Price Range</Label>
            <div className="px-2">
              <Slider
                defaultValue={[localPriceRange[0], localPriceRange[1]]}
                min={priceRange.min}
                max={priceRange.max}
                step={1000}
                onValueChange={handlePriceChange}
                onValueCommit={applyPriceFilter}
              />
              <div className="mt-2 flex justify-between text-sm">
                <span>${localPriceRange[0].toLocaleString()}</span>
                <span>${localPriceRange[1].toLocaleString()}</span>
              </div>
            </div>
          </div>

          <div className="space-y-2">
            <Label htmlFor="fuelType">Fuel Type</Label>
            <Select
              value={filters.fuelType || "all_fuel_types"}
              onValueChange={(value) =>
                onFilterChange({ ...filters, fuelType: value === "all_fuel_types" ? undefined : value })
              }
            >
              <SelectTrigger id="fuelType">
                <SelectValue placeholder="Select fuel type" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="all_fuel_types">All Fuel Types</SelectItem>
                {fuelTypes.map((fuelType) => (
                  <SelectItem key={fuelType} value={fuelType}>
                    {fuelType}
                  </SelectItem>
                ))}
              </SelectContent>
            </Select>
          </div>

          <div className="space-y-2">
            <Label htmlFor="seatingCapacity">Seating Capacity</Label>
            <Select
              value={filters.seatingCapacity?.toString() || "any_capacity"}
              onValueChange={(value) =>
                onFilterChange({
                  ...filters,
                  seatingCapacity: value === "any_capacity" ? undefined : parseInt(value, 10),
                })
              }
            >
              <SelectTrigger id="seatingCapacity">
                <SelectValue placeholder="Select seating capacity" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="any_capacity">Any Capacity</SelectItem>
                {seatingCapacities.map((capacity) => (
                  <SelectItem key={capacity} value={capacity.toString()}>
                    {capacity} Seats
                  </SelectItem>
                ))}
              </SelectContent>
            </Select>
          </div>

          <div className="space-y-2">
            <Label htmlFor="sortBy">Sort By</Label>
            <Select
              value={filters.sortBy || "default_sort"}
              onValueChange={(value) =>
                onFilterChange({ ...filters, sortBy: value === "default_sort" ? undefined : value })
              }
            >
              <SelectTrigger id="sortBy">
                <SelectValue placeholder="Sort by" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="default_sort">Default</SelectItem>
                <SelectItem value="price-asc">Price: Low to High</SelectItem>
                <SelectItem value="price-desc">Price: High to Low</SelectItem>
              </SelectContent>
            </Select>
          </div>

          <Button
            variant="outline"
            className="w-full"
            onClick={onReset}
          >
            Reset Filters
          </Button>
        </div>
      </div>
    </div>
  );
};

export default FilterSidebar;
