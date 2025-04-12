
import React from "react";
import { Heart, Moon, Sun, Car } from "lucide-react";
import { useTheme } from "@/context/ThemeContext";
import { useWishlist } from "@/context/WishlistContext";
import { Button } from "@/components/ui/button";
import { Sheet, SheetContent, SheetDescription, SheetHeader, SheetTitle, SheetTrigger } from "@/components/ui/sheet";
import { Separator } from "@/components/ui/separator";
import { Badge } from "@/components/ui/badge";

export default function Navbar() {
  const { theme, toggleTheme } = useTheme();
  const { wishlist } = useWishlist();

  return (
    <header className="sticky top-0 z-30 w-full border-b bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
      <div className="container flex h-16 items-center justify-between">
        <div className="flex items-center gap-2">
          <Car className="h-6 w-6 text-carorange" />
          <span className="text-xl font-bold">CarFinder</span>
        </div>

        <div className="flex items-center gap-4">
          <Button
            variant="ghost"
            size="icon"
            onClick={toggleTheme}
            className="rounded-full"
            aria-label="Toggle theme"
          >
            {theme === "light" ? <Moon className="h-5 w-5" /> : <Sun className="h-5 w-5" />}
          </Button>

          <Sheet>
            <SheetTrigger asChild>
              <Button variant="ghost" size="icon" className="relative rounded-full">
                <Heart className="h-5 w-5" />
                {wishlist.length > 0 && (
                  <Badge className="absolute -top-1 -right-1 h-5 w-5 p-0 flex items-center justify-center" variant="destructive">
                    {wishlist.length}
                  </Badge>
                )}
              </Button>
            </SheetTrigger>
            <SheetContent>
              <SheetHeader>
                <SheetTitle>Your Wishlist</SheetTitle>
                <SheetDescription>
                  {wishlist.length === 0
                    ? "Your wishlist is empty"
                    : `You have ${wishlist.length} car(s) in your wishlist`}
                </SheetDescription>
              </SheetHeader>
              <Separator className="my-4" />
              <div className="space-y-4">
                {wishlist.map((car) => (
                  <div
                    key={car.id}
                    className="flex items-center gap-4 rounded-lg border p-4"
                  >
                    <div
                      className="h-16 w-16 rounded-md bg-cover bg-center bg-no-repeat"
                      style={{ backgroundImage: `url(${car.image})` }}
                    />
                    <div className="flex flex-col gap-1">
                      <h3 className="font-medium">
                        {car.brand} {car.model}
                      </h3>
                      <p className="text-sm text-muted-foreground">
                        ${car.price.toLocaleString()}
                      </p>
                    </div>
                  </div>
                ))}
              </div>
            </SheetContent>
          </Sheet>
        </div>
      </div>
    </header>
  );
}
