/* eslint-disable @typescript-eslint/no-unused-vars */
import { ChangeEvent, useState } from "react";
import { Avatar, Button, TextField } from "@mui/material";

import { useFormik } from "formik";
import * as Yup from "yup";
import ImageIcon from "@mui/icons-material/Image";
import FmdGoodIcon from "@mui/icons-material/FmdGood";
import TagFacesIcon from "@mui/icons-material/TagFaces";
import TweetCard from "./TweetCard";
import { fakeUser } from "../../fakeApi/UserApi";
import { useSelector } from "react-redux";

interface valuesTypes {
  content: string;
  image: unknown;
}

const HomeSection = () => {
  const { auth } = useSelector((store) => store);

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
    <div className="space-y-5">
      <section>
        <h1 className="py-5 text-xl font-bold opacity-90">Home</h1>
      </section>
      <section className={`pb-10 `}>
        <div className="flex space-x-5">
          <Avatar alt="Username" src={auth.user.image} />
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
                  helperText={formik.touched.content && formik.errors.content}
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
      <section className="">
        {Array.from({ length: 5 }, () => (
          <TweetCard key={Math.random()} />
        ))}
      </section>
    </div>
  );
};

export default HomeSection;
