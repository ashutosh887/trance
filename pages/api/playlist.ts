import prismaClient from "../../utils/prismaClient";
import { validateRoute } from "../../utils/auth";

export default validateRoute(async (req, res, user) => {
  const playlists = await prismaClient.playlist.findMany({
    where: {
      userId: user.id,
    },
    orderBy: {
      name: "asc",
    },
  });

  res.json(playlists);
});
