import { FC, Fragment, MouseEvent, useState } from "react";
import { Button } from "@mui/material";
import Menu from "@mui/material/Menu";
import MenuItem from "@mui/material/MenuItem";
import MoreHorizIcon from "@mui/icons-material/MoreHoriz";

interface ClassPropTypes {
  menuItems: {
    action: () => void;
    itemName: string;
  }[];
}

const MoreHorizonButton: FC<ClassPropTypes> = ({ menuItems }) => {
  const [anchorEl, setAnchorEl] = useState<null | HTMLElement>(null);

  const open = Boolean(anchorEl);

  const handleClick = (event: MouseEvent<HTMLButtonElement>) => {
    setAnchorEl(event.currentTarget);
  };

  const handleClose = () => {
    setAnchorEl(null);
  };

  const handleMenItem = () => {
    // Logout Actions
    handleClose();
  };
  return (
    <Fragment>
      <Button
        id="basic-button"
        aria-controls={open ? "basic-menu" : undefined}
        aria-haspopup="true"
        aria-expanded={open ? "true" : undefined}
        onClick={handleClick}
        sx={{ borderRadius: ".5rem", mx: ".5rem" }}
      >
        <MoreHorizIcon />
      </Button>
      <Menu
        id="basic-menu"
        anchorEl={anchorEl}
        open={open}
        onClose={handleClose}
        MenuListProps={{
          "aria-labelledby": "basic-button",
        }}
      >
        {menuItems.map((item) => (
          <MenuItem
            onClick={() => {
              handleMenItem();
              item.action();
            }}
            key={item.itemName}
          >
            {item.itemName}
          </MenuItem>
        ))}
      </Menu>
    </Fragment>
  );
};

export default MoreHorizonButton;
