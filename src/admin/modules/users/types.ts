// src/admin/modules/users/types.ts
export type User = {
  id: number;
  name: string;
  email: string;
  role: "Admin" | "User" | "Support";
  status: "Active" | "Inactive";
};
