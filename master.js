const connectDB = require("./db");
const Person = require("./personModel");

connectDB();

// Create and Save a Single Person
const createAndSavePerson = async (done) => {
  try {
    const person = new Person({
      name: "Mohamed",
      age: 30,
      favoriteFoods: ["Pizza", "Pasta"],
    });
    const data = await person.save();
    done(null, data);
  } catch (err) {
    console.error(err);
    done(err);
  }
};

const arrayOfPeople = [
  { name: "Jawad", age: 25, favoriteFoods: ["Salad", "Pasta"] },
  { name: "Meriem", age: 22, favoriteFoods: ["Burritos", "Tacos"] },
  { name: "Mary", age: 29, favoriteFoods: ["Chawarma", "Butter Chicken"] },
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
  { name: "Mary", age: 32, favoriteFoods: ["Pad Thai", "Spring Rolls"] },
  { name: "Tariq", age: 35, favoriteFoods: ["Moussaka", "Greek Salad"] },
  { name: "Lamia", age: 38, favoriteFoods: ["Ratatouille", "Burritos"] },
  { name: "Amine", age: 20, favoriteFoods: ["Tandoori Chicken", "Naan"] },
];

const createManyPeople = async (peopleArray, done) => {
  try {
    const data = await Person.create(peopleArray);
    done(null, data);
  } catch (err) {
    console.error(err);
    done(err);
  }
};

const findPeopleByName = async (personName, done) => {
  try {
    const data = await Person.find({ name: personName });
    done(null, data);
  } catch (err) {
    console.error(err);
    done(err);
  }
};

const findOneByFood = async (food, done) => {
  try {
    const data = await Person.findOne({ favoriteFoods: food });
    done(null, data);
  } catch (err) {
    console.error(err);
    done(err);
  }
};

const findPersonById = async (personId, done) => {
  try {
    const data = await Person.findById(personId);
    done(null, data);
  } catch (err) {
    console.error(err);
    done(err);
  }
};

const findEditThenSave = async (personId, done) => {
  const foodToAdd = "hamburger";
  try {
    const person = await Person.findById(personId);
    person.favoriteFoods.push(foodToAdd);
    const updatedPerson = await person.save();
    done(null, updatedPerson);
  } catch (err) {
    console.error(err);
    done(err);
  }
};

const findAndUpdate = async (personName, done) => {
  const ageToSet = 20;
  try {
    const updatedDoc = await Person.findOneAndUpdate(
      { name: personName },
      { age: ageToSet },
      { new: true }
    );
    done(null, updatedDoc);
  } catch (err) {
    console.error(err);
    done(err);
  }
};

const removeById = async (personId, done) => {
  try {
    const removedDoc = await Person.findByIdAndRemove(personId);
    done(null, removedDoc);
  } catch (err) {
    console.error(err);
    done(err);
  }
};

const removeManyPeople = async (done) => {
  try {
    const result = await Person.deleteMany({ name: "Mary" });
    done(null, result);
  } catch (err) {
    console.error(err);
    done(err);
  }
};

const queryChain = async (done) => {
  try {
    const data = await Person.find({ favoriteFoods: "burritos" })
      .sort("name")
      .limit(2)
      .select("-age");
    done(null, data);
  } catch (err) {
    console.error(err);
    done(err);
  }
};

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
  arrayOfPeople,
};
