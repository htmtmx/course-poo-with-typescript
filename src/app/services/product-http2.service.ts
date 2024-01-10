import { Product } from "../models/product.model";
import { BaseHttpService } from "./base-http.service";

//@ts-check
export class ProductHttpService extends BaseHttpService<Product>{
  otherRequest() {
    this.url;
    // code
  }

}