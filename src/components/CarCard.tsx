
import React from "react";
import { Car } from "@/types/Car";
import { useWishlist } from "@/context/WishlistContext";
import { Card, CardContent, CardFooter } from "@/components/ui/card";
import { Heart } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Dialog, DialogContent, DialogDescription, DialogHeader, DialogTitle, DialogTrigger } from "@/components/ui/dialog";
import { Badge } from "@/components/ui/badge";

interface CarCardProps {
  car: Car;
}

const CarCard: React.FC<CarCardProps> = ({ car }) => {
  const { addToWishlist, removeFromWishlist, isInWishlist } = useWishlist();
  
  const inWishlist = isInWishlist(car.id);

  const toggleWishlist = (e: React.MouseEvent) => {
    e.stopPropagation();
    e.preventDefault();
    if (inWishlist) {
      removeFromWishlist(car.id);
    } else {
      addToWishlist(car);
    }
  };

  return (
    <Card className="group overflow-hidden transition-all hover:shadow-lg dark:hover:shadow-primary/5 animate-fade-in">
      <Dialog>
        <DialogTrigger asChild>
          <div className="cursor-pointer">
            <div className="relative h-44 w-full overflow-hidden">
              <img
                src={car.image}
                alt={`${car.brand} ${car.model}`}
                className="h-full w-full object-cover transition-transform duration-300 group-hover:scale-105"
              />
              <button
                onClick={toggleWishlist}
                className="absolute right-2 top-2 rounded-full bg-black/50 p-2 text-white backdrop-blur-sm transition-colors hover:bg-black/70"
              >
                <Heart
                  className={`h-5 w-5 ${inWishlist ? "fill-red-500 text-red-500" : ""}`}
                />
              </button>
            </div>

            <CardContent className="p-4">
              <div className="flex items-start justify-between">
                <div>
                  <h3 className="font-semibold">
                    {car.brand} {car.model}
                  </h3>
                  <p className="text-sm text-muted-foreground">{car.year}</p>
                </div>
                <p className="font-semibold">${car.price.toLocaleString()}</p>
              </div>

              <div className="mt-3 flex flex-wrap gap-2">
                <Badge variant="secondary">{car.fuelType}</Badge>
                <Badge variant="outline">{car.seatingCapacity} Seats</Badge>
                <Badge variant="outline">{car.transmission}</Badge>
              </div>
            </CardContent>
          </div>
        </DialogTrigger>

        <DialogContent className="sm:max-w-[600px]">
          <DialogHeader>
            <DialogTitle>
              {car.brand} {car.model} ({car.year})
            </DialogTitle>
            <DialogDescription>
              {car.description}
            </DialogDescription>
          </DialogHeader>

          <div className="mt-4">
            <div className="relative h-64 w-full overflow-hidden rounded-lg">
              <img
                src={car.image}
                alt={`${car.brand} ${car.model}`}
                className="h-full w-full object-cover"
              />
            </div>

            <div className="mt-4 grid grid-cols-2 gap-4">
              <div>
                <h4 className="font-medium">Price</h4>
                <p>${car.price.toLocaleString()}</p>
              </div>
              <div>
                <h4 className="font-medium">Mileage</h4>
                <p>{car.mileage.toLocaleString()} miles</p>
              </div>
              <div>
                <h4 className="font-medium">Engine</h4>
                <p>{car.engine}</p>
              </div>
              <div>
                <h4 className="font-medium">Fuel Type</h4>
                <p>{car.fuelType}</p>
              </div>
              <div>
                <h4 className="font-medium">Transmission</h4>
                <p>{car.transmission}</p>
              </div>
              <div>
                <h4 className="font-medium">Color</h4>
                <p>{car.color}</p>
              </div>
              <div>
                <h4 className="font-medium">Seating</h4>
                <p>{car.seatingCapacity} seats</p>
              </div>
            </div>

            <div className="mt-6 flex justify-end">
              <Button onClick={(e) => toggleWishlist(e)}>
                {inWishlist ? "Remove from Wishlist" : "Add to Wishlist"}
              </Button>
            </div>
          </div>
        </DialogContent>
      </Dialog>
    </Card>
  );
};

export default CarCard;
