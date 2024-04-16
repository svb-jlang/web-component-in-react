/**
 * This method measures various web vitals and calls the provided callback function with the measurements.
 * @param {Function} onPerfEntry - The callback function to be called with the measurements.
 * @throws {Error} If onPerfEntry is not a function.
 */
const reportWebVitals = onPerfEntry => {
  if (onPerfEntry && onPerfEntry instanceof Function) {
    import('web-vitals').then(({ getCLS, getFID, getFCP, getLCP, getTTFB }) => {
      getCLS(onPerfEntry);
      getFID(onPerfEntry);
      getFCP(onPerfEntry);
      getLCP(onPerfEntry);
      getTTFB(onPerfEntry);
    });
  }
};

export default reportWebVitals;
