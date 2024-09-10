import { ProductUpdateManyWithoutBrandsInput } from "./ProductUpdateManyWithoutBrandsInput";

export type BrandUpdateInput = {
  name?: string | null;
  products?: ProductUpdateManyWithoutBrandsInput;
};
