const Xlsx = require("xlsx");
const Fs = require("fs");
// Task 2  convert data from json to excell 
// Step 1 Read json data and store into excel file 
const content = JSON.parse(Fs.readFileSync("stafJson.json","utf-8"));
// Step 2 create  workbook
let newWorkBook = Xlsx.utils.book_new();
// // step 3 Create a worksheet from json data head read in step1
// my json data is content
let newWorkSheet = Xlsx.utils.json_to_sheet(content)
//Step 4 Append worksheet to workbook
Xlsx.utils.book_append_sheet(newWorkBook,newWorkSheet,"new data")
// step 5 Write data to excell 
Xlsx.writeFile(newWorkBook,"staff2.xlsx");