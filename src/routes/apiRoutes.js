
const tableData = require('../data/employeeData');

// ROUTING

module.exports = (app) => {
 

  app.post('/api/tables', (req, res) => {
    
      tableData.push(req.body);
      res.json(true);
  });



};
