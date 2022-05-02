# Next Story v.1.1.0

> "next": "12.1.5"

> "react": "17.0.2"

> "@storybook/react": "6.4.22"

### Content

- **[How to launch](#how-to-launch)**
- **[What is this?](#what-is-this)**
- **[Pre-commit](#pre-commit)**
- **[Conventional Changelog](#conventional-changelog)**
- **[Storybook](#storybook)**
- **[Dependencies](#dependencies)**
- **[License](#license)**

## How to launch:

### Cloning

1. `git clone git@github.com:hotepp/next-story.git next-big-thing`: cloning the repo
2. `cd next-big-thing`: going to the cloned copy of the repo
3. `sudo rm -R .git && sudo rm CHANGELOG.md`: removing everything git-related from the cloned repo; be careful with `sudo`, you only want to delete the `.git` folder with everything inside of it and the `CHANGELOG.md` file, but nothing more
4. `git init`: creating our own git system
5. `git remote add origin https://github.com/USERNAME/REPOSITORY.git`: setting our own repository as the remote origin
6. `git add .`: adding everything to our first git commit
7. `git commit -m "feat(init): project start"`: making our first git commit
8. `npm version minor`: start versioning right away and create the `CHANGELOG.md` file
9. `git branch -M main`: rename the branch
10. `git push -u origin main`: pushing our first git commit to the `main` branch of our repo

P.S. Don't forget to remove the extra info like keywords, repository, packages you won't be using, reset the version etc. in `package.json`.

### Running

1. `npm i`
2. `npm run dev` to run the Next.js environment; `npm run sb` to run _Storybook_
3. Navigate to http://localhost:3000/ or to http://localhost:4000/, if you run _Storybook_
4. `npm run build` to create a production (Next.js) build; `npm run build:sb` to create a _Storybook_ build
5. `npm start` to run the created production (Next.js) build

For more info visit [Next.js Getting Started](https://nextjs.org/docs/getting-started).

## What is this?

_Next Story_ or _NS_ is an opinionated version of [Create Next App](https://nextjs.org/docs/api-reference/create-next-app) coupled with [Storybook](https://storybook.js.org/).

It contains all the recent Next.js features +

- Basic styles adjustment and some of Bulma modules in `src/styles/global` and `src/styles/misc`
- Set of Sass/SCSS mixins and variables in `src/styles/includes`
- Pre-configured and customizable [ESLint](https://eslint.org/), [Prettier](https://prettier.io/) and [Stylelint](https://stylelint.io/)
- Pre-commit feature with [Husky](https://github.com/typicode/husky) and [lint-staged](https://github.com/okonet/lint-staged)
- `next.config.js`, which includes [eslint-webpack-plugin](https://github.com/webpack-contrib/eslint-webpack-plugin) and [stylelint-webpack-plugin](https://github.com/webpack-contrib/stylelint-webpack-plugin)
- `jsconfig.json`, which includes [absolute imports](https://nextjs.org/docs/advanced-features/module-path-aliases)
- Automatically generated `CHANGELOG.md` file using `npm version` script, if [Conventional Commits](https://www.conventionalcommits.org/en/v1.0.0/) approach is being used
- The best UI non-framework _Storybook_! Integrated and configured, while still being optional and flexible just as you always wanted. All the info you need is located [right here](https://storybook.js.org/). And [here](#storybook) is what you need to know about _Storybook_ in _Next Story_.

## Pre-commit

_NS_ has a pre-commit feature, based on [Husky](https://github.com/typicode/husky) and [lint-staged](https://github.com/okonet/lint-staged). It looks like this:

**lint-staged** in `package.json`:

```
"lint-staged": {
  "src/**/*.{js,jsx,ts,tsx}": [
    "pretty-quick --pattern './src/**/*.{js,jsx,ts,tsx}'",
    "eslint './src/**/*.{js,jsx,ts,tsx}' --fix"
  ],
  "src/**/*.{css,sass,scss}": [
    "stylelint './src/**/*.{css,sass,scss}' --fix"
  ]
}
```

**pre-commit** in `.husky/pre-commit`:

```
npm run lint
```

And it can be configured in any preferrable way. Enjoy!

## Conventional Changelog

I recommend using the [Conventional Commits](https://www.conventionalcommits.org/en/v1.0.0/) approach for committing your work to Git. If you use it, your commits will be very descriptive and themselves could tell the story of your project to anyone.

On top of this [Conventional Changelog](https://github.com/conventional-changelog/conventional-changelog/tree/master/packages/conventional-changelog-cli) was built. I included the CLI version of it here, in the `version` npm script. It generates a nice `CHANGELOG.md` for your nice commits.

The recommended commit approach for using this would be:

1. Make changes
2. Commit those changes
3. Run the `npm version [patch|minor|major]` command (more about it [here](https://docs.npmjs.com/cli/v6/commands/npm-version))
4. Push

The `npm version` script will automatically bump the project's version in `package.json` and commit it, together with our newly generated `CHANGELOG.md`.

## Storybook

_NS_ has two almost absolutely separated environments being the Next.js one and the _Storybook_ one. The reason we need two of them is that _Storybook_ never was about **building** websites, it is about **showing** them, while _Next Story_ being able to **show** websites is everything about **building** them.

In order to deliver the best experience possible to our clients and to our non-frontend colleagues we have to make an effort to help them feel welcomed and _Storybook_ does exactly that.

To make it work with _NS_ we had to tweak some _Storybook_ configs, which you can find in the `.storybook` folder and see and test the changes for yourself.

To find out how to work with _NS_ and _Storybook_ together you can and should browse the example components, which are the part of the initial _NS_ setup. You can run _NS_ and _Storybook_ instances simultaneously to test the things out.

Have in mind, that the way the example components are made with _Storybook_ and _NS_ is only an **example**. It is something you can use as a starting point, but there is plenty space to make it better and more suitable for your or your project's needs.

You can use either _NS_ or _Storybook_ for the development process, but make sure to check from time to time, that the original Next.js env (environment) works. It is this env you will be using for the production after all, not the _Storybook_ one.

As a final note I want to remind, that it is quite important, nice and useful to have a UI for display purposes, but it is much more important to have a working environment, which gets things done. And it is exactly the purpose of this integration, so while working on the website, don't forget to deliver some stories with it and while working on the stories, don't forget, that the website won't build itself.

## Dependencies

```
"dependencies": {
  "bulma": "^0.9.3",
  "next": "12.1.5",
  "normalize.css": "^8.0.1",
  "react": "17.0.2",
  "react-dom": "17.0.2"
},
"devDependencies": {
  "@babel/core": "^7.17.9",
  "@storybook/addon-actions": "^6.4.22",
  "@storybook/addon-essentials": "^6.4.22",
  "@storybook/addon-interactions": "^6.4.22",
  "@storybook/addon-links": "^6.4.22",
  "@storybook/builder-webpack5": "^6.4.22",
  "@storybook/manager-webpack5": "^6.4.22",
  "@storybook/react": "^6.4.22",
  "@storybook/testing-library": "^0.0.9",
  "@typescript-eslint/eslint-plugin": "^5.19.0",
  "@typescript-eslint/parser": "^5.19.0",
  "babel-loader": "^8.2.4",
  "conventional-changelog-cli": "^2.2.2",
  "css-loader": "^6.7.1",
  "eslint": "^8.13.0",
  "eslint-config-next": "^12.1.5",
  "eslint-config-prettier": "^8.5.0",
  "eslint-plugin-prettier": "^4.0.0",
  "eslint-plugin-storybook": "^0.5.10",
  "eslint-webpack-plugin": "^3.1.1",
  "husky": "^7.0.4",
  "lint-staged": "^12.3.8",
  "postcss-loader": "^6.2.1",
  "prettier": "^2.6.2",
  "pretty-quick": "^3.1.3",
  "sass": "^1.50.0",
  "sass-loader": "^12.6.0",
  "style-loader": "^3.3.1",
  "stylelint": "^14.7.1",
  "stylelint-config-standard-scss": "^3.0.0",
  "stylelint-order": "^5.0.0",
  "stylelint-webpack-plugin": "^3.2.0",
  "typescript": "^4.6.3",
  "webpack": "^5.72.0"
}
```

## License

Copyright © Vlad Gerasimovich <hotepp@pm.me> (Next Story)

Copyright © Vercel, Inc. (Create Next App)

Copyright © Kadira, Inc. <hello@kadira.io> (Storybook)

Licensed under the ISC license.
