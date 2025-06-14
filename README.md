# MongoDB + Mongoose Exercises

This project is a simple learning exercise to practice working with MongoDB Atlas and Mongoose using Node.js.

## 📦 Project Overview

The code connects to a MongoDB Atlas database and defines a `Person` model using a Mongoose schema. It includes multiple functions to interact with the database:

- `createAndSavePerson`
- `createManyPeople`
- `findPeopleByName`
- `findOneByFood`
- `findPersonById`
- `findEditThenSave`
- `findAndUpdate`
- `removeById`
- `removeManyPeople`
- `queryChain`

Each function performs a specific operation on the `Person` collection.

## 🔧 Refactor Note

This project was refactored to comply with the latest version of **Mongoose (v7+)**:

- **Deprecated callbacks removed:**  
  `Model.save()` and `Model.create()` no longer support callbacks. These functions now use **Promises / async-await** instead.
- **Deprecated connection options removed:**  
  The options `useNewUrlParser` and `useUnifiedTopology` were removed from `mongoose.connect()` as they are no longer required or supported in recent versions of the MongoDB Node.js driver.

## 🚀 How to Run

1. Install dependencies:
   ```bash
   npm install
   ```

2. Add your MongoDB Atlas connection URI in the `db.js` file.

3. Use the `index.js` file to run specific database operations by uncommenting the function you want to execute.

4. Run the script:
   ```bash
   node .
   ```

## 📁 Structure

```
.
├── db.js              # Handles MongoDB connection
├── personModel.js     # Mongoose schema for Person
├── master.js          # Contains all logic and functions
├── index.js           # Main runner file – edit this to run specific functions
└── README.md
```

## 👨‍💻 Author

This is part of a training exercise for GoMyCode's backend development track.
