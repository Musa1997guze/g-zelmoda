export interface Product {
  id: string;
  name: string;
  description: string;
  price: number;
  category: string;
  subcategory: string;
  sizes: Size[];
  colors: Color[];
  images: ProductImage[];
  materials: Material[];
  careInstructions: string[];
  stock: StockInfo;
  featured: boolean;
  created_at: string;
  updated_at: string;
}

export interface Size {
  id: string;
  name: string;
  measurements: Record<string, string>;
}

export interface Color {
  id: string;
  name: string;
  hex: string;
}

export interface ProductImage {
  id: string;
  url: string;
  alt: string;
  isPrimary: boolean;
  order: number;
}

export interface Material {
  name: string;
  percentage: number;
}

export interface StockInfo {
  total: number;
  bySizeAndColor: Record<string, Record<string, number>>;
  lowStockThreshold: number;
}

export interface User {
  id: string;
  email: string;
  firstName: string;
  lastName: string;
  phoneNumber?: string;
  addresses: Address[];
  orders: Order[];
  wishlist: string[];
  notifications: NotificationPreference[];
  created_at: string;
}

export interface Address {
  id: string;
  type: 'billing' | 'shipping';
  street: string;
  city: string;
  state: string;
  postalCode: string;
  country: string;
  isDefault: boolean;
}

export interface Order {
  id: string;
  userId: string;
  items: OrderItem[];
  total: number;
  status: OrderStatus;
  paymentInfo: PaymentInfo;
  shippingAddress: Address;
  billingAddress: Address;
  created_at: string;
  updated_at: string;
}

export interface OrderItem {
  productId: string;
  quantity: number;
  size: string;
  color: string;
  price: number;
}

export type OrderStatus = 
  | 'pending'
  | 'payment_processing'
  | 'confirmed'
  | 'processing'
  | 'shipped'
  | 'delivered'
  | 'cancelled'
  | 'refunded';

export interface PaymentInfo {
  id: string;
  method: 'iban';
  status: 'pending' | 'processing' | 'completed' | 'failed';
  transactionId?: string;
  amount: number;
  currency: string;
  created_at: string;
}

export interface NotificationPreference {
  type: 'stock' | 'order' | 'promotion';
  email: boolean;
  push: boolean;
}

export interface AdminUser extends User {
  role: 'admin' | 'manager' | 'support';
  permissions: string[];
}