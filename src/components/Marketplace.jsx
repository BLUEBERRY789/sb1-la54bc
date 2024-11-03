import { useState } from 'react';
import SearchFilters from './SearchFilters';
import ProductCard from './ProductCard';

export default function Marketplace() {
  const [products] = useState([
    {
      id: 1,
      name: "Fresh Organic Tomatoes",
      farmer: "Green Valley Farm",
      price: "$4.99/lb",
      stock: 100,
      unit: "lb",
      category: "Vegetables",
      image: "https://images.unsplash.com/photo-1592924357228-91a4daadcfea?auto=format&fit=crop&q=80&w=300",
      rating: 4.8,
      reviews: 124
    },
    {
      id: 2,
      name: "Local Honey",
      farmer: "Sunny Bee Apiaries",
      price: "$12.99/jar",
      stock: 50,
      unit: "jars",
      category: "Honey",
      image: "https://images.unsplash.com/photo-1587049352846-4a222e784d38?auto=format&fit=crop&q=80&w=300",
      rating: 4.9,
      reviews: 89
    },
    {
      id: 3,
      name: "Fresh Eggs",
      farmer: "Happy Hens Farm",
      price: "$6.99/dozen",
      stock: 30,
      unit: "dozen",
      category: "Dairy & Eggs",
      image: "https://images.unsplash.com/photo-1569288052389-dac9b0ac9eac?auto=format&fit=crop&q=80&w=300",
      rating: 4.7,
      reviews: 156
    },
    {
      id: 4,
      name: "Organic Carrots",
      farmer: "Root & Soil Farm",
      price: "$3.99/lb",
      stock: 80,
      unit: "lb",
      category: "Vegetables",
      image: "https://images.unsplash.com/photo-1598170845058-32b9d6a5da37?auto=format&fit=crop&q=80&w=300",
      rating: 4.6,
      reviews: 92
    },
    {
      id: 5,
      name: "Fresh Strawberries",
      farmer: "Berry Fields",
      price: "$5.99/basket",
      stock: 40,
      unit: "baskets",
      category: "Fruits",
      image: "https://images.unsplash.com/photo-1518635017480-d9d458f3b56e?auto=format&fit=crop&q=80&w=300",
      rating: 4.9,
      reviews: 178
    },
    {
      id: 6,
      name: "Artisan Cheese",
      farmer: "Valley Dairy",
      price: "$8.99/piece",
      stock: 25,
      unit: "pieces",
      category: "Dairy & Eggs",
      image: "https://images.unsplash.com/photo-1552767059-ce182ead6c1b?auto=format&fit=crop&q=80&w=300",
      rating: 4.8,
      reviews: 143
    }
  ]);

  return (
    <div className="bg-gray-50 min-h-screen py-12">
      <div className="container mx-auto px-4">
        <SearchFilters />
        <div className="mt-8 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {products.map((product) => (
            <ProductCard key={product.id} product={product} />
          ))}
        </div>
      </div>
    </div>
  );
}