export type ProductType = {
    title: string,
    description: string,
    price: number,
    image: string
}

export const products : ProductType[] = [
    {
    title: "Headphone",
    description: "High performance headphone",
    price: 100,
    image:
      "https://i.pinimg.com/736x/a1/92/63/a192634831a1e561c7118edb096ebc52.jpg",
  },
  {
    title: "Controller",
    description: "Gaming controller",
    price: 500,
    image:
      "https://i.pinimg.com/736x/44/ba/07/44ba070e3ce7f45a73634342bf57191f.jpg",
  },
  {
    title: "Keyboard",
    description: "Mechanical gaming keyboard",
    price: 120,
    image:
      "https://images.unsplash.com/photo-1587829741301-dc798b83add3",
  },
  {
    title: "Mouse",
    description: "Wireless gaming mouse",
    price: 80,
    image:
      "https://images.unsplash.com/photo-1527814050087-3793815479db",
  },
  {
    title: "Speaker",
    description: "Portable Bluetooth speaker",
    price: 150,
    image:
      "https://i.pinimg.com/736x/49/5e/b6/495eb623a5cae8747cad43dfc54a846d.jpg",
  },
];