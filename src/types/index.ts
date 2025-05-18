export type UserRole = 'admin' | 'customer' | 'vendor';

export interface User {
  id: string;
  name: string;
  email: string;
  role: UserRole;
  avatar?: string;
}

export type VehicleType = 'car' | 'bike' | 'van';

export interface Vehicle {
  id: string;
  title: string;
  type: VehicleType;
  brand: string;
  model: string;
  year: number;
  price: number;
  location: string;
  images: string[];
  features: string[];
  description: string;
  vendorId: string;
  vendorName: string;
  rating: number;
  reviewCount: number;
  available: boolean;
}

export interface Booking {
  id: string;
  vehicleId: string;
  vehicleTitle: string;
  vehicleType: VehicleType;
  customerId: string;
  customerName: string;
  startDate: string;
  endDate: string;
  totalPrice: number;
  status: 'pending' | 'confirmed' | 'cancelled' | 'completed';
  createdAt: string;
}

export interface Review {
  id: string;
  vehicleId: string;
  userId: string;
  userName: string;
  userAvatar?: string;
  rating: number;
  comment: string;
  createdAt: string;
}