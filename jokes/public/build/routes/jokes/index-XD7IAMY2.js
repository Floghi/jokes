import {
  require_db,
  require_session
} from "/build/_shared/chunk-4PNKXX5G.js";
import {
  Link,
  useCatch,
  useLoaderData
} from "/build/_shared/chunk-MPPXUMSF.js";
import {
  React,
  __toESM,
  init_react
} from "/build/_shared/chunk-O6YYFGCX.js";

// browser-route-module:/home/ghilain/projects/jokes/app/routes/jokes/index.tsx?browser
init_react();

// app/routes/jokes/index.tsx
init_react();
var import_db = __toESM(require_db());
var import_session = __toESM(require_session());
function JokesIndexRoute() {
  const data = useLoaderData();
  return /* @__PURE__ */ React.createElement("div", null, /* @__PURE__ */ React.createElement("p", null, "Here's a random joke:"), /* @__PURE__ */ React.createElement("p", null, data.randomJoke.content), /* @__PURE__ */ React.createElement(Link, {
    to: data.randomJoke.id
  }, '"', data.randomJoke.name, '" Permalink'));
}
function CatchBoundary() {
  const caught = useCatch();
  if (caught.status === 404) {
    return /* @__PURE__ */ React.createElement("div", {
      className: "error-container"
    }, /* @__PURE__ */ React.createElement("p", null, "There are no jokes to display.", /* @__PURE__ */ React.createElement("br", null), /* @__PURE__ */ React.createElement("small", null, "Note: this is the deployed version of the jokes app example and because we don't want to show you unmoderated content, we only display jokes you create in this version.")), /* @__PURE__ */ React.createElement(Link, {
      to: "new"
    }, "Add your own"));
  }
  throw new Error(`Unexpected caught response with status: ${caught.status}`);
}
function ErrorBoundary({ error }) {
  console.error(error);
  return /* @__PURE__ */ React.createElement("div", null, "I did a whoopsies.");
}
export {
  CatchBoundary,
  ErrorBoundary,
  JokesIndexRoute as default
};
//# sourceMappingURL=/build/routes/jokes/index-XD7IAMY2.js.map
