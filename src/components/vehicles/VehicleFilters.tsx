import React, { useState } from 'react';
import { Search, ChevronDown, Filter } from 'lucide-react';
import { Button } from '../ui/Button';
import { Badge } from '../ui/Badge';

export const VehicleFilters = () => {
  const [isFilterOpen, setIsFilterOpen] = useState(false);
  
  const toggleFilters = () => setIsFilterOpen(!isFilterOpen);
  
  return (
    <div className="bg-white shadow-sm rounded-lg p-4 mb-6">
      <div className="flex flex-col md:flex-row md:items-center justify-between gap-4">
        <div className="relative flex-1">
          <Search size={18} className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400" />
          <input
            type="text"
            placeholder="Search vehicles, brands, models..."
            className="w-full pl-10 pr-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
          />
        </div>
        
        <div className="flex items-center space-x-3">
          <div className="relative inline-block text-left">
            <button 
              className="inline-flex justify-center items-center w-full px-4 py-2 border border-gray-300 rounded-md bg-white text-gray-700 hover:bg-gray-50"
            >
              <span>Sort By</span>
              <ChevronDown size={16} className="ml-2" />
            </button>
          </div>
          
          <Button
            variant="outline"
            leftIcon={<Filter size={16} />}
            onClick={toggleFilters}
            className="md:hidden"
          >
            Filters
          </Button>
        </div>
      </div>
      
      <div className={`${isFilterOpen ? 'block' : 'hidden'} md:block mt-4 md:mt-6`}>
        <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-2">
              Vehicle Type
            </label>
            <div className="space-y-2">
              <div className="flex items-center">
                <input
                  id="type-car"
                  type="checkbox"
                  className="h-4 w-4 text-blue-600 border-gray-300 rounded focus:ring-blue-500"
                />
                <label htmlFor="type-car" className="ml-2 text-sm text-gray-700">
                  Cars
                </label>
              </div>
              <div className="flex items-center">
                <input
                  id="type-bike"
                  type="checkbox"
                  className="h-4 w-4 text-blue-600 border-gray-300 rounded focus:ring-blue-500"
                />
                <label htmlFor="type-bike" className="ml-2 text-sm text-gray-700">
                  Bikes
                </label>
              </div>
              <div className="flex items-center">
                <input
                  id="type-van"
                  type="checkbox"
                  className="h-4 w-4 text-blue-600 border-gray-300 rounded focus:ring-blue-500"
                />
                <label htmlFor="type-van" className="ml-2 text-sm text-gray-700">
                  Vans
                </label>
              </div>
            </div>
          </div>
          
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-2">
              Price Range
            </label>
            <input
              type="range"
              min="0"
              max="500"
              className="w-full h-2 bg-gray-200 rounded-lg appearance-none cursor-pointer"
            />
            <div className="flex justify-between text-xs text-gray-500 mt-2">
              <span>$0</span>
              <span>$500+</span>
            </div>
          </div>
          
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-2">
              Brand
            </label>
            <select className="w-full border-gray-300 rounded-md shadow-sm focus:border-blue-500 focus:ring-blue-500">
              <option value="">All Brands</option>
              <option value="toyota">Toyota</option>
              <option value="honda">Honda</option>
              <option value="ford">Ford</option>
              <option value="bmw">BMW</option>
              <option value="mercedes">Mercedes</option>
            </select>
          </div>
          
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-2">
              Features
            </label>
            <div className="space-y-2">
              <div className="flex items-center">
                <input
                  id="feature-gps"
                  type="checkbox"
                  className="h-4 w-4 text-blue-600 border-gray-300 rounded focus:ring-blue-500"
                />
                <label htmlFor="feature-gps" className="ml-2 text-sm text-gray-700">
                  GPS
                </label>
              </div>
              <div className="flex items-center">
                <input
                  id="feature-bluetooth"
                  type="checkbox"
                  className="h-4 w-4 text-blue-600 border-gray-300 rounded focus:ring-blue-500"
                />
                <label htmlFor="feature-bluetooth" className="ml-2 text-sm text-gray-700">
                  Bluetooth
                </label>
              </div>
              <div className="flex items-center">
                <input
                  id="feature-ac"
                  type="checkbox"
                  className="h-4 w-4 text-blue-600 border-gray-300 rounded focus:ring-blue-500"
                />
                <label htmlFor="feature-ac" className="ml-2 text-sm text-gray-700">
                  Air Conditioning
                </label>
              </div>
            </div>
          </div>
        </div>
        
        <div className="flex flex-wrap gap-2 mt-4">
          <Badge variant="primary" className="pl-2 pr-1 py-1 flex items-center gap-1">
            <span>Cars</span>
            <button className="hover:bg-blue-200 rounded-full p-0.5">
              <X size={14} />
            </button>
          </Badge>
          <Badge variant="primary" className="pl-2 pr-1 py-1 flex items-center gap-1">
            <span>$50 - $150</span>
            <button className="hover:bg-blue-200 rounded-full p-0.5">
              <X size={14} />
            </button>
          </Badge>
          <Badge variant="primary" className="pl-2 pr-1 py-1 flex items-center gap-1">
            <span>Toyota</span>
            <button className="hover:bg-blue-200 rounded-full p-0.5">
              <X size={14} />
            </button>
          </Badge>
        </div>
      </div>
    </div>
  );
};