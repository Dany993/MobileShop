import { SortOrder } from "../../util/SortOrder";

export type ProductOrderByInput = {
  brandId?: SortOrder;
  categoryId?: SortOrder;
  createdAt?: SortOrder;
  description?: SortOrder;
  id?: SortOrder;
  name?: SortOrder;
  price?: SortOrder;
  specificationId?: SortOrder;
  updatedAt?: SortOrder;
};
