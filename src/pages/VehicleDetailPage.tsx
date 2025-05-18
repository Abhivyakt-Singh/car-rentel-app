import React, { useState } from 'react';
import { useParams, Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { Calendar, MapPin, Star, Info, Shield, Users, Fuel, Package, Check, X, ChevronRight, ChevronLeft } from 'lucide-react';
import { Navbar } from '../components/layout/Navbar';
import { Footer } from '../components/layout/Footer';
import { Button } from '../components/ui/Button';
import { Badge } from '../components/ui/Badge';
import { Card, CardContent } from '../components/ui/Card';
import { mockVehicles, getVehicleById, getReviewsByVehicleId } from '../data/mockData';

export const VehicleDetailPage = () => {
  const { id } = useParams<{ id: string }>();
  const vehicle = id ? getVehicleById(id) : mockVehicles[0];
  const reviews = id ? getReviewsByVehicleId(id) : [];
  
  const [currentImageIndex, setCurrentImageIndex] = useState(0);
  const [startDate, setStartDate] = useState('');
  const [endDate, setEndDate] = useState('');
  
  if (!vehicle) {
    return (
      <div className="min-h-screen flex flex-col">
        <Navbar />
        <main className="flex-grow pt-24 flex items-center justify-center">
          <div className="text-center">
            <h1 className="text-2xl font-bold text-gray-900 mb-4">Vehicle Not Found</h1>
            <p className="text-gray-600 mb-6">
              The vehicle you're looking for doesn't exist or has been removed.
            </p>
            <Link to="/vehicles">
              <Button>Browse All Vehicles</Button>
            </Link>
          </div>
        </main>
        <Footer />
      </div>
    );
  }
  
  const nextImage = () => {
    setCurrentImageIndex((prev) => 
      prev === vehicle.images.length - 1 ? 0 : prev + 1
    );
  };
  
  const prevImage = () => {
    setCurrentImageIndex((prev) => 
      prev === 0 ? vehicle.images.length - 1 : prev - 1
    );
  };
  
  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      
      <main className="flex-grow pt-24">
        <div className="container mx-auto px-4 py-8">
          <div className="mb-6">
            <Link to="/vehicles" className="text-blue-600 hover:text-blue-800 flex items-center">
              <ChevronLeft size={16} className="mr-1" />
              Back to Vehicles
            </Link>
          </div>
          
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            <div className="lg:col-span-2">
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.3 }}
              >
                <div className="bg-white rounded-lg shadow-md overflow-hidden mb-8">
                  <div className="relative aspect-[16/9] bg-gray-100">
                    <img 
                      src={vehicle.images[currentImageIndex]} 
                      alt={vehicle.title}
                      className="w-full h-full object-cover"
                    />
                    
                    <button 
                      onClick={prevImage}
                      className="absolute left-4 top-1/2 transform -translate-y-1/2 bg-white/80 hover:bg-white p-2 rounded-full shadow-md"
                    >
                      <ChevronLeft size={24} />
                    </button>
                    
                    <button 
                      onClick={nextImage}
                      className="absolute right-4 top-1/2 transform -translate-y-1/2 bg-white/80 hover:bg-white p-2 rounded-full shadow-md"
                    >
                      <ChevronRight size={24} />
                    </button>
                    
                    <div className="absolute bottom-4 left-0 right-0 flex justify-center gap-2">
                      {vehicle.images.map((_, index) => (
                        <button 
                          key={index}
                          onClick={() => setCurrentImageIndex(index)}
                          className={`w-2 h-2 rounded-full ${
                            currentImageIndex === index 
                              ? 'bg-blue-600' 
                              : 'bg-white/60 hover:bg-white'
                          }`}
                        />
                      ))}
                    </div>
                  </div>
                  
                  <div className="p-6">
                    <div className="flex flex-wrap justify-between items-start mb-4">
                      <div>
                        <h1 className="text-2xl font-bold text-gray-900 mb-2">{vehicle.title}</h1>
                        <div className="flex items-center text-sm text-gray-600 mb-2">
                          <Badge 
                            variant={vehicle.type === 'car' ? 'primary' : vehicle.type === 'bike' ? 'secondary' : 'success'}
                            className="mr-2 capitalize"
                          >
                            {vehicle.type}
                          </Badge>
                          <span className="mr-3">{vehicle.brand} • {vehicle.year}</span>
                          <div className="flex items-center">
                            <Star size={16} className="text-amber-400 fill-amber-400" />
                            <span className="ml-1 font-medium">{vehicle.rating}</span>
                            <span className="ml-1 text-gray-500">({vehicle.reviewCount} reviews)</span>
                          </div>
                        </div>
                        <div className="flex items-center text-sm text-gray-600">
                          <MapPin size={16} className="mr-1" />
                          <span>{vehicle.location}</span>
                        </div>
                      </div>
                      
                      <div className="mt-2 md:mt-0">
                        <div className="text-blue-600 font-bold text-2xl">
                          ${vehicle.price}
                          <span className="text-gray-500 text-lg font-normal">/day</span>
                        </div>
                      </div>
                    </div>
                    
                    <div className="border-t border-gray-200 pt-6 mt-6">
                      <h2 className="text-xl font-semibold text-gray-900 mb-4">Description</h2>
                      <p className="text-gray-700 mb-6">{vehicle.description}</p>
                      
                      <h2 className="text-xl font-semibold text-gray-900 mb-4">Features</h2>
                      <div className="grid grid-cols-1 md:grid-cols-2 gap-3 mb-6">
                        {vehicle.features.map((feature, index) => (
                          <div key={index} className="flex items-center text-gray-700">
                            <Check size={18} className="text-green-500 mr-2 flex-shrink-0" />
                            <span>{feature}</span>
                          </div>
                        ))}
                        
                        {vehicle.type === 'car' && (
                          <>
                            <div className="flex items-center text-gray-700">
                              <Users size={18} className="text-gray-500 mr-2 flex-shrink-0" />
                              <span>5 Seats</span>
                            </div>
                            <div className="flex items-center text-gray-700">
                              <Fuel size={18} className="text-gray-500 mr-2 flex-shrink-0" />
                              <span>Fuel Efficient</span>
                            </div>
                          </>
                        )}
                        
                        {vehicle.type === 'van' && (
                          <div className="flex items-center text-gray-700">
                            <Package size={18} className="text-gray-500 mr-2 flex-shrink-0" />
                            <span>Large Cargo Space</span>
                          </div>
                        )}
                      </div>
                    </div>
                    
                    <div className="border-t border-gray-200 pt-6 mt-6">
                      <h2 className="text-xl font-semibold text-gray-900 mb-4">Rental Policies</h2>
                      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                        <div className="bg-gray-50 p-4 rounded-lg">
                          <h3 className="font-medium text-gray-900 mb-2">What's Included</h3>
                          <ul className="space-y-2">
                            <li className="flex items-start">
                              <Check size={16} className="text-green-500 mr-2 mt-0.5 flex-shrink-0" />
                              <span className="text-sm text-gray-700">Insurance coverage</span>
                            </li>
                            <li className="flex items-start">
                              <Check size={16} className="text-green-500 mr-2 mt-0.5 flex-shrink-0" />
                              <span className="text-sm text-gray-700">24/7 roadside assistance</span>
                            </li>
                            <li className="flex items-start">
                              <Check size={16} className="text-green-500 mr-2 mt-0.5 flex-shrink-0" />
                              <span className="text-sm text-gray-700">Free cancellation up to 24 hours</span>
                            </li>
                          </ul>
                        </div>
                        
                        <div className="bg-gray-50 p-4 rounded-lg">
                          <h3 className="font-medium text-gray-900 mb-2">Not Included</h3>
                          <ul className="space-y-2">
                            <li className="flex items-start">
                              <X size={16} className="text-red-500 mr-2 mt-0.5 flex-shrink-0" />
                              <span className="text-sm text-gray-700">Fuel (return with same level)</span>
                            </li>
                            <li className="flex items-start">
                              <X size={16} className="text-red-500 mr-2 mt-0.5 flex-shrink-0" />
                              <span className="text-sm text-gray-700">Additional drivers (extra fee)</span>
                            </li>
                            <li className="flex items-start">
                              <X size={16} className="text-red-500 mr-2 mt-0.5 flex-shrink-0" />
                              <span className="text-sm text-gray-700">Toll fees</span>
                            </li>
                          </ul>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                
                <div className="bg-white rounded-lg shadow-md overflow-hidden">
                  <div className="p-6">
                    <h2 className="text-xl font-semibold text-gray-900 mb-4">Reviews & Ratings</h2>
                    
                    <div className="flex items-center mb-6">
                      <div className="flex items-center bg-blue-50 px-3 py-2 rounded-lg">
                        <Star size={20} className="text-amber-400 fill-amber-400" />
                        <span className="text-xl font-bold ml-1">{vehicle.rating}</span>
                      </div>
                      <div className="ml-4">
                        <span className="text-gray-700">{vehicle.reviewCount} reviews</span>
                      </div>
                    </div>
                    
                    {reviews.length > 0 ? (
                      <div className="space-y-6">
                        {reviews.map((review) => (
                          <div key={review.id} className="border-b border-gray-100 pb-6">
                            <div className="flex items-start">
                              <img 
                                src={review.userAvatar ?? 'https://via.placeholder.com/40'} 
                                alt={review.userName}
                                className="w-10 h-10 rounded-full mr-3"
                              />
                              <div className="flex-1">
                                <div className="flex justify-between">
                                  <h3 className="font-medium text-gray-900">{review.userName}</h3>
                                  <div className="flex items-center">
                                    {[...Array(5)].map((_, i) => (
                                      <Star 
                                        key={i} 
                                        size={14} 
                                        className={i < review.rating ? "text-amber-400 fill-amber-400" : "text-gray-300"}
                                      />
                                    ))}
                                  </div>
                                </div>
                                <p className="text-sm text-gray-500 mt-1">
                                  {new Date(review.createdAt).toLocaleDateString('en-US', {
                                    year: 'numeric',
                                    month: 'long',
                                    day: 'numeric'
                                  })}
                                </p>
                                <p className="mt-2 text-gray-700">{review.comment}</p>
                              </div>
                            </div>
                          </div>
                        ))}
                      </div>
                    ) : (
                      <p className="text-gray-600">No reviews yet.</p>
                    )}
                    
                    <div className="mt-6">
                      <Button variant="outline" className="text-sm">
                        View All Reviews
                      </Button>
                    </div>
                  </div>
                </div>
              </motion.div>
            </div>
            
            <div className="lg:col-span-1">
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.3, delay: 0.1 }}
              >
                <Card className="sticky top-24">
                  <CardContent className="p-6">
                    <h2 className="text-xl font-semibold text-gray-900 mb-4">Book this {vehicle.type}</h2>
                    
                    <form>
                      <div className="space-y-4">
                        <div>
                          <label htmlFor="pickup-date" className="block text-sm font-medium text-gray-700 mb-1">
                            Pickup Date
                          </label>
                          <div className="relative">
                            <Calendar size={18} className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400" />
                            <input
                              id="pickup-date"
                              type="date"
                              value={startDate}
                              onChange={e => setStartDate(e.target.value)}
                              className="w-full pl-10 pr-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                            />
                          </div>
                        </div>
                        
                        <div>
                          <label htmlFor="return-date" className="block text-sm font-medium text-gray-700 mb-1">
                            Return Date
                          </label>
                          <div className="relative">
                            <Calendar size={18} className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400" />
                            <input
                              id="return-date"
                              type="date"
                              value={endDate}
                              onChange={e => setEndDate(e.target.value)}
                              className="w-full pl-10 pr-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                            />
                          </div>
                        </div>
                        
                        <div className="pt-4 border-t border-gray-200">
                          <h3 className="font-medium text-gray-900 mb-3">Add extras</h3>
                          
                          <div className="space-y-3">
                            <div className="flex items-center justify-between">
                              <div className="flex items-center">
                                <input
                                  id="insurance"
                                  type="checkbox"
                                  className="h-4 w-4 text-blue-600 border-gray-300 rounded focus:ring-blue-500"
                                />
                                <label htmlFor="insurance" className="ml-2 text-sm text-gray-700">
                                  Premium Insurance
                                </label>
                              </div>
                              <span className="text-sm font-medium">+$15/day</span>
                            </div>
                            
                            <div className="flex items-center justify-between">
                              <div className="flex items-center">
                                <input
                                  id="gps"
                                  type="checkbox"
                                  className="h-4 w-4 text-blue-600 border-gray-300 rounded focus:ring-blue-500"
                                />
                                <label htmlFor="gps" className="ml-2 text-sm text-gray-700">
                                  GPS Navigation
                                </label>
                              </div>
                              <span className="text-sm font-medium">+$5/day</span>
                            </div>
                            
                            <div className="flex items-center justify-between">
                              <div className="flex items-center">
                                <input
                                  id="additional-driver"
                                  type="checkbox"
                                  className="h-4 w-4 text-blue-600 border-gray-300 rounded focus:ring-blue-500"
                                />
                                <label htmlFor="additional-driver" className="ml-2 text-sm text-gray-700">
                                  Additional Driver
                                </label>
                              </div>
                              <span className="text-sm font-medium">+$10/day</span>
                            </div>
                          </div>
                        </div>
                        
                        <div className="pt-4 border-t border-gray-200">
                          <div className="flex justify-between mb-2">
                            <span className="text-gray-600">Base Rate ({vehicle.price} × 3 days)</span>
                            <span className="font-medium">${vehicle.price * 3}</span>
                          </div>
                          <div className="flex justify-between mb-2">
                            <span className="text-gray-600">Insurance</span>
                            <span className="font-medium">$0</span>
                          </div>
                          <div className="flex justify-between mb-2">
                            <span className="text-gray-600">Service Fee</span>
                            <span className="font-medium">$25</span>
                          </div>
                          <div className="flex justify-between pt-3 border-t border-gray-200 mt-3">
                            <span className="font-semibold">Total</span>
                            <span className="font-bold text-blue-600">${(vehicle.price * 3) + 25}</span>
                          </div>
                        </div>
                        
                        <Button className="w-full mt-2">
                          Book Now
                        </Button>
                      </div>
                    </form>
                    
                    <div className="mt-4 pt-4 border-t border-gray-200">
                      <div className="flex items-start">
                        <Info size={16} className="text-blue-500 mr-2 mt-0.5 flex-shrink-0" />
                        <p className="text-xs text-gray-600">
                          You won't be charged yet. Payment will be processed upon confirmation by the vendor.
                        </p>
                      </div>
                    </div>
                    
                    <div className="mt-4 pt-4 border-t border-gray-200">
                      <div className="flex items-center">
                        <img 
                          src={vehicle.vendorId === '3' ? mockVehicles[0].images[0] : 'https://images.pexels.com/photos/614810/pexels-photo-614810.jpeg?auto=compress&cs=tinysrgb&w=300'}
                          alt={vehicle.vendorName}
                          className="w-10 h-10 rounded-full mr-3"
                        />
                        <div>
                          <h3 className="font-medium text-gray-900">{vehicle.vendorName}</h3>
                          <p className="text-sm text-gray-600">Joined 2023 • {vehicle.reviewCount} reviews</p>
                        </div>
                      </div>
                      <Button variant="outline" className="w-full mt-3 text-sm">
                        Contact Vendor
                      </Button>
                    </div>
                  </CardContent>
                </Card>
              </motion.div>
            </div>
          </div>
          
          <div className="mt-12">
            <h2 className="text-2xl font-bold text-gray-900 mb-6">You Might Also Like</h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
              {mockVehicles.slice(0, 4).map((relatedVehicle) => (
                relatedVehicle.id !== vehicle.id && (
                  <motion.div
                    key={relatedVehicle.id}
                    whileHover={{ y: -5, transition: { duration: 0.2 } }}
                  >
                    <Link to={`/vehicles/${relatedVehicle.id}`} className="block h-full">
                      <Card className="h-full flex flex-col overflow-hidden transition-shadow hover:shadow-md">
                        <div className="relative w-full pt-[60%] bg-gray-200 overflow-hidden">
                          <img 
                            src={relatedVehicle.images[0]} 
                            alt={relatedVehicle.title}
                            className="absolute inset-0 w-full h-full object-cover transition-transform duration-300 hover:scale-105"
                          />
                          <Badge 
                            variant={relatedVehicle.type === 'car' ? 'primary' : relatedVehicle.type === 'bike' ? 'secondary' : 'success'}
                            className="absolute top-3 left-3 capitalize"
                          >
                            {relatedVehicle.type}
                          </Badge>
                        </div>
                        
                        <CardContent className="flex-1 flex flex-col p-4">
                          <h3 className="text-lg font-semibold text-gray-900 mb-1">{relatedVehicle.title}</h3>
                          <div className="flex items-center mb-2 text-sm">
                            <Star size={14} className="text-amber-400 fill-amber-400" />
                            <span className="ml-1 font-medium">{relatedVehicle.rating}</span>
                            <span className="ml-1 text-gray-500">({relatedVehicle.reviewCount})</span>
                          </div>
                          
                          <div className="mt-auto pt-3 border-t border-gray-100 flex justify-between items-center">
                            <div>
                              <span className="text-lg font-bold text-blue-600">${relatedVehicle.price}</span>
                              <span className="text-sm text-gray-500">/day</span>
                            </div>
                          </div>
                        </CardContent>
                      </Card>
                    </Link>
                  </motion.div>
                )
              ))}
            </div>
          </div>
        </div>
      </main>
      
      <Footer />
    </div>
  );
};