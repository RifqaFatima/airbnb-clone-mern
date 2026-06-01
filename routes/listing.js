const express = require("express");
const router = express.Router({ mergeParams: true });
const wrapAsync = require("../utils/wrapAsync.js");

const Listing = require("../models/listing.js");
const { isLoggedIn, isOwner, validateListing } = require("../middleware.js");

const listingController = require("../controllers/listings.js");

const multer = require("multer");
const { storage } = require("../cloudConfig.js");
const upload = multer({ storage });



router
  .route("/")
  //index route
  .get(wrapAsync(listingController.index))
  //CREATE ROUTE
  .post(
    isLoggedIn,
    //validateListing,
    upload.single("listing[image]"),
    wrapAsync(listingController.createListing)
  );
  
//NEW ROUTE
router.get("/new", isLoggedIn, wrapAsync(listingController.renderNewForm));

router.get("/api/listings", async (req, res) => {
   try {
        // We select only the essential fields Gemini needs to match user requests
        const listings = await Listing.find({})
            .select("title description price location country")
            .lean(); // .lean() makes the query faster by returning plain JS objects instead of full Mongoose documents
        
        res.status(200).json(listings);
    } catch (error) {
        console.error("Error fetching listings for AI:", error);
        res.status(500).json({ error: "Failed to fetch listings" });
    }
});
router
  .route("/:id")
  //SHOW ROUTE
  .get(wrapAsync(listingController.showListing))
  //UPDATE ROUTE
  .put(
    isLoggedIn,
    isOwner,
    upload.single("listing[image]"),
    validateListing,
    wrapAsync(listingController.updateListing)
  )
  //DELETE ROUTE
  .delete(isLoggedIn, isOwner, wrapAsync(listingController.deleteListing));





//EDIT ROUTE
router.get(
  "/:id/edit",
  isLoggedIn,
  isOwner,
  wrapAsync(listingController.renderEditForm)
);

module.exports = router;
