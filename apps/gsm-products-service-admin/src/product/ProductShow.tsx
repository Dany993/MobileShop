import * as React from "react";
import {
  Show,
  SimpleShowLayout,
  ShowProps,
  ReferenceField,
  TextField,
  DateField,
} from "react-admin";
import { BRAND_TITLE_FIELD } from "../brand/BrandTitle";
import { CATEGORY_TITLE_FIELD } from "../category/CategoryTitle";
import { SPECIFICATION_TITLE_FIELD } from "../specification/SpecificationTitle";

export const ProductShow = (props: ShowProps): React.ReactElement => {
  return (
    <Show {...props}>
      <SimpleShowLayout>
        <ReferenceField label="Brand" source="brand.id" reference="Brand">
          <TextField source={BRAND_TITLE_FIELD} />
        </ReferenceField>
        <ReferenceField
          label="Category"
          source="category.id"
          reference="Category"
        >
          <TextField source={CATEGORY_TITLE_FIELD} />
        </ReferenceField>
        <DateField source="createdAt" label="Created At" />
        <TextField label="description" source="description" />
        <TextField label="ID" source="id" />
        <TextField label="name" source="name" />
        <TextField label="price" source="price" />
        <ReferenceField
          label="Specification"
          source="specification.id"
          reference="Specification"
        >
          <TextField source={SPECIFICATION_TITLE_FIELD} />
        </ReferenceField>
        <DateField source="updatedAt" label="Updated At" />
      </SimpleShowLayout>
    </Show>
  );
};
