/* eslint-disable @typescript-eslint/no-unused-vars */
import { ChangeEvent, FC, Fragment, useState } from "react";
import { useFormik } from "formik";
import { Avatar, Box } from "@mui/material";
import Button from "@mui/material/Button";
import Modal from "@mui/material/Modal";
import CloseIcon from "@mui/icons-material/Close";
import * as Yup from "yup";
import { IconButton, TextField } from "@mui/material";

interface ClassPropTypes {
  openModal: boolean;
  handleClose: () => void;
}

interface valuesTypes {
  fullName: string;
  website: string;
  location: string;
  bio: string;
  backgroundImage: string;
  image: string;
}

import { fakeUser } from "../../fakeApi/UserApi";

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

const ProfileModal: FC<ClassPropTypes> = ({ openModal, handleClose }) => {
  const [uploading, setUploading] = useState(false);
  const [imageFile, setImageFile] = useState<unknown>();

  const validationSchema = Yup.object().shape({
    fullName: Yup.string().required("* The full Name field is required"),
    bio: Yup.string().required("* The bio field is required"),
    website: Yup.string().required("* The website field is required"),
  });

  const handleSubmit = (values: valuesTypes) => {
    console.log("Form submitted", values);
  };

  const formik = useFormik({
    initialValues: {
      fullName: fakeUser.name,
      website: "",
      location: "",
      bio: "",
      backgroundImage: "",
      image: "",
    },
    onSubmit: handleSubmit,
    validationSchema,
  });

  const handleImageChange = (event: ChangeEvent) => {
    setUploading(true);
    const { name } = event.target as HTMLInputElement;
    const imageUrl = (event.target as HTMLInputElement).files![0];
    formik.setFieldValue(name, imageUrl);
    setImageFile(imageUrl);
    setUploading(false);
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
          <form onSubmit={formik.handleSubmit}>
            <div className="flex items-center justify-between">
              <div className="flex items-center space-x-3">
                <IconButton aria-label="delete">
                  <CloseIcon />
                </IconButton>
                <p className="text-sm">Edit Profile</p>
              </div>
              <Button type="submit">Save</Button>
            </div>
            <div className="overflow-y-scroll overflow-x-hidden h-[80vh] hide-scrollbar">
              <Fragment>
                <div className="w-full">
                  <div className="relative">
                    <img
                      className="w-full h-[12rem] object-cover object-center"
                      src={fakeUser.coverPicSrc}
                      alt={fakeUser.name}
                    />
                    <input
                      type="file"
                      className="absolute top-0 left-0 w-full h-full opacity-0 cursor-pointer"
                      name="backgroundImage"
                      onChange={handleImageChange}
                    />
                  </div>
                </div>
                <div className="w-full transform -translate-y-20 ml-4 h-[6rem]">
                  <div className="relative">
                    <Avatar
                      alt={fakeUser.name}
                      src={fakeUser.profileSrc}
                      sx={{
                        width: "10rem",
                        height: "10rem",
                        border: "4px solid #fff",
                      }}
                    />
                    <input
                      type="file"
                      className="absolute top-0 left-0 w-[10rem] h-full opacity-0 cursor-pointer "
                      onChange={handleImageChange}
                      name="image"
                      id="image"
                    />
                  </div>
                </div>
              </Fragment>

              <div className="space-y-3">
                <TextField
                  fullWidth
                  id="fullName"
                  name="fullName"
                  label="Full Name"
                  value={formik.values.fullName}
                  onChange={formik.handleChange}
                  onBlur={formik.handleBlur}
                  error={
                    formik.touched.fullName && Boolean(formik.errors.fullName)
                  }
                  helperText={formik.touched.fullName && formik.errors.fullName}
                />
                <TextField
                  fullWidth
                  multiline
                  rows={4}
                  id="bio"
                  name="bio"
                  label="Bio"
                  value={formik.values.bio}
                  onChange={formik.handleChange}
                  onBlur={formik.handleBlur}
                  error={formik.touched.bio && Boolean(formik.errors.bio)}
                  helperText={formik.touched.bio && formik.errors.bio}
                />
                <TextField
                  fullWidth
                  id="website"
                  name="website"
                  label="Website"
                  value={formik.values.website}
                  onChange={formik.handleChange}
                  onBlur={formik.handleBlur}
                  error={
                    formik.touched.website && Boolean(formik.errors.website)
                  }
                  helperText={formik.touched.website && formik.errors.website}
                />
                <TextField
                  fullWidth
                  id="location"
                  name="location"
                  label="Location"
                  value={formik.values.location}
                  onChange={formik.handleChange}
                  onBlur={formik.handleBlur}
                  error={
                    formik.touched.location && Boolean(formik.errors.location)
                  }
                  helperText={formik.touched.location && formik.errors.location}
                />

                <div className="my-3">
                  <p className="text-lg">Birth date · Edit</p>
                  <p className="text-2xl">October 7, 1999</p>
                </div>

                <p className="py-3 text-lg">Edit Professional Profile</p>
              </div>
            </div>
          </form>
        </Box>
      </Modal>
    </div>
  );
};

export default ProfileModal;
