var http = require("http");
//TODO - Use Employee Module here

let employees = require('./Employee')

console.log("Lab 03 -  NodeJs");

// TODO - Fix any errors you found working with lab exercise

// Define Server Port
const port = process.env.PORT || 8087

//Create Web Server using CORE API
const server = http.createServer((req, res) => {
    if (req.method !== 'GET') {
        res.end(`{"error": "${http.STATUS_CODES[405]}"}`)
    } else {
        if (req.url === '/') {
            //TODO - Display message "<h1>Welcome to Lab Exercise 03</h1>"
            res.writeHead(200, {'Content-type':'text/html'})
            res.write('<h1>Welcome to Lab Exercise 03</h1>')
            res.end()
            return
        }

        if (req.url === '/employee') {
            // //TODO - Display all details for employees in JSON format
            res.write(
                employees.map(emp => JSON.stringify(emp)).join("\n")
            );
            res.end();
            return;
            
        }

        if (req.url === '/employee/names') {
            //TODO - Display only all employees {first name + lastname} in Ascending order in JSON Array
            //e.g. [ "Ash Lee", "Mac Mohan", "Pritesh Patel"]
            const employeeNames = employees.map(emp => `${emp.firstName} ${emp.lastName}`).sort();
            res.write(JSON.stringify(employeeNames));
            res.end();
            return;
        }

        if (req.url === '/employee/totalsalary') {
            //TODO - Display Sum of all employees salary in given JSON format 
            //e.g. { "total_salary" : 100 }  
            const totalSalary = employees.reduce((sum, emp) => sum + emp.Salary, 0);

            res.write(JSON.stringify({ total_salary: totalSalary }));
            res.end();
            return;
    } 
    res.end(`{"error": "${http.STATUS_CODES[404]}"}`)
    }
})

server.listen(port, () => {
    console.log(`Server listening on port ${port}`);
})