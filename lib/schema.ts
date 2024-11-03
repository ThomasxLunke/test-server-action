import { z } from "zod";

export const schema_add_user = z.object({
  first_name: z.string().min(15, "Min length = 15"),
  last_name: z.string().min(1),
  email: z.string().email("Invalid email address"),
});