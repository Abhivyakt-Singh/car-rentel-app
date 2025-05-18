import React from 'react';
import { Link } from 'react-router-dom';
import { Star, MapPin, Users, Fuel, Calendar } from 'lucide-react';
import { motion } from 'framer-motion';
import { Vehicle } from '../../types';
import { Card, CardContent } from '../ui/Card';
import { Badge } from '../ui/Badge';

interface VehicleCardProps {
  vehicle: Vehicle;
}

export const VehicleCard = ({ vehicle }: VehicleCardProps) => {
  const {
    id,
    title,
    type,
    brand,
    price,
    location,
    images,
    rating,
    reviewCount,
    year
  } = vehicle;

  return (
    <motion.div
      whileHover={{ y: -5, transition: { duration: 0.2 } }}
      className="h-full"
    >
      <Link to={`/vehicles/${id}`} className="block h-full">
        <Card className="h-full flex flex-col overflow-hidden transition-shadow hover:shadow-md">
          <div className="relative w-full pt-[60%] bg-gray-200 overflow-hidden">
            <img 
              src={images[0]} 
              alt={title}
              className="absolute inset-0 w-full h-full object-cover transition-transform duration-300 hover:scale-105"
            />
            <Badge 
              variant={type === 'car' ? 'primary' : type === 'bike' ? 'secondary' : 'success'}
              className="absolute top-3 left-3 capitalize"
            >
              {type}
            </Badge>
          </div>
          
          <CardContent className="flex-1 flex flex-col">
            <div className="flex justify-between items-start mb-2">
              <h3 className="text-lg font-semibold text-gray-900 line-clamp-1">{title}</h3>
              <div className="flex items-center">
                <Star size={16} className="text-amber-400 fill-amber-400" />
                <span className="ml-1 text-sm font-medium text-gray-700">{rating}</span>
                <span className="ml-1 text-xs text-gray-500">({reviewCount})</span>
              </div>
            </div>
            
            <p className="text-sm text-gray-500 mb-3">{brand} • {year}</p>
            
            <div className="flex items-center text-sm text-gray-500 mb-2">
              <MapPin size={14} className="mr-1" />
              <span className="truncate">{location}</span>
            </div>
            
            <div className="flex space-x-3 text-xs text-gray-500 mb-4">
              {type === 'car' && (
                <>
                  <div className="flex items-center">
                    <Users size={14} className="mr-1" />
                    <span>5 seats</span>
                  </div>
                  <div className="flex items-center">
                    <Fuel size={14} className="mr-1" />
                    <span>Hybrid</span>
                  </div>
                </>
              )}
              {type === 'bike' && (
                <div className="flex items-center">
                  <Calendar size={14} className="mr-1" />
                  <span>New Model</span>
                </div>
              )}
            </div>
            
            <div className="mt-auto pt-3 border-t border-gray-100 flex justify-between items-center">
              <div>
                <span className="text-lg font-bold text-blue-600">${price}</span>
                <span className="text-sm text-gray-500">/day</span>
              </div>
              <Badge variant="secondary" className="text-xs">Available Now</Badge>
            </div>
          </CardContent>
        </Card>
      </Link>
    </motion.div>
  );
};