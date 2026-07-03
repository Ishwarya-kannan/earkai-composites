import { MetadataRoute } from "next";

export default function sitemap(): MetadataRoute.Sitemap {
  return [
    {
      url: "https://earkaicomposites.com",
    },
    {
      url: "https://earkaicomposites.com/about",
    },
    {
      url: "https://earkaicomposites.com/products",
    },
    {
      url: "https://earkaicomposites.com/industries",
    },
    {
      url: "https://earkaicomposites.com/contact",
    },
  ];
}