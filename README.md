# Fun corkboard project with react.js

## Overview

This is a nice introduction to [React](https://facebook.github.io/react/) as well as the use of [npm](https://www.npmjs.com/) and [create-react-app](https://github.com/facebookincubator/create-react-app).

## npm test

The tutorial does not cover this, so here are the steps to make `npm test` pass:

1. In the __src__ directory, rename __App.test.js__ to __Board.test.js__
2. Open __Board.test.js__ with an editor, change all instances of __App__ to __Board__
3. Change the second to last line to add a __count__ property
4. Save __Board.test.js__

After these changes, __Board.test.js__ should look like:
```js
import React from 'react';
import ReactDOM from 'react-dom';
import Board from './Board';

it('renders without crashing', () => {
  const div = document.createElement('div');
  ReactDOM.render(<Board count={25} />, div);
});
```

## pushing the Corkboard App to Github.io

[I spent a day or so wrestling with this - there are probably better ways to do this, but this worked.]

1. Create a new repo on GitHub, do not create __README.md__ or __.gitignore__ files
2. Check out the repo (this will create a new directory):

        $ git clone https://github.com/mramshaw/Corkboard.git

3. Copy all of the project files into the new directory
4. Change into the new directory:

        $ cd Corkboard

5. One of the prerequisites is [gh-pages](https://www.npmjs.com/package/gh-pages), so best to install it:

        $ npm install --save gh-pages

6. Build the project:

        $ npm run build

8. Deploy the project:

        $ npm run deploy

Read up on GitHub Pages here:

        https://help.github.com/categories/github-pages-basics/

There are some restrictions on Web Apps on GitHub Pages, for instance my Google font is not served.

Web Apps may be published on either the __master__ or __gh-pages__ branches, or else from the __/docs__ folder on the __master branch__:

        https://help.github.com/articles/configuring-a-publishing-source-for-github-pages/

The formal instructions may be found at [GitHub](https://github.com/facebookincubator/create-react-app/blob/master/packages/react-scripts/template/README.md#github-pages).

## TODO

- [x] Change background to corkboard
- [x] Change Font and text colour of Notes
- [x] Rename and edit App.test.js so `npm test` passes
- [ ] Add instructions on using __npm__ to push Web App to __github.io__
- [ ] Investigate bundling a font with the published Web App
- [ ] Allow colour of note to be changed
- [ ] Update to React v16.0
- [ ] Update to Babel 0.6 (according to the [create-react-app documentation](https://github.com/facebookincubator/create-react-app) it is not necessary to install Babel) 
- [ ] Update to Node 6

## Credits

Based upon:

        https://www.lynda.com/React-js-tutorials/Learn-React-js-Basics/519668-2.html

The course material is extremely well-constructed, no big jumps in difficulty.