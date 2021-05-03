import { getRequest } from '../data/api';
import { BOOKS } from '../data/api/endpoints';
import { BookJson } from '../data/BookJson';
import mapJsonToBook from '../data/mapJsonToBook';
import { Book } from '../domain/Book';
import { DataResponse } from '../domain/DataResponse';

const getBooks = async (): Promise<DataResponse<Book[] | undefined>> => {
  try {
    const response = await getRequest(`${BOOKS}`);
    const json = response as BookJson[];
    const data = json.map(mapJsonToBook);
    return { ok: true, data };
  } catch (e) {
    return { ok: false, data: undefined };
  }
};

export default getBooks;
