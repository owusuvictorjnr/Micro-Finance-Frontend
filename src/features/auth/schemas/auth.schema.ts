import { z } from "zod";

export const sessionUserSchema = z.object({
  name: z.string(),
  email: z.string(),
  role: z.enum(["admin", "employee"]),
  avatarUrl: z
    .string()
    .url()
    .refine((url) => url.startsWith("https://images.unsplash.com/"), {
      message: "avatarUrl must be a valid https://images.unsplash.com/ URL",
    })
    .optional(),
});

export type SessionUser = z.infer<typeof sessionUserSchema>;
