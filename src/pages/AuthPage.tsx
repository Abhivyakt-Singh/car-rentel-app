import React from 'react';
import { useParams } from 'react-router-dom';
import { Navbar } from '../components/layout/Navbar';
import { Footer } from '../components/layout/Footer';
import { AuthForm } from '../components/auth/AuthForm';

export const AuthPage = () => {
  const { type } = useParams<{ type: 'login' | 'register' }>();
  
  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      
      <main className="flex-grow pt-24 bg-gray-50">
        <div className="container mx-auto px-4 py-12">
          <AuthForm type={type || 'login'} />
        </div>
      </main>
      
      <Footer />
    </div>
  );
};