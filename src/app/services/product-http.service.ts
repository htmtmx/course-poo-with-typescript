import { da } from "@faker-js/faker";
import { CreateProductDto, UpdateProductDto } from "../dtos/product.dto";
import { ProductService } from "../models/porduct-service.model";
import { Product } from "../models/product.model";
import axios from "axios";

//@ts-check
export class ProductHttpService implements ProductService{
  private url: string = 'https://api.escuelajs.co/api/v1/products'
  async getAll() {
    const { data } = await axios.get<Product[]>(this.url)
    return data;
  }
  async update(id: Product['id'], changes: UpdateProductDto) {
    const { data } = await axios.put(`${this.url}/${id}`, changes);
    return data;
  }
  async create(dto: CreateProductDto){
    const { data } = await axios.post(this.url, dto)
    return data;
  }
  async findOneProduct(id: number) {
    const { data } = await axios.get(`${this.url}/${id}`);
    return data;
  }
}