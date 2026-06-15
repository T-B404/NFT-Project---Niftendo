const NFT = require("./../models/nftModel");
const APIFeatures = require('./../Utils/apiFeatures')

exports.aliasTopNFTs = (req, res, next) => {
  req.query.limit = "5";
  req.query.sort = "-ratingsAverage,price";
  req.query.fields = "name,price,ratingsAverage,difficulty";
  next();
};

exports.getAllNfts = async (req, res, next) => {
try {
    const features = new APIFeatures(NFT.find(), req.query)
      .filter()
      .sort()
      .limitFields()
      .pagination();
      
    const nfts = await features.query;

    res.status(200).json({
      status: "success",
      results: nfts.length,
      data: {
        nfts,
      },
    });
  } catch (err) {
    res.status(400).json({
      status: "fail",
      message: err.message,
    });
  }
};


exports.createNFT = async (req,res)=>{
    try {
        const newNFT = await NFT.create(req.body);
        res.status(201).json({
        status: "success",
        data: {
            nft: newNFT,
        },
        });
    } catch (error) {
        res.status(400).json({
        status: "fail",
        message: "Invalid data send for NFT",
        });
    }
}

exports.getSingleNFT =async (req, res) => {
    try {
        const nft = await NFT.findById(req.params.id);

        res.status(200).json({
        status: "success",
        data: {
            nft,
        },
        });
    } catch (error) {
        res.status(404).json({
        status: "fail",
        message: error,
        });
    }
}

exports.updateNFT =async (req, res) => {
  try {
    const nft = await NFT.findByIdAndUpdate(req.params.id, req.body, {
      new: true,
      runValidators: true,
    });

    res.status(200).json({
      status: "success",
      data: {
        nft,
      },
    });
  } catch (error) {
    res.status(404).json({
      status: "fail",
      message: error,
    });
  }
}

exports.deleteNFT =async (req, res) => {
  try {
    await NFT.findByIdAndDelete(req.params.id);
    res.status(204).json({
      status: "success",
      data: null,
    });
  } catch (error) {
    res.status(404).json({
      status: "fail",
      message: error,
    });
  }
}
