
import React, { createContext, useState, useContext, useEffect } from 'react';
import { Car } from '@/types/Car';
import { toast } from "sonner";

interface WishlistContextType {
  wishlist: Car[];
  addToWishlist: (car: Car) => void;
  removeFromWishlist: (carId: number) => void;
  isInWishlist: (carId: number) => boolean;
}

const WishlistContext = createContext<WishlistContextType | undefined>(undefined);

export const WishlistProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const [wishlist, setWishlist] = useState<Car[]>([]);

  // Load wishlist from localStorage on component mount
  useEffect(() => {
    const savedWishlist = localStorage.getItem('carWishlist');
    if (savedWishlist) {
      try {
        setWishlist(JSON.parse(savedWishlist));
      } catch (error) {
        console.error('Failed to parse wishlist from localStorage:', error);
        localStorage.removeItem('carWishlist');
      }
    }
  }, []);

  // Save wishlist to localStorage whenever it changes
  useEffect(() => {
    localStorage.setItem('carWishlist', JSON.stringify(wishlist));
  }, [wishlist]);

  const addToWishlist = (car: Car) => {
    setWishlist((prev) => {
      if (!prev.some((item) => item.id === car.id)) {
        toast(`Added ${car.brand} ${car.model} to wishlist`);
        return [...prev, car];
      }
      return prev;
    });
  };

  const removeFromWishlist = (carId: number) => {
    setWishlist((prev) => {
      const filtered = prev.filter((car) => car.id !== carId);
      if (filtered.length < prev.length) {
        toast("Removed from wishlist");
      }
      return filtered;
    });
  };

  const isInWishlist = (carId: number) => {
    return wishlist.some((car) => car.id === carId);
  };

  return (
    <WishlistContext.Provider value={{ wishlist, addToWishlist, removeFromWishlist, isInWishlist }}>
      {children}
    </WishlistContext.Provider>
  );
};

export const useWishlist = (): WishlistContextType => {
  const context = useContext(WishlistContext);
  if (context === undefined) {
    throw new Error('useWishlist must be used within a WishlistProvider');
  }
  return context;
};
