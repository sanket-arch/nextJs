import { http, HttpResponse } from "msw";

const allTodos = [
  {
    userId: 1,
    id: 1,
    title: "delectus aut autem",
    completed: false,
  },
  {
    userId: 1,
    id: 2,
    title: "quis ut nam facilis et officia qui",
    completed: false,
  },
  {
    userId: 1,
    id: 3,
    title: "fugiat veniam minus",
    completed: false,
  },
  {
    userId: 1,
    id: 4,
    title: "et porro tempora",
    completed: true,
  },
  {
    userId: 1,
    id: 5,
    title: "laboriosam mollitia et enim quasi adipisci quia provident illum",
    completed: false,
  },
];

export const handlers = [
  http.get("https://jsonplaceholder.typicode.com/todos", () => {
    return HttpResponse.json(allTodos);
  }),
  http.post(
    "https://jsonplaceholder.typicode.com/todo",
    async ({ request }) => {
      // Read the intercepted request body as JSON.
      const newTodo = await request.json();
      // Push the new post to the map of all posts.
      allTodos.push(newTodo);

      return HttpResponse.json(newPost, { status: 201 });
    },
    http.delete("/todos/:id", ({ params }) => {
      // All request path params are provided in the "params"
      // argument of the response resolver.
      const { id } = params;

      // Let's attempt to grab the post by its ID.
      const deletedPost = allTodos.find((todo) => todo.id == id) || null;
      // Respond with a "404 Not Found" response if the given
      // post ID does not exist.
      if (!deletedPost) {
        return new HttpResponse(null, { status: 404 });
      }

      // Delete the post from the "allPosts" map.
      allPosts.delete(id);

      // Respond with a "200 OK" response and the deleted post.
      return HttpResponse.json(deletedPost);
    })

  ),
];
