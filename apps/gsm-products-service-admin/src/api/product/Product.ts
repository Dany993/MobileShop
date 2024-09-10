import { Brand } from "../brand/Brand";
import { Category } from "../category/Category";
import { Specification } from "../specification/Specification";

export type Product = {
  brand?: Brand | null;
  category?: Category | null;
  createdAt: Date;
  description: string | null;
  id: string;
  name: string | null;
  price: number | null;
  specification?: Specification | null;
  updatedAt: Date;
};
