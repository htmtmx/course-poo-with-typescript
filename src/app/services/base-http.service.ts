import { Category } from "../models/category.model";
import { Product } from "../models/product.model";
import axios from "axios";

export class BaseHettpService<TypeClass>{
  // data: TypeClass[] = [];
  constructor(private url: string) {

  }
  async getAll() {
    const { data } = await axios.get<TypeClass>(this.url);
    return data;
  }
}

// const service = new BaseHettpService<string>();
// // service.data
// service.getAll

// const service1 = new BaseHettpService<Category>();
// // service1.data
// service1.getAll

(async () => {
  const url1 = 'https://api.escuelajs.co/api/v1/products'
  const serviceProduct = new BaseHettpService<Product>(url1);
  const rta = await serviceProduct.getAll()
  console.log(rta)
  const url2 = 'https://api.escuelajs.co/api/v1/categories'
  const serviceCategory = new BaseHettpService<Category>(url2);
  const rtaCategory = await serviceCategory.getAll()
  console.log(rtaCategory)
})();