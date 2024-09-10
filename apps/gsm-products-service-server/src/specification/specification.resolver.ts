import * as graphql from "@nestjs/graphql";
import { SpecificationResolverBase } from "./base/specification.resolver.base";
import { Specification } from "./base/Specification";
import { SpecificationService } from "./specification.service";

@graphql.Resolver(() => Specification)
export class SpecificationResolver extends SpecificationResolverBase {
  constructor(protected readonly service: SpecificationService) {
    super(service);
  }
}
