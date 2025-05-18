import React from 'react';
import { motion } from 'framer-motion';
import { Car, Bike, Truck, Award, Shield, Clock, Users } from 'lucide-react';
import { Navbar } from '../components/layout/Navbar';
import { Footer } from '../components/layout/Footer';
import { Hero } from '../components/home/Hero';
import { VehicleList } from '../components/vehicles/VehicleList';
import { Button } from '../components/ui/Button';
import { mockVehicles } from '../data/mockData';

const featuredVehicles = mockVehicles.slice(0, 4);

const container = {
  hidden: { opacity: 0 },
  show: {
    opacity: 1,
    transition: {
      staggerChildren: 0.1
    }
  }
};

const item = {
  hidden: { opacity: 0, y: 20 },
  show: { opacity: 1, y: 0 }
};

export const HomePage = () => {
  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      
      <main className="flex-grow pt-16">
        <Hero />
        
        <div className="container mx-auto px-4 py-12">
          <VehicleList vehicles={featuredVehicles} title="Featured Vehicles" />
          
          <div className="text-center mt-6">
            <Button 
              variant="outline" 
              className="font-medium"
            >
              View All Vehicles
            </Button>
          </div>
          
          {/* Vehicle Categories */}
          <div className="py-16">
            <div className="text-center mb-12">
              <h2 className="text-3xl font-bold text-gray-900 mb-4">Browse by Category</h2>
              <p className="text-gray-600 max-w-2xl mx-auto">
                Find the perfect vehicle for your needs, whether it's a sleek car, sporty bike, or spacious van.
              </p>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              <motion.div 
                whileHover={{ y: -10, transition: { duration: 0.2 } }}
                className="bg-gradient-to-r from-blue-500 to-blue-700 text-white rounded-lg overflow-hidden shadow-lg"
              >
                <div className="p-8 flex flex-col items-center text-center">
                  <div className="bg-white/20 p-4 rounded-full mb-6">
                    <Car size={36} />
                  </div>
                  <h3 className="text-xl font-bold mb-3">Cars</h3>
                  <p className="mb-6">Comfortable and reliable cars for any journey, from compact to luxury models.</p>
                  <Button 
                    variant="outline" 
                    className="bg-transparent border-white hover:bg-white hover:text-blue-700 mt-auto"
                  >
                    Browse Cars
                  </Button>
                </div>
              </motion.div>
              
              <motion.div 
                whileHover={{ y: -10, transition: { duration: 0.2 } }}
                className="bg-gradient-to-r from-purple-500 to-purple-700 text-white rounded-lg overflow-hidden shadow-lg"
              >
                <div className="p-8 flex flex-col items-center text-center">
                  <div className="bg-white/20 p-4 rounded-full mb-6">
                    <Bike size={36} />
                  </div>
                  <h3 className="text-xl font-bold mb-3">Bikes</h3>
                  <p className="mb-6">Explore with freedom on our range of bikes, from cruisers to sport models.</p>
                  <Button 
                    variant="outline" 
                    className="bg-transparent border-white hover:bg-white hover:text-purple-700 mt-auto"
                  >
                    Browse Bikes
                  </Button>
                </div>
              </motion.div>
              
              <motion.div 
                whileHover={{ y: -10, transition: { duration: 0.2 } }}
                className="bg-gradient-to-r from-emerald-500 to-emerald-700 text-white rounded-lg overflow-hidden shadow-lg"
              >
                <div className="p-8 flex flex-col items-center text-center">
                  <div className="bg-white/20 p-4 rounded-full mb-6">
                    <Truck size={36} />
                  </div>
                  <h3 className="text-xl font-bold mb-3">Vans</h3>
                  <p className="mb-6">Spacious vans perfect for moving, group trips, or business needs.</p>
                  <Button 
                    variant="outline" 
                    className="bg-transparent border-white hover:bg-white hover:text-emerald-700 mt-auto"
                  >
                    Browse Vans
                  </Button>
                </div>
              </motion.div>
            </div>
          </div>
          
          {/* How It Works */}
          <div className="py-16 bg-gray-50 -mx-4 px-4">
            <div className="container mx-auto">
              <div className="text-center mb-12">
                <h2 className="text-3xl font-bold text-gray-900 mb-4">How It Works</h2>
                <p className="text-gray-600 max-w-2xl mx-auto">
                  Renting a vehicle with us is quick and easy. Follow these simple steps to get on the road.
                </p>
              </div>
              
              <div className="flex flex-col md:flex-row justify-between items-center mb-12">
                <motion.div 
                  whileInView={{ opacity: 1, x: 0 }}
                  initial={{ opacity: 0, x: -50 }}
                  transition={{ duration: 0.5 }}
                  className="flex-1 p-6"
                >
                  <img 
                    src="https://images.pexels.com/photos/5835359/pexels-photo-5835359.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1" 
                    alt="Browsing vehicles"
                    className="rounded-lg shadow-lg object-cover w-full h-[400px]"
                  />
                </motion.div>
                <motion.div 
                  whileInView={{ opacity: 1, x: 0 }}
                  initial={{ opacity: 0, x: 50 }}
                  transition={{ duration: 0.5 }}
                  className="flex-1 p-6"
                >
                  <h3 className="text-2xl font-bold text-gray-900 mb-4">1. Search & Compare</h3>
                  <p className="text-gray-600 mb-6">
                    Browse our extensive collection of vehicles. Filter by type, price, location, or features to find your perfect match. Compare options side by side.
                  </p>
                  <ul className="space-y-3">
                    <li className="flex items-start">
                      <span className="bg-blue-100 text-blue-800 p-1 rounded-full mr-2">✓</span>
                      <span>Filter by vehicle type, price range, or location</span>
                    </li>
                    <li className="flex items-start">
                      <span className="bg-blue-100 text-blue-800 p-1 rounded-full mr-2">✓</span>
                      <span>View detailed specifications and high-quality photos</span>
                    </li>
                    <li className="flex items-start">
                      <span className="bg-blue-100 text-blue-800 p-1 rounded-full mr-2">✓</span>
                      <span>Read authentic reviews from previous renters</span>
                    </li>
                  </ul>
                </motion.div>
              </div>
              
              <div className="flex flex-col-reverse md:flex-row justify-between items-center mb-12">
                <motion.div 
                  whileInView={{ opacity: 1, x: 0 }}
                  initial={{ opacity: 0, x: -50 }}
                  transition={{ duration: 0.5 }}
                  className="flex-1 p-6"
                >
                  <h3 className="text-2xl font-bold text-gray-900 mb-4">2. Book & Pay</h3>
                  <p className="text-gray-600 mb-6">
                    Once you've found your vehicle, select your dates and book instantly. Our secure payment system accepts multiple payment methods.
                  </p>
                  <ul className="space-y-3">
                    <li className="flex items-start">
                      <span className="bg-blue-100 text-blue-800 p-1 rounded-full mr-2">✓</span>
                      <span>Simple booking process with instant confirmation</span>
                    </li>
                    <li className="flex items-start">
                      <span className="bg-blue-100 text-blue-800 p-1 rounded-full mr-2">✓</span>
                      <span>Secure payment with fraud protection</span>
                    </li>
                    <li className="flex items-start">
                      <span className="bg-blue-100 text-blue-800 p-1 rounded-full mr-2">✓</span>
                      <span>Flexible cancellation options available</span>
                    </li>
                  </ul>
                </motion.div>
                <motion.div 
                  whileInView={{ opacity: 1, x: 0 }}
                  initial={{ opacity: 0, x: 50 }}
                  transition={{ duration: 0.5 }}
                  className="flex-1 p-6"
                >
                  <img 
                    src="https://images.pexels.com/photos/7821714/pexels-photo-7821714.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1" 
                    alt="Booking a vehicle"
                    className="rounded-lg shadow-lg object-cover w-full h-[400px]"
                  />
                </motion.div>
              </div>
              
              <div className="flex flex-col md:flex-row justify-between items-center">
                <motion.div 
                  whileInView={{ opacity: 1, x: 0 }}
                  initial={{ opacity: 0, x: -50 }}
                  transition={{ duration: 0.5 }}
                  className="flex-1 p-6"
                >
                  <img 
                    src="https://images.pexels.com/photos/13861/IMG_3496bfree.jpg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1" 
                    alt="Picking up keys"
                    className="rounded-lg shadow-lg object-cover w-full h-[400px]"
                  />
                </motion.div>
                <motion.div 
                  whileInView={{ opacity: 1, x: 0 }}
                  initial={{ opacity: 0, x: 50 }}
                  transition={{ duration: 0.5 }}
                  className="flex-1 p-6"
                >
                  <h3 className="text-2xl font-bold text-gray-900 mb-4">3. Pickup & Enjoy</h3>
                  <p className="text-gray-600 mb-6">
                    Collect your vehicle at the agreed location. Our vendors will provide a thorough walkthrough before you hit the road for your adventure.
                  </p>
                  <ul className="space-y-3">
                    <li className="flex items-start">
                      <span className="bg-blue-100 text-blue-800 p-1 rounded-full mr-2">✓</span>
                      <span>Convenient pickup locations across the city</span>
                    </li>
                    <li className="flex items-start">
                      <span className="bg-blue-100 text-blue-800 p-1 rounded-full mr-2">✓</span>
                      <span>Thorough vehicle orientation before departure</span>
                    </li>
                    <li className="flex items-start">
                      <span className="bg-blue-100 text-blue-800 p-1 rounded-full mr-2">✓</span>
                      <span>24/7 roadside assistance for peace of mind</span>
                    </li>
                  </ul>
                </motion.div>
              </div>
            </div>
          </div>
          
          {/* Why Choose Us */}
          <motion.div 
            className="py-16"
            variants={container}
            initial="hidden"
            whileInView="show"
            viewport={{ once: true }}
          >
            <div className="text-center mb-12">
              <h2 className="text-3xl font-bold text-gray-900 mb-4">Why Choose VehicleRent</h2>
              <p className="text-gray-600 max-w-2xl mx-auto">
                We're committed to providing the best rental experience with quality vehicles and exceptional service.
              </p>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
              <motion.div 
                className="bg-white p-6 rounded-lg shadow-sm border border-gray-100 text-center"
                variants={item}
              >
                <div className="flex justify-center mb-4">
                  <div className="p-3 bg-blue-100 rounded-full">
                    <Award className="h-8 w-8 text-blue-600" />
                  </div>
                </div>
                <h3 className="text-lg font-semibold text-gray-900 mb-2">Quality Vehicles</h3>
                <p className="text-gray-600">
                  All our vehicles are regularly maintained and thoroughly inspected for your safety and comfort.
                </p>
              </motion.div>
              
              <motion.div 
                className="bg-white p-6 rounded-lg shadow-sm border border-gray-100 text-center"
                variants={item}
              >
                <div className="flex justify-center mb-4">
                  <div className="p-3 bg-blue-100 rounded-full">
                    <Shield className="h-8 w-8 text-blue-600" />
                  </div>
                </div>
                <h3 className="text-lg font-semibold text-gray-900 mb-2">Insurance Included</h3>
                <p className="text-gray-600">
                  Peace of mind with comprehensive insurance coverage included in every rental.
                </p>
              </motion.div>
              
              <motion.div 
                className="bg-white p-6 rounded-lg shadow-sm border border-gray-100 text-center"
                variants={item}
              >
                <div className="flex justify-center mb-4">
                  <div className="p-3 bg-blue-100 rounded-full">
                    <Clock className="h-8 w-8 text-blue-600" />
                  </div>
                </div>
                <h3 className="text-lg font-semibold text-gray-900 mb-2">24/7 Support</h3>
                <p className="text-gray-600">
                  Our customer support team is available around the clock to assist with any questions or issues.
                </p>
              </motion.div>
              
              <motion.div 
                className="bg-white p-6 rounded-lg shadow-sm border border-gray-100 text-center"
                variants={item}
              >
                <div className="flex justify-center mb-4">
                  <div className="p-3 bg-blue-100 rounded-full">
                    <Users className="h-8 w-8 text-blue-600" />
                  </div>
                </div>
                <h3 className="text-lg font-semibold text-gray-900 mb-2">Trusted Community</h3>
                <p className="text-gray-600">
                  Join thousands of satisfied customers who trust us for their rental needs.
                </p>
              </motion.div>
            </div>
          </motion.div>
          
          {/* CTA Section */}
          <div className="bg-blue-600 text-white rounded-xl overflow-hidden my-16">
            <div className="flex flex-col md:flex-row">
              <div className="md:w-1/2 p-8 md:p-12 flex flex-col justify-center">
                <h2 className="text-3xl font-bold mb-4">Ready to Rent Your Perfect Vehicle?</h2>
                <p className="text-blue-100 mb-8">
                  Join thousands of satisfied customers who have found their perfect ride with VehicleRent.
                </p>
                <div className="flex flex-wrap gap-4">
                  <Button className="bg-white text-blue-600 hover:bg-blue-50">
                    Find a Vehicle
                  </Button>
                  <Button variant="outline" className="border-white text-white hover:bg-blue-700">
                    List Your Vehicle
                  </Button>
                </div>
              </div>
              <div className="md:w-1/2 relative">
                <img 
                  src="https://images.pexels.com/photos/13464639/pexels-photo-13464639.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1" 
                  alt="Happy couple with rental car"
                  className="object-cover w-full h-full min-h-[300px]"
                />
              </div>
            </div>
          </div>
        </div>
      </main>
      
      <Footer />
    </div>
  );
};