import { useState } from "react";
import SearchIcon from "@mui/icons-material/Search";
import LightModeIcon from "@mui/icons-material/LightMode";
import DarkModeIcon from "@mui/icons-material/DarkMode";
import MoreHorizIcon from "@mui/icons-material/MoreHoriz";
import { Box, Button, IconButton } from "@mui/material";

import { fakeTrendingHashtags } from "../../fakeApi/UserApi";
import SubscriptionModal from "../Subscription/SubscriptionModal";
import { useThemeContext } from "../Theme/ThemeContextProvider";

const RightPart = () => {
  const { mode, toggleColorMode } = useThemeContext();

  const [openSubscriptionModal, setOpenSubscriptionModal] = useState(false);

  const handleOpenSubscriptionModal = () => setOpenSubscriptionModal(true);
  const handleCloseSubscriptionModal = () => setOpenSubscriptionModal(false);

  return (
    <div className="py-5 sticky top-0 ">
      <div className="relative flex items-center ">
        <input
          type="text"
          className="py-3 rounded-full text-gray-500 w-full pl-12 bg-gray-light-background focus:bg-white"
          placeholder="Search"
        />
        <div className="absolute top-0 left-0 pl-3 pt-3">
          <SearchIcon className="text-gray-500" />
        </div>
        <Box className="cursor-pointer ml-3">
          <IconButton onClick={toggleColorMode} color="inherit">
            {mode === "light" ? <DarkModeIcon /> : <LightModeIcon />}
          </IconButton>
        </Box>
      </div>
      <section className="my-5 p-4 rounded-2xl bg-gray-light-background">
        <h1 className="text-xl font-bold">Get Verified</h1>
        <h1 className="font-bold my-2">Subscribe to unlock new Features</h1>
        <Button
          variant="contained"
          sx={{ padding: ".7rem", paddingX: "1.1rem", borderRadius: "1.4rem" }}
          onClick={handleOpenSubscriptionModal}
        >
          Get Verified
        </Button>
      </section>
      <section className="mt-7 space-y-5 p-4 rounded-2xl bg-gray-light-background">
        <h1 className="font-bold text-xl py-1">What's happen?</h1>
        <div>
          <p className="text-sm">FIFA World Cup · LIVE</p>
          <p className="font-bold">Sweden vs Denmark</p>
        </div>

        {fakeTrendingHashtags.map((item) => (
          <div key={item.topic} className="flex justify-between w-full">
            <div>
              <p>{item.topic} · Trending</p>
              <p className="font-bold">#{item.hashtag}</p>
              <p>{item.tweets} Tweets</p>
            </div>
            <MoreHorizIcon className="cursor-pointer" />
          </div>
        ))}
      </section>
      <section>
        <SubscriptionModal
          openModal={openSubscriptionModal}
          handleClose={handleCloseSubscriptionModal}
        />
      </section>
    </div>
  );
};

export default RightPart;
