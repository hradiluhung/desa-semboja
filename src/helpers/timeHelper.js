// timestamp to indonesia format
export const timestampToIndo = (timestamp) => {
  const date = new Date(timestamp);
  const options = {
    year: "numeric",
    month: "long",
    day: "numeric",
  };

  return date.toLocaleDateString("id-ID", options);
};
