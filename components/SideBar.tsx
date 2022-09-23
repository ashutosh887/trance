import NextImage from "next/image";

import NextLink from "next/link";

import { usePlaylist } from "../utils/hooks";

import {
  Box,
  List,
  ListItem,
  LinkOverlay,
  ListIcon,
  LinkBox,
} from "@chakra-ui/layout";

import { MdHome, MdSearch, MdLibraryMusic } from "react-icons/md";

const navMenu = [
  {
    name: "Home",
    icon: MdHome,
    route: "/",
  },
  {
    name: "Search",
    icon: MdSearch,
    route: "/search",
  },
  {
    name: "Your Library",
    icon: MdLibraryMusic,
    route: "/library",
  },
];

// const musicMenu = [
//   {
//     name: 'Create Playlist',
//     icon: MdPlaylistAdd,
//     route: '/',
//   },
//   {
//     name: 'Favorites',
//     icon: MdFavorite,
//     route: '/favorites',
//   },
// ]

// const playlists = new Array(30).fill(1).map((_, i) => `Playlist ${i + 1}`)

const Sidebar = () => {
  // const { playlists } = usePlaylist()
  return (
    <Box
      width="100%"
      height="calc(100vh - 100px)"
      bg="black"
      paddingX="5px"
      color="gray"
    >
      <Box paddingY="20px" height="100%">
        {/* Logo */}
        <Box width="100%" marginBottom="10px" paddingX="10px">
          <NextImage src="/logo.png" height={150} width={320} />
        </Box>

        {/* Some Sidebar Options */}
        <Box marginBottom="20px">
          <List spacing={2}>
            {navMenu.map((menu) => (
              <ListItem paddingX="20px" fontSize="16px" key={menu.name}>
                <LinkBox>
                  <NextLink href={menu.route} passHref>
                    <LinkOverlay>
                      <ListIcon
                        as={menu.icon}
                        color="white"
                        marginRight="20px"
                      />
                      {menu.name}
                    </LinkOverlay>
                  </NextLink>
                </LinkBox>
              </ListItem>
            ))}
          </List>
        </Box>
      </Box>
    </Box>
  );
};

export default Sidebar;
