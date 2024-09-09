import { Shield, Star, RefreshCw, Ruler, Hand, Gem, Frame } from "lucide-react";
export const products = [
  {
    id: 1,
    name: "Picture Frames",
    slug: "picture-frames",
    category: "Home Decor",
    tags: ["Picture Frames", "Frames"],
    image: "/productsImages/DH2.jpeg",
    description:
      "Discover the elegance of our picture frames, a stunning blend of resin, natural bone inlay, mother of pearl, buffalo horn, marble, and metal. Each piece is crafted with precision, combining luxurious materials for a timeless and sophisticated look. We ensure top quality with meticulous attention to detail and offer customization to match your size and design preferences. Elevate your cherished memories with a picture frame that's uniquely yours.",
    images: [
      "/productsImages/PF/PF1.jpg",
      "/productsImages/PF/PF2.jpg",
      "/productsImages/PF/PF3.jpg",
      "/productsImages/PF/PF4.jpg",
      "/productsImages/PF/PF5.jpg",
      "/productsImages/PF/PF6.jpg",
      "/productsImages/PF/PF7.jpg",
      "/productsImages/PF/PF8.jpg",
      "/productsImages/PF/PF9.jpg",
      "/productsImages/PF/PF10.jpg",
      "/productsImages/PF/PF11.jpg",
      "/productsImages/PF/PF12.jpg",
      "/productsImages/PF/PF13.jpg",
      "/productsImages/PF/PF14.jpg",
      "/productsImages/PF/PF15.jpg",
      "/productsImages/PF/PF16.jpg",
    ],
    highlights: [
      {
        heading: "Durable",
        subheading: "High-quality build",
        icon: <Shield />,
      },
      {
        heading: "Standard Sizes",
        subheading: "4x4 | 5x7 | 8x10 | 11x14 | 16x20 inches",
        icon: <RefreshCw />,
      },
    ],
  },
  {
    id: 2,
    name: "Decorative Boxes",
    slug: "decorative-boxes",
    category: "Home Decor",
    tags: ["Boxes", "Multipurpose Boxes", "Jewellery Box"],
    images: ["/productsImages/DB/DB1.jpg"],

    description:
      "Discover the charm of our decorative boxes, each a testament to Indian craftsmanship and ethical artistry. Handmade by skilled artisans, these versatile boxes serve as both functional storage solutions and exquisite home decor pieces. Crafted from a blend of buffalo horn, bone, wood, resin, metal, and mother of pearl, each box features intricate designs adorned with carefully cut and placed crystals. These unique accents add a touch of sophistication to any space while reflecting a commitment to sustainable and ethical materials. Elevate your home with these beautiful, handcrafted treasures.",
      
    images: [
      "/productsImages/DB/DB1.jpg",
      "/productsImages/DB/DB2.jpg",
      "/productsImages/DB/DB3.jpg",
      "/productsImages/DB/DB4.jpg",
      "/productsImages/DB/DB5.jpg",
      "/productsImages/DB/DB6.jpg",
      "/productsImages/DB/DB7.jpg",
      "/productsImages/DB/DB8.jpg",
      "/productsImages/DB/DB9.jpg",
      "/productsImages/DB/DB10.jpg",
      "/productsImages/DB/DB11.jpg",
      "/productsImages/DB/DB12.jpg",
      "/productsImages/DB/DB13.jpg",
      "/productsImages/DB/DB14.jpg",
    ],

    highlights: [
      {
        heading: "Handcrafted",
        subheading: "Unique piece, crafted with precision",
        icon: <Hand />,
      },
      {
        heading: "Luxurious Materials",
        subheading: "Premium woods, intricate inlays, and exquisite finishes",
        icon: <Gem />,
      },
      {
        heading: "SIZE",
        subheading:
          "4x6x2 Inches | 5x7x3 Inches | 6x4x2 Inches | 6x8x2 Inches | 7x5x3 Inches |  10x6x4 Inches - (All sizes other than these are also available)",
        icon: <Frame />,
      },
    ],
  },
];
