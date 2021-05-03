interface HandleError {
  status?: number;
  message?: string;
}

const handleError = (e: HandleError): void => {
  // eslint-disable-next-line no-console
  console.log(e, 'error handler');
};

export default handleError;
