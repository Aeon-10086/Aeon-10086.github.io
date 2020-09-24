# <a href="http://redux.js.org/"><img src="https://camo.githubusercontent.com/f28b5bc7822f1b7bb28a96d8d09e7d79169248fc/687474703a2f2f692e696d6775722e636f6d2f4a65567164514d2e706e67" height='60'/></a>

Redux is a predictable state container for JavaScript apps. (Not to be confused with a WordPress framework - [Redux Framewrok](https://reduxframework.com/).)

It helps you write applications that behave consistenly, run in different environments (client, server, and native), and are easy to test. On top of that, it provides a great developer experience, such as [live code editing combined with a time traveling debugger](https://github.com/reduxjs/redux-devtools).

You can use Redux together with [React](https://reactjs.org/), or with any other view library. It is tiny (2kB, including dependencies).

[![build passing](https://camo.githubusercontent.com/e5eed7ca88a6ab6bbe975d8cee06282bd7042987/68747470733a2f2f696d672e736869656c64732e696f2f7472617669732f72656475786a732f72656475782f6d61737465722e7376673f7374796c653d666c61742d737175617265)](https://travis-ci.org/reduxjs/redux)
[![npm v4.0.5](https://camo.githubusercontent.com/39acf6ce17ab483bca3f57a1273d47c687c01bf7/68747470733a2f2f696d672e736869656c64732e696f2f6e706d2f762f72656475782e7376673f7374796c653d666c61742d737175617265)](https://www.npmjs.com/package/redux)
[![downloads](https://camo.githubusercontent.com/aeaaab98c63fa2d53cfbc674876a4c13ad2ed1c1/68747470733a2f2f696d672e736869656c64732e696f2f6e706d2f646d2f72656475782e7376673f7374796c653d666c61742d737175617265)](https://www.npmjs.com/package/redux)
[![discord](https://camo.githubusercontent.com/9b09ec4762b3f4396a809007b2f4f03a43de63dc/68747470733a2f2f696d672e736869656c64732e696f2f62616467652f646973636f72642d2532337265647578253230253430253230726561637469666c75782d3631646166622e7376673f7374796c653d666c61742d737175617265)](https://discord.gg/0ZcbPKXt5bZ6au5t)
[![changelog](https://camo.githubusercontent.com/6ae4221c7c06cbd15e8cdd2c6dd09bc7c7eb1af3/68747470733a2f2f696d672e736869656c64732e696f2f62616467652f6368616e67656c6f672d2532333138372d6c69676874677265792e7376673f7374796c653d666c61742d737175617265)](https://changelog.com/187)

## Installation

```
  npm install @reduxjs/toolkit react-redux
```

For more details, see [the Installation docs page](https://redux.js.org/introduction/installation).

## Documentation

The Redux docs are located at [https://redux.js.org](https://redux.js.org/):

- [Introduction](http://redux.js.org/introduction/getting-started)
- [Recipes](http://redux.js.org/recipes/recipe-index)
- [FAQ](http://redux.js.org/faq)
- [API Reference](https://redux.js.org/api/api-reference)

For PDF, ePub, and MOBI exports for offline reading, and instructions on how to create them, please see: [paulkogel/redux-offline-docs](https://github.com/paulkogel/redux-offline-docs).

For Offline docs, please see: [devdocs](http://devdocs.io/redux/).

## Learn Redux

### Redux Essentials Tutorial

The **[Redux Essentials tutorial](https://redux.js.org/tutorials/essentials/part-1-overview-concepts)** is a "top-down" tutorial that teaches how to use Redux the right way, using our latest recommended APIs and best practices. We recommend starting there.

### Additional Tutorials

- The Redux docs **[Basic tutorial](https://redux.js.org/basics/basic-tutorial)** and **[Advanced tutorial](https://redux.js.org/advanced/advanced-tutorial)** are a "bottom-up" tutorial that teaches how Redux works, starting from first principles.
- The Redux repository contains several example projects demonstrating various aspects of how to use Redux. Almost all examples ahve a corresponding CodeSandbox sandbox. This is an interactive version of the code that you can play with online. See the complete list of examples in the \*\*[Examples page](https://redux.js.org/introduction/examples).
- Redux creator Dan Abramov's **free ["Getting Started with Redux" video series](https://egghead.io/series/getting-started-with-redux)** and **[Building React Applications with Idiomatic Redux](https://egghead.io/courses/building-react-applications-with-idiomatic-redux)** video courses on Egghead.io
- Redux maintainer Mark Erikson's **["Redux Fundamentals" conference talk](http://blog.isquaredsoftware.com/2018/03/presentation-reactathon-redux-fundamentals/)** and ["Redux Fundamentals" workshop slides](https://blog.isquaredsoftware.com/2018/06/redux-fundamentals-workshop-slides/)
- Dave Ceddia's post [A Complete React Redux Tutorial for Beginners](https://daveceddia.com/redux-tutorial/)

### Other Resources

- The **[Redux FAQ](https://redux.js.org/faq)** answers many common questions about how to use Redux, and the **[Recipes" docs section](https://redux.js.org/recipes/recipe-index)** has information on handing derived data, testing, structuring reducer logic, and reducing boilerplate.
- Redux maintainer MarkErikson's **["Practical Redux" tutorial series](http://blog.isquaredsoftware.com/series/practical-redux/)** demonstrates real-world intermediate and advanced techniques for working with React and Redux (also available as **[an interactive course on Educative.io](https://www.educative.io/collection/5687753853370368/5707702298738688)**).
- The **[React/Redux links list](https://github.com/markerikson/react-redux-links)** has categorized articles on working with [reducers and selectors](https://github.com/markerikson/react-redux-links/blob/master/redux-reducers-selectors.md), [managing side effects](https://github.com/markerikson/react-redux-links/blob/master/redux-side-effects.md), [Redux architecture and best practices](https://github.com/markerikson/react-redux-links/blob/master/redux-architecture.md), and more.
- Our community has created thousands of Redux-related libraries, addons,and tools. The **["Ecosystem" docs page](https://redux.js.org/introduction/ecosystem)** lists our recommendations, and there's a complete listing available in the **[Redux addons catalog](https://github.com/markerikson/redux-ecosystem-links)**.

## Before Proceeding Further

Redux is a valuable tool for organizing your state, but you should also consider whether it's appropriate for your situation. Don't use Redux just because someone said you should - take some time to understand the potential benefits and tradeoffs of using it.

Here are some suggestions on when it makes sense to use Redux:

- You have reasonable amounts of data changing over time
- You need a single source of truth for your state
- You find that keeping all your state in a top-level component is no longer sufficient

Yes, these guidelines are subjective and vague, but this is for good reason. The point at which you shold integrate Redux into your application is different for every user and different for every application.

> **For more thoughts on how Redux is meant to be used, see:**
>
> - **[You Might Not Need Redux](https://medium.com/@dan_abramov/you-might-not-need-redux-be46360cf367)**
> - **[The Tao of Redux, Part 1 - Implementation and Intent](https://medium.com/@dan_abramov/you-might-not-need-redux-be46360cf367)**
> - **[The Tao of Redux, Part 2 - Practive and Philosophy](http://blog.isquaredsoftware.com/2017/05/idiomatic-redux-tao-of-redux-part-2/)**
> - **[Redux FAQ](https://redux.js.org/faq)**

## Developer Experience

Dan Abramov (author of Redux) wrote Redux while working on his React Europe talk called [“Hot Reloading with Time Travel”](https://www.youtube.com/watch?v=xsSnOQynTHs). His goal was to create a state management library with a minimal API but completely predictable behavior. Redux makes it possible to implement logging, hot reloading, time travel, universal apps, record and replay, without any buy-in from the developer.

## Influences

Redux evolves the ideas of [Flux](http://facebook.github.io/flux/), but avoids its complexity by taking cues from [Elm](https://github.com/evancz/elm-architecture-tutorial/). Even if you haven't used Flux or Elm, Redux only takes a few minutes to get started with.

## The Gist

The whole state of your app is stored in an object tree inside a single _store_. The only way to change the state tree is to emit an _action_, an object describing what happened. To specify how the actions transform the state tree, you write pure _reducers_.

That's it!

```JavaScript
import {createStore} from 'redux';
/**
 * This is a reducer, a pure function with (state, action) => state signature.
 * It describes how an aciton transforms the state into the next state.
 *
 * The shape of the state is up to you: it can be a primitive, an array, an object,
 * or even an Immutable.js data structure. The only important part is that you should
 * not mutate the sate object, but return a new object if the state changes.
 *
 * In this example, we use a `switch` statement and strings, but you can use a hepler that
 * follows a different convention (such as function maps) if it makes sense for your
 * project.
**/
function counter(state = 0, action){
  switch (action.type) {
    case 'INCREMENT':
      return state + 1;
    case 'DECREMENT':
      return state - 1;
    default:
      return state;
  }
}

// Create a Redux store holding the state of your app.
// Its API is { subscribe, diapatch, getState }.
let store = createStore(counter);

// You can use subscribe() to update the UI in response to state changes.
// Normally you'd use a view binding library (e.g. React Redux) rather than subscribe() directly.
// However it can also be handy to persist the current state in the localStorage.

store.subscribe(() => console.log(store.getState()));

// The only way to mutate the internal state is to dispatch an action.
// The action can be serialized, logged or stored and later replayed.
store.dispatch({ type: 'INCREMENT' });
// 1
store.dispatch({ type: 'INCREMENT' });
// 2
store.dispatch({ type: 'DECREMENT' });
// 1
```

Instead of mutating the state directly, you specify the mutations you want to happen with plain objects called actions. Then you write a special function called a _reducer_ to decide how every action transforms the entire application's state.

This architecture might seem like an overkill for a counter app, but the beauty of this pattern is how well it scales to large and complex apps. It also enables very powerful developer tools, because it is possible to trace every mutation to the action that caused it. You can record user sessions and reproduce them just by replaying every action.

## Examples

Almost all examples have a corresponding CodeSandbox sandbox. This is an interactive version of the code that you can play with online.

- **[Counter Vanilla](https://redux.js.org/introduction/examples#counter-vanilla)**: [Source](https://github.com/reduxjs/redux/tree/master/examples/counter-vanilla)
- **[Counter](https://redux.js.org/introduction/examples#counter)**: [Source]() | [Sandbox]()
- **[Todos](https://redux.js.org/introduction/examples#todos)**: [Source](https://github.com/reduxjs/redux/tree/master/examples/todos) | [Sandbox](https://codesandbox.io/s/github/reduxjs/redux/tree/master/examples/todos)
- **[Todos with Undo](https://redux.js.org/introduction/examples#todos-with-undo)**: [Source](https://github.com/reduxjs/redux/tree/master/examples/todos-with-undo) | [Sandbox](https://codesandbox.io/s/github/reduxjs/redux/tree/master/examples/todos-with-undo)
- **[Todos w/ Flow](https://redux.js.org/introduction/examples#todos-flow)**: [Source](https://github.com/reduxjs/redux/tree/master/examples/todos-flow)
- **[TodoMVC](https://redux.js.org/introduction/examples#todomvc)**: [Source](https://github.com/reduxjs/redux/tree/master/examples/todomvc) | [Sandbox](https://codesandbox.io/s/github/reduxjs/redux/tree/master/examples/todomvc)
- **[Shopping Cart](https://redux.js.org/introduction/examples#shopping-cart)**: [Source](https://github.com/reduxjs/redux/tree/master/examples/shopping-cart) | [Sandbox](https://codesandbox.io/s/github/reduxjs/redux/tree/master/examples/shopping-cart)
- **[Tree View](https://redux.js.org/introduction/examples#tree-view)**: [Source](https://github.com/reduxjs/redux/tree/master/examples/tree-view) | [Sandbox](https://codesandbox.io/s/github/reduxjs/redux/tree/master/examples/tree-view)
- **[Async](https://redux.js.org/introduction/examples#async)**: [Source](https://github.com/reduxjs/redux/tree/master/examples/async) | [Sandbox](https://codesandbox.io/s/github/reduxjs/redux/tree/master/examples/async)
- **[Universal](https://redux.js.org/introduction/examples#universal)**: [Source](https://github.com/reduxjs/redux/tree/master/examples/universal)
- **[Real World](https://redux.js.org/introduction/examples#real-world)**: [Source](https://github.com/reduxjs/redux/tree/master/examples/real-world) | [Sandbox](https://codesandbox.io/s/github/reduxjs/redux/tree/master/examples/real-world)

If you're new to the NPM ecosystem and have troubles getting a project up and running, or aren't sure where to paste the gist above, check out [simplest-redux-example](https://github.com/jackielii/simplest-redux-example) that uses Redux together with React and Browserify.

## Testimonials

> [“Love what you're doing with Redux”](https://twitter.com/jingc/status/616608251463909376) Jing Chen, creator of Flux

> [“I asked for comments on Redux in FB's internal JS discussion group, and it was universally praised. Really awesome work.”](https://twitter.com/fisherwebdev/status/616286955693682688) Bill Fisher, author of Flux documentation

> [“It's cool that you are inventing a better Flux by not doing Flux at all.”](https://twitter.com/andrestaltz/status/616271392930201604) André Staltz, creator of Cycle

## Thanks

- [The Elm Architecture](https://github.com/evancz/elm-architecture-tutorial) for a great intro to modeling state updates with reducers;
- [Turning the database inside-out](https://www.confluent.io/blog/turning-the-database-inside-out-with-apache-samza/) for blowing my mind;
- [Developing ClojureScript with Figwheel](https://www.youtube.com/watch?v=j-kj2qwJa_E) for convincing me that re-evaluation should “just work”;
- [Webpack](https://webpack.js.org/concepts/hot-module-replacement/) for Hot Module Replacement;
- [Flummox](https://github.com/acdlite/flummox) for teaching me to approach Flux without boilerplate or singletons;
- [disto](https://github.com/threepointone/disto) for a proof of concept of hot reloadable Stores;
- [NuclearJS](https://github.com/optimizely/nuclear-js) for proving this architecture can be performant;
- [Om](https://github.com/omcljs/om) for popularizing the idea of a single state atom;
- [Cycle](https://github.com/cyclejs/cycle-core) for showing how often a function is the best tool;
- [React](https://github.com/facebook/react) for the pragmatic innovation.

Special thanks to [Jamie Paton](http://jdpaton.github.io/) for handling over the `redux` NOM package name.

## Logo

You can find the official logo [on GitHub](https://github.com/reduxjs/redux/tree/master/logo).

## Change Log

This project adheres to [Semantic Versioning](http://semver.org/). Every release, along with the migration instructions, is documented on the GitHub [Releases](https://github.com/reduxjs/redux/releases) pages.

## Patrons

The work on Redux was [funded by the community](https://www.patreon.com/reactdx). Meet some of the outstanding companies that made it possible:

- [Webflow](https://github.com/webflow)
- [Ximedes](https://www.ximedes.com/)

[See the full list of Redux patrons](https://github.com/reduxjs/redux/blob/master/PATRONS.md), as well as the always-growing list of [people and companies that use Redux](https://github.com/reduxjs/redux/issues/310).

## License

[MIT](https://github.com/reduxjs/redux/blob/master/LICENSE.md)
