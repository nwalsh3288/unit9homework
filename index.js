// array of questions for user
const inquirer = require("inquirer");
const fs = require("fs");
const util = require("util");

const questions = [
// inquire.promt stuff goes here
// const question prompts go here

  {
    type: "input",
    name: "Project",
    message: "What is the title of your project?"
  },
  {
    type: "input",
    name: "Description",
    message: "Provide a description to your application"
  },
  {
    type: "input",
    name: "Contents",
    message: "Please provide a table of contents"
  },
  {
    type: "input",
    name: "Installation",
    message: "What needs to be installed in order for the application to run?"
  },
  {
    type: "input",
    name: "Usage",
    message: "How do you use the project"
  },
 
  {
  type: "input",
  name: "Contributing",
  message: "Are there any contributers to the application?"
},
{
    type: "input",
    name: "Tests",
    message: "How do you test and trouble shoot the application?"
  },


];


// function to write README file
function writeToFile(fileName, data) {
    // fs logic goes here
    // take data and write it to the readmefile

    const readMe = 
    
`# Project Title
One Paragraph of project description goes here

## Getting Started

These instructions will get you a copy of the project up and running on your local machine for development and testing purposes. See deployment for notes on how to deploy the project on a live system.

### Prerequisites

What things you need to install the software and how to install them

\`\`\`
${data.Installation}
\`\`\`
   
### Installing

A step by step series of examples that tell you how to get a development env running

Say what the step will be

\`\`\`
Give the example
\`\`\`

And repeat

\`\`\`
until finished
\`\`\`

End with an example of getting some data out of the system or using it for a little demo

## Running the tests

Explain how to run the automated tests for this system

### Break down into end to end tests

Explain what these tests test and why

\`\`\`
Give an example
\`\`\`

### And coding style tests

Explain what these tests test and why

\`\`\`
Give an example
\`\`\`

## Deployment

Add additional notes about how to deploy this on a live system

## Built With

* [Dropwizard](http://www.dropwizard.io/1.0.2/docs/) - The web framework used
* [Maven](https://maven.apache.org/) - Dependency Management
* [ROME](https://rometools.github.io/rome/) - Used to generate RSS Feeds

## Contributing

Please read [CONTRIBUTING.md](https://gist.github.com/PurpleBooth/b24679402957c63ec426) for details on our code of conduct, and the process for submitting pull requests to us.

## Versioning

We use [SemVer](http://semver.org/) for versioning. For the versions available, see the [tags on this repository](https://github.com/your/project/tags). 

## Authors

* **Billie Thompson** - *Initial work* - [PurpleBooth](https://github.com/PurpleBooth)

See also the list of [contributors](https://github.com/your/project/contributors) who participated in this project.

## License

This project is licensed under the MIT License - see the [LICENSE.md](LICENSE.md) file for details

## Acknowledgments

* Hat tip to anyone whose code was used
* Inspiration
* etc
` 
fs.writeFile(fileName, readMe, 'utf8', (err) => {
    if (err) throw err;
    console.log('The file has been saved!');

});
}

// function to initialize program
function init() {
    // separates from the mini project
    // node application
    // need to define what init does - structure definition
    // will fire off inquierier prompt which is going to use questions in line 2 -- call questions via init
inquirer.prompt(questions).then(function (data) {
    console.log(data);
    const fileName = "ReadMe.md"
    writeToFile(fileName, data);

})

}

// function call to initialize program
init();
// going to run line above
