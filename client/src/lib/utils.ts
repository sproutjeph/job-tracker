import { type ClassValue, clsx } from "clsx";
import { twMerge } from "tailwind-merge";
import {
  BarChart,
  BookPlusIcon,
  LayoutDashboard,
  List,
  LucideIcon,
  User,
} from "lucide-react";

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}

export const JOB_STATUS = {
  PENDING: "pending",
  INTERVIEW: "interview",
  DECLINED: "declined",
};

export const JOB_TYPE = {
  FULL_TIME: "full-time",
  PART_TIME: "part-time",
  INTERNSHIP: "internship",
};

export const JOB_SORT_BY = {
  NEWEST_FIRST: "newest",
  OLDEST_FIRST: "oldest",
  ASCENDING: "a-z",
  DESCENDING: "z-a",
};

export const linkData: { text: string; path: string; Icon: LucideIcon }[] = [
  {
    text: "add job",
    path: ".",
    Icon: BookPlusIcon,
  },
  {
    text: "all jobs",
    path: "all-jobs",
    Icon: List,
  },
  {
    text: "stats",
    path: "stats",
    Icon: BarChart,
  },
  {
    text: "profile",
    path: "profile",
    Icon: User,
  },
  {
    text: "admin",
    path: "admin",
    Icon: LayoutDashboard,
  },
];
