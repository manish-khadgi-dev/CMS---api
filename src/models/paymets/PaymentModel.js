import PaymentSchema from "./PaymentSchema.js";

//create new Payment
export const createPayment = (obj) => {
  return PaymentSchema(obj).save();
};

//get Payment
export const getPayments = () => {
  return PaymentSchema.find();
};
