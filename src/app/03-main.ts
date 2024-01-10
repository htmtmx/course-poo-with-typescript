//@ts-check
import axios from "axios";
import { ProductHttpService } from "./services/product-http.service";

(async() => {
  const productService = new ProductHttpService();

  try{
    console.log('---'.repeat(10));
    console.log('---'.repeat(5), 'Get All', '---'.repeat(5));
    console.log('---'.repeat(10));
    const products = await productService.getAll();
    console.log(products.length);
    console.log(products.map(item => item.price));

    console.log('---'.repeat(10));
    console.log('---'.repeat(5), 'Update product', '---'.repeat(5));
    console.log('---'.repeat(10));
    const productId = products[0].id;
    await productService.update(productId, {
      price: 468,
      title: 'Update de titulo con axios',
    });
    const productUpdated = await productService.findOneProduct(productId);
    console.log(productUpdated);
  } catch (error) {
    console.log('Hubo un error');
  }
})();