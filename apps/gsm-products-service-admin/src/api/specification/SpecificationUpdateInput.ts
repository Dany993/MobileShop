import { ProductUpdateManyWithoutSpecificationsInput } from "./ProductUpdateManyWithoutSpecificationsInput";

export type SpecificationUpdateInput = {
  details?: string | null;
  products?: ProductUpdateManyWithoutSpecificationsInput;
};
