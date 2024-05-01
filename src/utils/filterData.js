const filterData = (data, filter) => {
  const filteredData = data.filter((item) => {
    return filter.every((language) => item.languages.includes(language));
  });

  return filteredData;
};

export { filterData };
