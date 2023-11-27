/* eslint-disable no-constant-condition */
import { useNavigate } from "react-router-dom";
import { Avatar } from "@mui/material";
import VerifiedIcon from "@mui/icons-material/Verified";
import ChatBubbleOutlineIcon from "@mui/icons-material/ChatBubbleOutline";
import RepeatIcon from "@mui/icons-material/Repeat";
import FavoriteBorderIcon from "@mui/icons-material/FavoriteBorder"; // outline
import FavoriteIcon from "@mui/icons-material/Favorite"; // filled
import BarChartIcon from "@mui/icons-material/BarChart";
import FileUploadIcon from "@mui/icons-material/FileUpload";

import MoreHorizonButton from "../UtilityComponents/MoreHorizonButton";
import { fakeUser } from "../../fakeApi/UserApi";
import ReplyModal from "./ReplyModal";
import { Fragment, useState } from "react";

const TweetCard = () => {
  const navigate = useNavigate();

  const [openReplyModal, setOpenReplyModal] = useState(false);

  const handleOpenReplyModal = () => setOpenReplyModal(true);
  const handleCloseReplyModal = () => setOpenReplyModal(false);

  const handleDeleteTweet = () => {
    // Delete Post Action
    console.log("Post is deleted");
  };

  const handleEditTweet = () => {
    // Edit Post Action
    console.log("Post is edited");
  };

  const menuItems = [
    {
      itemName: "Delete",
      action: handleDeleteTweet,
    },
    {
      itemName: "Edit",
      action: handleEditTweet,
    },
  ];

  const handleCreateRetweet = () => {
    console.log("Retweet is created");
  };

  const handleLikeRetweet = () => {
    console.log("Tweet is liked/unliked");
  };

  return (
    <Fragment>
      {/* <div className="flex items-center font-semibold text-gray-700 py-2">
        <RepeatIcon />
        <p>You Retweet</p>
      </div> */}
      <div className="w-full flex space-x-5">
        <Avatar
          onClick={() => navigate(`/profile/${5}`)}
          className="cursor-pointer"
          alt={fakeUser.name}
          src={fakeUser.profileSrc}
        />
        <div className="w-full">
          <div className="flex justify-between items-center">
            <div className="flex items-center cursor-pointer space-x-2">
              <span className="whitespace-nowrap font-medium">
                {fakeUser.name.length > 16
                  ? `${fakeUser.name.slice(0, 16)}...`
                  : fakeUser.name}
              </span>
              <span className="opacity-60">@{fakeUser.username} . 2m</span>
              {true && (
                <VerifiedIcon className="text-blue-bird-twitter ml-2 w-5 h-5" />
              )}
            </div>
            <div>
              <MoreHorizonButton menuItems={menuItems} />
            </div>
          </div>

          <div className="mt-2">
            <div
              onClick={() => navigate(`/twit/${3}`)}
              className="cursor-pointer"
            >
              <p className="mb-2 p-0">/* Content of the Tweet */</p>
              <img
                className="w-[28rem] border border-gray-400 p-5 rounded-md"
                src={fakeUser.postPic}
                alt="Tweet"
              />
            </div>

            <div className="py-5 flex flex-wrap justify-between items-center">
              <div className="space-x-3 flex items-center text-gray-600">
                <ChatBubbleOutlineIcon
                  className="cursor-pointer"
                  onClick={handleOpenReplyModal}
                />
                <p>43</p>
              </div>
              <div
                className={`${
                  true ? "text-pink-600" : "text-gray-600"
                } space-x-3 flex items-center`}
              >
                <RepeatIcon
                  className="cursor-pointer"
                  onClick={handleCreateRetweet}
                />
                <p>5</p>
              </div>
              <div
                className={`${
                  true ? "text-pink-600" : "text-gray-600"
                } space-x-3 flex items-center`}
              >
                {true ? (
                  <FavoriteIcon
                    className="cursor-pointer"
                    onClick={handleLikeRetweet}
                  />
                ) : (
                  <FavoriteBorderIcon
                    className="cursor-pointer"
                    onClick={handleLikeRetweet}
                  />
                )}
                <p>5</p>
              </div>
              <div className="space-x-3 flex items-center text-gray-600">
                <BarChartIcon
                  className="cursor-pointer"
                  onClick={handleOpenReplyModal}
                />
                <p>{parseInt("24599").toLocaleString()}</p>
              </div>
              <div className="space-x-3 flex items-center text-gray-600">
                <FileUploadIcon
                  className="cursor-pointer"
                  onClick={handleOpenReplyModal}
                />
              </div>
            </div>
          </div>
        </div>
      </div>
      <section className="relative">
        <ReplyModal
          openModal={openReplyModal}
          handleClose={handleCloseReplyModal}
        />
      </section>
    </Fragment>
  );
};

export default TweetCard;
