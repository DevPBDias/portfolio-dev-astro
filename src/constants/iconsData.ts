import github from "../assets/icons/GithubLogo.png";
import linkedin from "../assets/icons/LinkedinLogo.png";

export interface IconsHeader {
  id: number;
  icon: ImageMetadata;
  url: string;
}

export const iconsHeader: IconsHeader[] = [
  {
    id: 1,
    url: "https://github.com/DevPBDias",
    icon: github,
  },
  {
    id: 2,
    url: "https://www.linkedin.com/in/devpaulobrunomdias/",
    icon: linkedin,
  },
];
