import React from 'react';
import { motion } from 'framer-motion';
import { VehicleCard } from './VehicleCard';
import { Vehicle } from '../../types';

interface VehicleListProps {
  vehicles: Vehicle[];
  title?: string;
}

export const VehicleList = ({ vehicles, title }: VehicleListProps) => {
  return (
    <div className="py-8">
      {title && (
        <motion.h2 
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.3 }}
          className="text-2xl font-bold text-gray-900 mb-6"
        >
          {title}
        </motion.h2>
      )}
      
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
        {vehicles.map((vehicle) => (
          <VehicleCard key={vehicle.id} vehicle={vehicle} />
        ))}
      </div>
    </div>
  );
};