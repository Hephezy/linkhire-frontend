import { DropDown, NavbarLink } from "@/types";

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
