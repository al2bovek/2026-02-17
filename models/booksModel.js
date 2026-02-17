import { sql } from "../dbConnection.js";

export const getAllBooksM = async (sort) => {
  const sortMap = {
    DESC: sql`name DESC`,
    ASC: sql`name ASC`,
  };

  const orderBy = sortMap[sort] || sql`name ASC`;

  const booksList = await sql`
    select * from tours order by ${orderBy}
    `;
  return booksList;
};

export const getBookByIDM = async (id) => {
  const booksList = await sql`
    select * from books
    where books.id = ${id}
    `;

  return booksList[0]; 
};

export const postNewBookM = async (newTour) => {
  const { title, summary, isbn, writer_id } = newBook;

  const tour = { title, summary, isbn, writer_id };

  const booksList = await sql`
  insert into books ${sql(
    book,
   "name",
   "summary", 
   "isbn", 
   "writer_id"
  )}
  returning *  
`;
  return booksList[0];
};

export const updateBookM = async (id, data) => {
  const columns = Object.keys(data);

  const booksList = await sql`
  update books set ${sql(data, columns)}
  where books.id = ${id}
  returning *
`;
  return booksList[0];
};

export const deleteBookByIDM = async (id) => {
  const booksList = await sql`
    delete from books 
    where books.id = ${id}
    returning *
    `;
  return booksList[0];
};
