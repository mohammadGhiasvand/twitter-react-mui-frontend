import { Box, Grid } from "@mui/material";
import { Route, Routes } from "react-router-dom";

import Navigation from "../Navigation/Navigation";
import MainHomeSection from "../MainHomeSection/MainHomeSection";
import RightPart from "../RightPart/RightPart";
import Profile from "../profile/Profile";
import { fakeUser } from "../../fakeApi/UserApi";
import TwitDetails from "../TwitDetails/TwitDetails";

const Home = () => {
  return (
    <Box>
      <Grid
        container
        wrap="nowrap"
        className="px-5 lg:px-36 justify-between max-w-[1700px] m-auto"
      >
        <Grid
          item
          xs={2}
          sm={2}
          md={2}
          lg={2.5}
          className="hidden lg:block w-full relative"
        >
          <Navigation />
        </Grid>

        <Grid
          item
          xs={10}
          sm={10}
          md={10}
          lg={6}
          className="px-5 lg:px-9 hidden lg:block w-full relative"
        >
          <Routes>
            <Route path="/" element={<MainHomeSection />}></Route>
            <Route path={`profile/:${fakeUser.userId}`} element={<Profile />} />
            <Route path={`twit/:twitId`} element={<TwitDetails />} />
          </Routes>
        </Grid>

        <Grid item xs={0} lg={3} className="hidden lg:block w-full relative">
          <RightPart />
        </Grid>
      </Grid>
    </Box>
  );
};

export default Home;
