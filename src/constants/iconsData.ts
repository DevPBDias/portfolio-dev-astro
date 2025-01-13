import github from "../../public/assets/icons/github.png";
import linkedin from "../../public/assets/icons/linkedin.png";

export interface IconsHeader {
  id: number;
  icon: ImageMetadata;
  url: string;
}

export const iconsHeader: IconsHeader[] = [
  {
    id: 1,
    icon: github,
    url: "https://github.com/DevPBDias",
  },
  {
    id: 2,
    icon: linkedin,
    url: "https://www.linkedin.com/in/devpaulobrunomdias/",
  },
];
