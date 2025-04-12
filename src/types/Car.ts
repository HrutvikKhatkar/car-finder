
export interface Car {
    id: number;
    brand: string;
    model: string;
    year: number;
    price: number;
    mileage: number;
    fuelType: string;
    transmission: string;
    seatingCapacity: number;
    engine: string;
    color: string;
    description: string;
    image: string;
  }
  
  export type CarFilters = {
    brand?: string;
    minPrice?: number;
    maxPrice?: number;
    fuelType?: string;
    seatingCapacity?: number;
    page: number;
    sortBy?: string;
  };
  