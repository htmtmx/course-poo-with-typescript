//@ts-check
import axios from 'axios';

(async() => {
  function delay(time: number) {
    const promise = new Promise<boolean>((resolve) => {
      setTimeout(() => {
        resolve(true);
      }, time)
    });
    return promise;
  }
  console.log('---'.repeat(10));
  const rta = await delay(3000);
  console.log(rta);

  function getProducts() {
    const promise = axios.get('https://api.escuelajs.co/api/v1/products')
    return promise;
  }

  // console.log('---'.repeat(10));
  // const rtaAxios = await getProducts();
  // console.log(rtaAxios.data);

  async function getProductsAsync() {
    const rtaAsync = await axios.get('https://api.escuelajs.co/api/v1/products');
    return rtaAsync.data;
  }

  console.log('---'.repeat(10));
  const productsAsync = await getProductsAsync();
  console.log(productsAsync);

})();