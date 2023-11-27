import { FC } from "react";
import Box from "@mui/material/Box";
import Modal from "@mui/material/Modal";
import SigninForm from "./SigninForm";
import SignupForm from "./SignupForm";
import { useLocation, useNavigate } from "react-router-dom";
import { Button } from "@mui/material";

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
  boxShadow: 24,
  p: 4,
  outline: "none",
  borderRadius: 4,
};

const AuthModal: FC<ClassPropTypes> = ({ openModal, handleClose }) => {
  const location = useLocation();
  const navigate = useNavigate();

  const handleNavigate = () => {
    const path = location.pathname === "/signup" ? "/signin" : "/signup";
    navigate(path);
  };

  return (
    <div>
      <Modal
        open={openModal}
        onClose={handleClose}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
        <Box sx={style}>
          <h1 className="text-center font-bold text-3xl pb-20 ">
            Create your account
          </h1>

          {location.pathname === "/signup" ? <SignupForm /> : <SigninForm />}

          <h1 className="text-center py-5 font-semibold text-lg text-gray-500">
            {location.pathname === "/signup"
              ? "Already have an account"
              : "If you do not have an account"}
          </h1>

          <Button
            fullWidth
            variant="outlined"
            onClick={handleNavigate}
            sx={{
              borderRadius: "29px",
              py: "15px",
              textTransform: "none",
            }}
          >
            {location.pathname === "/signup" ? "Sign in" : "Sign up"}
          </Button>
        </Box>
      </Modal>
    </div>
  );
};

export default AuthModal;
