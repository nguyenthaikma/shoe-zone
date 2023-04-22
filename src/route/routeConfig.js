import lazyLoading from "@src/libs/lazyLoading";

const Home = lazyLoading(() => import("../pages/home"));

const routerConfig = [
  {
    path: "",
    Element: Home,
  },
];

export default routerConfig;
