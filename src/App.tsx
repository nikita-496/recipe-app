import { Outlet } from 'react-router-dom';
import { Header } from './components/layouts/header/Header';
import { Footer } from './components/layouts/footer/Footer';

import style from './App.module.css';

function App() {
  /*let [users, setUsers] = useState([]);

  useEffect(() => {
    fetch("/api/users")
      .then((res) => res.json())
      .then((json) => {
        setUsers(json);
        console.log(json);
      })
      .catch((error) => console.log("Error fetching users", error));
  }, []);

  function addUser() {
    const newUser = {
      name: "Nikita",
      email: "nikita@gmail.com",
      password: "n999496990",
      recipes: [1, 2, 3],
      blogs: [3, 5],
      comments: [4],
      favoriteRecipes: [6],
    };
    fetch("/api/users", {
      method: "POST",
      body: JSON.stringify(newUser),
    })
      .then((res) => {
        console.log(res.json());
      })
      .catch((error) => console.log("Error adding user.", error));
  }

  function showUsers() {
    fetch("/api/users")
      .then((res) => res.json())
      .then((json) => {
        setUsers(json);
        console.log(json);
      })
      .catch((error) => console.log("Error fetching users", error));
  }
*/

  return (
    <div className={style['page']}>
      <Header />
      <div className={style['content']}>
        <Outlet />
      </div>
      <Footer />
    </div>
  );
}

export default App;
