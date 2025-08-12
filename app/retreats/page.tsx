import React from 'react';
import Hero from '@/components/retreats/Hero';
import RetreatCards from '@/components/retreats/RetreatCards';
import PreRegisterForm from '@/components/retreats/PreRegisterForm';
import NextRetreatsComponent from '@/components/retreats/NextRetreats';

export default function RetreatsPage() {
  return (
    <main>
      <Hero />
      <RetreatCards />
      <PreRegisterForm />
      <NextRetreatsComponent />
    </main>
  );
}