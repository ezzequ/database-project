const mongoose = require('mongoose');

main().catch(err => console.log(err));

async function main() {
  await mongoose.connect('mongodb://localhost:27017/bookCircle');

  const bookSchema = new mongoose.Schema({
    title: String,
    author: String,
    description: String,
    review: String
  })

  const Book = mongoose.model('Book', bookSchema);

  const harryPotter = new Book({
    title: 'Harry Potter and the Goblet of Fireeee',
    author: 'J.K. Rowling',
    description: 'This is the fourth novel in the Harry Potter series. It follows Harry Potter, a wizard in his fourth year at Hogwarts School ofWitchcraft and Wizardry, and the mystery surrounding the entry of Harrys name into the Triwizard Tournament, in which he is forced to compete.',
    review: 'The book is imaginative, funny, frightening and, of course, magical! What makes them so successful is that they combine action, fantasy and friendship.'
  });

  await harryPotter.save();
  console.log(harryPotter.title, harryPotter.author)

  const books = await Book.find()
  console.log(books)
  }