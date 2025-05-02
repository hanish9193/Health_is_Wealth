import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { Search, ShoppingCart, ChevronRight, ArrowRight, Heart, Package, Truck, Shield } from 'lucide-react';

const Medicines = () => {
  const [searchQuery, setSearchQuery] = useState('');
  
  // Featured categories
  const categories = [
    { id: 1, name: 'Diabetes Care', image: 'https://images.pexels.com/photos/7108344/pexels-photo-7108344.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1' },
    { id: 2, name: 'Cardiac Care', image: 'https://images.pexels.com/photos/7089401/pexels-photo-7089401.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1' },
    { id: 3, name: 'Stomach Care', image: 'https://images.pexels.com/photos/3985163/pexels-photo-3985163.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1' },
    { id: 4, name: 'Pain Relief', image: 'https://images.pexels.com/photos/5699515/pexels-photo-5699515.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1' },
  ];
  
  // Popular products
  const popularProducts = [
    { 
      id: 1, 
      name: 'Dolo 650mg Tablet', 
      description: 'Strip of 15 tablets', 
      price: 30, 
      discountedPrice: 27,
      image: 'https://images.pexels.com/photos/6941883/pexels-photo-6941883.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1'
    },
    { 
      id: 2, 
      name: 'Zincovit Tablet', 
      description: 'Strip of 15 tablets', 
      price: 105, 
      discountedPrice: 95,
      image: 'https://images.pexels.com/photos/6816065/pexels-photo-6816065.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1'
    },
    { 
      id: 3, 
      name: 'Shelcal 500mg Tablet', 
      description: 'Strip of 15 tablets', 
      price: 120, 
      discountedPrice: 108,
      image: 'https://images.pexels.com/photos/6908500/pexels-photo-6908500.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1'
    },
    { 
      id: 4, 
      name: 'Ecosprin 75mg Tablet', 
      description: 'Strip of 14 tablets', 
      price: 8, 
      discountedPrice: 7.5,
      image: 'https://images.pexels.com/photos/3683089/pexels-photo-3683089.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1'
    },
  ];
  
  // Health concerns
  const healthConcerns = [
    { id: 1, name: 'Fever & Pain', icon: '🤒' },
    { id: 2, name: 'Cough & Cold', icon: '🤧' },
    { id: 3, name: 'Diabetes', icon: '🩸' },
    { id: 4, name: 'Heart Health', icon: '❤️' },
    { id: 5, name: 'Stomach Care', icon: '🩺' },
    { id: 6, name: 'Bone & Joint Pain', icon: '🦴' },
  ];

  return (
    <div className="pt-20 pb-10 bg-gray-50">
      <div className="container mx-auto px-4 md:px-6">
        {/* Hero Section */}
        <section className="bg-gradient-to-r from-[#14bef0] to-[#3590f3] rounded-xl overflow-hidden mb-8">
          <div className="flex flex-col md:flex-row">
            <div className="md:w-1/2 p-8 md:p-12 flex flex-col justify-center">
              <h1 className="text-3xl md:text-4xl font-bold text-white mb-4">
                Best Prices on All Medicines
              </h1>
              <p className="text-white text-lg mb-6 opacity-90">
                Get up to 25% off on medicines with free home delivery
              </p>
              
              {/* Search Box */}
              <div className="bg-white rounded-lg shadow-lg p-2 mb-4">
                <div className="flex items-center">
                  <div className="relative flex-grow">
                    <input
                      type="text"
                      placeholder="Search for medicines, health products..."
                      className="w-full bg-transparent border-none pl-10 pr-3 py-2 focus:outline-none text-gray-700"
                      value={searchQuery}
                      onChange={(e) => setSearchQuery(e.target.value)}
                    />
                    <Search className="absolute left-2 top-1/2 transform -translate-y-1/2 h-5 w-5 text-gray-400" />
                  </div>
                  <button className="bg-[#14bef0] text-white py-2 px-6 rounded-md hover:bg-[#0ea5d3] transition duration-300">
                    Search
                  </button>
                </div>
              </div>
              
              <p className="text-white text-sm">
                Trusted by 10+ million customers across India
              </p>
            </div>
            
            <div className="md:w-1/2 hidden md:block">
              <img 
                src="https://images.pexels.com/photos/3938022/pexels-photo-3938022.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1" 
                alt="Online Pharmacy"
                className="w-full h-full object-cover" 
              />
            </div>
          </div>
        </section>
        
        {/* Benefits Section */}
        <section className="bg-white rounded-lg shadow-sm p-6 mb-8">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            <div className="flex items-center">
              <div className="bg-blue-50 p-3 rounded-full mr-4">
                <Package className="h-6 w-6 text-[#14bef0]" />
              </div>
              <div>
                <h3 className="font-medium text-gray-800">Genuine Medicines</h3>
                <p className="text-sm text-gray-600">All products are sourced directly from manufacturers</p>
              </div>
            </div>
            
            <div className="flex items-center">
              <div className="bg-green-50 p-3 rounded-full mr-4">
                <Truck className="h-6 w-6 text-green-500" />
              </div>
              <div>
                <h3 className="font-medium text-gray-800">Free & Fast Delivery</h3>
                <p className="text-sm text-gray-600">On orders above ₹499</p>
              </div>
            </div>
            
            <div className="flex items-center">
              <div className="bg-purple-50 p-3 rounded-full mr-4">
                <Shield className="h-6 w-6 text-purple-500" />
              </div>
              <div>
                <h3 className="font-medium text-gray-800">Safe & Secure Payments</h3>
                <p className="text-sm text-gray-600">100% secure payment methods</p>
              </div>
            </div>
            
            <div className="flex items-center">
              <div className="bg-yellow-50 p-3 rounded-full mr-4">
                <Heart className="h-6 w-6 text-yellow-500" />
              </div>
              <div>
                <h3 className="font-medium text-gray-800">Customer Care</h3>
                <p className="text-sm text-gray-600">Available 24/7 for your queries</p>
              </div>
            </div>
          </div>
        </section>
        
        {/* Featured Categories */}
        <section className="mb-8">
          <div className="flex items-center justify-between mb-6">
            <h2 className="text-2xl font-bold text-gray-800">Featured Categories</h2>
            <Link to="/categories" className="text-[#14bef0] flex items-center hover:underline">
              View All <ChevronRight className="h-4 w-4 ml-1" />
            </Link>
          </div>
          
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 md:gap-6">
            {categories.map((category) => (
              <Link 
                key={category.id} 
                to={`/category/${category.id}`}
                className="bg-white rounded-lg overflow-hidden shadow-sm hover:shadow-md transition duration-300 group"
              >
                <div className="h-36 overflow-hidden">
                  <img 
                    src={category.image} 
                    alt={category.name}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500" 
                  />
                </div>
                <div className="p-4">
                  <h3 className="font-medium text-gray-800">{category.name}</h3>
                  <div className="flex items-center mt-1 text-[#14bef0]">
                    <span className="text-sm">Shop Now</span>
                    <ArrowRight className="h-4 w-4 ml-1 group-hover:translate-x-1 transition-transform" />
                  </div>
                </div>
              </Link>
            ))}
          </div>
        </section>
        
        {/* Popular Products */}
        <section className="mb-8">
          <div className="flex items-center justify-between mb-6">
            <h2 className="text-2xl font-bold text-gray-800">Popular Medicines</h2>
            <Link to="/products" className="text-[#14bef0] flex items-center hover:underline">
              View All <ChevronRight className="h-4 w-4 ml-1" />
            </Link>
          </div>
          
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 md:gap-6">
            {popularProducts.map((product) => (
              <div 
                key={product.id}
                className="bg-white rounded-lg overflow-hidden shadow-sm hover:shadow-md transition duration-300 p-4"
              >
                <div className="h-40 flex items-center justify-center mb-3">
                  <img 
                    src={product.image} 
                    alt={product.name}
                    className="max-h-full max-w-full object-contain" 
                  />
                </div>
                <h3 className="font-medium text-gray-800 mb-1">{product.name}</h3>
                <p className="text-gray-500 text-sm mb-2">{product.description}</p>
                
                <div className="flex items-center mb-3">
                  <span className="font-medium text-gray-800 mr-2">₹{product.discountedPrice}</span>
                  <span className="text-gray-500 text-sm line-through">₹{product.price}</span>
                  <span className="ml-2 bg-green-100 text-green-800 text-xs px-2 py-0.5 rounded">
                    {Math.round((product.price - product.discountedPrice) / product.price * 100)}% off
                  </span>
                </div>
                
                <button className="w-full py-2 bg-[#14bef0] text-white rounded-md hover:bg-[#0ea5d3] transition duration-300">
                  Add to Cart
                </button>
              </div>
            ))}
          </div>
        </section>
        
        {/* Health Concerns */}
        <section className="mb-8">
          <h2 className="text-2xl font-bold text-gray-800 mb-6">Shop by Health Concerns</h2>
          
          <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-6 gap-4">
            {healthConcerns.map((concern) => (
              <Link 
                key={concern.id}
                to={`/health-concern/${concern.id}`}
                className="bg-white rounded-lg p-4 text-center shadow-sm hover:shadow-md transition duration-300"
              >
                <div className="text-3xl mb-2">{concern.icon}</div>
                <h3 className="font-medium text-gray-800">{concern.name}</h3>
              </Link>
            ))}
          </div>
        </section>
        
        {/* Upload Prescription */}
        <section className="bg-white rounded-lg shadow-sm overflow-hidden mb-8">
          <div className="flex flex-col md:flex-row">
            <div className="md:w-1/2 p-8 flex flex-col justify-center">
              <h2 className="text-2xl font-bold text-gray-800 mb-3">Order with Prescription</h2>
              <p className="text-gray-600 mb-6">
                Upload your prescription and we will deliver your medicines
              </p>
              
              <div className="space-y-4">
                <div className="flex items-start">
                  <div className="bg-blue-100 text-blue-800 rounded-full w-6 h-6 flex items-center justify-center font-medium mr-3 flex-shrink-0">
                    1
                  </div>
                  <p className="text-gray-700">Upload a clear image of your prescription</p>
                </div>
                
                <div className="flex items-start">
                  <div className="bg-blue-100 text-blue-800 rounded-full w-6 h-6 flex items-center justify-center font-medium mr-3 flex-shrink-0">
                    2
                  </div>
                  <p className="text-gray-700">Receive a confirmation call from our pharmacist</p>
                </div>
                
                <div className="flex items-start">
                  <div className="bg-blue-100 text-blue-800 rounded-full w-6 h-6 flex items-center justify-center font-medium mr-3 flex-shrink-0">
                    3
                  </div>
                  <p className="text-gray-700">Medicine delivered at your doorstep</p>
                </div>
              </div>
              
              <button className="mt-6 px-6 py-3 bg-[#14bef0] text-white rounded-md hover:bg-[#0ea5d3] transition duration-300 inline-block">
                Upload Prescription
              </button>
            </div>
            
            <div className="md:w-1/2">
              <img 
                src="https://images.pexels.com/photos/4226119/pexels-photo-4226119.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1" 
                alt="Upload Prescription"
                className="w-full h-full object-cover" 
              />
            </div>
          </div>
        </section>
        
        {/* FAQ Section */}
        <section className="bg-white rounded-lg shadow-sm p-6 mb-8">
          <h2 className="text-2xl font-bold text-gray-800 mb-6">Frequently Asked Questions</h2>
          
          <div className="space-y-4">
            <div className="border-b border-gray-200 pb-4">
              <h3 className="font-medium text-gray-800 mb-2">How do I order medicines online?</h3>
              <p className="text-gray-600">
                You can search for medicines, add them to cart, and checkout. Alternatively, you can upload a prescription and our pharmacist will contact you.
              </p>
            </div>
            
            <div className="border-b border-gray-200 pb-4">
              <h3 className="font-medium text-gray-800 mb-2">How long does delivery take?</h3>
              <p className="text-gray-600">
                Delivery typically takes 24-48 hours depending on your location. Some areas have express delivery options available.
              </p>
            </div>
            
            <div className="border-b border-gray-200 pb-4">
              <h3 className="font-medium text-gray-800 mb-2">Are the medicines genuine?</h3>
              <p className="text-gray-600">
                Yes, all medicines are sourced directly from manufacturers or authorized distributors ensuring 100% genuineness.
              </p>
            </div>
            
            <div className="border-b border-gray-200 pb-4">
              <h3 className="font-medium text-gray-800 mb-2">What payment methods are accepted?</h3>
              <p className="text-gray-600">
                We accept credit/debit cards, net banking, UPI, and cash on delivery for your convenience.
              </p>
            </div>
          </div>
        </section>
      </div>
    </div>
  );
};

export default Medicines;