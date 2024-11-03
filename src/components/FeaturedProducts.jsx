import ProductCard from './ProductCard';
import { FaLeaf, FaTruck, FaHandshake } from 'react-icons/fa';

const products = [
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
  }
];

const features = [
  {
    icon: <FaLeaf className="text-4xl text-green-600" />,
    title: "100% Organic",
    description: "All products are certified organic and sustainably grown"
  },
  {
    icon: <FaTruck className="text-4xl text-green-600" />,
    title: "Same Day Delivery",
    description: "Fresh produce delivered to your doorstep within hours"
  },
  {
    icon: <FaHandshake className="text-4xl text-green-600" />,
    title: "Direct Support",
    description: "Support local farmers with fair, direct-to-consumer prices"
  }
];

export default function FeaturedProducts() {
  return (
    <div className="py-12 bg-gray-50">
      <div className="container mx-auto px-4">
        {/* Value Proposition Section */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-16">
          {features.map((feature, index) => (
            <div key={index} className="bg-white p-6 rounded-xl shadow-sm hover:shadow-md transition-shadow text-center">
              <div className="flex justify-center mb-4">
                {feature.icon}
              </div>
              <h3 className="text-xl font-semibold mb-2">{feature.title}</h3>
              <p className="text-gray-600">{feature.description}</p>
            </div>
          ))}
        </div>

        {/* Featured Products Section */}
        <div className="bg-white rounded-2xl p-8 shadow-sm">
          <div className="flex justify-between items-center mb-8">
            <h2 className="text-3xl font-bold text-gray-800">
              Featured Products
            </h2>
            <button className="text-green-600 hover:text-green-700 font-medium">
              View All →
            </button>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {products.map((product) => (
              <ProductCard key={product.id} product={product} />
            ))}
          </div>
        </div>

        {/* Seasonal Deals Banner */}
        <div className="mt-16 bg-gradient-to-r from-green-600 to-green-700 rounded-2xl p-8 text-white">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <div>
              <h3 className="text-2xl font-bold mb-2">Seasonal Deals 🌾</h3>
              <p className="text-green-100 mb-4 md:mb-0">
                Get up to 25% off on seasonal vegetables and fruits!
              </p>
            </div>
            <button className="bg-white text-green-600 px-6 py-3 rounded-lg font-medium hover:bg-green-50 transition-colors">
              Shop Deals
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}