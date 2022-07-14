var __create = Object.create;
var __defProp = Object.defineProperty, __defProps = Object.defineProperties, __getOwnPropDesc = Object.getOwnPropertyDescriptor, __getOwnPropDescs = Object.getOwnPropertyDescriptors, __getOwnPropNames = Object.getOwnPropertyNames, __getOwnPropSymbols = Object.getOwnPropertySymbols, __getProtoOf = Object.getPrototypeOf, __hasOwnProp = Object.prototype.hasOwnProperty, __propIsEnum = Object.prototype.propertyIsEnumerable;
var __defNormalProp = (obj, key, value) => key in obj ? __defProp(obj, key, { enumerable: !0, configurable: !0, writable: !0, value }) : obj[key] = value, __spreadValues = (a, b) => {
  for (var prop in b || (b = {}))
    __hasOwnProp.call(b, prop) && __defNormalProp(a, prop, b[prop]);
  if (__getOwnPropSymbols)
    for (var prop of __getOwnPropSymbols(b))
      __propIsEnum.call(b, prop) && __defNormalProp(a, prop, b[prop]);
  return a;
}, __spreadProps = (a, b) => __defProps(a, __getOwnPropDescs(b)), __markAsModule = (target) => __defProp(target, "__esModule", { value: !0 });
var __export = (target, all) => {
  for (var name in all)
    __defProp(target, name, { get: all[name], enumerable: !0 });
}, __reExport = (target, module2, copyDefault, desc) => {
  if (module2 && typeof module2 == "object" || typeof module2 == "function")
    for (let key of __getOwnPropNames(module2))
      !__hasOwnProp.call(target, key) && (copyDefault || key !== "default") && __defProp(target, key, { get: () => module2[key], enumerable: !(desc = __getOwnPropDesc(module2, key)) || desc.enumerable });
  return target;
}, __toESM = (module2, isNodeMode) => __reExport(__markAsModule(__defProp(module2 != null ? __create(__getProtoOf(module2)) : {}, "default", !isNodeMode && module2 && module2.__esModule ? { get: () => module2.default, enumerable: !0 } : { value: module2, enumerable: !0 })), module2), __toCommonJS = /* @__PURE__ */ ((cache) => (module2, temp) => cache && cache.get(module2) || (temp = __reExport(__markAsModule({}), module2, 1), cache && cache.set(module2, temp), temp))(typeof WeakMap != "undefined" ? /* @__PURE__ */ new WeakMap() : 0);

// <stdin>
var stdin_exports = {};
__export(stdin_exports, {
  assets: () => assets_manifest_default,
  entry: () => entry,
  routes: () => routes
});

// node_modules/@remix-run/dev/dist/compiler/shims/react.ts
var React = __toESM(require("react"));

// app/entry.server.tsx
var entry_server_exports = {};
__export(entry_server_exports, {
  default: () => handleRequest
});
var import_react = require("@remix-run/react"), import_server = require("react-dom/server");
function handleRequest(request, responseStatusCode, responseHeaders, remixContext) {
  let markup = (0, import_server.renderToString)(/* @__PURE__ */ React.createElement(import_react.RemixServer, {
    context: remixContext,
    url: request.url
  }));
  return responseHeaders.set("Content-Type", "text/html"), new Response("<!DOCTYPE html>" + markup, {
    status: responseStatusCode,
    headers: responseHeaders
  });
}

// route:/home/ghilain/projects/jokes/app/root.tsx
var root_exports = {};
__export(root_exports, {
  CatchBoundary: () => CatchBoundary,
  ErrorBoundary: () => ErrorBoundary,
  default: () => App,
  links: () => links,
  meta: () => meta
});
var import_react2 = require("@remix-run/react");

// app/styles/global.css
var global_default = "/build/_assets/global-YOJIA7J5.css";

// app/styles/global-medium.css
var global_medium_default = "/build/_assets/global-medium-DRHJR3JT.css";

// app/styles/global-large.css
var global_large_default = "/build/_assets/global-large-NKTQAWDZ.css";

