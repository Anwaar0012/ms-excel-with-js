const Xlsx = require("xlsx");
const Fs = require("fs");
// Step 1 Read excel data 
// const workBook = Xlsx.readFile("staff.xlsx",{cellDates:true});
// const workBook = Xlsx.readFile("staff.xlsx",{dateNF:"dd/mm/yyyy"});
const workBook = Xlsx.readFile("staff.xlsx",{dateNF:"dd/mm/yyyy"});
// Step 2 Read sheet from workbook
// in console we get our workbook in array of  sheets
// console.log(workBook.SheetNames);//Sheet1
// read the particular Sheet1
const workingSheet = workBook.Sheets["Sheet1"];
// console.log(workingSheets);
// step 3 Read Data and convert it into JSON file format
// const data =Xlsx.utils.sheet_to_json(workingSheet);
const data =Xlsx.utils.sheet_to_json(workingSheet,{raw:false});
// console.log(data)
// step 4 optional - change (False/True) to boolian(false/true) and store in json 
let newData = [];
newData = data.map((d)=>{
    if(d.male === "TRUE") d.male =true;
    if(d.male === "FALSE") d.male =false;
    if(d.female === "TRUE") d.female =true;
    if(d.female === "FALSE") d.female =false;
    return d;
})
// STEP 5 write json  data  to json extention file by stringify  data
// Fs.writeFileSync("stafJson.json",JSON.stringify(newData));
// Fs.writeFileSync("stafJson.json",JSON.stringify(newData,null,2));

