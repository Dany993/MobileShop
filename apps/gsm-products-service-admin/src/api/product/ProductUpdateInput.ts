import { BrandWhereUniqueInput } from "../brand/BrandWhereUniqueInput";
import { CategoryWhereUniqueInput } from "../category/CategoryWhereUniqueInput";
import { SpecificationWhereUniqueInput } from "../specification/SpecificationWhereUniqueInput";

export type ProductUpdateInput = {
  brand?: BrandWhereUniqueInput | null;
  category?: CategoryWhereUniqueInput | null;
  description?: string | null;
  name?: string | null;
  price?: number | null;
  specification?: SpecificationWhereUniqueInput | null;
};
