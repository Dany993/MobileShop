/*
------------------------------------------------------------------------------ 
This code was generated by Amplication. 
 
Changes to this file will be lost if the code is regenerated. 

There are other ways to to customize your code, see this doc to learn more
https://docs.amplication.com/how-to/custom-code

------------------------------------------------------------------------------
  */
import { InputType, Field } from "@nestjs/graphql";
import { ApiProperty } from "@nestjs/swagger";
import {
  IsString,
  MaxLength,
  IsOptional,
  ValidateNested,
} from "class-validator";
import { ProductCreateNestedManyWithoutSpecificationsInput } from "./ProductCreateNestedManyWithoutSpecificationsInput";
import { Type } from "class-transformer";

@InputType()
class SpecificationCreateInput {
  @ApiProperty({
    required: false,
    type: String,
  })
  @IsString()
  @MaxLength(1000)
  @IsOptional()
  @Field(() => String, {
    nullable: true,
  })
  details?: string | null;

  @ApiProperty({
    required: false,
    type: () => ProductCreateNestedManyWithoutSpecificationsInput,
  })
  @ValidateNested()
  @Type(() => ProductCreateNestedManyWithoutSpecificationsInput)
  @IsOptional()
  @Field(() => ProductCreateNestedManyWithoutSpecificationsInput, {
    nullable: true,
  })
  products?: ProductCreateNestedManyWithoutSpecificationsInput;
}

export { SpecificationCreateInput as SpecificationCreateInput };
