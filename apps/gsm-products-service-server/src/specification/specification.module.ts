import { Module } from "@nestjs/common";
import { SpecificationModuleBase } from "./base/specification.module.base";
import { SpecificationService } from "./specification.service";
import { SpecificationController } from "./specification.controller";
import { SpecificationResolver } from "./specification.resolver";

@Module({
  imports: [SpecificationModuleBase],
  controllers: [SpecificationController],
  providers: [SpecificationService, SpecificationResolver],
  exports: [SpecificationService],
})
export class SpecificationModule {}
