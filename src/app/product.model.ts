export interface Product {
  name: string;
  price: number;
  image: string;
  category?: string; //El signo de ? (interrogación) significa que puede ser opcional
}
