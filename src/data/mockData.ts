import { Vehicle, Booking, Review, User, VehicleType } from '../types';

// Mock Users
export const mockUsers: User[] = [
  {
    id: '1',
    name: 'Admin User',
    email: 'admin@example.com',
    role: 'admin',
    avatar: 'https://images.pexels.com/photos/220453/pexels-photo-220453.jpeg?auto=compress&cs=tinysrgb&w=300'
  },
  {
    id: '2',
    name: 'John Doe',
    email: 'john@example.com',
    role: 'customer',
    avatar: 'https://images.pexels.com/photos/1222271/pexels-photo-1222271.jpeg?auto=compress&cs=tinysrgb&w=300'
  },
  {
    id: '3',
    name: 'Jane Smith',
    email: 'jane@example.com',
    role: 'vendor',
    avatar: 'https://images.pexels.com/photos/415829/pexels-photo-415829.jpeg?auto=compress&cs=tinysrgb&w=300'
  }
];

// Mock Vehicles
export const mockVehicles: Vehicle[] = [
  {
    id: '1',
    title: 'Tesla Model 3',
    type: 'car',
    brand: 'Tesla',
    model: 'Model 3',
    year: 2023,
    price: 85,
    location: 'San Francisco, CA',
    images: [
      'https://images.pexels.com/photos/12086520/pexels-photo-12086520.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
      'https://images.pexels.com/photos/10544440/pexels-photo-10544440.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1'
    ],
    features: ['Electric', 'Autopilot', 'Premium Sound', 'Heated Seats'],
    description: 'Experience the future of driving with this fully electric Tesla Model 3. Features include Autopilot, premium sound system, and all the modern amenities you expect.',
    vendorId: '3',
    vendorName: 'Jane Smith',
    rating: 4.9,
    reviewCount: 42,
    available: true
  },
  {
    id: '2',
    title: 'Honda CBR 650R',
    type: 'bike',
    brand: 'Honda',
    model: 'CBR 650R',
    year: 2022,
    price: 45,
    location: 'Los Angeles, CA',
    images: [
      'https://images.pexels.com/photos/5214413/pexels-photo-5214413.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
      'https://images.pexels.com/photos/2549942/pexels-photo-2549942.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1'
    ],
    features: ['Sport Bike', 'ABS', '649cc Engine', 'LED Lights'],
    description: 'Feel the thrill of riding this powerful Honda CBR 650R. Perfect for weekend rides or daily commuting with its comfortable ergonomics and reliable performance.',
    vendorId: '3',
    vendorName: 'Jane Smith',
    rating: 4.7,
    reviewCount: 28,
    available: true
  },
  {
    id: '3',
    title: 'Ford Transit Custom',
    type: 'van',
    brand: 'Ford',
    model: 'Transit Custom',
    year: 2021,
    price: 75,
    location: 'New York, NY',
    images: [
      'https://images.pexels.com/photos/2533092/pexels-photo-2533092.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
      'https://images.pexels.com/photos/4064422/pexels-photo-4064422.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1'
    ],
    features: ['8 Seats', 'Air Conditioning', 'Bluetooth', 'Rear Camera'],
    description: 'Spacious and versatile Ford Transit Custom van, perfect for moving, road trips, or business needs. Comes with modern amenities for a comfortable journey.',
    vendorId: '3',
    vendorName: 'Jane Smith',
    rating: 4.5,
    reviewCount: 36,
    available: true
  },
  {
    id: '4',
    title: 'BMW 5 Series',
    type: 'car',
    brand: 'BMW',
    model: '5 Series',
    year: 2022,
    price: 110,
    location: 'Chicago, IL',
    images: [
      'https://images.pexels.com/photos/892522/pexels-photo-892522.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
      'https://images.pexels.com/photos/170811/pexels-photo-170811.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1'
    ],
    features: ['Leather Interior', 'GPS Navigation', 'Sunroof', 'Premium Sound'],
    description: 'Luxury and performance in one package with this BMW 5 Series. Elegant interior, powerful engine, and advanced technology for an exceptional driving experience.',
    vendorId: '3',
    vendorName: 'Jane Smith',
    rating: 4.8,
    reviewCount: 52,
    available: true
  },
  {
    id: '5',
    title: 'Vespa Primavera',
    type: 'bike',
    brand: 'Vespa',
    model: 'Primavera',
    year: 2023,
    price: 35,
    location: 'Miami, FL',
    images: [
      'https://images.pexels.com/photos/5214414/pexels-photo-5214414.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
      'https://images.pexels.com/photos/210117/pexels-photo-210117.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1'
    ],
    features: ['125cc Engine', 'Automatic', 'Storage Under Seat', 'LED Lights'],
    description: 'Explore the city in style with this classic Vespa Primavera. Easy to ride, fuel-efficient, and perfect for urban adventures.',
    vendorId: '3',
    vendorName: 'Jane Smith',
    rating: 4.6,
    reviewCount: 33,
    available: true
  },
  {
    id: '6',
    title: 'Mercedes-Benz Sprinter',
    type: 'van',
    brand: 'Mercedes-Benz',
    model: 'Sprinter',
    year: 2022,
    price: 120,
    location: 'Seattle, WA',
    images: [
      'https://images.pexels.com/photos/14514351/pexels-photo-14514351.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
      'https://images.pexels.com/photos/17801742/pexels-photo-17801742/free-photo-of-black-van-parked-on-sidewalk-in-city.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1'
    ],
    features: ['12 Seats', 'Air Conditioning', 'GPS Navigation', 'Backup Camera'],
    description: 'Premium Mercedes-Benz Sprinter van with plenty of space and comfort features. Ideal for group travel, events, or business purposes.',
    vendorId: '3',
    vendorName: 'Jane Smith',
    rating: 4.9,
    reviewCount: 45,
    available: true
  },
  {
    id: '7',
    title: 'Toyota Camry Hybrid',
    type: 'car',
    brand: 'Toyota',
    model: 'Camry Hybrid',
    year: 2023,
    price: 65,
    location: 'Austin, TX',
    images: [
      'https://images.pexels.com/photos/909907/pexels-photo-909907.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
      'https://images.pexels.com/photos/774909/pexels-photo-774909.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1'
    ],
    features: ['Hybrid', 'Fuel Efficient', 'Apple CarPlay', 'Lane Assist'],
    description: 'Eco-friendly and economical Toyota Camry Hybrid. Smooth ride, spacious interior, and excellent fuel economy make it perfect for any journey.',
    vendorId: '3',
    vendorName: 'Jane Smith',
    rating: 4.7,
    reviewCount: 38,
    available: true
  },
  {
    id: '8',
    title: 'Harley-Davidson Street Glide',
    type: 'bike',
    brand: 'Harley-Davidson',
    model: 'Street Glide',
    year: 2021,
    price: 95,
    location: 'Denver, CO',
    images: [
      'https://images.pexels.com/photos/595807/pexels-photo-595807.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
      'https://images.pexels.com/photos/163210/motorcycles-race-helmets-pilots-163210.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1'
    ],
    features: ['107ci V-Twin Engine', 'Infotainment System', 'ABS', 'Cruise Control'],
    description: 'Experience the legendary Harley-Davidson with this Street Glide model. Powerful engine, comfortable touring capabilities, and iconic American style.',
    vendorId: '3',
    vendorName: 'Jane Smith',
    rating: 4.8,
    reviewCount: 41,
    available: true
  }
];

