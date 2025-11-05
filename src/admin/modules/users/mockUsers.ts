import type { User } from "./types";

const users: User[] = [
  {
    id: 1,
    name: "Aliyu Musa",
    email: "aliyu@example.com",
    role: "User",
    status: "Active",
  },
  {
    id: 2,
    name: "Zainab Bello",
    email: "zainab@example.com",
    role: "Admin",
    status: "Inactive",
  },
  {
    id: 3,
    name: "Fatima Umar",
    email: "fatima@example.com",
    role: "Support",
    status: "Active",
  },
];

export default users;
