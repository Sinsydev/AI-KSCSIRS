export type Contact = {
  id: number;
  name: string;
  email: string;
  phone: string;
  category: "Customer" | "Partner" | "Internal";
  status: "Active" | "Inactive";
};
