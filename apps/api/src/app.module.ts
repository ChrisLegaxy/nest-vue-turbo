import { Module } from "@nestjs/common";
import { PrismaModule } from "./shared/prisma/prisma.module";

const commonModules = [PrismaModule];
const modules = [];

@Module({
  imports: [...commonModules, ...modules],
  controllers: [],
  providers: [],
})
export class AppModule {}
