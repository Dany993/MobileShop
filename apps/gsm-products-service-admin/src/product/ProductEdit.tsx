import * as React from "react";

import {
  Edit,
  SimpleForm,
  EditProps,
  ReferenceInput,
  SelectInput,
  TextInput,
  NumberInput,
} from "react-admin";

import { BrandTitle } from "../brand/BrandTitle";
import { CategoryTitle } from "../category/CategoryTitle";
import { SpecificationTitle } from "../specification/SpecificationTitle";

export const ProductEdit = (props: EditProps): React.ReactElement => {
  return (
    <Edit {...props}>
      <SimpleForm>
        <ReferenceInput source="brand.id" reference="Brand" label="Brand">
          <SelectInput optionText={BrandTitle} />
        </ReferenceInput>
        <ReferenceInput
          source="category.id"
          reference="Category"
          label="Category"
        >
          <SelectInput optionText={CategoryTitle} />
        </ReferenceInput>
        <TextInput label="description" multiline source="description" />
        <TextInput label="name" source="name" />
        <NumberInput label="price" source="price" />
        <ReferenceInput
          source="specification.id"
          reference="Specification"
          label="Specification"
        >
          <SelectInput optionText={SpecificationTitle} />
        </ReferenceInput>
      </SimpleForm>
    </Edit>
  );
};
