export interface Car {
  id: number;
  brand: string;
  model: string;
  price: number;
  images?: Image[]; // Opzionale, se le immagini sono associate a Car
}

export interface Image {
  id: number;
  name: string;
  type: string;
  data: string; // Considera l'utilizzo di base64 per le immagini in Angular
}
