import {
  BiInfoCircle,
  BiUserCircle,
  BiCabinet,
  BiMessage,
  BiImages,
  BiBookOpen,
  BiBriefcase,
  BiGroup,
  BiQuestionMark,
  BiStar,
  BiBasket,
  BiNews,
} from "react-icons/bi";
import { MdDashboard } from "react-icons/md";
import { MdCreateNewFolder } from "react-icons/md";
export const navIcons = {
  dashboard: <MdDashboard />,
  createPost: <MdCreateNewFolder />,
  profile: <BiUserCircle />,
  about: <BiInfoCircle />,
  services: <BiCabinet />,
  contact: <BiMessage />,
  gallery: <BiImages />,
  blog: <BiBookOpen />,
  portfolio: <BiBriefcase />,
  team: <BiGroup />,
  faq: <BiQuestionMark />,
  projects: <BiBriefcase />,
  events: <BiStar />,
  shop: <BiBasket />,
  news: <BiNews />,
};
