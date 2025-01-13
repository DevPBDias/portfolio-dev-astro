export interface INavLinks {
  id: number;
  name: string;
  path: string;
}

export const navLinks: INavLinks[] = [
  {
    id: 1,
    name: "Home",
    path: "/",
  },
  {
    id: 2,
    name: "Sobre",
    path: "/about",
  },
  {
    id: 3,
    name: "Projetos",
    path: "/projects",
  },
];
