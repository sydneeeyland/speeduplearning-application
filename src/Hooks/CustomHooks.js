export const useChange = (key, value, state) => {
  state((prev) => ({
    ...prev,
    [key]: value,
  }));
};
