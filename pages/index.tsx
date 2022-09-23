import type { NextPage } from "next";
import { Image } from "@chakra-ui/react";
import { Box, Text, Flex } from "@chakra-ui/layout";
import { useMe } from "../utils/hooks";
import GradientLayout from "../components/GradientLayout";
import prismaClient from "../utils/prismaClient";

const Home: NextPage = ({ artists }) => {
  const { user } = useMe();

  return (
    <GradientLayout
      roundImage
      color="gray"
      subtitle="profile"
      title={`${user?.firstName} ${user?.lastName}`}
      description={`${user?.playlistsCount} public playlists`}
      image="https://avatars.githubusercontent.com/u/71774735?v=4"
    >
      <Box color="white" paddingX="40px">
        <Box marginBottom="40px">
          <Text fontSize="2xl" fontWeight="bold">
            Top artist this month
          </Text>
          <Text fontSize="md">only visible to you</Text>
        </Box>
        <Flex>
          {artists.map((artist) => (
            <Box paddingX="10px" width="20%">
              <Box bg="gray.900" borderRadius="4px" padding="15px" width="100%">
                <Image
                  src="https://placekitten.com/300/300"
                  borderRadius="100%"
                />
                <Box marginTop="20px">
                  <Text fontSize="large">{artist.name}</Text>
                  <Text fontSize="x-small">Artist</Text>
                </Box>
              </Box>
            </Box>
          ))}
        </Flex>
      </Box>
    </GradientLayout>
  );
};

// Server side function to get all the Artists
// getStaticProps and getServerSideProps and getStaticPaths
// Cost of Edge Functions or Lambda Functions
export const getServerSideProps = async () => {
  const artists = await prismaClient.artist.findMany({});

  return {
    props: { artists },
  };
};

export default Home;
