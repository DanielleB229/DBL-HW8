const express = require('express')
const Engineer = require('./lib/Engineer');
const Manager = require('./lib/Manager');
const Intern = require('./lib/Intern');

const app = express()
const port = 3000

app.use(express.urlencoded({ extended: true }));
app.use(express.json());
app.use(express.static(__dirname + "/public"));


require('./src/routes/apiRoutes')(app);
require('./src/routes/htmlRoutes')(app);

var inquirer = require('inquirer');

console.log('Hi, welcome to Node Pizza');

var output = [];

var base_questions = [
  {
    type: 'input',
    name: 'name',
    message: "What is the name of the Employee?",
  },
  {
    type: 'input',
    name: 'id',
    message: "What is the id of the Employee?",
  },
  {
    type: 'input',
    name: 'email',
    message: "What is the email of the Employee?",
  }
];

var managerQuestions = [
  ...base_questions,

  {
    type: 'input',
    name: 'officeNumber',
    message: "What is the office number of the Employee?",
  },
  {
    type: 'list',
    name: 'addType',
    message: "Select an option to add a team member:",
    choices: ['Add an Engineer', 'Add an Intern', 'Finish Building my Team']
  }
];

var internquestions = [
  ...base_questions,
  {  
    type: 'input',
    name: 'school',
    message: "What school did the employee attend?",
  },
  {
    type: 'list',
    name: 'addType',
    message: "Select an option to add a team member:",
    choices: ['Add an Engineer', 'Add an Intern', 'Finish Building my Team']
  }
];


var engineerQuestions = [
  ...base_questions,
  {

    type: 'input',
    name: 'githubUsername',
    message: "What is the github username of the employee?",
  },
  {
    type: 'list',
    name: 'addType',
    message: "Select an option to add a team member:",
    choices: ['Add an Engineer', 'Add an Intern', 'Finish Building my Team']
  }
];

function ask(questions, isManager, isEngineer, isIntern) {
  inquirer.prompt(questions).then((answers) => {
    if(isManager) {
      const e = new Manager(answers.id, answers.name, answers.email, answers.officeNumber);
      output.push(e);
    } else {
      if(isEngineer){
        const e = new Engineer(answers.id, answers.name, answers.email, answers.githubUsername);
        output.push(e);
  
      } else if(isIntern) {
        const e = new Intern(answers.id, answers.name, answers.email, answers.school);
        output.push(e);  
      }
    }
    
    if (answers.addType === 'Add an Engineer') {
      ask(engineerQuestions, false, true, false);
    } else if(answers.addType === 'Add an Intern') {
      ask(internquestions, false, false, true);
    }else {
      console.log('Your team members are:', output.join(', '));
      app.get('/api/tables', (req, res) => res.json(output));
      app.listen(port, () => {
        console.log(`Example app listening at http://localhost:${port}`)
      })
    }
  });
}

ask(managerQuestions, true, false, false);
