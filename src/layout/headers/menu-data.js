import HomeIcon from "@/src/svg/home-icon";

const menu_data = [
  { 
    id: 1,
    mega_menu: false,
    has_dropdown: false,
    title: "Home",
    link: "/",
    active: "",
  },
  {
    id: 2,
    mega_menu: false,
    has_dropdown: false,
    title: "Projects",
    link: "/",
    active: "",
    sub_menus: [ 
      { link: "/portfolio", title: "Solutions" },
      { link: "/service-details", title: "Advantages" },
    ],
  },   
  {
    id: 3,
    mega_menu: false,
    has_dropdown: true,
    title: "Open Source",
    link: "/",
    active: "",
    sub_menus: [
      { link: "https://medium.com/data-analysis-center", title: "Technical Blog" },   
      { link: "https://medium.com/data-analysis-center", title: "Free Libraries| GitHub" }, 
    ],
  },
  {
    id: 4,
    mega_menu: false,
    has_dropdown: false,
    title: "Company",
    link: "/about",
    active: "",
    sub_menus: [
      { link: "/portfolio", title: "Portfolio" },
      { link: "/portfolio-details", title: "Portfolio Details" },
      { link: "/team", title: "Team" }, 
      { link: "/team-details", title: "Team Details" },
      { link: "/404", title: "404" }, 
    ],
  },

  {
    id: 5,
    mega_menu: false,
    has_dropdown: false,
    title: "Contact",
    link: "/contact",
    active: "",
  },
  

];
export default menu_data;
