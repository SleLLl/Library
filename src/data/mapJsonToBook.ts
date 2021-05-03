import { Book } from '../domain/Book';
import { BookJson } from './BookJson';

const mapJsonToBook = (json: BookJson): Book => ({
  id: json.id,
  name: json.name,
  author: json.author,
  length: json.length,
  released: json.released,
  description: json.description,
  imageUrl: json.imageUrl,
  stars: Math.floor(Math.random() * 4) + 1,
  isTaken: Boolean(Math.round(Math.random())),
});

export default mapJsonToBook;
