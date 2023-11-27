/* eslint-disable no-constant-condition */
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import KeyboardBackspaceIcon from "@mui/icons-material/KeyboardBackspace";
import { fakeUser } from "../../fakeApi/UserApi";
import { Avatar, Button } from "@mui/material";
import VerifiedIcon from "@mui/icons-material/Verified";
import BusinessCenterIcon from "@mui/icons-material/BusinessCenter";
import RoomIcon from "@mui/icons-material/Room";
import CalendarMonthIcon from "@mui/icons-material/CalendarMonth";

import ProfileTabs from "../UtilityComponents/ProfileTabs";
import TweetCard from "../MainHomeSection/TweetCard";
import ProfileModal from "./ProfileModal";

const Profile = () => {
  const navigate = useNavigate();

  const [openProfileModal, setOpenProfileModal] = useState(false);
  const handleOpenProfileModel = () => setOpenProfileModal(true);
  const handleCloseProfileModel = () => setOpenProfileModal(false);

  const handlefollowUser = () => {
    console.log("User is followed");
  };

  const tabItems = [
    {
      value: 1,
      label: "tweets",
      component: Array.from({ length: 5 }, () => (
        <TweetCard key={Math.random()} />
      )),
    },
    {
      value: 2,
      label: "replies",
      component: "User's Replies",
    },
    {
      value: 3,
      label: "media",
      component: "User's Media",
    },
    {
      value: 4,
      label: "likes",
      component: "User's Likes",
    },
  ];

  return (
    <div>
      <section
        className={`z-50 flex items-center sticky top-0 bg-white bg-opacity-95`}
      >
        <KeyboardBackspaceIcon
          className="cursor-pointer"
          onClick={() => navigate(-1)}
        />
        <h1 className="py-5 text-xl font-bold opacity-90 ml-5">
          {fakeUser.name}
        </h1>
        {true && (
          <VerifiedIcon className="text-blue-bird-twitter ml-2 w-5 h-5" />
        )}
      </section>

      <section>
        <img
          className="w-full h-[15rem] object-cover"
          src={fakeUser.coverPicSrc}
          alt={fakeUser.name}
        />
      </section>

      <section className="pl-6">
        <div className="flex justify-between items-start mt-5 h-[5rem]">
          <Avatar
            className="transform -translate-y-24"
            alt={fakeUser.name}
            src={fakeUser.profileSrc}
            sx={{ width: "10rem", height: "10rem", border: "4px solid #fff" }}
          />
          {true ? (
            <Button
              className="rounded-full"
              variant="contained"
              sx={{ borderRadius: "1.2rem" }}
              onClick={handleOpenProfileModel}
            >
              Edit Profile
            </Button>
          ) : (
            <Button
              className="rounded-full"
              variant="contained"
              sx={{ borderRadius: "1.2rem" }}
              onClick={handlefollowUser}
            >
              {true ? "Follow" : "Unfollow"}
            </Button>
          )}
        </div>
        <div>
          <div className="flex items-center">
            <h1 className="font-bold text-lg">{fakeUser.name}</h1>
            {true && (
              <VerifiedIcon className="text-blue-bird-twitter ml-2 w-5 h-5" />
            )}
          </div>
          <h1 className="text-gray-500">@{fakeUser.username}</h1>
        </div>
        <div className="mt-2 space-y-3">
          <p>{fakeUser.bio}</p>
          <div className="py-1 flex space-x-5">
            <div className="flex items-center text-gray-500 text-[.9rem]">
              <BusinessCenterIcon />
              <p className="ml-2">{fakeUser.education}</p>
            </div>
            <div className="flex items-center text-gray-500 text-[.9rem]">
              <RoomIcon />
              <p className="ml-2">{fakeUser.location}</p>
            </div>
            <div className="flex items-center text-gray-500 text-[.9rem]">
              <CalendarMonthIcon />
              <p className="ml-2">Joined {fakeUser.joinedBy}</p>
            </div>
          </div>

          <div className="flex items-center space-x-5">
            <div className="flex items-center space-x-1 font-semibold">
              <span>{fakeUser.followings}</span>
              <span className="text-gray-500">Followings</span>
            </div>
            <div className="flex items-center space-x-1 font-semibold">
              <span>{fakeUser.followers}</span>
              <span className="text-gray-500">Followers</span>
            </div>
          </div>
        </div>
      </section>

      <section className="py-5">
        <ProfileTabs tabItems={tabItems} />
      </section>

      <section>
        <ProfileModal
          openModal={openProfileModal}
          handleClose={handleCloseProfileModel}
        />
      </section>
    </div>
  );
};

export default Profile;
