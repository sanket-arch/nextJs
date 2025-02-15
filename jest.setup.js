import "@testing-library/jest-dom";
import "whatwg-fetch";
import { server } from "./__mock__/server";

beforeAll(() => {
  server.listen();
});

beforeEach(() => {
  server.resetHandlers();
});

afterAll(() => {
  server.close();
});
