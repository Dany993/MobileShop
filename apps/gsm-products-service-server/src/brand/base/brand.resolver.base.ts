/*
------------------------------------------------------------------------------ 
This code was generated by Amplication. 
 
Changes to this file will be lost if the code is regenerated. 

There are other ways to to customize your code, see this doc to learn more
https://docs.amplication.com/how-to/custom-code

------------------------------------------------------------------------------
  */
import * as graphql from "@nestjs/graphql";
import { GraphQLError } from "graphql";
import { isRecordNotFoundError } from "../../prisma.util";
import { MetaQueryPayload } from "../../util/MetaQueryPayload";
import * as nestAccessControl from "nest-access-control";
import * as gqlACGuard from "../../auth/gqlAC.guard";
import { GqlDefaultAuthGuard } from "../../auth/gqlDefaultAuth.guard";
import * as common from "@nestjs/common";
import { AclFilterResponseInterceptor } from "../../interceptors/aclFilterResponse.interceptor";
import { AclValidateRequestInterceptor } from "../../interceptors/aclValidateRequest.interceptor";
import { Brand } from "./Brand";
import { BrandCountArgs } from "./BrandCountArgs";
import { BrandFindManyArgs } from "./BrandFindManyArgs";
import { BrandFindUniqueArgs } from "./BrandFindUniqueArgs";
import { CreateBrandArgs } from "./CreateBrandArgs";
import { UpdateBrandArgs } from "./UpdateBrandArgs";
import { DeleteBrandArgs } from "./DeleteBrandArgs";
import { ProductFindManyArgs } from "../../product/base/ProductFindManyArgs";
import { Product } from "../../product/base/Product";
import { BrandService } from "../brand.service";
@common.UseGuards(GqlDefaultAuthGuard, gqlACGuard.GqlACGuard)
@graphql.Resolver(() => Brand)
export class BrandResolverBase {
  constructor(
    protected readonly service: BrandService,
    protected readonly rolesBuilder: nestAccessControl.RolesBuilder
  ) {}

  @graphql.Query(() => MetaQueryPayload)
  @nestAccessControl.UseRoles({
    resource: "Brand",
    action: "read",
    possession: "any",
  })
  async _brandsMeta(
    @graphql.Args() args: BrandCountArgs
  ): Promise<MetaQueryPayload> {
    const result = await this.service.count(args);
    return {
      count: result,
    };
  }

  @common.UseInterceptors(AclFilterResponseInterceptor)
  @graphql.Query(() => [Brand])
  @nestAccessControl.UseRoles({
    resource: "Brand",
    action: "read",
    possession: "any",
  })
  async brands(@graphql.Args() args: BrandFindManyArgs): Promise<Brand[]> {
    return this.service.brands(args);
  }

  @common.UseInterceptors(AclFilterResponseInterceptor)
  @graphql.Query(() => Brand, { nullable: true })
  @nestAccessControl.UseRoles({
    resource: "Brand",
    action: "read",
    possession: "own",
  })
  async brand(
    @graphql.Args() args: BrandFindUniqueArgs
  ): Promise<Brand | null> {
    const result = await this.service.brand(args);
    if (result === null) {
      return null;
    }
    return result;
  }

  @common.UseInterceptors(AclValidateRequestInterceptor)
  @graphql.Mutation(() => Brand)
  @nestAccessControl.UseRoles({
    resource: "Brand",
    action: "create",
    possession: "any",
  })
  async createBrand(@graphql.Args() args: CreateBrandArgs): Promise<Brand> {
    return await this.service.createBrand({
      ...args,
      data: args.data,
    });
  }

  @common.UseInterceptors(AclValidateRequestInterceptor)
  @graphql.Mutation(() => Brand)
  @nestAccessControl.UseRoles({
    resource: "Brand",
    action: "update",
    possession: "any",
  })
  async updateBrand(
    @graphql.Args() args: UpdateBrandArgs
  ): Promise<Brand | null> {
    try {
      return await this.service.updateBrand({
        ...args,
        data: args.data,
      });
    } catch (error) {
      if (isRecordNotFoundError(error)) {
        throw new GraphQLError(
          `No resource was found for ${JSON.stringify(args.where)}`
        );
      }
      throw error;
    }
  }

  @graphql.Mutation(() => Brand)
  @nestAccessControl.UseRoles({
    resource: "Brand",
    action: "delete",
    possession: "any",
  })
  async deleteBrand(
    @graphql.Args() args: DeleteBrandArgs
  ): Promise<Brand | null> {
    try {
      return await this.service.deleteBrand(args);
    } catch (error) {
      if (isRecordNotFoundError(error)) {
        throw new GraphQLError(
          `No resource was found for ${JSON.stringify(args.where)}`
        );
      }
      throw error;
    }
  }

  @common.UseInterceptors(AclFilterResponseInterceptor)
  @graphql.ResolveField(() => [Product], { name: "products" })
  @nestAccessControl.UseRoles({
    resource: "Product",
    action: "read",
    possession: "any",
  })
  async findProducts(
    @graphql.Parent() parent: Brand,
    @graphql.Args() args: ProductFindManyArgs
  ): Promise<Product[]> {
    const results = await this.service.findProducts(parent.id, args);

    if (!results) {
      return [];
    }

    return results;
  }
}
