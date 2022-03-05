import { Module } from "@nestjs/common";

import { PrismaModule } from "./shared/modules/prisma/prisma.module";

import { AuthModule } from "./modules/auth/auth.module";
import { UserModule } from "./modules/user/user.module";

const commonModules = [PrismaModule];
const modules = [AuthModule, UserModule];

@Module({
  imports: [...commonModules, ...modules],
  controllers: [],
  providers: [],
})
export class AppModule {}
