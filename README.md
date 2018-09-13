![CF](http://i.imgur.com/7v5ASc8.png) 03: Asynchronous Callbacks
===

## Author
Daniel Frey

## Version
1.0

## Resources
* [fs module docs](https://nodejs.org/api/fs.html)

## Configuration
Configure the root of your repository with the following files and directories. Thoughfully name and organize any aditional configuration or module files.
* **README.md** - contains documentation
* **.gitignore** - contains a [robust](http://gitignore.io) `.gitignore` file
* **.eslintrc** - contains the course linter configuratoin
* **.eslintignore** - contains the course linter ignore configuration
* **.travis.yml** - contains your travis testing instructions
* **package.json** - contains npm package config 
  * jest and eslint must be dependencies
  * create a `lint` script for running eslint `"lint": "eslint **/.js"`
  * create a `test` script for running tests
* **lib/** - contains module definitions
* **data/** - contains the text files used by the program
* **\_\_test\_\_/** - contains unit tests

##  Documentation
This will pull and read 3 ipusm text files as well as run the associated tests.
In order to run this you will need to run the package.json to ensure you have the required dependencies.
