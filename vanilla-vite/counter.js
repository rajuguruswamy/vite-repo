export const setupCounter = (element) => {
  let counter = 0;

  const setNum = (count) => {
    counter = count;
    element.innerHTML = `count is  ${counter}`;
  };
  element.addEventListener('click', () => setNum(counter + 1));
  setNum(0);
};
