const connectDB = require("./db");
const Person = require("./personModel");

// Connect to MongoDB Atlas
connectDB();

// Create and Save a Single Person
const createAndSavePerson = (done) => {
  const person = new Person({
    name: "Mohamed",
    age: 30,
    favoriteFoods: ["Pizza", "Pasta"],
  });

  person.save((err, data) => {
    if (err) return console.error(err);
    done(null, data);
  });
};

// Create Many People
const arrayOfPeople = [
  { name: "Jawad", age: 25, favoriteFoods: ["Salad", "Pasta"] },
  { name: "Meriem", age: 22, favoriteFoods: ["Burritos", "Tacos"] },
  { name: "Hanane", age: 29, favoriteFoods: ["Chawarma", "Butter Chicken"] },
  { name: "Aissam", age: 31, favoriteFoods: ["Burritos", "Pho"] },
  { name: "Ryad", age: 29, favoriteFoods: ["Burritos", "Pizza"] },
  { name: "Naima", age: 27, favoriteFoods: ["Sushi", "Ramen"] },
  { name: "Walid", age: 34, favoriteFoods: ["Couscous", "Tagine"] },
  { name: "Hassan", age: 40, favoriteFoods: ["Paella", "Gazpacho"] },
  { name: "Maria", age: 21, favoriteFoods: ["Sushi", "Avocado Toast"] },
  { name: "Sabrina", age: 33, favoriteFoods: ["Lasagna", "Risotto"] },
  { name: "Sihem", age: 28, favoriteFoods: ["Sushi", "Tempura"] },
  { name: "Karim", age: 23, favoriteFoods: ["Burgers", "Burritos"] },
  { name: "Lina", age: 26, favoriteFoods: ["Falafel", "Hummus"] },
  { name: "Omar", age: 36, favoriteFoods: ["Kebabs", "Biryani"] },
  { name: "Yasmine", age: 24, favoriteFoods: ["Burritos", "Quiche"] },
  { name: "Nadir", age: 30, favoriteFoods: ["Steak", "Mashed Potatoes"] },
  { name: "Sofia", age: 32, favoriteFoods: ["Pad Thai", "Spring Rolls"] },
  { name: "Tariq", age: 35, favoriteFoods: ["Moussaka", "Greek Salad"] },
  { name: "Lamia", age: 38, favoriteFoods: ["Ratatouille", "Burritos"] },
  { name: "Amine", age: 20, favoriteFoods: ["Tandoori Chicken", "Naan"] },
];

const createManyPeople = (peopleArray, done) => {
  Person.create(peopleArray, (err, data) => {
    if (err) return console.error(err);
    done(null, data);
  });
};

// Find all people by name
const findPeopleByName = (personName, done) => {
  Person.find({ name: personName }, (err, data) => {
    if (err) return console.error(err);
    done(null, data);
  });
};

// Find one person by favorite food
const findOneByFood = (food, done) => {
  Person.findOne({ favoriteFoods: food }, (err, data) => {
    if (err) return console.error(err);
    done(null, data);
  });
};

// Find by ID
const findPersonById = (personId, done) => {
  Person.findById(personId, (err, data) => {
    if (err) return console.error(err);
    done(null, data);
  });
};

// Find by ID, then edit and save
const findEditThenSave = (personId, done) => {
  const foodToAdd = "hamburger";

  Person.findById(personId, (err, person) => {
    if (err) return console.error(err);
    person.favoriteFoods.push(foodToAdd);
    person.save((err, updatedPerson) => {
      if (err) return console.error(err);
      done(null, updatedPerson);
    });
  });
};

// Find and update
const findAndUpdate = (personName, done) => {
  const ageToSet = 20;

  Person.findOneAndUpdate(
    { name: personName },
    { age: ageToSet },
    { new: true },
    (err, updatedDoc) => {
      if (err) return console.error(err);
      done(null, updatedDoc);
    }
  );
};

// Delete by ID
const removeById = (personId, done) => {
  Person.findByIdAndRemove(personId, (err, removedDoc) => {
    if (err) return console.error(err);
    done(null, removedDoc);
  });
};

// Delete many people named 'Mary'
const removeManyPeople = (done) => {
  Person.remove({ name: "Mary" }, (err, result) => {
    if (err) return console.error(err);
    done(null, result);
  });
};

// Chain search query helpers
const queryChain = (done) => {
  Person.find({ favoriteFoods: "burritos" })
    .sort("name")
    .limit(2)
    .select("-age")
    .exec((err, data) => {
      if (err) return console.error(err);
      done(null, data);
    });
};

// Export all functions for test or modular use
module.exports = {
  createAndSavePerson,
  createManyPeople,
  findPeopleByName,
  findOneByFood,
  findPersonById,
  findEditThenSave,
  findAndUpdate,
  removeById,
  removeManyPeople,
  queryChain,
};
