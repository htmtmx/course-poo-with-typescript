import { ProductMemoryService } from "./services/product-memory.service";

const productService = new ProductMemoryService();

productService.create(
  {
    title: 'Product 1',
    price: 324,
    description: 'Description of product 1',
    images: [],
    categodyId: 3
  }
)

const products = productService.getAll();
console.log(products);

const productId = products[0].id;
console.log(productId);

productService.update(productId, {
  title: 'Titulo Actualizado',
  description: 'Esta es una actualizacion de la descripcion',
  price: 666
})

const rta = productService.findOneProduct(productId);
console.log(rta);