// route:/home/ghilain/projects/jokes/app/root.tsx
var links = () => [
  { rel: "stylesheet", href: global_default },
  {
    rel: "stylesheet",
    href: global_medium_default,
    media: "print, (min-width: 640px)"
  },
  {
    rel: "stylesheet",
    href: global_large_default,
    media: "screen and (min-width: 1024px)"
  }
], meta = () => {
  let description = "Learn Remix and laugh at the same time!";
  return {
    charset: "utf-8",
    description,
    keywords: "Remix,jokes",
    "twitter:image": "https://remix-jokes.lol/social.png",
    "twitter:card": "summary_large_image",
    "twitter:creator": "@remix_run",
    "twitter:site": "@remix_run",
    "twitter:title": "Remix Jokes",
    "twitter:description": description
  };
};
function Document({
  children,
  title
}) {
  return /* @__PURE__ */ React.createElement("html", {
    lang: "en"
  }, /* @__PURE__ */ React.createElement("head", null, /* @__PURE__ */ React.createElement(import_react2.Meta, null), title ? /* @__PURE__ */ React.createElement("title", null, title) : null, /* @__PURE__ */ React.createElement(import_react2.Links, null)), /* @__PURE__ */ React.createElement("body", null, children, /* @__PURE__ */ React.createElement(import_react2.Scripts, null), /* @__PURE__ */ React.createElement(import_react2.LiveReload, null)));
}
function App() {
  return /* @__PURE__ */ React.createElement(Document, null, /* @__PURE__ */ React.createElement(import_react2.Outlet, null));
}
function CatchBoundary() {
  let caught = (0, import_react2.useCatch)();
  return /* @__PURE__ */ React.createElement(Document, {
    title: `${caught.status} ${caught.statusText}`
  }, /* @__PURE__ */ React.createElement("div", {
    className: "error-container"
  }, /* @__PURE__ */ React.createElement("h1", null, caught.status, " ", caught.statusText)));
}
function ErrorBoundary({ error }) {
  return console.error(error), /* @__PURE__ */ React.createElement(Document, {
    title: "Uh-oh!"
  }, /* @__PURE__ */ React.createElement("div", {
    className: "error-container"
  }, /* @__PURE__ */ React.createElement("h1", null, "App Error"), /* @__PURE__ */ React.createElement("pre", null, error.message)));
}

// route:/home/ghilain/projects/jokes/app/routes/jokes[.]rss.tsx
var jokes_rss_exports = {};
__export(jokes_rss_exports, {
  loader: () => loader
});

// app/utils/db.server.ts
var import_client = require("@prisma/client"), db;
global.__db || (global.__db = new import_client.PrismaClient()), db = global.__db;

