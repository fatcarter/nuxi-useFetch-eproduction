export default defineEventHandler(event => {
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve({});
    }, 2000);
  })
})


