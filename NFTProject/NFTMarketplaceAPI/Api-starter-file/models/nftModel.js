const mongoose = require("mongoose");
console.log("DATABASE:", process.env.DATABASE);
console.log("PASSWORD:", process.env.PASSWORD);



const nftSchema = new mongoose.Schema({
    name: {
        type: String,
        required: [true, "A NFT must have a name"],
        unique: true,
    },
    duration: {
      type: String,
      required: [true, "must provide duration"],
    },
    maxGroupSize: {
      type: Number,
      required: [true, "must have a group size"],
    },
    difficulty: {
      type: String,
      required: [true, "must have difficulty"],
      enum: {
        values: ["easy", "medium", "difficulty"],
        message: "Difficulty is either: easy, medium and difficulty",
      },
    },
    ratingsAverage: {
      type: Number,
      default: 4.5,
      min: [1, "must have 1"],
      max: [5, "must have 5"],
    },
    ratingsQuantity: {
      type: Number,
      default: 0,
    },
    price: {
      type: Number,
      required: [true, "A NFT must have price"],
    },
    priceDiscount: {
      //THIS CAN ONLY WORK AT THE TIME OF CREATE not update
      type: Number,
      validate: {
        validator: function (val) {
          return val < this.price; // 200 > 100  20 < 100
        },
        message: "Discount price ({VALUE}) should be below regular price",
      },
    },
    summary: {
      type: String,
      trim: true,
      required: [true, "must provide the summary"],
    },
    description: {
      type: String,
      trim: true,
    },
    imageCover: {
      type: String,
      required: [true, "must provide the cover image"],
    },
    images: [String],
    createdAt:{
        type:Date,
        default:Date.now(),
        select:false
    },
    startDates: [Date]
});

const NFT = mongoose.model("NFT", nftSchema);

module.exports = NFT