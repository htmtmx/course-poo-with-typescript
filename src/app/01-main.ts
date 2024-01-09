//@ts-check
import axios from 'axios';
import { Product } from './models/product.model';

(async () => {

  async function getProducts(): Promise<Product[]> {
    const rta = await axios.get('https://api.escuelajs.co/api/v1/products');
    return rta.data;
  }

  console.log('---'.repeat(10));
  const products = await getProducts();
  console.log(products);
  console.log(products.map(item => `${item.id}-${item.title}`));

})();