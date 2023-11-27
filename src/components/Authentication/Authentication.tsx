import { Button, Grid } from "@mui/material";
import Authimage from "../../assets/Twitter-Auth-logo-Image.png";
import X from "../../assets/x-balck.svg";
import { GoogleLogin } from "@react-oauth/google";
import AuthModal from "./AuthModal";
import { useState } from "react";

const Authentication = () => {
  const [openAuthModal, setOpenAuthModal] = useState(false);
  const handleOpenAuthModal = () => setOpenAuthModal(true);
  const handleCloseAuthModal = () => setOpenAuthModal(false);

  return (
    <div>
      <Grid className="overflow-y-hidden" container>
        <Grid className="hidden lg:block relative" item lg={7}>
          <img src={Authimage} alt="Twitter/X" className="w-full h-screen" />
          <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2">
            <img className="h-[30rem] w-[30rem]" src={X} alt="" />
          </div>
        </Grid>
        <Grid
          className="px-10 flex justify-center items-center"
          item
          lg={5}
          sm={12}
        >
          <div>
            <h1 className="font-extrabold text-6xl mt-10">Happening now</h1>
            <h1 className="font-bold text-3xl py-16 ">Join today.</h1>
            <div className="w-[60%] ">
              <div className="w-full  ">
                <GoogleLogin width={330} onSuccess={() => {}} />
                <div className="py-5 text-center flex justify-center items-center">
                  <div className="w-full h-[1px] bg-[#27282914] "></div>
                  <p className="absolute text-black bg-white px-2">or</p>
                </div>
                <Button
                  fullWidth
                  variant="contained"
                  size="large"
                  onClick={handleOpenAuthModal}
                  sx={{
                    borderRadius: "29px",
                    py: "7px",
                    textTransform: "none",
                  }}
                >
                  Create Account
                </Button>
                <p className="text-xs  mt-2 ">
                  By signing up, you agree to the Terms of Service and Privacy
                  Policy, including Cookie Use.
                </p>
              </div>

              <div className="mt-10 ">
                <h1 className="font-bold text-xl mb-5  ">
                  Already have an account?
                </h1>
                <Button
                  fullWidth
                  variant="outlined"
                  size="large"
                  onClick={handleOpenAuthModal}
                  sx={{
                    borderRadius: "29px",
                    py: "7px",
                    textTransform: "none",
                  }}
                >
                  Sign in
                </Button>
              </div>
            </div>
          </div>
        </Grid>
      </Grid>

      <AuthModal handleClose={handleCloseAuthModal} openModal={openAuthModal} />
    </div>
  );
};

export default Authentication;
