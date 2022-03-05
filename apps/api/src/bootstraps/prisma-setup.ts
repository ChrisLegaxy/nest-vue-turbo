import { INestApplication } from "@nestjs/common";

import { PrismaService } from "@/shared/modules/prisma/prisma.service";

export const prismaSetup = (app: INestApplication) => {
  app.get(PrismaService).enableShutdownHooks(app);
};
