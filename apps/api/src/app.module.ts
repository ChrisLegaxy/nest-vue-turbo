import { Module } from "@nestjs/common";

import { PrismaModule } from "./shared/modules/prisma/prisma.module";

import { AuthModule } from "./modules/auth/auth.module";
import { UserModule } from "./modules/user/user.module";
import { ConfigModule } from "@nestjs/config";

import applicationConfig from "@/configs/application.config";

const commonModules = [
  ConfigModule.forRoot({
    load: [applicationConfig],
  }),
  PrismaModule,
];
const modules = [AuthModule, UserModule];

@Module({
  imports: [...commonModules, ...modules],
  controllers: [],
  providers: [],
})
export class AppModule {}
