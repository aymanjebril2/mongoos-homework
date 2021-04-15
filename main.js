// Below is an array of objects:
const products = [
  { model: "515", brand: "New Balance", color: "Green" },
  { model: "515", brand: "New Balance", color: "Yellow" },
  { model: "515", brand: "New Balance", color: "Blue" },
  { model: "515", brand: "New Balance", color: "Red" },
  { model: "574", brand: "New Balance", color: "Blue" },
  { model: "574", brand: "New Balance", color: "Red" },
  { model: "574", brand: "New Balance", color: "Pink" },
  { model: "574", brand: "New Balance", color: "Navy" },
  { model: "574", brand: "New Balance", color: "White" },
];
// Let's start by connecting to the mongo interactive shell:
// mongo
// Next, let's create a new database:
// use productsDatabase
// Cool, now let's populate our products database with products. Let's start by creating a products collection, then using insertMany to insert multiple documents:
db.products.insertMany([
  { model: "515", brand: "New Balance", color: "Green" },
  { model: "515", brand: "New Balance", color: "Yellow" },
  { model: "515", brand: "New Balance", color: "Blue" },
  { model: "515", brand: "New Balance", color: "Red" },
  { model: "574", brand: "New Balance", color: "Blue" },
  { model: "574", brand: "New Balance", color: "Red" },
  { model: "574", brand: "New Balance", color: "Pink" },
  { model: "574", brand: "New Balance", color: "Navy" },
  { model: "574", brand: "New Balance", color: "White" },
]);
// Let's confirm that this insert many operation worked:
// db.products.find({})
// We should see all our products in our database.
// Use the MongoDB lesson to solve for the following:
// Find all New Balance 574 shoes.
// <--- solution goes here !--->
db.products.find({ model: "574" });

// Find all New Balance shoes that are either red or blue.
// <--- solution goes here !--->

db.products.find({ $or: [{ color: "Red" }, { color: "Blue" }] });

// Insert 4 more New Balance shoes:
// <--- solution goes here !--->
db.products.insertMany([
  { model: "516", brand: "New Balance", color: "Gray" },
  { model: "516", brand: "New Balance", color: "Black" },
  { model: "516", brand: "New Balance", color: "LightGray" },
  { model: "516", brand: "New Balance", color: "LightBlue" },
]);
// Update all navy New Balance shoes to Blue:
// <--- solution goes here !--->
db.products.updateMany({ color: "navy" }, { $set: { color: "Blue" } });
// Delete all 515 New Balance shoes.

// <--- solution goes here !--->
db.products.deleteMany({ model: "515" });
// Bonus
// Create a better representation of a "product".
// Maybe a product should have size, and size should be an array of sizes or perhaps a product should have a quantity.
// For example:
// { model: "574", brand: "New Balance", color: "Red", sizes: [7,8,9,10,11], qty: 36 },
// Once you have a better representation of a product, apply the changes to every product in the database.
// Write your queries below:
// <--- solution goes here !--->
db.products.updateMany({}, { $set: { sizes: [7, 9, 8, 10, 11] } });
db.products.updateMany({}, { $set: { qty: 36 } });
