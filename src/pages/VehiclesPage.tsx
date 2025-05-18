import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Navbar } from '../components/layout/Navbar';
import { Footer } from '../components/layout/Footer';
import { VehicleList } from '../components/vehicles/VehicleList';
import { VehicleFilters } from '../components/vehicles/VehicleFilters';
import { mockVehicles } from '../data/mockData';

export const VehiclesPage = () => {
  const [vehicles] = useState(mockVehicles);
  
  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      
      <main className="flex-grow pt-24">
        <div className="container mx-auto px-4 py-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.3 }}
          >
            <div className="flex justify-between items-center mb-8">
              <h1 className="text-3xl font-bold text-gray-900">All Vehicles</h1>
              <p className="text-gray-600">
                Showing <span className="font-medium">{vehicles.length}</span> vehicles
              </p>
            </div>
            
            <VehicleFilters />
            
            <VehicleList vehicles={vehicles} />
          </motion.div>
        </div>
      </main>
      
      <Footer />
    </div>
  );
};