// Import the glob loader
import { glob } from "astro/loaders";
// Import utilities from `astro:content`
import { z, defineCollection } from "astro:content";
// Define a `loader` and `schema` for each collection
const work = defineCollection({
    loader: glob({ pattern: '**/*.{md,mdx}', base: "./src/work" }),
    schema: ({ image }) => z.object({
      title: z.string(),
      description: z.string(),
      meta: z.string(),
      pubDate: z.date(),
      link: z.string(),
      image: image(),
      imgAlt:  z.string(),
      tags: z.array(z.string())
    })
});
// Export a single `collections` object to register your collection(s)
export const collections = { work };