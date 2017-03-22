# TS-Example

This repository is meant to be a starting point for the enterprising Typescript developer.

It showcases the following tooling.

* **yarn** as a blazing fast, featureful alternative to NPM
* **TypeDoc** to create API documentation 
  * note: currently, TypeDoc is incompatible with Typescript@^2.x.x.<br>
    The provided ``install.sh`` script therefore installs a global copy of<br>
    Typescript 2.1.6. Unfortunately this behaviour breaks npm posttest hooks,<br>
    thus TypeDoc would have to be run manually.
* **TypeScript** compilation and ``.d.ts`` definition generation.
* **Jest**. A modern, well integrated test framework with optional Typescript<br>
  support (provided through **ts-jest**) and coverage reporting.

  The file ``index.js`` includes a simple, **node** compatible example of how one<br>
  may import and consume a Typescript => ES6/CommonJS compiled module.

  ``npm test`` manually runs **Jest** and produces a full lcov coverage report.

  ``typedoc -out API_Docs`` generates the API documentation inside ``API_Docs/``