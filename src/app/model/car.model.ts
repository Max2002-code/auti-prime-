// car.model.ts

export class Car {
  id: number;
  model: string;
  brand: string;
  price: number;
  imagePublicId?: string;// Campo per l'identificativo pubblico dell'immagine su Cloudinary
  images: string;

  constructor(id: number, model: string, brand: string, price: number, imagePublicId: string,  images: string) {
    this.id = id;
    this.model = model;
    this.brand = brand;
    this.price = price;
    this.imagePublicId = imagePublicId;
    this.images = images;
  }
}
