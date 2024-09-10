import { ProductCreateNestedManyWithoutSpecificationsInput } from "./ProductCreateNestedManyWithoutSpecificationsInput";

export type SpecificationCreateInput = {
  details?: string | null;
  products?: ProductCreateNestedManyWithoutSpecificationsInput;
};
