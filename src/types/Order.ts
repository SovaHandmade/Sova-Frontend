import { OrderItem } from "./OrderItem";

export type Order = {
  id: number;
  name: string;
  date: string;
  status: string;
  total_price: number;
  items: OrderItem[];
};
