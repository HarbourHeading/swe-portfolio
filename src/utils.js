export const getImageUrl = (img) => {
  const path = new URL(`../src/assets/`, import.meta.url).href;
  return `${path}/${img}`
};
