import { defineCollection, z } from "astro:content";

// AI Video Generation Model Schema
const modelsCollection = defineCollection({
  type: "content",
  schema: z.object({
    // Basic Info
    name: z.string(),
    company: z.string(),
    status: z.enum(["released", "beta", "alpha", "waitlist", "research"]),
    releaseDate: z.string().optional(),
    lastUpdated: z.string(),

    // Categories
    categories: z.array(
      z.enum([
        "text-to-video",
        "image-to-video",
        "video-to-video",
        "animation",
      ]),
    ),

    // Capabilities
    capabilities: z.object({
      maxResolution: z.string(),
      maxDuration: z.string(),
      aspectRatios: z.array(z.string()),
      frameRate: z.string().optional(),
      audioGeneration: z.boolean().default(false),
    }),

    // Features
    features: z.array(z.string()),
    uniqueFeatures: z.array(z.string()).optional(),
    limitations: z.array(z.string()).optional(),

    // Pricing
    pricing: z.object({
      model: z.enum([
        "free",
        "freemium",
        "subscription",
        "credits",
        "enterprise",
        "paid",
      ]),
      tiers: z
        .array(
          z.object({
            name: z.string(),
            price: z.string(),
            features: z.array(z.string()),
          }),
        )
        .optional(),
      freeCredits: z.string().optional(),
      startingPrice: z.string().optional(),
    }),

    // Access
    access: z.object({
      platform: z.array(z.enum(["web", "api", "mobile", "desktop", "discord"])),
      url: z.string(),
      apiDocs: z.string().optional(),
    }),

    // Quality indicators (1-5 scale)
    quality: z.object({
      outputQuality: z.number().min(1).max(5),
      consistency: z.number().min(1).max(5),
      speed: z.number().min(1).max(5),
    }),

    // Use cases
    useCases: z.array(z.string()),

    // Media
    thumbnail: z.string(),
    gallery: z.array(z.string()).optional(),

    // SEO & Display
    description: z.string(),
    shortDescription: z.string(),
    featured: z.boolean().default(false),
  }),
});

export const collections = {
  models: modelsCollection,
};
