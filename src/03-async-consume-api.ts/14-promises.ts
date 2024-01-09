//@ts-check
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
})();