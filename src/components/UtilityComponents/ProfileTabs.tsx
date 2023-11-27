import { FC, ReactNode, useState } from "react";
import Tab from "@mui/material/Tab";
import TabContext from "@mui/lab/TabContext";
import TabList from "@mui/lab/TabList";
import TabPanel from "@mui/lab/TabPanel";
import { Box } from "@mui/material";
interface ProfileTabsPropTypes {
  tabItems: {
    value: number;
    label: string;
    component: ReactNode | string;
  }[];
}

const ProfileTabs: FC<ProfileTabsPropTypes> = ({ tabItems }) => {
  const [value, setValue] = useState("1");

  const handleChange = (event: React.SyntheticEvent, newValue: string) => {
    setValue(newValue);
  };

  return (
    <Box sx={{ width: "100%", typography: "body1" }}>
      <TabContext value={value}>
        <Box sx={{ borderBottom: 1, borderColor: "divider" }}>
          <TabList onChange={handleChange} aria-label="lab API tabs example">
            {tabItems.map((item) => (
              <Tab
                key={item.value}
                label={item.label.toUpperCase()}
                value={item.value.toString()}
              />
            ))}
          </TabList>
        </Box>

        {tabItems.map((item) => (
          <TabPanel key={item.value} value={item.value.toString()}>
            {item.component}
          </TabPanel>
        ))}
      </TabContext>
    </Box>
  );
};

export default ProfileTabs;
