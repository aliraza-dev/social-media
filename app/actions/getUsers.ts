import prisma from "@/app/libs/prismadb";

import getSession from "./getSession";

export async function getUser() {
  const session = await getSession();

  if (!session?.user?.email) {
    return [];
  }

  try {
    const users = await prisma.user.findMany({
      where: {
        NOT: {
          email: session.user.email,
        },
      },
      orderBy: {
        createdAt: "desc",
      },
    });

    return users;
  } catch (error: any) {
    return [];
  }
}
