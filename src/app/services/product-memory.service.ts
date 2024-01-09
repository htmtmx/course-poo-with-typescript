import { Product } from "./../models/product.model";
import { CreateProductDto, UpdateProductDto } from "./../dtos/product.dto";
import { faker } from "@faker-js/faker";


export class ProductMemoryService {
  private products: Product[] = [];
  create(data: CreateProductDto): Product {
    const newProduct = {
      ...data,
      id: faker.number.int({min:1}),
      category: {
        id: data.categodyId,
        name: faker.commerce.department(),
        image: faker.image.url(),
      }
    }
    return this.add(newProduct);
  }

  update(id: Product['id'], changes: UpdateProductDto): Product {
    const index = this.products.findIndex(item => item.id === id);
    const prevData = this.products[index];
    this.products[index] = {
      ...prevData,
      ...changes
    }
    return this.products[index];
  }

  add(product: Product) {
    this.products.push(product);
    return product;
  }

  findOneProduct(id: Product['id']) {
    return this.products.find(item => item.id == id);
  }
}











export const deleteProduct = (id: string) => {

}
export const getProduct = (productName: string) => {

}