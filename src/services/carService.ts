
import { Car, CarFilters } from "@/types/Car";

// Mock car data
const carData: Car[] = [
  {
    id: 1,
    brand: "Toyota",
    model: "Camry",
    year: 2023,
    price: 30000,
    mileage: 1500,
    fuelType: "Hybrid",
    transmission: "Automatic",
    seatingCapacity: 5,
    engine: "2.5L 4-Cylinder",
    color: "Silver",
    description: "A reliable mid-size sedan with excellent fuel economy and comfortable interior.",
    image: "https://images.unsplash.com/photo-1621007947382-bb3c3994e3fb?q=80&w=2070&auto=format&fit=crop",
  },
  {
    id: 2,
    brand: "Honda",
    model: "Civic",
    year: 2022,
    price: 25000,
    mileage: 3000,
    fuelType: "Gasoline",
    transmission: "Automatic",
    seatingCapacity: 5,
    engine: "1.5L Turbo",
    color: "Blue",
    description: "A popular compact car known for reliability and efficiency.",
    image: "https://images.unsplash.com/photo-1533106418989-88406c7cc8ca?q=80&w=1170&auto=format&fit=crop",
  },
  {
    id: 3,
    brand: "Tesla",
    model: "Model 3",
    year: 2023,
    price: 48000,
    mileage: 500,
    fuelType: "Electric",
    transmission: "Automatic",
    seatingCapacity: 5,
    engine: "Dual Motor",
    color: "Red",
    description: "A high-performance electric sedan with advanced autopilot features.",
    image: "https://images.unsplash.com/photo-1620891549027-942fdc95d3f5?q=80&w=1331&auto=format&fit=crop",
  },
  {
    id: 4,
    brand: "BMW",
    model: "X5",
    year: 2022,
    price: 65000,
    mileage: 2000,
    fuelType: "Diesel",
    transmission: "Automatic",
    seatingCapacity: 5,
    engine: "3.0L TwinPower Turbo",
    color: "Black",
    description: "A luxury SUV with powerful performance and premium features.",
    image: "https://images.unsplash.com/photo-1556189250-72ba954cfc2b?q=80&w=1170&auto=format&fit=crop",
  },
  {
    id: 5,
    brand: "Ford",
    model: "F-150",
    year: 2023,
    price: 55000,
    mileage: 1000,
    fuelType: "Gasoline",
    transmission: "Automatic",
    seatingCapacity: 6,
    engine: "5.0L V8",
    color: "White",
    description: "A best-selling pickup truck with excellent towing capacity and rugged durability.",
    image: "https://images.unsplash.com/photo-1583267746897-2cf415887172?q=80&w=1170&auto=format&fit=crop",
  },
  {
    id: 6,
    brand: "Mercedes",
    model: "E-Class",
    year: 2022,
    price: 70000,
    mileage: 1800,
    fuelType: "Gasoline",
    transmission: "Automatic",
    seatingCapacity: 5,
    engine: "3.0L Inline-6",
    color: "Silver",
    description: "A sophisticated luxury sedan with cutting-edge technology and elegant styling.",
    image: "https://images.unsplash.com/photo-1535732820275-9ffd998cac22?q=80&w=1170&auto=format&fit=crop",
  },
  {
    id: 7,
    brand: "Audi",
    model: "Q7",
    year: 2023,
    price: 68000,
    mileage: 1200,
    fuelType: "Diesel",
    transmission: "Automatic",
    seatingCapacity: 7,
    engine: "3.0L TFSI",
    color: "Blue",
    description: "A premium SUV with spacious interior, advanced technology, and powerful performance.",
    image: "https://images.unsplash.com/photo-1571723801793-8e2250d19c82?q=80&w=2070&auto=format&fit=crop",
  },
  {
    id: 8,
    brand: "Chevrolet",
    model: "Silverado",
    year: 2022,
    price: 48000,
    mileage: 2500,
    fuelType: "Gasoline",
    transmission: "Automatic",
    seatingCapacity: 6,
    engine: "5.3L V8",
    color: "Red",
    description: "A full-size pickup with impressive towing capacity and a comfortable cabin.",
    image: "https://images.unsplash.com/photo-1602754883154-12b8d93a2a4a?q=80&w=1171&auto=format&fit=crop",
  },
  {
    id: 9,
    brand: "Toyota",
    model: "RAV4",
    year: 2023,
    price: 32000,
    mileage: 1200,
    fuelType: "Hybrid",
    transmission: "Automatic",
    seatingCapacity: 5,
    engine: "2.5L 4-Cylinder",
    color: "Green",
    description: "A popular compact SUV with excellent fuel economy and reliability.",
    image: "https://images.unsplash.com/photo-1551830820-330a71b99659?q=80&w=1170&auto=format&fit=crop",
  },
  {
    id: 10,
    brand: "Hyundai",
    model: "Tucson",
    year: 2022,
    price: 28000,
    mileage: 2800,
    fuelType: "Gasoline",
    transmission: "Automatic",
    seatingCapacity: 5,
    engine: "2.5L 4-Cylinder",
    color: "Gray",
    description: "A compact SUV with modern design, technology features, and comfortable ride.",
    image: "https://images.unsplash.com/photo-1617469767053-8f66608d56b8?q=80&w=1180&auto=format&fit=crop",
  },
  {
    id: 11,
    brand: "Honda",
    model: "CR-V",
    year: 2023,
    price: 33000,
    mileage: 900,
    fuelType: "Hybrid",
    transmission: "Automatic",
    seatingCapacity: 5,
    engine: "2.0L 4-Cylinder",
    color: "Blue",
    description: "A versatile compact SUV with excellent fuel efficiency and spacious interior.",
    image: "https://images.unsplash.com/photo-1605270396307-47732f9cf490?q=80&w=1170&auto=format&fit=crop",
  },
  {
    id: 12,
    brand: "Lexus",
    model: "RX",
    year: 2022,
    price: 55000,
    mileage: 1500,
    fuelType: "Hybrid",
    transmission: "Automatic",
    seatingCapacity: 5,
    engine: "3.5L V6",
    color: "White",
    description: "A luxury crossover SUV offering a smooth ride and high-end features.",
    image: "https://images.unsplash.com/photo-1533473359331-0135ef1b58bf?q=80&w=1170&auto=format&fit=crop",
  },
  {
    id: 13,
    brand: "Ford",
    model: "Mustang",
    year: 2023,
    price: 42000,
    mileage: 800,
    fuelType: "Gasoline",
    transmission: "Manual",
    seatingCapacity: 4,
    engine: "5.0L V8",
    color: "Yellow",
    description: "An iconic sports car with powerful performance and head-turning style.",
    image: "https://images.unsplash.com/photo-1584345604476-8ec5f82d718c?q=80&w=1170&auto=format&fit=crop",
  },
  {
    id: 14,
    brand: "Subaru",
    model: "Outback",
    year: 2022,
    price: 34000,
    mileage: 2200,
    fuelType: "Gasoline",
    transmission: "Automatic",
    seatingCapacity: 5,
    engine: "2.5L 4-Cylinder",
    color: "Green",
    description: "A versatile wagon with all-wheel drive, perfect for adventure-seeking families.",
    image: "https://images.unsplash.com/photo-1626668893632-6f3a4466d22f?q=80&w=1172&auto=format&fit=crop",
  },
  {
    id: 15,
    brand: "Kia",
    model: "Telluride",
    year: 2023,
    price: 45000,
    mileage: 1100,
    fuelType: "Gasoline",
    transmission: "Automatic",
    seatingCapacity: 8,
    engine: "3.8L V6",
    color: "Dark Green",
    description: "A spacious three-row SUV with premium features and impressive value.",
    image: "https://images.unsplash.com/photo-1662362654375-0d285a5c2492?q=80&w=1170&auto=format&fit=crop",
  },
  {
    id: 16,
    brand: "Mazda",
    model: "CX-5",
    year: 2022,
    price: 30000,
    mileage: 1900,
    fuelType: "Gasoline",
    transmission: "Automatic",
    seatingCapacity: 5,
    engine: "2.5L 4-Cylinder",
    color: "Red",
    description: "A stylish compact SUV with engaging driving dynamics and upscale interior.",
    image: "https://images.unsplash.com/photo-1669215420018-098600db5756?q=80&w=1287&auto=format&fit=crop",
  },
  {
    id: 17,
    brand: "Jeep",
    model: "Wrangler",
    year: 2023,
    price: 40000,
    mileage: 1300,
    fuelType: "Gasoline",
    transmission: "Manual",
    seatingCapacity: 4,
    engine: "3.6L V6",
    color: "Orange",
    description: "An iconic off-road vehicle with removable doors and roof for open-air adventure.",
    image: "https://images.unsplash.com/photo-1563720223185-11003d516935?q=80&w=1170&auto=format&fit=crop",
  },
  {
    id: 18,
    brand: "Volkswagen",
    model: "Golf",
    year: 2022,
    price: 28000,
    mileage: 2700,
    fuelType: "Gasoline",
    transmission: "Automatic",
    seatingCapacity: 5,
    engine: "2.0L 4-Cylinder",
    color: "Blue",
    description: "A refined hatchback with German engineering and practical versatility.",
    image: "https://images.unsplash.com/photo-1624351055840-840c6a9abe79?q=80&w=1170&auto=format&fit=crop",
  },
  {
    id: 19,
    brand: "Nissan",
    model: "Altima",
    year: 2023,
    price: 26000,
    mileage: 1800,
    fuelType: "Gasoline",
    transmission: "Automatic",
    seatingCapacity: 5,
    engine: "2.5L 4-Cylinder",
    color: "Silver",
    description: "A reliable mid-size sedan with good fuel economy and comfortable ride.",
    image: "https://images.unsplash.com/photo-1603386329225-868f9b1ee6c9?q=80&w=1169&auto=format&fit=crop",
  },
  {
    id: 20,
    brand: "Volvo",
    model: "XC90",
    year: 2022,
    price: 60000,
    mileage: 2100,
    fuelType: "Hybrid",
    transmission: "Automatic",
    seatingCapacity: 7,
    engine: "2.0L 4-Cylinder",
    color: "Black",
    description: "A luxurious SUV with Scandinavian design and industry-leading safety features.",
    image: "https://images.unsplash.com/photo-1503376780353-7e6692767b70?q=80&w=1170&auto=format&fit=crop",
  },
];

