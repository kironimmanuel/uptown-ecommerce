// 2nd arg is the string type
// When defining a new category, it will be added automatically
export const getUniqueValues = (data, type) => {
  let unique = data.map(
    (item) =>
      // Dynamic accessing property
      item[type]
  );
  if (type === "edition") {
    // Flat to create a new array with all sub-array elements concatenated into one array
    // const numbers = [1, 2, [3, 4, 5]];
    // const flatNumbers = numbers.flat();
    unique = unique.flat();
  }
  // Set object to store unique values
  return ["all", ...new Set(unique)];
};
