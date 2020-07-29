// __tests__/login.js
// again, these first two imports are something you'd normally handle in
// your testing framework configuration rather than importing them in every file.
import "@testing-library/jest-dom";
import React from "react";
import { BrowserRouter as Router } from "react-router-dom";
import { testdata } from "../../assets/test/data";
import { rest } from "msw";
import { setupServer } from "msw/node";
// import testing utilities
import {
  render,
  fireEvent,
  screen,
  waitForElement,
} from "@testing-library/react";
import Daily from ".";
import { createStore } from "redux";
import { Provider } from "react-redux";
import allReducer from "../../reducers";
const store = createStore(allReducer);
const server = setupServer(
  rest.get("/weather/:city/:country", (req, res, ctx) => {
    return res(ctx.json(testdata.data ));
  })
);

beforeAll(() => server.listen());
afterEach(() => server.resetHandlers());
afterAll(() => server.close());
global.document.createRange = () => ({
  setStart: () => {},
  setEnd: () => {},
  commonAncestorContainer: {
    nodeName: "BODY",
    ownerDocument: document,
  },
});
test("weather fetches correctly", async () => {
  render(
    <Provider store={store}>
      <Router>
        <Daily></Daily>
      </Router>
    </Provider>
  );
  // fill out the form
  fireEvent.change(screen.getByLabelText(/Enter City/i), {
    target: { value: "Toronto" },
  });
  fireEvent.click(screen.getByTestId("country"));
  var i;
  for (i = 0; i <= 36; i++) {
    fireEvent.keyDown(screen.getByTestId("country"), {
      key: "ArrowDown",
      code: "ArrowDown",
    });
  }
  fireEvent.keyDown(screen.getByTestId("country"), {
    key: "Enter",
    code: "Enter",
  });
  fireEvent.click(screen.getByText(/Check Weather/i));
  const title = await screen.findByTestId('title')
  expect(title).toHaveTextContent(/Toronto, ON, Canada/i);
});

test("weather fetches incorrectly", async () => {
  server.use(
    rest.get('/weather/:city/:country', (req, res, ctx) => {
      return res(ctx.status(500))
    })
  )
  render(
    <Provider store={store}>
      <Router>
        <Daily></Daily>
      </Router>
    </Provider>
  );
  // fill out the form
  fireEvent.change(screen.getByLabelText(/Enter City/i), {
    target: { value: "Toronto" },
  });
  fireEvent.click(screen.getByTestId("country"));
  var i;
  for (i = 0; i <= 36; i++) {
    fireEvent.keyDown(screen.getByTestId("country"), {
      key: "ArrowDown",
      code: "ArrowDown",
    });
  }
  fireEvent.keyDown(screen.getByTestId("country"), {
    key: "Enter",
    code: "Enter",
  });
  fireEvent.click(screen.getByText(/Check Weather/i));
  const title = await screen.findByText("There was an error communicating to the server")
  expect(title).toHaveTextContent(/There was an error communicating to the server/i);
});
