import { useState } from 'react';
import { FaHeart, FaRegHeart, FaShoppingCart, FaStar, FaShare } from 'react-icons/fa';

export default function ProductCard({ product }) {
  const [isFavorite, setIsFavorite] = useState(false);
  const [showNegotiate, setShowNegotiate] = useState(false);
  const [quantity, setQuantity] = useState(1);

  const handleShare = () => {
    if (navigator.share) {
      navigator.share({
        title: product.name,
        text: `Check out ${product.name} from ${product.farmer}!`,
        url: window.location.href,
      });
    }
  };

  return (
    <div className="bg-white rounded-xl overflow-hidden shadow-sm hover:shadow-xl transition-all duration-300 border border-gray-100">
      <div className="relative group">
        <img 
          src={product.image} 
          alt={product.name}
          className="w-full h-56 object-cover group-hover:scale-105 transition-transform duration-300"
        />
        <div className="absolute top-3 right-3 flex gap-2">
          <button 
            onClick={handleShare}
            className="p-2 bg-white rounded-full shadow-md hover:scale-110 transition-transform"
          >
            <FaShare className="text-gray-400 text-xl" />
          </button>
          <button 
            onClick={() => setIsFavorite(!isFavorite)}
            className="p-2 bg-white rounded-full shadow-md hover:scale-110 transition-transform"
          >
            {isFavorite ? (
              <FaHeart className="text-red-500 text-xl" />
            ) : (
              <FaRegHeart className="text-gray-400 text-xl" />
            )}
          </button>
        </div>
        <div className="absolute bottom-3 left-3 flex gap-2">
          <span className="bg-white/90 backdrop-blur-sm text-green-800 text-sm px-3 py-1 rounded-full font-medium">
            {product.category}
          </span>
          {product.stock < 20 && (
            <span className="bg-red-500/90 backdrop-blur-sm text-white text-sm px-3 py-1 rounded-full font-medium">
              Low Stock
            </span>
          )}
        </div>
      </div>
      
      <div className="p-5">
        <div className="mb-3">
          <div className="flex items-center justify-between mb-1">
            <h3 className="text-xl font-semibold text-gray-800">{product.name}</h3>
            <div className="flex items-center gap-1">
              <div className="flex items-center text-yellow-400">
                <FaStar />
                <span className="ml-1 text-sm text-gray-600">{product.rating}</span>
              </div>
              <span className="text-sm text-gray-500">({product.reviews})</span>
            </div>
          </div>
          <p className="text-gray-600 text-sm">by {product.farmer}</p>
        </div>

        <div className="flex justify-between items-center mb-4">
          <div>
            <p className="text-green-600 font-bold text-2xl">{product.price}</p>
            <p className="text-sm text-gray-500">
              {product.stock} {product.unit} available
            </p>
          </div>
          <div className="flex items-center gap-3">
            <div className="flex items-center border rounded-lg">
              <button 
                onClick={() => setQuantity(Math.max(1, quantity - 1))}
                className="px-3 py-2 text-gray-600 hover:bg-gray-100"
              >
                -
              </button>
              <span className="px-3 py-2 border-x">{quantity}</span>
              <button 
                onClick={() => setQuantity(quantity + 1)}
                className="px-3 py-2 text-gray-600 hover:bg-gray-100"
              >
                +
              </button>
            </div>
            <button 
              className="bg-green-600 text-white p-3 rounded-lg hover:bg-green-700 transition-colors"
            >
              <FaShoppingCart className="text-xl" />
            </button>
          </div>
        </div>

        <button 
          onClick={() => setShowNegotiate(!showNegotiate)}
          className="w-full bg-green-50 text-green-700 py-2.5 rounded-lg hover:bg-green-100 transition-colors font-medium"
        >
          Make an Offer
        </button>

        {showNegotiate && (
          <div className="mt-4 p-4 bg-green-50 rounded-lg border border-green-100">
            <h4 className="font-medium text-green-800 mb-3">Your Offer</h4>
            <div className="flex gap-2">
              <div className="relative flex-1">
                <span className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-500">$</span>
                <input 
                  type="number"
                  placeholder="Enter amount"
                  className="w-full pl-8 pr-4 py-2.5 border rounded-lg focus:ring-2 focus:ring-green-500 focus:border-transparent outline-none"
                />
              </div>
              <button className="bg-green-600 text-white px-6 py-2.5 rounded-lg hover:bg-green-700 transition-colors font-medium">
                Send
              </button>
            </div>
            <p className="mt-2 text-sm text-gray-600">
              Bulk orders (10+ units) are eligible for special pricing
            </p>
          </div>
        )}
      </div>
    </div>
  );
}