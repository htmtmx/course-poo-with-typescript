import { UpdateProductDto } from "../dtos/product.dto";
import { Category } from "../models/category.model";
import { Product } from "../models/product.model";
import axios from "axios";

export class BaseHttpService<TypeClass>{
  // data: TypeClass[] = [];
  constructor(protected url: string) {

  }
  async getAll() {
    const { data } = await axios.get<TypeClass>(this.url);
    return data;
  }
  async update<Id, Dto>(id: Id, changes: Dto) {
    const { data } = await axios.put(`${this.url}/${id}`, changes);
    return data;
  }
}

// const service = new BaseHttpService<string>();
// // service.data
// service.getAll

// const service1 = new BaseHttpService<Category>();
// // service1.data
// service1.getAll

(async () => {
  const url1 = 'https://api.escuelajs.co/api/v1/products'
  const serviceProduct = new BaseHttpService<Product>(url1);
  const rta = await serviceProduct.getAll()
  console.log(rta)

  const url2 = 'https://api.escuelajs.co/api/v1/categories'
  const serviceCategory = new BaseHttpService<Category>(url2);
  const rtaCategory = await serviceCategory.getAll()
  console.log(rtaCategory)

  serviceProduct.update<Product['id'], UpdateProductDto>(1, {
    title:''
  })
})();