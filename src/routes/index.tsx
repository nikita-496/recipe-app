import { createBrowserRouter } from 'react-router-dom';
import App from '../App';
import { DesignSystem } from '../components/pages/sendbox/DesignSystem';
import { Home } from '../components/pages/home/Home';
import { Recipe } from '../components/pages/recipe/Recipe';
import { Blog } from '../components/pages/blog/Blog';
import { Profile } from '../components/pages/profile/Profile';
import { CreateRecipe } from '../components/pages/createRecipe/CreateRecipe';
import { Category } from '../components/pages/category/Category';

export const routes = createBrowserRouter([
  {
    path: '/',
    element: <App />,
    children: [
      {
        index: true,
        element: <Home />,
      },
      {
        path: 'recipes/:recipeId',
        element: <Recipe />,
      },
      {
        path: 'create/recipe',
        element: <CreateRecipe />,
      },
      {
        path: 'blogs/:blogId',
        element: <Blog />,
      },
      {
        path: 'category',
        element: <Category />,
      },
      {
        path: 'profile',
        element: <Profile />,
      },
      {
        path: 'sendbox',
        element: <DesignSystem />,
      },
    ],
  },
]);
