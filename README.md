# Frontend Template

## Getting Started

These instructions will get you a copy of the project up and running on your local machine for development and testing purposes. See deployment for notes on how to deploy the project on a live system.

### Prerequisites

Make sure you have `node` and `npm` set up on your machine. Also make sure that you are on a compatible version. You can check your versions with `node -v` and `npm -v`.

```json
  "npm": ">=6.4.1",
  "node": ">=10.13.0"
```

Install the redux-devtools extension. This will help you explore the redux store during development directly in your browser. You can find it [here](https://github.com/zalmoxisus/redux-devtools-extension)

Also make sure you have [Prettier](https://prettier.io/) installed in your preffered IDE/Code Editor. We use this to maintain the same code formatting among contributors.  
Prettier for [VSCode](https://github.com/prettier/prettier-vscode)  
Prettier for [Webstorm](https://prettier.io/docs/en/webstorm.html)  
Prettier for [Atom](https://github.com/prettier/prettier-atom)  
Prettier for [SublimeText](https://packagecontrol.io/packages/JsPrettier)

### Installing

_A step by step series of examples that tell you how to get the development env running._

Clone this repo in your prefered location:

```console
~# git clone git@github.com:davidcoroian/react-ts-boilerplate.git
```

Navigate to it and install required dependencies:

```console
~# cd react-ts-boilerplate
~# npm install
```

Start the development server:

```console
~# npm start

...

Starting type checking service...
Server started ! ✓

Access URLs:
-----------------------------------
Localhost: http://localhost:3000
      LAN: http://192.168.0.133:3000
-----------------------------------
Press CTRL-C to stop
```

Once the server is up and running, navigate to `localhost:3000` in your browser.  
_There are multiple ways to run the project. You can read more about this in the **Scripts** section._

## Branch naming convention

We follow the following pattern:  
`[meaningful name]-[jira ticket id]`  
e.g.  
`add-gtm-events-PP-420`

## Scripts

_Information about some of the scripts that might come in handy._

| Command                    |                              Description                               |
| -------------------------- | :--------------------------------------------------------------------: |
| `npm run build`            |                   Build the app. Output in `./build`                   |
| `npm run build:clean`      |                     Remove the `./build` directory                     |
| `npm start`                |                   Start the local development server                   |
| `npm run start:tunnel`     | Start the development server with ngrok. Exposes your local web server |
| `npm run start:production` |              Start the server that mimics the production               |
| `npm run generate`         |       Generate a custom template for a new `page` or `component`       |
| `npm run lint`             |                               Run eslint                               |
| `npm run lint:eslint:fix`  |         Run eslint with the attempt to fix any existing issues         |
| `npm run security`         |                           Run an audit check                           |
| `npm run test`             |                             Run all tests                              |
| `npm run test:watch`       |                      Run all tests in watch mode                       |
| `npm run test:clean`       |                   Remove the `./coverage` directory                    |
| `npm run prettify`         |                     Run prettify against all files                     |
| `npm run size`             |           Calculate app entry point file size and load time            |

## Versioning

We use [SemVer](http://semver.org/) for versioning. For the versions available, see the [tags on this repository](https://github.com/davidcoroian/react-ts-boilerplate/tags).

## Authors

- **David** - [Gitlhub profile](https://github.com/davidcoroian)

See also the list of [contributors](https://github.com/davidcoroian/react-ts-boilerplate/graphs/contributors) who participated in this project.

## Bundle analysis

`package.json` has a config flag that can be used to analyze the generated bundle. By default is false:

```json
  "config": {
    ...
    "analyze": "false"
  }
```

By turning it into `true` and running npm run build you can have an overview of size of our bundle and the various libs we are using.
