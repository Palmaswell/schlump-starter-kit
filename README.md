# Schlump Starter Kit
[![Build Status](https://travis-ci.org/Palmaswell/Schlump-Starter-Kit.svg?branch=master)](https://travis-ci.org/Palmaswell/Schlump-Starter-Kit)

Boilerplate starter kit for the reactjs site generator [schlump](https://github.com/sinnerschrader/schlump).



## Introduction

Based on the same directory structure as schlump this project include all the necessary tools for you to start coding immediately. Check the [documentation](https://github.com/sinnerschrader/schlump) for detailed information on the workflow and usage of schlump.

Development takes place in the `./src` directory. There you can find the necessary **CSS/SCSS**, **Javascripts**, and **schlump templates** to get started.


## Usage

### Install
```shell
npm install
```

### Watch & Build
```shell
npm start
```

### Build
```shell
npm run serve
```

## Stack
* [schlump](https://github.com/sinnerschrader/schlump)
* [schlump Scoped CSS](https://github.com/sinnerschrader/schlump)
* [Sass](http://sass-lang.com/)
* [Babel](https://babeljs.io/)


## Configuration

You can surely make adjustments to the current configuration. Configuration tasks can be found under the `./tasks` directory.

### Schlump
Currently static assets will be generated flat in the `./docs` directory.
The idea is to enable the possibily to generate from you static project a [Github Page](https://pages.github.com/) straight from this directory.

You can change the current schlump configuration in the `./tasks/schlump.js` file. Just change the config object in the generatePages function.

```shell
    const config = {
        destStatics: './docs',
        dest: './docs',
        scopedCss: './src/css/_scoped.css',
        cssVariables: true
    }
```

### CSS

### Javascript


