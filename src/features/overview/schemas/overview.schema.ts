import { z } from "zod";

export const approveApplicationSchema = z
  .string()
  .regex(/^LN-\d{4}-\d{4}$/, "Invalid application ID format");