// route:/home/ghilain/projects/jokes/app/routes/jokes[.]rss.tsx
var loader = async ({ request }) => {
  let jokes = await db.joke.findMany({
    take: 100,
    orderBy: { createdAt: "desc" },
    include: { jokester: { select: { username: !0 } } }
  }), host = request.headers.get("X-Forwarded-Host") ?? request.headers.get("host");
  if (!host)
    throw new Error("Could not determine domain URL.");
  let jokesUrl = `${`${host.includes("localhost") ? "http" : "https"}://${host}`}/jokes`, rssString = `
    <rss xmlns:blogChannel="${jokesUrl}" version="2.0">
      <channel>
        <title>Remix Jokes</title>
        <link>${jokesUrl}</link>
        <description>Some funny jokes</description>
        <language>en-us</language>
        <generator>Kody the Koala</generator>
        <ttl>40</ttl>
        ${jokes.map((joke) => `
            <item>
              <title>${joke.name}</title>
              <description>A funny joke called ${joke.name}</description>
              <author>${joke.jokester.username}</author>
              <pubDate>${joke.createdAt}</pubDate>
              <link>${jokesUrl}/${joke.id}</link>
              <guid>${jokesUrl}/${joke.id}</guid>
            </item>
          `.trim()).join(`
`)}
      </channel>
    </rss>
  `.trim();
  return new Response(rssString, {
    headers: {
      "Cache-Control": `public, max-age=${60 * 10}, s-maxage=${60 * 60 * 24}`,
      "Content-Type": "application/xml",
      "Content-Length": String(Buffer.byteLength(rssString))
    }
  });
};

// route:/home/ghilain/projects/jokes/app/routes/logout.tsx
var logout_exports = {};
__export(logout_exports, {
  action: () => action,
  loader: () => loader2
});
var import_node2 = require("@remix-run/node");

// app/utils/session.server.ts
var import_node = require("@remix-run/node"), import_bcryptjs = __toESM(require("bcryptjs"));
async function register({ username, password }) {
  let passwordHash = await import_bcryptjs.default.hash(password, 10);
  return { id: (await db.user.create({
    data: { username, passwordHash }
  })).id, username };
}
async function login({ username, password }) {
  let user = await db.user.findUnique({
    where: { username }
  });
  return !user || !await import_bcryptjs.default.compare(password, user.passwordHash) ? null : { id: user.id, username };
}
var sessionSecret = process.env.SESSION_SECRET;
if (!sessionSecret)
  throw new Error("SESSION_SECRET must be set");
var storage = (0, import_node.createCookieSessionStorage)({
  cookie: {
    name: "RJ_session",
    secure: !1,
    secrets: [sessionSecret],
    sameSite: "lax",
    path: "/",
    maxAge: 60 * 60 * 24 * 30,
    httpOnly: !0
  }
});
function getUserSession(request) {
  return storage.getSession(request.headers.get("Cookie"));
}
async function getUserId(request) {
  let userId = (await getUserSession(request)).get("userId");
  return !userId || typeof userId != "string" ? null : userId;
}
async function requireUserId(request, redirectTo = new URL(request.url).pathname) {
  let userId = await getUserId(request);
  if (!userId || typeof userId != "string") {
    let searchParams = new URLSearchParams([["redirectTo", redirectTo]]);
    throw (0, import_node.redirect)(`/login?${searchParams}`);
  }
  return userId;
}
async function getUser(request) {
  let userId = await getUserId(request);
  if (typeof userId != "string")
    return null;
  try {
    return await db.user.findUnique({
      where: { id: userId },
      select: { id: !0, username: !0 }
    });
  } catch {
    throw logout(request);
  }
}
async function logout(request) {
  let session = await getUserSession(request);
  return (0, import_node.redirect)("/login", {
    headers: {
      "Set-Cookie": await storage.destroySession(session)
    }
  });
}
async function createUserSession(userId, redirectTo) {
  let session = await storage.getSession();
  return session.set("userId", userId), (0, import_node.redirect)(redirectTo, {
    headers: {
      "Set-Cookie": await storage.commitSession(session)
    }
  });
}

// route:/home/ghilain/projects/jokes/app/routes/logout.tsx
var action = async ({ request }) => logout(request), loader2 = async () => (0, import_node2.redirect)("/");

// route:/home/ghilain/projects/jokes/app/routes/index.tsx
var routes_exports = {};
__export(routes_exports, {
  default: () => Index,
  links: () => links2,
  meta: () => meta2
});
var import_react3 = require("@remix-run/react");

// app/styles/index.css
var styles_default = "/build/_assets/index-LQJHUV2J.css";

// route:/home/ghilain/projects/jokes/app/routes/index.tsx
var meta2 = () => ({
  title: "Remix: It's funny!",
  description: "Remix jokes app. Learn Remix and laugh at the same time!"
}), links2 = () => [{ rel: "stylesheet", href: styles_default }];
function Index() {
  return /* @__PURE__ */ React.createElement("div", {
    className: "container"
  }, /* @__PURE__ */ React.createElement("div", {
    className: "content"
  }, /* @__PURE__ */ React.createElement("h1", null, "Remix ", /* @__PURE__ */ React.createElement("span", null, "Jokes!")), /* @__PURE__ */ React.createElement("nav", null, /* @__PURE__ */ React.createElement("ul", null, /* @__PURE__ */ React.createElement("li", null, /* @__PURE__ */ React.createElement(import_react3.Link, {
    to: "jokes"
  }, "Read Jokes")), /* @__PURE__ */ React.createElement("li", null, /* @__PURE__ */ React.createElement(import_react3.Link, {
    reloadDocument: !0,
    to: "/jokes.rss"
  }, "RSS"))))));
}

// route:/home/ghilain/projects/jokes/app/routes/jokes.tsx
var jokes_exports = {};
__export(jokes_exports, {
  default: () => JokesScreen,
  links: () => links3,
  loader: () => loader3
});
var import_node3 = require("@remix-run/node"), import_react4 = require("@remix-run/react");

// app/styles/jokes.css
var jokes_default = "/build/_assets/jokes-MGLBGUHK.css";

// route:/home/ghilain/projects/jokes/app/routes/jokes.tsx
var loader3 = async ({ request }) => {
  let user = await getUser(request), data = {
    jokeListItems: user ? await db.joke.findMany({
      take: 5,
      select: { id: !0, name: !0 },
      where: { jokesterId: user.id },
      orderBy: { createdAt: "desc" }
    }) : [],
    user
  };
  return (0, import_node3.json)(data);
}, links3 = () => [{ rel: "stylesheet", href: jokes_default }];
function JokesScreen() {
  let data = (0, import_react4.useLoaderData)();
  return /* @__PURE__ */ React.createElement("div", {
    className: "jokes-layout"
  }, /* @__PURE__ */ React.createElement("header", {
    className: "jokes-header"
  }, /* @__PURE__ */ React.createElement("div", {
    className: "container"
  }, /* @__PURE__ */ React.createElement("h1", {
    className: "home-link"
  }, /* @__PURE__ */ React.createElement(import_react4.Link, {
    to: "/",
    title: "Remix Jokes",
    "aria-label": "Remix Jokes"
  }, /* @__PURE__ */ React.createElement("span", {
    className: "logo"
  }, "\u{1F92A}"), /* @__PURE__ */ React.createElement("span", {
    className: "logo-medium"
  }, "J\u{1F92A}KES"))), data.user ? /* @__PURE__ */ React.createElement("div", {
    className: "user-info"
  }, /* @__PURE__ */ React.createElement("span", null, `Hi ${data.user.username}`), /* @__PURE__ */ React.createElement(import_react4.Form, {
    action: "/logout",
    method: "post"
  }, /* @__PURE__ */ React.createElement("button", {
    type: "submit",
    className: "button"
  }, "Logout"))) : /* @__PURE__ */ React.createElement(import_react4.Link, {
    to: "/login"
  }, "Login"))), /* @__PURE__ */ React.createElement("main", {
    className: "jokes-main"
  }, /* @__PURE__ */ React.createElement("div", {
    className: "container"
  }, /* @__PURE__ */ React.createElement("div", {
    className: "jokes-list"
  }, data.jokeListItems.length ? /* @__PURE__ */ React.createElement(React.Fragment, null, /* @__PURE__ */ React.createElement(import_react4.Link, {
    to: "."
  }, "Get a random joke"), /* @__PURE__ */ React.createElement("p", null, "Here are a few more jokes to check out:"), /* @__PURE__ */ React.createElement("ul", null, data.jokeListItems.map(({ id, name }) => /* @__PURE__ */ React.createElement("li", {
    key: id
  }, /* @__PURE__ */ React.createElement(import_react4.Link, {
    to: id,
    prefetch: "intent"
  }, name)))), /* @__PURE__ */ React.createElement(import_react4.Link, {
    to: "new",
    className: "button"
  }, "Add your own")) : null), /* @__PURE__ */ React.createElement("div", {
    className: "jokes-outlet"
  }, /* @__PURE__ */ React.createElement(import_react4.Outlet, null)))), /* @__PURE__ */ React.createElement("footer", {
    className: "jokes-footer"
  }, /* @__PURE__ */ React.createElement("div", {
    className: "container"
  }, /* @__PURE__ */ React.createElement(import_react4.Link, {
    reloadDocument: !0,
    to: "/jokes.rss"
  }, "RSS"))));
}

// route:/home/ghilain/projects/jokes/app/routes/jokes/$jokeId.tsx
var jokeId_exports = {};
__export(jokeId_exports, {
  CatchBoundary: () => CatchBoundary2,
  ErrorBoundary: () => ErrorBoundary2,
  action: () => action2,
  default: () => JokeRoute,
  loader: () => loader4,
  meta: () => meta3
});
var import_node4 = require("@remix-run/node"), import_react6 = require("@remix-run/react");

// app/components/joke.tsx
var import_react5 = require("@remix-run/react");
function JokeDisplay({
  joke,
  isOwner,
  canDelete = !0
}) {
  return /* @__PURE__ */ React.createElement("div", null, /* @__PURE__ */ React.createElement("p", null, "Here's your hilarious joke:"), /* @__PURE__ */ React.createElement("p", null, joke.content), /* @__PURE__ */ React.createElement(import_react5.Link, {
    to: "."
  }, joke.name, " Permalink"), isOwner ? /* @__PURE__ */ React.createElement(import_react5.Form, {
    method: "post"
  }, /* @__PURE__ */ React.createElement("input", {
    type: "hidden",
    name: "_method",
    value: "delete"
  }), /* @__PURE__ */ React.createElement("button", {
    type: "submit",
    className: "button",
    disabled: !canDelete
  }, "Delete")) : null);
}

// route:/home/ghilain/projects/jokes/app/routes/jokes/$jokeId.tsx
var meta3 = ({
  data
}) => data ? {
  title: `"${data.joke.name}" joke`,
  description: `Enjoy the "${data.joke.name}" joke and much more`
} : {
  title: "No joke",
  description: "No joke found"
}, loader4 = async ({ request, params }) => {
  let userId = await getUserId(request), joke = await db.joke.findUnique({ where: { id: params.jokeId } });
  if (!joke)
    throw new Response("What a joke! Not found.", { status: 404 });
  let data = { joke, isOwner: userId === joke.jokesterId };
  return (0, import_node4.json)(data);
}, action2 = async ({ request, params }) => {
  let form = await request.formData();
  if (form.get("_method") !== "delete")
    throw new Response(`The _method ${form.get("_method")} is not supported`, {
      status: 400
    });
  let userId = await requireUserId(request), joke = await db.joke.findUnique({
    where: { id: params.jokeId }
  });
  if (!joke)
    throw new Response("Can't delete what does not exist", { status: 404 });
  if (joke.jokesterId !== userId)
    throw new Response("Pssh, nice try. That's not your joke", {
      status: 401
    });
  return await db.joke.delete({ where: { id: params.jokeId } }), (0, import_node4.redirect)("/jokes");
};
function JokeRoute() {
  let data = (0, import_react6.useLoaderData)();
  return /* @__PURE__ */ React.createElement(JokeDisplay, {
    joke: data.joke,
    isOwner: data.isOwner
  });
}
function CatchBoundary2() {
  let caught = (0, import_react6.useCatch)(), params = (0, import_react6.useParams)();
  switch (caught.status) {
    case 400:
      return /* @__PURE__ */ React.createElement("div", {
        className: "error-container"
      }, "What you're trying to do is not allowed.");
    case 404:
      return /* @__PURE__ */ React.createElement("div", {
        className: "error-container"
      }, "Huh? What the heck is ", params.jokeId, "?");
    case 401:
      return /* @__PURE__ */ React.createElement("div", {
        className: "error-container"
      }, "Sorry, but ", params.jokeId, " is not your joke.");
    default:
      throw new Error(`Unhandled error: ${caught.status}`);
  }
}
function ErrorBoundary2({ error }) {
  console.error(error);
  let { jokeId } = (0, import_react6.useParams)();
  return /* @__PURE__ */ React.createElement("div", {
    className: "error-container"
  }, "There was an error loading joke by the id ", jokeId, ". Sorry.");
}

// route:/home/ghilain/projects/jokes/app/routes/jokes/index.tsx
var jokes_exports2 = {};
__export(jokes_exports2, {
  CatchBoundary: () => CatchBoundary3,
  ErrorBoundary: () => ErrorBoundary3,
  default: () => JokesIndexRoute,
  loader: () => loader5
});
var import_node5 = require("@remix-run/node"), import_react7 = require("@remix-run/react");
var loader5 = async ({ request }) => {
  let userId = await getUserId(request), count = await db.joke.count(), randomRowNumber = Math.floor(Math.random() * count), [randomJoke] = userId ? await db.joke.findMany({
    take: 1,
    skip: randomRowNumber,
    where: {
      jokesterId: userId
    }
  }) : [];
  if (!randomJoke)
    throw new Response("No jokes to be found!", { status: 404 });
  return (0, import_node5.json)({ randomJoke });
};
function JokesIndexRoute() {
  let data = (0, import_react7.useLoaderData)();
  return /* @__PURE__ */ React.createElement("div", null, /* @__PURE__ */ React.createElement("p", null, "Here's a random joke:"), /* @__PURE__ */ React.createElement("p", null, data.randomJoke.content), /* @__PURE__ */ React.createElement(import_react7.Link, {
    to: data.randomJoke.id
  }, '"', data.randomJoke.name, '" Permalink'));
}
function CatchBoundary3() {
  let caught = (0, import_react7.useCatch)();
  if (caught.status === 404)
    return /* @__PURE__ */ React.createElement("div", {
      className: "error-container"
    }, /* @__PURE__ */ React.createElement("p", null, "There are no jokes to display.", /* @__PURE__ */ React.createElement("br", null), /* @__PURE__ */ React.createElement("small", null, "Note: this is the deployed version of the jokes app example and because we don't want to show you unmoderated content, we only display jokes you create in this version.")), /* @__PURE__ */ React.createElement(import_react7.Link, {
      to: "new"
    }, "Add your own"));
  throw new Error(`Unexpected caught response with status: ${caught.status}`);
}
function ErrorBoundary3({ error }) {
  return console.error(error), /* @__PURE__ */ React.createElement("div", null, "I did a whoopsies.");
}

// route:/home/ghilain/projects/jokes/app/routes/jokes/new.tsx
var new_exports = {};
__export(new_exports, {
  CatchBoundary: () => CatchBoundary4,
  ErrorBoundary: () => ErrorBoundary4,
  action: () => action3,
  default: () => NewJokeRoute,
  loader: () => loader6
});
var import_node6 = require("@remix-run/node"), import_react8 = require("@remix-run/react");
var loader6 = async ({ request }) => {
  if (!await getUserId(request))
    throw new Response("Unauthorized", { status: 401 });
  return (0, import_node6.json)({});
};
function validateJokeContent(content) {
  if (content.length < 10)
    return "That joke is too short";
}
function validateJokeName(name) {
  if (name.length < 2)
    return "That joke's name is too short";
}
var badRequest = (data) => (0, import_node6.json)(data, { status: 400 }), action3 = async ({ request }) => {
  let userId = await requireUserId(request), form = await request.formData(), name = form.get("name"), content = form.get("content");
  if (typeof name != "string" || typeof content != "string")
    return badRequest({ formError: "Form not submitted correctly." });
  let fieldErrors = {
    name: validateJokeName(name),
    content: validateJokeContent(content)
  }, fields = { name, content };
  if (Object.values(fieldErrors).some(Boolean))
    return badRequest({ fieldErrors, fields });
  let joke = await db.joke.create({
    data: __spreadProps(__spreadValues({}, fields), { jokesterId: userId })
  });
  return (0, import_node6.redirect)(`/jokes/${joke.id}?redirectTo=/jokes/new`);
};
function NewJokeRoute() {
  var _a, _b, _c, _d, _e, _f, _g, _h;
  let actionData = (0, import_react8.useActionData)(), transition = (0, import_react8.useTransition)();
  if (transition.submission) {
    let name = transition.submission.formData.get("name"), content = transition.submission.formData.get("content");
    if (typeof name == "string" && typeof content == "string" && !validateJokeContent(content) && !validateJokeName(name))
      return /* @__PURE__ */ React.createElement(JokeDisplay, {
        joke: { name, content },
        isOwner: !0,
        canDelete: !1
      });
  }
  return /* @__PURE__ */ React.createElement("div", null, /* @__PURE__ */ React.createElement("p", null, "Add your own hilarious joke"), /* @__PURE__ */ React.createElement(import_react8.Form, {
    method: "post"
  }, /* @__PURE__ */ React.createElement("div", null, /* @__PURE__ */ React.createElement("label", null, "Name:", " ", /* @__PURE__ */ React.createElement("input", {
    type: "text",
    defaultValue: (_a = actionData == null ? void 0 : actionData.fields) == null ? void 0 : _a.name,
    name: "name",
    "aria-invalid": Boolean((_b = actionData == null ? void 0 : actionData.fieldErrors) == null ? void 0 : _b.name),
    "aria-errormessage": ((_c = actionData == null ? void 0 : actionData.fieldErrors) == null ? void 0 : _c.name) ? "name-error" : void 0
  })), ((_d = actionData == null ? void 0 : actionData.fieldErrors) == null ? void 0 : _d.name) ? /* @__PURE__ */ React.createElement("p", {
    className: "form-validation-error",
    role: "alert",
    id: "name-error"
  }, actionData.fieldErrors.name) : null), /* @__PURE__ */ React.createElement("div", null, /* @__PURE__ */ React.createElement("label", null, "Content:", " ", /* @__PURE__ */ React.createElement("textarea", {
    defaultValue: (_e = actionData == null ? void 0 : actionData.fields) == null ? void 0 : _e.content,
    name: "content",
    "aria-invalid": Boolean((_f = actionData == null ? void 0 : actionData.fieldErrors) == null ? void 0 : _f.content),
    "aria-errormessage": ((_g = actionData == null ? void 0 : actionData.fieldErrors) == null ? void 0 : _g.content) ? "content-error" : void 0
  })), ((_h = actionData == null ? void 0 : actionData.fieldErrors) == null ? void 0 : _h.content) ? /* @__PURE__ */ React.createElement("p", {
    className: "form-validation-error",
    role: "alert",
    id: "content-error"
  }, actionData.fieldErrors.content) : null), /* @__PURE__ */ React.createElement("div", null, (actionData == null ? void 0 : actionData.formError) ? /* @__PURE__ */ React.createElement("p", {
    className: "form-validation-error",
    role: "alert"
  }, actionData.formError) : null, /* @__PURE__ */ React.createElement("button", {
    type: "submit",
    className: "button"
  }, "Add"))));
}
function CatchBoundary4() {
  let caught = (0, import_react8.useCatch)();
  if (caught.status === 401)
    return /* @__PURE__ */ React.createElement("div", {
      className: "error-container"
    }, /* @__PURE__ */ React.createElement("p", null, "You must be logged in to create a joke."), /* @__PURE__ */ React.createElement(import_react8.Link, {
      to: "/login?redirectTo=/jokes/new"
    }, "Login"));
  throw new Error(`Unexpected caught response with status: ${caught.status}`);
}
function ErrorBoundary4({ error }) {
  return console.error(error), /* @__PURE__ */ React.createElement("div", null, "Something unexpected went wrong. Sorry about that.");
}

// route:/home/ghilain/projects/jokes/app/routes/login.tsx
var login_exports = {};
__export(login_exports, {
  action: () => action4,
  default: () => Login,
  links: () => links4,
  meta: () => meta4
});
var import_node7 = require("@remix-run/node"), import_react9 = require("@remix-run/react");

// app/styles/login.css
var login_default = "/build/_assets/login-TB27ASMI.css";

// route:/home/ghilain/projects/jokes/app/routes/login.tsx
var meta4 = () => ({
  title: "Remix Jokes | Login",
  description: "Login to submit your own jokes to Remix Jokes!"
}), links4 = () => [{ rel: "stylesheet", href: login_default }];
function validateUsername(username) {
  if (typeof username != "string" || username.length < 3)
    return "Usernames must be at least 3 characters long";
}
function validatePassword(password) {
  if (typeof password != "string" || password.length < 6)
    return "Passwords must be at least 6 characters long";
}
function validateUrl(url) {
  return ["/jokes", "/", "https://remix.run"].includes(url) ? url : "/jokes";
}
var badRequest2 = (data) => (0, import_node7.json)(data, { status: 400 }), action4 = async ({ request }) => {
  let form = await request.formData(), loginType = form.get("loginType"), username = form.get("username"), password = form.get("password"), redirectTo = validateUrl(form.get("redirectTo") || "/jokes");
  if (typeof loginType != "string" || typeof username != "string" || typeof password != "string" || typeof redirectTo != "string")
    return badRequest2({ formError: "Form not submitted correctly." });
  let fields = { loginType, username, password }, fieldErrors = {
    username: validateUsername(username),
    password: validatePassword(password)
  };
  if (Object.values(fieldErrors).some(Boolean))
    return badRequest2({ fieldErrors, fields });
  switch (loginType) {
    case "login": {
      let user = await login({ username, password });
      return user ? createUserSession(user.id, redirectTo) : badRequest2({
        fields,
        formError: "Username/Password combination is incorrect"
      });
    }
    case "register": {
      if (await db.user.findFirst({ where: { username } }))
        return badRequest2({
          fields,
          formError: `User with username ${username} already exists`
        });
      let user = await register({ username, password });
      return user ? createUserSession(user.id, redirectTo) : badRequest2({
        fields,
        formError: "Something went wrong trying to create a new user."
      });
    }
    default:
      return badRequest2({ fields, formError: "Login type invalid" });
  }
};
function Login() {
  var _a, _b, _c, _d, _e, _f, _g, _h, _i, _j, _k;
  let actionData = (0, import_react9.useActionData)(), [searchParams] = (0, import_react9.useSearchParams)();
  return /* @__PURE__ */ React.createElement("div", {
    className: "container"
  }, /* @__PURE__ */ React.createElement("div", {
    className: "content",
    "data-light": ""
  }, /* @__PURE__ */ React.createElement("h1", null, "Login"), /* @__PURE__ */ React.createElement(import_react9.Form, {
    method: "post"
  }, /* @__PURE__ */ React.createElement("input", {
    type: "hidden",
    name: "redirectTo",
    value: searchParams.get("redirectTo") ?? void 0
  }), /* @__PURE__ */ React.createElement("fieldset", null, /* @__PURE__ */ React.createElement("legend", {
    className: "sr-only"
  }, "Login or Register?"), /* @__PURE__ */ React.createElement("label", null, /* @__PURE__ */ React.createElement("input", {
    type: "radio",
    name: "loginType",
    value: "login",
    defaultChecked: !((_a = actionData == null ? void 0 : actionData.fields) == null ? void 0 : _a.loginType) || ((_b = actionData == null ? void 0 : actionData.fields) == null ? void 0 : _b.loginType) === "login"
  }), " ", "Login"), /* @__PURE__ */ React.createElement("label", null, /* @__PURE__ */ React.createElement("input", {
    type: "radio",
    name: "loginType",
    value: "register",
    defaultChecked: ((_c = actionData == null ? void 0 : actionData.fields) == null ? void 0 : _c.loginType) === "register"
  }), " ", "Register")), /* @__PURE__ */ React.createElement("div", null, /* @__PURE__ */ React.createElement("label", {
    htmlFor: "username-input"
  }, "Username"), /* @__PURE__ */ React.createElement("input", {
    type: "text",
    id: "username-input",
    name: "username",
    defaultValue: (_d = actionData == null ? void 0 : actionData.fields) == null ? void 0 : _d.username,
    "aria-invalid": Boolean((_e = actionData == null ? void 0 : actionData.fieldErrors) == null ? void 0 : _e.username),
    "aria-errormessage": ((_f = actionData == null ? void 0 : actionData.fieldErrors) == null ? void 0 : _f.username) ? "username-error" : void 0
  }), ((_g = actionData == null ? void 0 : actionData.fieldErrors) == null ? void 0 : _g.username) ? /* @__PURE__ */ React.createElement("p", {
    className: "form-validation-error",
    role: "alert",
    id: "username-error"
  }, actionData.fieldErrors.username) : null), /* @__PURE__ */ React.createElement("div", null, /* @__PURE__ */ React.createElement("label", {
    htmlFor: "password-input"
  }, "Password"), /* @__PURE__ */ React.createElement("input", {
    id: "password-input",
    name: "password",
    defaultValue: (_h = actionData == null ? void 0 : actionData.fields) == null ? void 0 : _h.password,
    type: "password",
    "aria-invalid": Boolean((_i = actionData == null ? void 0 : actionData.fieldErrors) == null ? void 0 : _i.password),
    "aria-errormessage": ((_j = actionData == null ? void 0 : actionData.fieldErrors) == null ? void 0 : _j.password) ? "password-error" : void 0
  }), ((_k = actionData == null ? void 0 : actionData.fieldErrors) == null ? void 0 : _k.password) ? /* @__PURE__ */ React.createElement("p", {
    className: "form-validation-error",
    role: "alert",
    id: "password-error"
  }, actionData.fieldErrors.password) : null), /* @__PURE__ */ React.createElement("div", {
    id: "form-error-message"
  }, (actionData == null ? void 0 : actionData.formError) ? /* @__PURE__ */ React.createElement("p", {
    className: "form-validation-error",
    role: "alert"
  }, actionData.formError) : null), /* @__PURE__ */ React.createElement("button", {
    type: "submit",
    className: "button"
  }, "Submit"))), /* @__PURE__ */ React.createElement("div", {
    className: "links"
  }, /* @__PURE__ */ React.createElement("ul", null, /* @__PURE__ */ React.createElement("li", null, /* @__PURE__ */ React.createElement(import_react9.Link, {
    to: "/"
  }, "Home")), /* @__PURE__ */ React.createElement("li", null, /* @__PURE__ */ React.createElement(import_react9.Link, {
    to: "/jokes"
  }, "Jokes")))));
}

// server-assets-manifest:@remix-run/dev/assets-manifest
var assets_manifest_default = { version: "713a4d89", entry: { module: "/build/entry.client-TCCLZSJ3.js", imports: ["/build/_shared/chunk-MPPXUMSF.js", "/build/_shared/chunk-O6YYFGCX.js"] }, routes: { root: { id: "root", parentId: void 0, path: "", index: void 0, caseSensitive: void 0, module: "/build/root-2LWSLHRF.js", imports: void 0, hasAction: !1, hasLoader: !1, hasCatchBoundary: !0, hasErrorBoundary: !0 }, "routes/index": { id: "routes/index", parentId: "root", path: void 0, index: !0, caseSensitive: void 0, module: "/build/routes/index-6ZCR5KUG.js", imports: void 0, hasAction: !1, hasLoader: !1, hasCatchBoundary: !1, hasErrorBoundary: !1 }, "routes/jokes": { id: "routes/jokes", parentId: "root", path: "jokes", index: void 0, caseSensitive: void 0, module: "/build/routes/jokes-GRSDO2CH.js", imports: ["/build/_shared/chunk-4PNKXX5G.js"], hasAction: !1, hasLoader: !0, hasCatchBoundary: !1, hasErrorBoundary: !1 }, "routes/jokes/$jokeId": { id: "routes/jokes/$jokeId", parentId: "routes/jokes", path: ":jokeId", index: void 0, caseSensitive: void 0, module: "/build/routes/jokes/$jokeId-ZR3SXLRV.js", imports: ["/build/_shared/chunk-4N6TLVPD.js"], hasAction: !0, hasLoader: !0, hasCatchBoundary: !0, hasErrorBoundary: !0 }, "routes/jokes/index": { id: "routes/jokes/index", parentId: "routes/jokes", path: void 0, index: !0, caseSensitive: void 0, module: "/build/routes/jokes/index-XD7IAMY2.js", imports: void 0, hasAction: !1, hasLoader: !0, hasCatchBoundary: !0, hasErrorBoundary: !0 }, "routes/jokes/new": { id: "routes/jokes/new", parentId: "routes/jokes", path: "new", index: void 0, caseSensitive: void 0, module: "/build/routes/jokes/new-RQ4S3QZP.js", imports: ["/build/_shared/chunk-4N6TLVPD.js"], hasAction: !0, hasLoader: !0, hasCatchBoundary: !0, hasErrorBoundary: !0 }, "routes/jokes[.]rss": { id: "routes/jokes[.]rss", parentId: "root", path: "jokes.rss", index: void 0, caseSensitive: void 0, module: "/build/routes/jokes[.]rss-QXIILTBO.js", imports: void 0, hasAction: !1, hasLoader: !0, hasCatchBoundary: !1, hasErrorBoundary: !1 }, "routes/login": { id: "routes/login", parentId: "root", path: "login", index: void 0, caseSensitive: void 0, module: "/build/routes/login-3XBAODRV.js", imports: ["/build/_shared/chunk-4PNKXX5G.js"], hasAction: !0, hasLoader: !1, hasCatchBoundary: !1, hasErrorBoundary: !1 }, "routes/logout": { id: "routes/logout", parentId: "root", path: "logout", index: void 0, caseSensitive: void 0, module: "/build/routes/logout-4CD5SKAF.js", imports: void 0, hasAction: !0, hasLoader: !0, hasCatchBoundary: !1, hasErrorBoundary: !1 } }, url: "/build/manifest-713A4D89.js" };

// server-entry-module:@remix-run/dev/server-build
var entry = { module: entry_server_exports }, routes = {
  root: {
    id: "root",
    parentId: void 0,
    path: "",
    index: void 0,
    caseSensitive: void 0,
    module: root_exports
  },
  "routes/jokes[.]rss": {
    id: "routes/jokes[.]rss",
    parentId: "root",
    path: "jokes.rss",
    index: void 0,
    caseSensitive: void 0,
    module: jokes_rss_exports
  },
  "routes/logout": {
    id: "routes/logout",
    parentId: "root",
    path: "logout",
    index: void 0,
    caseSensitive: void 0,
    module: logout_exports
  },
  "routes/index": {
    id: "routes/index",
    parentId: "root",
    path: void 0,
    index: !0,
    caseSensitive: void 0,
    module: routes_exports
  },
  "routes/jokes": {
    id: "routes/jokes",
    parentId: "root",
    path: "jokes",
    index: void 0,
    caseSensitive: void 0,
    module: jokes_exports
  },
  "routes/jokes/$jokeId": {
    id: "routes/jokes/$jokeId",
    parentId: "routes/jokes",
    path: ":jokeId",
    index: void 0,
    caseSensitive: void 0,
    module: jokeId_exports
  },
  "routes/jokes/index": {
    id: "routes/jokes/index",
    parentId: "routes/jokes",
    path: void 0,
    index: !0,
    caseSensitive: void 0,
    module: jokes_exports2
  },
  "routes/jokes/new": {
    id: "routes/jokes/new",
    parentId: "routes/jokes",
    path: "new",
    index: void 0,
    caseSensitive: void 0,
    module: new_exports
  },
  "routes/login": {
    id: "routes/login",
    parentId: "root",
    path: "login",
    index: void 0,
    caseSensitive: void 0,
    module: login_exports
  }
};
module.exports = __toCommonJS(stdin_exports);
// Annotate the CommonJS export names for ESM import in node:
0 && (module.exports = {
  assets,
  entry,
  routes
});
//# sourceMappingURL=index.js.map
