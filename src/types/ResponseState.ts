export type ErrorMessage = {
  message: string;
};

export type ResponseState = {
  loading: boolean;
  error?: ErrorMessage;
};