// Mock Bookings
export const mockBookings: Booking[] = [
  {
    id: '1',
    vehicleId: '1',
    vehicleTitle: 'Tesla Model 3',
    vehicleType: 'car',
    customerId: '2',
    customerName: 'John Doe',
    startDate: '2025-06-10',
    endDate: '2025-06-15',
    totalPrice: 425,
    status: 'confirmed',
    createdAt: '2025-05-20T14:30:00.000Z'
  },
  {
    id: '2',
    vehicleId: '2',
    vehicleTitle: 'Honda CBR 650R',
    vehicleType: 'bike',
    customerId: '2',
    customerName: 'John Doe',
    startDate: '2025-07-05',
    endDate: '2025-07-07',
    totalPrice: 90,
    status: 'pending',
    createdAt: '2025-06-28T10:15:00.000Z'
  }
];

// Mock Reviews
export const mockReviews: Review[] = [
  {
    id: '1',
    vehicleId: '1',
    userId: '2',
    userName: 'John Doe',
    userAvatar: 'https://images.pexels.com/photos/1222271/pexels-photo-1222271.jpeg?auto=compress&cs=tinysrgb&w=300',
    rating: 5,
    comment: 'Amazing car! Very clean and drives like a dream. The autopilot feature was incredible.',
    createdAt: '2025-06-16T18:20:00.000Z'
  },
  {
    id: '2',
    vehicleId: '1',
    userId: '3',
    userName: 'Alex Johnson',
    userAvatar: 'https://images.pexels.com/photos/614810/pexels-photo-614810.jpeg?auto=compress&cs=tinysrgb&w=300',
    rating: 4,
    comment: 'Great experience overall. The car was clean and performance was excellent. Only giving 4 stars because pickup took a bit longer than expected.',
    createdAt: '2025-05-30T14:10:00.000Z'
  },
  {
    id: '3',
    vehicleId: '2',
    userId: '2',
    userName: 'John Doe',
    userAvatar: 'https://images.pexels.com/photos/1222271/pexels-photo-1222271.jpeg?auto=compress&cs=tinysrgb&w=300',
    rating: 5,
    comment: 'Perfect bike for a weekend ride. Powerful engine and very comfortable. Will definitely rent again!',
    createdAt: '2025-06-05T09:45:00.000Z'
  }
];

// Helper function to get vehicles by type
export const getVehiclesByType = (type: VehicleType): Vehicle[] => {
  return mockVehicles.filter(vehicle => vehicle.type === type);
};

// Helper function to get vehicle by id
export const getVehicleById = (id: string): Vehicle | undefined => {
  return mockVehicles.find(vehicle => vehicle.id === id);
};

// Helper function to get bookings by user id
export const getBookingsByUserId = (userId: string): Booking[] => {
  return mockBookings.filter(booking => booking.customerId === userId);
};

// Helper function to get reviews by vehicle id
export const getReviewsByVehicleId = (vehicleId: string): Review[] => {
  return mockReviews.filter(review => review.vehicleId === vehicleId);
};