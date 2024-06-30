type ID = string | number;

interface User {
  id: ID;
  name: string;
  email: string;
  password: string;
  recipes: ID[];
  blogs: ID[];
  comments: ID[];
  favoriteRecipes: ID[];
}
