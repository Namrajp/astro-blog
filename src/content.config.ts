import { z, defineCollection } from "astro:content";
import { glob } from "astro/loaders";
import { date } from "astro:schema";

const posts = defineCollection({
  loader: glob({ pattern: "*.md", base: "./src/posts" }),
  schema: z.object({
    title: z.string(),
    date: z.date(),
  }),
});

export const collections = {
  posts: posts,
};
