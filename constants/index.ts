import { CategoryCard, DropDown, NavbarLink } from "@/types";

export const seekerNavbar: NavbarLink[] = [
  {
    route: "/",
    label: "Home",
  },
  {
    route: "/find-job",
    label: "Find Job",
  },
  {
    route: "/company",
    label: "Company",
  },
  {
    route: "/create-cv",
    label: "Create CV",
  },
];

export const employerNavbar: NavbarLink[] = [
  {
    route: "/",
    label: "Home",
  },
  {
    route: "/post-job",
    label: "Post Job",
  },
  {
    route: "/search-cv",
    label: "Search CV",
  },
  {
    route: "/products",
    label: "Products",
  },
  {
    route: "/pricing",
    label: "Pricing",
  },
];

export const seekerDropdown: DropDown[] = [
  {
    label: "Dashboard",
    path: "",
  },
  {
    label: "My Resume",
    path: "",
  },
  {
    label: "Notification",
    path: "",
  },
  {
    label: "Message",
    path: "",
  },
  {
    label: "Account Setting",
    path: "",
  },
  {
    label: "Activity",
    path: "",
  },
];

export const employerDropdown: DropDown[] = [
  {
    label: "Dashboard",
    path: "",
  },
  {
    label: "Employer Profile",
    path: "",
  },
  {
    label: "Post Job",
    path: "",
  },
  {
    label: "Notification",
    path: "",
  },
  {
    label: "Message",
    path: "",
  },
  {
    label: "Account Setting",
    path: "",
  },
  {
    label: "Manage Hiring",
    path: "",
  },
];

// demo category card content
export const demoCategoryCard: CategoryCard[] = [
  {
    image: "/icons/wordpress.png",
    title: "Wordpress Developer",
    achievement: "72+",
  },
  {
    image: "/icons/developer.png",
    title: "Software Developer",
    achievement: "121+",
  },
  {
    image: "/icons/tester.png",
    title: "Software Tester",
    achievement: "104+",
  },
  {
    image: "/icons/designer.png",
    title: "Graphic Designer",
    achievement: "58+",
  },
  {
    image: "/icons/leader.png",
    title: "Team Leader",
    achievement: "35+",
  },
  {
    image: "/icons/ux.png",
    title: "UX Designer",
    achievement: "96+",
  },
  {
    image: "/icons/project.png",
    title: "Project Manger",
    achievement: "78+",
  },
  {
    image: "/icons/ui.png",
    title: "UI Designer",
    achievement: "64+",
  },
];
