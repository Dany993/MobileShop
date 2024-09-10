import * as common from "@nestjs/common";
import * as swagger from "@nestjs/swagger";
import { SpecificationService } from "./specification.service";
import { SpecificationControllerBase } from "./base/specification.controller.base";

@swagger.ApiTags("specifications")
@common.Controller("specifications")
export class SpecificationController extends SpecificationControllerBase {
  constructor(protected readonly service: SpecificationService) {
    super(service);
  }
}
