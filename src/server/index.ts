import { createServer, Model } from "miragejs";


import usersData from "./db/users.json";
import recipesData from './db/recipe.json'
import blogsData from './db/blog.json'
import collectionsData from './db/collection.json'
import commentsData from './db/comments.json'
import categoriesData from './db/categories.json'

export function makeServer({ environment = "test" } = {}) {
  //fetch("./db/users.json").then((resposne) => console.log(resposne));
  //.then((json) => console.log(json));

  let server = createServer({
    environment,

    models: {
      users: Model,
      recipes: Model,
      blogs: Model,
      collection: Model,
      comments: Model,
      categories: Model,
    },

    seeds(server) {
      // const json = JSON.parse(fs.readFileSync("./db/users.json", "utf-8"));

      //console.log(json.users);
      server.db.loadData(usersData);
      server.db.loadData(recipesData);
      server.db.loadData(blogsData)
      server.db.loadData(collectionsData);
      server.db.loadData(commentsData);
      server.db.loadData(categoriesData);
    },

    routes() {
      this.namespace = "/api/";

      this.get("/users", (schema, request) => {
        return schema.db.users;
      });
      this.post("/users", (schema, request) => {
        let attrs = JSON.parse(request.requestBody);
        //return schema.user.create(attrs);
        //mutationLocalDB(server);
        return schema.db.users.insert(attrs);
      });
      this.get("/users/:id", (schema, request) => {
        let id = request.params.id
        return schema.db.users.find(id);
      });

      this.get("/recipes", (schema, request) => {  
        let ids = request.queryParams.id
        let offset = request.queryParams.offset
        let limit = request.queryParams.limit
        if(ids) {
          if(typeof ids === 'string' && ids.indexOf(',')) {
            return ids.split(',').map(id => schema.db.recipes.where({id: id})[0])
          }
          return schema.db.recipes.where({id: ids}); 
        } 
        else if (offset && limit) {
          if(typeof offset === 'string' && typeof limit === 'string') {
            let parseOffest = parseInt(offset)
            let parseLimit = parseInt(limit)
            let start = parseOffest * parseLimit
            let end = start + parseLimit
            return schema.db.recipes.slice(start, end)
          }
        }
        return schema.db.recipes;
      });
      this.get("/recipes/:id", (schema, request) => {
        let id = request.params.id
        return schema.db.recipes.find(id);
      });
      this.get("/blogs/:id", (schema, request) => {
        let id = request.params.id
        return schema.db.blogs.find(id);
      });

      
      this.get("/collections", (schema, request) => {
        let name = request.queryParams.name
        if(typeof name === 'string' && name.indexOf(',')) {
          return name.split(',').map(item => schema.db.collections.where({name: item})[0])
        }
        else if (typeof name === 'string') {
          return schema.db.collections.where({name: name});
        }
      });

      this.get("/comments", (schema, request) => {
        let postId = request.queryParams.post
        return schema.db.comments.where({post: postId});
      });

      
      this.get("/categories", (schema, request) => {
        return schema.db.categories;
      });
      this.get("/categories/:id", (schema, request) => {
        let id = request.params.id
        return schema.db.categories.find(id);
      });
      this.get("/popular-categories", (schema, request) => {
        return schema.db.categories.filter((category) => category.isPopularCategories)
      });
    },
  
  });

 // console.log(server.db.dump());

  return server;
}
