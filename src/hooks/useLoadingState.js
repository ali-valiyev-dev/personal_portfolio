const useLoadingState = (...states) => {
  const loading = states?.some(state => state?.loading);
  const error = states?.some(state => state?.error);

  return { loading, error };
};

export default useLoadingState;
