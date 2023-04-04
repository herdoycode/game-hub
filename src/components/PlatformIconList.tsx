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

const PlatformIconList = ({ platforms }: Props) => {
  return (
    <Box sx={{ display: "flex", gap: "7px" }}>
      {platforms.map((platform) => {
        switch (platform.slug) {
          case "pc":
            return (
              <FaWindows key={12} style={{ fontSize: "18px" }} color="gray" />
            );
          case "playstation":
            return (
              <FaPlaystation
                key={23}
                style={{ fontSize: "18px" }}
                color="gray"
              />
            );
          case "xbox":
            return <FaXbox key={3} style={{ fontSize: "18px" }} color="gray" />;
          case "nintendo":
            return (
              <SiNintendo key={775} style={{ fontSize: "18px" }} color="gray" />
            );
          case "mac":
            return (
              <FaApple key={903} style={{ fontSize: "18px" }} color="gray" />
            );
          case "ios":
            return (
              <MdPhoneIphone
                key={3574}
                style={{ fontSize: "18px" }}
                color="gray"
              />
            );
          case "web":
            return (
              <BsGlobe
                key={Date.now()}
                style={{ fontSize: "18px" }}
                color="gray"
              />
            );
          case "linux":
            return (
              <FaLinux
                key={Date.now() | 34}
                style={{ fontSize: "18px" }}
                color="gray"
              />
            );
          case "android":
            return (
              <FaAndroid
                key={Date.now() | 994}
                style={{ fontSize: "18px" }}
                color="gray"
              />
            );
        }
      })}
    </Box>
  );
};

export default PlatformIconList;
