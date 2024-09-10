import { ProductCreateNestedManyWithoutBrandsInput } from "./ProductCreateNestedManyWithoutBrandsInput";

export type BrandCreateInput = {
  name?: string | null;
  products?: ProductCreateNestedManyWithoutBrandsInput;
};
