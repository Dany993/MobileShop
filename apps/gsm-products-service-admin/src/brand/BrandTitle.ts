import { Brand as TBrand } from "../api/brand/Brand";

export const BRAND_TITLE_FIELD = "id";

export const BrandTitle = (record: TBrand): string => {
  return record.id?.toString() || String(record.id);
};
