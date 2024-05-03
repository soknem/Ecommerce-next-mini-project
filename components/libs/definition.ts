export type ProductType = {
    onClick?: () => void;
    category: {
        name: string;
        icon: string;
    };
    readonly id: string;
    name: string;
    desc: string;
    image ?: string;
    price: string;
    quantity: string;
    seller: string;
  }