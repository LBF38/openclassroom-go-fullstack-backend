const express = require("express");
const auth = require("../middleware/auth");
const router = express.Router();

const stuffController = require("../controllers/stuff");

router.post("/", auth, stuffController.createThing);
router.get("/", auth, stuffController.getAllThings);
router.get("/:id", auth, stuffController.getOneThing);
router.put("/:id", auth, stuffController.modifyThing);
router.delete("/:id", auth, stuffController.deleteThing);

module.exports = router;
