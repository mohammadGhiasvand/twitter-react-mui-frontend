/* eslint-disable @typescript-eslint/no-unused-vars */
import { ChangeEvent, FC, useState } from "react";
import { useNavigate } from "react-router-dom";
import Box from "@mui/material/Box";
import Button from "@mui/material/Button";
import Modal from "@mui/material/Modal";
import VerifiedIcon from "@mui/icons-material/Verified";
import { Avatar, TextField } from "@mui/material";
import FmdGoodIcon from "@mui/icons-material/FmdGood";
import TagFacesIcon from "@mui/icons-material/TagFaces";
import ImageIcon from "@mui/icons-material/Image";
import { useFormik } from "formik";
import * as Yup from "yup";

import MoreHorizonButton from "../UtilityComponents/MoreHorizonButton";
import { fakeUser } from "../../fakeApi/UserApi";

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

interface valuesTypes {
  content: string;
  image: unknown;
  twitId: string | number;
}

const ReplyModal: FC<ClassPropTypes> = ({ openModal, handleClose }) => {
  const navigate = useNavigate();

  const [uploadingImage, setUploadingImage] = useState(false);
  const [selectedImage, setSelectedImage] = useState<unknown>();

  const validationSchema = Yup.object().shape({
    content: Yup.string().required("* The post content is required"),
  });

  const handleSubmit = (values: valuesTypes) => {
    console.log(values);
  };

  const formik = useFormik({
    initialValues: {
      content: "",
      image: "",
      twitId: 4,
    },
    onSubmit: handleSubmit,
    validationSchema,
  });

  const handleSelectImage = (event: ChangeEvent) => {
    setUploadingImage(true);
    const imgUrl = (event.target as HTMLInputElement).files![0];
    formik.setFieldValue("image", imgUrl);
    setSelectedImage(imgUrl);
    setUploadingImage(false);
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
              </div>

              <div className="mt-2">
                <div
                  onClick={() => navigate(`/twit/${3}`)}
                  className="cursor-pointer"
                >
                  <p className="mb-2 p-0">/* Content of the Tweet */</p>
                </div>
              </div>
            </div>
          </div>
          <section className={`py-10 `}>
            <div className="flex space-x-5">
              <Avatar alt="Username" src={fakeUser.profileSrc} />
              <div className="w-full">
                <form onSubmit={formik.handleSubmit}>
                  <div>
                    {/* <input
                  type="text"
                  id="content"
                  placeholder="What is happening?"
                  className={`border-none outline-none text-xl bg-transparent w-full`}
                  {...formik.getFieldProps("content")}
                /> */}

                    <TextField
                      fullWidth
                      multiline
                      rows={3}
                      id="content"
                      name="content"
                      label="What is happening?"
                      // placeholder="What is happening?"
                      value={formik.values.content}
                      onChange={formik.handleChange}
                      onBlur={formik.handleBlur}
                      error={
                        formik.touched.content && Boolean(formik.errors.content)
                      }
                      helperText={
                        formik.touched.content && formik.errors.content
                      }
                    />
                    {/* {formik.errors.content && formik.touched.content && (
                  <div className="text-red-danger mt-4">
                    {formik.errors.content}
                  </div>
                )} */}
                  </div>
                  {/* Preview Uploading image */}
                  {/* <div>
                <img src={selectedImage} alt="" />
              </div> */}

                  <div className="flex justify-between items-center mt-5">
                    <div className="flex space-x-5 items-center">
                      <label className="flex items-center space-x-2 rounded-md cursor-pointer ">
                        <ImageIcon className="text-blue-lighter" />
                        <input
                          type="file"
                          name="imageFile"
                          className="hidden"
                          onChange={handleSelectImage}
                        />
                      </label>
                      <FmdGoodIcon className="text-blue-lighter" />
                      <TagFacesIcon className="text-blue-lighter" />
                    </div>
                    <div>
                      <Button
                        sx={{
                          width: "100%",
                          borderRadius: "1.5rem",
                          paddingY: ".8rem",
                          paddingX: "1.2rem",
                          bgcolor: "#1D9BF0",
                          ":hover": {
                            bgcolor: "#1A8CD8",
                          },
                        }}
                        variant="contained"
                        type="submit"
                      >
                        Tweet
                      </Button>
                    </div>
                  </div>
                </form>
              </div>
            </div>
          </section>
        </Box>
      </Modal>
    </div>
  );
};

export default ReplyModal;
