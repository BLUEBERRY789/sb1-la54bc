import { Link } from 'react-router-dom';

export default function Hero() {
  return (
    <div className="relative bg-green-50 py-20">
      <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1500937386664-56d1dfef3854?auto=format&fit=crop&q=80')] bg-cover bg-center opacity-10"></div>
      <div className="container mx-auto px-4 text-center relative">
        <span className="inline-block bg-green-100 text-green-800 px-4 py-1 rounded-full text-sm font-medium mb-4">
          Direct from Local Farmers
        </span>
        <h1 className="text-5xl md:text-7xl font-bold text-green-800 mb-6">
          Fresh From Farm <br/> to Your Table
        </h1>
        <p className="text-xl text-gray-600 mb-8 max-w-2xl mx-auto">
          Support local farmers and get the freshest produce delivered directly to your doorstep
        </p>
        <div className="flex gap-4 justify-center">
          <Link 
            to="/marketplace"
            className="bg-green-600 text-white px-8 py-4 rounded-lg text-lg font-medium hover:bg-green-700 transition-colors shadow-lg hover:shadow-xl"
          >
            Shop Now
          </Link>
          <Link 
            to="/how-it-works"
            className="bg-white text-green-600 px-8 py-4 rounded-lg text-lg font-medium hover:bg-green-50 transition-colors border-2 border-green-600"
          >
            How It Works
          </Link>
        </div>
      </div>
    </div>
  );
}