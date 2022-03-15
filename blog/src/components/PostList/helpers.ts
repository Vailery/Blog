export const debounce = (value: (text: string) => void, dalay: number) => {
  let isCooldown = false;
  let prevSearchText = "";

  return function (searchText: string) {
    prevSearchText = searchText;

    if (isCooldown) {
      return;
    }

    value(searchText);
    isCooldown = true;

    setTimeout(() => {
      isCooldown = false;

      if (prevSearchText !== searchText) {
        value(prevSearchText);
      }
    }, dalay);
  };
};
