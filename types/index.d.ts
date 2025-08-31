export interface NavbarLink {
  route: string;
  label: string;
}

export interface DropDown {
  label: string;
  path: string;
  image?: string;
  subText?: string;
}

export interface CategoryCard {
  image: string;
  title: string;
  achievement: string;
}

export interface NewJobCard {
  image: string;
  companyName: string;
  jobTitle: string;
  location: string;
  tags: string[];
  amount: number;
  uploadedAt: number;
}

export interface StepsJob {
  title: string;
  description: string;
}

export interface StatusTab {
  label: string;
  value: string;
}

export interface ApplyStatus {
  label: string;
  value: string;
}

export interface SavedJobs {
  image: string;
  jobTitle: string;
  companyName: string;
  jobType: string;
  location: string;
  timeLeft: number;
}
