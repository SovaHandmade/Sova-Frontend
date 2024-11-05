import { OrderItem } from "./OrderItem";

export type Order = {
  id: number;
  name: string;
  date: string;
  status: string;
  user: number;
  total_price: number;
  items: OrderItem[];
};
