import { StringNullableFilter } from "../../util/StringNullableFilter";
import { StringFilter } from "../../util/StringFilter";
import { ProductListRelationFilter } from "../product/ProductListRelationFilter";

export type SpecificationWhereInput = {
  details?: StringNullableFilter;
  id?: StringFilter;
  products?: ProductListRelationFilter;
};
