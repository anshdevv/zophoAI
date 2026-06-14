import { z } from "zod";

export const contactFormSchema = z.object({
  name: z
    .string()
    .min(2, "Name must be at least 2 characters")
    .max(100, "Name must be less than 100 characters"),
  company: z
    .string()
    .min(1, "Company name is required")
    .max(150, "Company name must be less than 150 characters"),
  email: z
    .string()
    .email("Please enter a valid email address")
    .max(254, "Email must be less than 254 characters"),
  phone: z
    .string()
    .regex(
      /^[\+]?[(]?[0-9]{3}[)]?[-\s\.]?[0-9]{3}[-\s\.]?[0-9]{4,6}$/,
      "Please enter a valid phone number"
    )
    .optional()
    .or(z.literal("")),
  service: z.enum(
    [
      "ai-photography",
      "voice-agents",
      "website-development",
      "automation",
      "multiple",
      "not-sure",
    ],
    {
      errorMap: () => ({ message: "Please select a service" }),
    }
  ),
  projectDetails: z
    .string()
    .min(20, "Please provide at least 20 characters about your project")
    .max(2000, "Project details must be less than 2000 characters"),
});

export type ContactFormData = z.infer<typeof contactFormSchema>;

export const serviceLabels: Record<ContactFormData["service"], string> = {
  "ai-photography": "AI Product Photography & Commercials",
  "voice-agents": "AI Voice Agents",
  "website-development": "Website Development",
  automation: "Business Process Automation",
  multiple: "Multiple Services",
  "not-sure": "Not Sure Yet",
};
