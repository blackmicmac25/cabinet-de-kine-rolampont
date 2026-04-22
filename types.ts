import React from 'react';

export interface Practitioner {
  id: string;
  name: string;
  role: string;
  description: string;
  maiiaUrl: string;
  image: string;
}

export interface Service {
  id: string;
  title: string;
  description: string;
  icon: React.ElementType;
}

export interface PriceItem {
  label: string;
  price: string;
  details?: string;
}

export interface NavItem {
  label: string;
  path: string;
}