import { useNavigate } from "react-router-dom";
import { navigationMenu } from "./NavigationMenu";
import { Avatar, Button } from "@mui/material";

import MoreHorizonButton from "../UtilityComponents/MoreHorizonButton";
import { fakeUser } from "../../fakeApi/UserApi";
import SubscriptionModal from "../Subscription/SubscriptionModal";
import { useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { logoutUser } from "../../store/Auth/Action";

type navigationItemType = {
  title: string;
  icon: JSX.Element;
  path: string;
};

const Navigation = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();

  const { auth } = useSelector((store) => store);

  const [openSubscriptionModal, setOpenSubscriptionModal] = useState(false);

  const handleOpenSubscriptionModal = () => setOpenSubscriptionModal(true);
  const handleCloseSubscriptionModal = () => setOpenSubscriptionModal(false);

  const handleNavigateToProfile = (navigationItem: navigationItemType) => {
    navigationItem.title === "Profile"
      ? navigate(`/profile/${5}`)
      : navigationItem.title === "Verified"
      ? null
      : navigate(navigationItem.path);
  };

  const handleLogout = () => {
    // Logout actions
    dispatch(logoutUser());
    console.log("Logout");
  };

  const menuItems = [
    {
      itemName: "Logout",
      action: handleLogout,
    },
  ];

  return (
    <div className="h-screen sticky top-0">
      <div className="flex flex-col justify-between">
        <div className="py-5">
          <svg height={30} width={30} viewBox="0 0 24 24" aria-hidden="true">
            <g>
              <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z"></path>
            </g>
          </svg>
        </div>
        <div className="space-y-6">
          {navigationMenu.map((item) => (
            <div
              className="cursor-pointer flex space-x-3 items-center"
              onClick={() => {
                handleNavigateToProfile(item);
                item.title === "Verified" && handleOpenSubscriptionModal();
              }}
              key={item.title}
            >
              {item.icon}
              <p className="text-x1">{item.title}</p>
            </div>
          ))}
        </div>
        <div className="py-10">
          <Button
            sx={{
              width: "100%",
              borderRadius: "1.5rem",
              py: ".8rem",
              bgcolor: "#1D9BF0",
              ":hover": {
                bgcolor: "#1A8CD8",
              },
            }}
            variant="contained"
          >
            Tweet
          </Button>
        </div>
        <div className="flex items-center justify-center">
          <div className="flex items-center space-x-3">
            <Avatar alt={auth.user.fullName} src={auth.user.image} />
            <div className="flex flex-col">
              <span className="whitespace-nowrap">
                {auth.user.fullName.length > 16
                  ? `${auth.user.fullName.slice(0, 16)}...`
                  : auth.user.fullName}
              </span>
              <span className="opacity-60">
                @{auth.user.fullName.split(" ").join("_").toLowerCase()}
              </span>
            </div>
          </div>

          <div className="flex items-center">
            <MoreHorizonButton menuItems={menuItems} />
          </div>
        </div>
        <div>
          <SubscriptionModal
            openModal={openSubscriptionModal}
            handleClose={handleCloseSubscriptionModal}
          />
        </div>
      </div>
    </div>
  );
};

export default Navigation;
