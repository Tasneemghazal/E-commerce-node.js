import mongoose, { model, Schema, Types } from "mongoose";
const productSchema = new Schema(
  {
    name: {
      type: String,
      unique: true,
      required: true,
      trim: true,
    },
    slug: {
      type: String,
      required: true,
    },
    description: {
      type: String,
    },
    stock: {
      type: Number,
      default: 1,
    },
    price: {
      type: Number,
      required: true,
    },
    discount: {
      type: Number,
      default: 0,
    },
    finalPrice: {
      type: Number,
    },
    image: {
      type: Object,
      required: true,
    },
    subImages: [
      {
        type: Object,
        required: true,
      },
    ],
    status: {
      type: String,
      default: "active",
      enum: ["active", "inactive"],
    },
    sizes: [
      {
        type: String,
        enum: ["s", "m", "lg", "xl"],
      },
    ],
    colors: [String],
    categoryId: {
      type: Types.ObjectId,
      ref: "Category",
      required: true,
    },
    subcategoryId: {
      type: Types.ObjectId,
      ref: "subCategory",
      required: true,
    },
    createdBy: { type: Types.ObjectId, ref: "User" },
    updatedBy: { type: Types.ObjectId, ref: "User" },
  },
  {
    timestamps: true,
    toJSON: { virtuals: true },
    toobject: { virtuals: true },
  }
);
productSchema.virtual("reviews", {
  ref: "Review",
  localField: "_id",
  foreignField: "productId",
});
const productModel = model("Product", productSchema);
export default productModel;
