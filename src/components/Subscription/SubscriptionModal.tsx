import { FC, useState } from "react";
import Box from "@mui/material/Box";
import Modal from "@mui/material/Modal";
import { IconButton } from "@mui/material";
import CloseIcon from "@mui/icons-material/Close";
import FiberManualRecordIcon from "@mui/icons-material/FiberManualRecord";

import VerifiedBadgePic from "../../assets/Twitter_Verified_Badge.svg.png";
import { subscriptionPerks } from "../../constants/subscriptionPerks";

interface ClassPropTypes {
  openModal: boolean;
  handleClose: () => void;
}

const style = {
  position: "absolute",
  top: "50%",
  left: "50%",
  transform: "translate(-50%, -50%)",
  width: "42rem",
  bgcolor: "background.paper",
  border: "none",
  boxShadow: 24,
  p: 4,
  outline: "none",
  borderRadius: 4,
};

const SubscriptionModal: FC<ClassPropTypes> = ({ openModal, handleClose }) => {
  const [plan, setPlan] = useState<"Annually" | "Mounthly">("Annually");

  return (
    <div>
      <Modal
        open={openModal}
        onClose={handleClose}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
        <Box sx={style}>
          <div className="flex items-center justify-between">
            <div className="flex items-center space-x-3">
              <IconButton aria-label="delete" onClick={handleClose}>
                <CloseIcon />
              </IconButton>
            </div>
          </div>
          <div className="flex justify-center py-10">
            <div className="w-[80%] space-y-10 ">
              <div className="p-5 rounded-md flex items-center justify-between bg-slate-200 shadow-lg">
                <h1 className="text-xl pr-5">
                  Blue subscribers with a verified phone number will get a blue
                  chekcmark once approved.
                </h1>
                <img
                  className="w-24 h-24"
                  src={VerifiedBadgePic}
                  alt="Verified Badge"
                />
              </div>
              <div className="flex justify-between rounded-full px-5 py-3 border border-gray-500">
                <div className="">
                  <span
                    onClick={() => setPlan("Annually")}
                    className={`${
                      plan === "Annually" ? "text-black" : "text-gray-400"
                    } cursor-pointer`}
                  >
                    Annually
                  </span>
                  <span className="text-green-500 text-sm ml-5">SAVE 12%</span>
                </div>
                <p
                  onClick={() => setPlan("Mounthly")}
                  className={`${
                    plan === "Mounthly" ? "text-black" : "text-gray-400"
                  } cursor-pointer`}
                >
                  Mounthly
                </p>
              </div>
              <div className="space-y-3 ">
                {subscriptionPerks.map((item) => (
                  <div
                    key={item.header}
                    className="flex items-center space-x-5"
                  >
                    <FiberManualRecordIcon
                      sx={{ width: ".5rem", height: ".5rem" }}
                    />
                    <p className="text-sm">
                      <span className="font-semibold">{item.header}:</span>
                      {item.paragraph}
                    </p>
                  </div>
                ))}
              </div>
              <div className="cursor-pointer flex justify-center bg-gray-900 text-white rounded-full px-5 py-3">
                <span className="line-through italic">SEK 2,088.00 / year</span>
                <span className="px-5">SEK 1,799.00 / year</span>
              </div>
            </div>
          </div>
        </Box>
      </Modal>
    </div>
  );
};

export default SubscriptionModal;
