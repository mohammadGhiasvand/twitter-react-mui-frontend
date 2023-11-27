import { Fragment } from "react";
import { useNavigate } from "react-router-dom";
import KeyboardBackspaceIcon from "@mui/icons-material/KeyboardBackspace";
import { Divider } from "@mui/material";

import TweetCard from "../MainHomeSection/TweetCard";

const TwitDetails = () => {
  const navigate = useNavigate();

  return (
    <Fragment>
      <section
        className={`z-50 flex items-center sticky top-0 bg-white bg-opacity-95`}
      >
        <KeyboardBackspaceIcon
          className="cursor-pointer"
          onClick={() => navigate(-1)}
        />
        <h1 className="py-5 text-xl font-bold opacity-90 ml-5">Twit</h1>
      </section>

      <section className="">
        <TweetCard />
        <Divider sx={{ margin: "2rem 0rem" }} />
      </section>

      <section>
        {Array.from({ length: 5 }, () => (
          <TweetCard key={Math.random()} />
        ))}
      </section>
    </Fragment>
  );
};

export default TwitDetails;
