import "@testing-library/jest-dom";
import ShowTasks from "@/app/show-tasks/page";
import { render, screen, act, waitFor } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
/**
 * use queryBy to check if certain document should not be in document.
 * use findBy in case when you want to wait for some text to appear based on state change (modal, text appear)
 * findBy queries work when you expect an element to appear but the change to the DOM might not happen immediately.
 *
 */

let mockTodos = [
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

describe("Show tasks page tests", () => {
  describe("render", () => {
    test("shows loading state initially", async () => {
      render(<ShowTasks />);

      // Verify loading state
      expect(screen.getByText("Loading tasks")).toBeInTheDocument();

      // Wait for fetch to complete
      await waitFor(() => {
        expect(screen.queryByText("Loading tasks")).not.toBeInTheDocument();
      });
    });
    it("should render the show tasks page", async () => {
      render(<ShowTasks />);
      const updateButton = await screen.findByRole("button", {
        name: "Previous",
      });
      expect(updateButton).toBeInTheDocument();
    });
  });

  describe("actions", () => {
    it("should click show text", async () => {
      render(<ShowTasks />);
      const showButton = await screen.findByRole("button", {
        name: "Show text",
      });
      expect(screen.queryByText("Appeared")).not.toBeInTheDocument();
      await userEvent.click(showButton);
      expect(await screen.findByText("Appeared")).toBeInTheDocument();
    });

    it("should show name got from API", async () => {
      render(<ShowTasks />);

      mockTodos.forEach(async (todo) => {
        expect(
          await screen.findByText(new RegExp(todo.title, "i"))
        ).toBeInTheDocument();
      });
    });
  });
});
