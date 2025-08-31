import {
  CategoryCard,
  DropDown,
  NavbarLink,
  NewJobCard,
  SavedJobs,
  StatusTab,
  StepsJob,
} from "@/types";

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
    route: "/employer",
    label: "Home",
  },
  {
    route: "/employer/post-job",
    label: "Post Job",
  },
  {
    route: "/employer/search-cv",
    label: "Search CV",
  },
  {
    route: "/employer/products",
    label: "Products",
  },
  {
    route: "/employer/pricing",
    label: "Pricing",
  },
];

export const seekerDropdown: DropDown[] = [
  {
    label: "Dashboard",
    path: "/dashboard",
    image: "/icons/dashboard.png",
  },
  {
    label: "My Resume",
    path: "/dashboard/resume",
    image: "/icons/user.png",
  },
  {
    label: "Notification",
    path: "/dashboard/notification",
    image: "/icons/notification.png",
  },
  {
    label: "Message",
    path: "/dashboard/message",
    image: "/icons/message.png",
  },
  {
    label: "Account Setting",
    path: "/dashboard/account-setting",
    image: "/icons/settings.png",
  },
  {
    label: "Activity",
    path: "/dashboard/activity",
    image: "/icons/activity.png",
  },
];

export const employerDropdown: DropDown[] = [
  {
    label: "Dashboard",
    path: "/e/dashboard",
  },
  {
    label: "Employer Profile",
    path: "/e/dashboard/profile",
  },
  {
    label: "Post Job",
    path: "/e/dashboard/post-job",
  },
  {
    label: "Notification",
    path: "/e/dashboard/notification",
  },
  {
    label: "Message",
    path: "/e/dashboard/message",
  },
  {
    label: "Account Setting",
    path: "/e/dashboard/account-setting",
  },
  {
    label: "Manage Hiring",
    path: "/e/dashboard/manage-hiring",
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

export const demoNewJobsCard: NewJobCard[] = [
  {
    image: "/icons/mm.png",
    companyName: "MM",
    jobTitle: "President of Sales",
    tags: ["Full-Time", "Remote"],
    location: "Korsto",
    amount: 2000,
    uploadedAt: 1,
  },
  {
    image: "/icons/mcdonalds.png",
    companyName: "McDonald's",
    jobTitle: "Web Designer",
    tags: ["Full-Time", "Senior"],
    location: "Bergen",
    amount: 3400,
    uploadedAt: 3,
  },
  {
    image: "/icons/loveclip.png",
    companyName: "LOVECLIP",
    jobTitle: "Nursing Assistant",
    tags: ["Full-Time", "Part-Time"],
    location: "Trondheim",
    amount: 2500,
    uploadedAt: 9,
  },
  {
    image: "/icons/time.png",
    companyName: "TYME",
    jobTitle: "Marketing Coordinator",
    tags: ["Hybrid", "Part-Time"],
    location: "Stavanger",
    amount: 1000,
    uploadedAt: 18,
  },
  {
    image: "/icons/ob.png",
    companyName: "OB",
    jobTitle: "Dog Trainer",
    tags: ["Junior", "Part-Time"],
    location: "Mongstad",
    amount: 4000,
    uploadedAt: 14,
  },
  {
    image: "/icons/taint.png",
    companyName: "TAINT",
    jobTitle: "Medical Assistant",
    tags: ["Mid-Level", "Part-Time"],
    location: "Bergen",
    amount: 1500,
    uploadedAt: 3,
  },
];

export const stepJobCard: StepsJob[] = [
  {
    title: "Create Account",
    description:
      "Start your journey today. Nulla facilisi. Aenean et tortor at elit luctus.",
  },
  {
    title: "Upload CV / Resume",
    description:
      "Easily upload your resume. Donec euismod velit at tempor, ut cursus.",
  },
  {
    title: "Find suitable job",
    description:
      "Discover jobs for you. In hac habitasse platea dictumst. Morbi imperdiet.",
  },
  {
    title: "Apply job",
    description:
      "Apply in just a click. Sed luctus, lorem id pharetra dapibus, velit nisi.",
  },
];

export const dummyStats = [
  { date: "2025-07-20", views: 1234, applied: 534 },
  { date: "2025-07-21", views: 1434, applied: 634 },
  { date: "2025-07-22", views: 1544, applied: 734 },
  { date: "2025-07-23", views: 1344, applied: 674 },
  { date: "2025-07-24", views: 1944, applied: 834 },
  { date: "2025-07-25", views: 2342, applied: 1050 },
  { date: "2025-07-26", views: 2642, applied: 1150 },
  { date: "2025-06-25", views: 900, applied: 250 }, // Previous month
  { date: "2025-05-15", views: 500, applied: 100 }, // Previous year
];

export const ActivityTab: StatusTab[] = [
  {
    label: "Apply Status",
    value: "apply-status",
  },
  {
    label: "Offered Job",
    value: "offered-job",
  },
  {
    label: "Saved Job",
    value: "saved-job",
  },
  {
    label: "Followed Company",
    value: "followed-company",
  },
];

export const ApplicationStatus: StatusTab[] = [
  {
    label: "All",
    value: "all",
  },
  {
    label: "Applied",
    value: "applied",
  },
  {
    label: "Checked",
    value: "checked",
  },
  {
    label: "Rejected",
    value: "rejected",
  },
  {
    label: "Accepted",
    value: "accepted",
  },
  {
    label: "Interviewed",
    value: "interviewed",
  },
];

export const DemoSavedJobs: SavedJobs[] = [
  {
    image: "",
    jobTitle: "UI/UX Designer",
    companyName: "Upply",
    jobType: "Full Time",
    location: "New York",
    timeLeft: 3,
  },
  {
    image: "",
    jobTitle: "Marketing Coordinator",
    companyName: "Lazada",
    jobType: "Part Time",
    location: "New York",
    timeLeft: 2,
  },
  {
    image: "",
    jobTitle: "Dog Trainer",
    companyName: "BMW",
    jobType: "Full Time",
    location: "New York",
    timeLeft: 1,
  },
];
