import { Logger } from "@nestjs/common";
import { NestFactory } from "@nestjs/core";
import { AppModule } from "./app.module";
import { coreSetup } from "./bootstraps/core-setup";
import { prismaSetup } from "./bootstraps/prisma-setup";
import { swaggerSetup } from "./bootstraps/swagger-setup";

(async () => {
  const app = await NestFactory.create(AppModule);

  coreSetup(app);
  prismaSetup(app);
  swaggerSetup(app);

  await app.listen(7000);
  Logger.log("Server running on PORT 7000", "NestApplication");
})();
