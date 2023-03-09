import express from "express";

const router = express.Router();

import { createPayment } from "../models/paymets/PaymentModel.js";

//add payment
router.post("/", async (req, res, next) => {
  try {
    console.log(req.body);

    const { _id } = await createPayment(req.body);

    _id
      ? res.json({
          status: "success",
          message: "New Payment has been added.",
        })
      : res.json({
          status: "error",
          message: "Ubable to add New Payment.",
        });
  } catch (error) {
    next(error);
  }
});

export default router;
