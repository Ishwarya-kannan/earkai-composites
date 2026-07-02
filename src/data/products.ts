import { Product } from "@/types/product";

export const products: Product[] = [
  {
    id: 1,
    title: "Composite Raw Materials",
    slug: "composite-raw-materials",
    image: "/images/products/carbon-fiber.jpeg",
    shortDescription:
      "Premium raw materials for manufacturing high-performance composite products.",
    category: "Raw Materials",
  },
  {
    id: 2,
    title: "Composite Consumables",
    slug: "composite-consumables",
    image: "/images/products/epoxy-resin.jpeg",
    shortDescription:
      "Complete range of consumables used in composite manufacturing processes.",
    category: "Consumables",
  },
  {
    id: 3,
    title: "Vacuum Bagging Products",
    slug: "vacuum-bagging-products",
    image: "/images/products/sealant-tape.jpeg",
    shortDescription:
      "Vacuum bagging materials for precision composite production.",
    category: "Vacuum",
  },
  {
    id: 4,
    title: "RTM Products",
    slug: "rtm-products",
    image: "/images/products/composite-sheet.jpeg",
    shortDescription:
      "Reliable products for Resin Transfer Moulding applications.",
    category: "RTM",
  },
];