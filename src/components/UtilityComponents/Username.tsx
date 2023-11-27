import { Fragment } from "react";

const Username = () => {
  const user = {
    name: "Mohammad Ghiasvandd Extended",
    username: "moh_gh",
  };

  return (
    <Fragment>
      <span className="whitespace-nowrap">
        {user.name.length > 16 ? `${user.name.slice(0, 16)}...` : user.name}
      </span>
      <span className="opacity-60">@{user.username}</span>
    </Fragment>
  );
};

export default Username;
