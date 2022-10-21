const fs = require("fs");
const XLSX =require('xlsx');
const jsontoxml = require("jsontoxml")

const workbook = XLSX.readFile("data.xlsx");


let worksheets = {};
for( const sheetName of workbook.SheetNames){
    worksheets[sheetName]=XLSX.utils.sheet_to_json(workbook.Sheets[sheetName])
}
const res = `json: \n ${JSON.stringify(worksheets.Sheet1)} \n\n`;
console.log(res);

console.log("xml:\n",jsontoxml({
    worksheets: JSON.parse(JSON.stringify(object.values(worksheets)))
}))
