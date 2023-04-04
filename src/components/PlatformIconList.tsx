import { Box } from "@mui/material";
import { Platform } from "../hooks/useGames";
import {
  FaXbox,
  FaApple,
  FaWindows,
  FaPlaystation,
  FaLinux,
  FaAndroid,
} from "react-icons/fa";
import { MdPhoneIphone } from "react-icons/md";
import { SiNintendo } from "react-icons/si";
import { BsGlobe } from "react-icons/bs";

interface Props {
  platforms: Platform[];
}

const renderIcon = (slug: string) => {
  switch (slug) {
    case "pc":
      return <FaWindows style={{ fontSize: "18px" }} color="gray" />;
    case "playstation":
      return <FaPlaystation style={{ fontSize: "18px" }} color="gray" />;
    case "xbox":
      return <FaXbox style={{ fontSize: "18px" }} color="gray" />;
    case "nintendo":
      return <SiNintendo style={{ fontSize: "18px" }} color="gray" />;
    case "mac":
      return <FaApple style={{ fontSize: "18px" }} color="gray" />;
    case "ios":
      return <MdPhoneIphone style={{ fontSize: "18px" }} color="gray" />;
    case "web":
      return <BsGlobe style={{ fontSize: "18px" }} color="gray" />;
    case "linux":
      return <FaLinux style={{ fontSize: "18px" }} color="gray" />;
    case "android":
      return <FaAndroid style={{ fontSize: "18px" }} color="gray" />;
  }
};

const PlatformIconList = ({ platforms }: Props) => {
  return (
    <Box sx={{ display: "flex", gap: "7px" }}>
      {platforms.map((platform) => (
        <Box component="div" key={platform.id}>
          {renderIcon(platform.slug)}
        </Box>
      ))}
    </Box>
  );
};

export default PlatformIconList;
