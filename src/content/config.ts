import { defineCollection, z } from "astro:content";

const projectCollection = defineCollection({
  schema: ({ image }) => z.object({
    title: z.string(),
    cover: image().refine((img) => img.width >= 0, {
      message: "Cover image must be at least 1080 pixels wide!",
    }),
    relevance: z.number().int().min(0).max(100),
    description: z.string(),
    //coverAlt: z.string(),
  }),
});

export const collections = {
  project: projectCollection,
};