import type { ProductType } from "./Product";

export type CartiItemType = {
  id: string;
  userId: string;
  productId: string;
  product: ProductType;
};
