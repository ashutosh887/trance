import { validateRoute } from "../../utils/auth";
import prismaClient from "../../utils/prismaClient";

export default validateRoute(async (req, res, user) => {
  const playlistsCount = await prismaClient.playlist.count({
    where: {
      userId: user.id,
    },
  });

  console.log(playlistsCount);
  res.json({ ...user, playlistsCount });
});