// Get unique brands, fuel types, and seating capacities for filters
export const getCarBrands = (): string[] => {
  return Array.from(new Set(carData.map(car => car.brand))).sort();
};

export const getFuelTypes = (): string[] => {
  return Array.from(new Set(carData.map(car => car.fuelType))).sort();
};

export const getSeatingCapacities = (): number[] => {
  return Array.from(new Set(carData.map(car => car.seatingCapacity))).sort((a, b) => a - b);
};

export const getPriceRange = (): { min: number, max: number } => {
  const prices = carData.map(car => car.price);
  return {
    min: Math.min(...prices),
    max: Math.max(...prices)
  };
};

// Filter and paginate cars
export const getCars = async (filters: CarFilters): Promise<{ cars: Car[], total: number }> => {
  // Simulate network delay
  await new Promise(resolve => setTimeout(resolve, 500));

  let filteredCars = [...carData];

  // Apply filters
  if (filters.brand) {
    filteredCars = filteredCars.filter(car => car.brand === filters.brand);
  }
  
  if (filters.minPrice !== undefined) {
    filteredCars = filteredCars.filter(car => car.price >= filters.minPrice!);
  }
  
  if (filters.maxPrice !== undefined) {
    filteredCars = filteredCars.filter(car => car.price <= filters.maxPrice!);
  }
  
  if (filters.fuelType) {
    filteredCars = filteredCars.filter(car => car.fuelType === filters.fuelType);
  }
  
  if (filters.seatingCapacity) {
    filteredCars = filteredCars.filter(car => car.seatingCapacity === filters.seatingCapacity);
  }

  // Apply sorting
  if (filters.sortBy) {
    switch (filters.sortBy) {
      case 'price-asc':
        filteredCars.sort((a, b) => a.price - b.price);
        break;
      case 'price-desc':
        filteredCars.sort((a, b) => b.price - a.price);
        break;
      default:
        break;
    }
  }

  const total = filteredCars.length;
  
  // Calculate pagination
  const pageSize = 10;
  const startIndex = (filters.page - 1) * pageSize;
  const paginatedCars = filteredCars.slice(startIndex, startIndex + pageSize);

  return { cars: paginatedCars, total };
};

// Get car by ID
export const getCarById = async (id: number): Promise<Car | null> => {
  // Simulate network delay
  await new Promise(resolve => setTimeout(resolve, 300));
  
  const car = carData.find(car => car.id === id);
  return car || null;
};
