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

    // Latest News and Updates (v1.1)
    latestNews: z
      .array(
        z.object({
          date: z.string(),
          title: z.string(),
          description: z.string(),
          type: z.enum(["release", "feature", "announcement", "update"]),
          url: z.string().optional(),
        }),
      )
      .optional(),

    // Iteration History (v1.1)
    iterationHistory: z
      .array(
        z.object({
          version: z.string(),
          releaseDate: z.string(),
          majorChanges: z.array(z.string()),
          newFeatures: z.array(z.string()).optional(),
          improvements: z.array(z.string()).optional(),
          deprecated: z.array(z.string()).optional(),
        }),
      )
      .optional(),

    // User Ratings (v1.1)
    ratings: z
      .object({
        averageScore: z.number().min(0).max(5).default(0),
        totalReviews: z.number().default(0),
        breakdown: z
          .object({
            five: z.number().default(0),
            four: z.number().default(0),
            three: z.number().default(0),
            two: z.number().default(0),
            one: z.number().default(0),
          })
          .optional(),
      })
      .optional(),

    // Video Gallery (v1.1)
    videoGallery: z
      .array(
        z.object({
          title: z.string(),
          description: z.string(),
          prompt: z.string().optional(),
          videoUrl: z.string(),
          thumbnailUrl: z.string(),
          duration: z.string(),
          resolution: z.string(),
        }),
      )
      .optional(),

    // Developer API Information (v1.1)
    developerApi: z
      .object({
        available: z.boolean().default(false),
        documentation: z.string().optional(),
        pricing: z.string().optional(),
        rateLimit: z.string().optional(),
        sdkLanguages: z.array(z.string()).optional(),
      })
      .optional(),
  }),
});

export const collections = {
  models: modelsCollection,
};
