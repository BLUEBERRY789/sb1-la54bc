import { useState } from 'react';
import { FaFilter, FaSearch, FaMapMarkerAlt, FaTimes } from 'react-icons/fa';

export default function SearchFilters() {
  const [showFilters, setShowFilters] = useState(false);
  const [selectedCategories, setSelectedCategories] = useState([]);
  const [priceRange, setPriceRange] = useState({ min: '', max: '' });

  const categories = [
    "Vegetables", "Fruits", "Dairy & Eggs", "Honey", "Meat", "Grains",
    "Herbs", "Nuts", "Preserves", "Baked Goods"
  ];

  const toggleCategory = (category) => {
    setSelectedCategories(prev => 
      prev.includes(category)
        ? prev.filter(c => c !== category)
        : [...prev, category]
    );
  };

  const clearFilters = () => {
    setSelectedCategories([]);
    setPriceRange({ min: '', max: '' });
  };

  return (
    <div className="bg-white rounded-xl shadow-sm border border-gray-100">
      <div className="p-4">
        <div className="flex flex-col md:flex-row gap-4">
          <div className="flex-1 relative">
            <FaSearch className="absolute left-4 top-1/2 transform -translate-y-1/2 text-gray-400 text-lg" />
            <input
              type="text"
              placeholder="Search fresh produce..."
              className="w-full pl-12 pr-4 py-3 bg-gray-50 rounded-xl focus:ring-2 focus:ring-green-500 focus:outline-none"
            />
          </div>
          <div className="relative">
            <FaMapMarkerAlt className="absolute left-4 top-1/2 transform -translate-y-1/2 text-gray-400 text-lg" />
            <input
              type="text"
              placeholder="Location"
              className="w-full md:w-48 pl-12 pr-4 py-3 bg-gray-50 rounded-xl focus:ring-2 focus:ring-green-500 focus:outline-none"
            />
          </div>
          <button
            onClick={() => setShowFilters(!showFilters)}
            className="flex items-center justify-center gap-2 px-6 py-3 bg-green-600 text-white rounded-xl hover:bg-green-700 transition-colors"
          >
            <FaFilter /> {showFilters ? 'Hide Filters' : 'Show Filters'}
          </button>
        </div>

        {/* Active Filters */}
        {(selectedCategories.length > 0 || priceRange.min || priceRange.max) && (
          <div className="mt-4 flex flex-wrap gap-2">
            {selectedCategories.map(category => (
              <span key={category} className="inline-flex items-center gap-1 bg-green-100 text-green-700 px-3 py-1 rounded-full text-sm">
                {category}
                <button onClick={() => toggleCategory(category)} className="hover:text-green-800">
                  <FaTimes />
                </button>
              </span>
            ))}
            {(priceRange.min || priceRange.max) && (
              <span className="inline-flex items-center gap-1 bg-green-100 text-green-700 px-3 py-1 rounded-full text-sm">
                Price: ${priceRange.min || '0'} - ${priceRange.max || '∞'}
                <button onClick={() => setPriceRange({ min: '', max: '' })} className="hover:text-green-800">
                  <FaTimes />
                </button>
              </span>
            )}
            <button
              onClick={clearFilters}
              className="text-sm text-gray-600 hover:text-gray-800 underline"
            >
              Clear all filters
            </button>
          </div>
        )}
      </div>

      {showFilters && (
        <div className="p-4 border-t border-gray-100 bg-gray-50">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <div>
              <h3 className="font-medium text-gray-700 mb-3">Categories</h3>
              <div className="grid grid-cols-2 gap-2">
                {categories.map((category) => (
                  <label 
                    key={category} 
                    className={`flex items-center space-x-2 p-2 rounded-lg cursor-pointer transition-colors ${
                      selectedCategories.includes(category)
                        ? 'bg-green-100 text-green-700'
                        : 'bg-white hover:bg-green-50'
                    }`}
                  >
                    <input 
                      type="checkbox"
                      checked={selectedCategories.includes(category)}
                      onChange={() => toggleCategory(category)}
                      className="rounded text-green-600 focus:ring-green-500"
                    />
                    <span>{category}</span>
                  </label>
                ))}
              </div>
            </div>
            
            <div>
              <h3 className="font-medium text-gray-700 mb-3">Price Range</h3>
              <div className="space-y-3">
                <div className="flex gap-3">
                  <div className="relative flex-1">
                    <span className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-500">$</span>
                    <input
                      type="number"
                      placeholder="Min"
                      value={priceRange.min}
                      onChange={(e) => setPriceRange(prev => ({ ...prev, min: e.target.value }))}
                      className="w-full pl-8 pr-4 py-2 bg-white rounded-lg border-gray-200 focus:ring-2 focus:ring-green-500 focus:border-transparent"
                    />
                  </div>
                  <div className="relative flex-1">
                    <span className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-500">$</span>
                    <input
                      type="number"
                      placeholder="Max"
                      value={priceRange.max}
                      onChange={(e) => setPriceRange(prev => ({ ...prev, max: e.target.value }))}
                      className="w-full pl-8 pr-4 py-2 bg-white rounded-lg border-gray-200 focus:ring-2 focus:ring-green-500 focus:border-transparent"
                    />
                  </div>
                </div>
                <div className="flex gap-2">
                  <button 
                    onClick={() => setPriceRange({ min: '0', max: '10' })}
                    className="flex-1 py-1 px-2 bg-white rounded border hover:bg-green-50 text-sm"
                  >
                    Under $10
                  </button>
                  <button 
                    onClick={() => setPriceRange({ min: '10', max: '50' })}
                    className="flex-1 py-1 px-2 bg-white rounded border hover:bg-green-50 text-sm"
                  >
                    $10 - $50
                  </button>
                  <button 
                    onClick={() => setPriceRange({ min: '50', max: '' })}
                    className="flex-1 py-1 px-2 bg-white rounded border hover:bg-green-50 text-sm"
                  >
                    $50+
                  </button>
                </div>
              </div>
            </div>

            <div className="space-y-4">
              <div>
                <h3 className="font-medium text-gray-700 mb-3">Sort By</h3>
                <select className="w-full p-2.5 bg-white rounded-lg border-gray-200 focus:ring-2 focus:ring-green-500 focus:border-transparent">
                  <option>Most Popular</option>
                  <option>Price: Low to High</option>
                  <option>Price: High to Low</option>
                  <option>Newest First</option>
                  <option>Best Rated</option>
                </select>
              </div>
              
              <div>
                <h3 className="font-medium text-gray-700 mb-3">Delivery Options</h3>
                <div className="space-y-2">
                  <label className="flex items-center space-x-2">
                    <input type="checkbox" className="rounded text-green-600 focus:ring-green-500" />
                    <span>Same Day Delivery</span>
                  </label>
                  <label className="flex items-center space-x-2">
                    <input type="checkbox" className="rounded text-green-600 focus:ring-green-500" />
                    <span>Farm Pickup</span>
                  </label>
                </div>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}