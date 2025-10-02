export const scrollPageToTop = () => {
  window?.scrollY > 0 && window?.scrollTo({ top: 0 });
};
