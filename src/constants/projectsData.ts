import oleImg from "../assets/gifs/olemida.gif";
import coachImg from "../assets/gifs/maxtrainning.gif";
import recipeApp from "../assets/images/recipeApp.png";
import trivia from "../assets/images/trivia.png";
import trybetunes from "../assets/gifs/trybetunes.gif";
import walletPage from "../assets/images/walletPage.png";
import trailersApp from "../assets/images/trailersApp.png";

export interface ProjectData {
  id: number;
  type: string;
  image: ImageMetadata;
  inGroup: boolean;
  description: string;
  name: string;
  year: number;
  link: string;
  techs: string[];
}

export const projects: ProjectData[] = [
  {
    id: 1,
    name: "Olé midia website V3",
    year: 2024,
    type: "Freelancer",
    description:
      "Site da Olé Mídia em que apresenta a empresa e seus serviços. É possível enviar e-mails a empresa.",
    image: oleImg,
    inGroup: false,
    link: "https://olemidia.com.br/",
    techs: ["React", "TS", "Styled-components", "Framer-motion"],
  },
  {
    id: 2,
    name: "Coach Evertinho website",
    year: 2023,
    type: "Freelancer",
    inGroup: false,
    description:
      "Site de vendas responsivo do Max Training em que apresenta depoimentos e seus serviços.",
    image: coachImg,
    link: "https://max-training-lp.vercel.app/maxtrainingperformance",
    techs: ["React", "TS", "Styled-components"],
  },
  {
    id: 3,
    name: "App de trailers",
    year: 2024,
    type: "Pessoal",
    description:
      "Projeto pessoal de um mockup de UX/UI Design feito por mim. Foi desenvolvido um app mobile em que o usuário faz login, edita suas informações e navega por filmes, series e animes",
    image: trailersApp,
    inGroup: false,
    link: "https://github.com/DevPBDias/app-trailers",
    techs: [
      "React",
      "TS",
      "Styled-components",
      "Axios",
      "MongoDB Atlas",
      "React-hook-form",
      "Swiper",
      "React-slick",
      "Zod",
      "Mongoose",
      "Node",
      "Figma",
    ],
  },
  {
    id: 4,
    name: "Recipes App",
    year: 2022,
    type: "Trybe",
    description:
      "Foi desenvolvido uma aplicação que faz uso de uma api de comidas e bebidas. Nesse app, é possível favoritar, ver e filtrar receitas de comidas e bebidas.",
    image: recipeApp,
    inGroup: true,
    link: "https://github.com/DevPBDias/Project-Recipes-App",
    techs: ["React", "JS", "Jest", "Css", "Trello"],
  },
  {
    id: 5,
    name: "TrybeTunes Reworked",
    year: 2024,
    type: "Pessoal",
    description:
      "Foi desenvolvida uma aplicação capaz de reproduzir músicas das mais variadas bandas e artistas, criar uma lista de músicas favoritas e editar o perfil da pessoa usuária logada.",
    image: trybetunes,
    inGroup: false,
    link: "https://github.com/DevPBDias/trybetunes-reworked",
    techs: ["React", "Next", "TS", "Sass", "React-hook-form", "Zod", "Figma"],
  },
  {
    id: 6,
    name: "Trivia Game",
    year: 2022,
    type: "Trybe",
    description:
      "Projeto do curso da Trybe feito em grupo. A aplicação é um jogo de perguntas e respostas em que se tem um tempo para responder e os pontos do jogador são acumulados e exibido no final.",
    image: trivia,
    inGroup: true,
    link: "https://github.com/DevPBDias/Projetc-Trivia-React-Redux",
    techs: ["React", "JS", "Redux", "Css", "Jest", "RTL", "Trello"],
  },
  {
    id: 7,
    name: "Trybewallet",
    year: 2022,
    type: "Trybe",
    description:
      "Projeto do curso da Trybe. Nessa aplicação, se faz uso de uma api de cotação de moedas extrangeiras. O usuário faz login e consegue fazer a conversão do real para moeda que desejar. Os valores calculados ficam expostos na tabela e vão sendo acumulados no header.",
    image: walletPage,
    inGroup: false,
    link: "https://github.com/DevPBDias/Trybewallet",
    techs: ["React", "JS", "Redux", "Css"],
  },
];
