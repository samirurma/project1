// convert xlsx file into csv
function convertTocsv(){
    // so when we choose the xlsx file we want to parse this file into an xlsx
    // in order to get the file we write this sysntax
    const file=document.getElementById("file-selector").files[0]
    console.log("file->",file)
    file.arrayBuffer().then((res)=>{
        let data=new Uint8Array(res);
        // console.log("data->",data)
        // this will give data we need so this is a data of the file
        let workbook=XLSX.read(data,{type:"array"})
        // console.log("workbook->",workbook)
        let first_sheet_name=workbook.SheetNames[0];
        // console.log("first_sheet_name->",first_sheet_name)
        let worksheet=workbook.Sheets[first_sheet_name]
        // console.log("worksheet->",worksheet)
        let jsonData=XLSX.utils.sheet_to_json(worksheet,{raw:true})
        // ------------------------start code
        jsonData.forEach((e,i)=>{
            if (e.exp){
                e.exp=new Date(e.exp)
            }
        })
        // console.log("json",jsonData)
        // ------------------------end
        // console.log("jsondata->",jsonData)
        // we need to parse this json into a sheet
        let fileNameWithoutExtension=file.name.substring(0,file.name.indexOf("."))
        // console.log("fileNameWithoutExtension->",fileNameWithoutExtension)
        let newWorksheet=XLSX.utils.json_to_sheet(jsonData)
        // console.log("newWorksheet",newWorksheet)
        let newWorkbook=XLSX.utils.book_new();
        // console.log("newWorkbook",newWorkbook)
        XLSX.utils.book_append_sheet(newWorkbook,newWorksheet,"csv_sheet")
        // XLSX.writeFile(newWorkbook,fileNameWithoutExtension+".csv")
        // console.log("json:",jsonData)
    })
}
// read the csv file
const x = document.querySelector('#new_file-selector');
x.addEventListener("change",()=>{
    const fr=new FileReader();
    fr.onloadend=e=>{
        let r=fr.result.split("\n").map(e=>{
            return e.split(",")
        })
        console.log(r)
        r.forEach((e,i)=>{
            if (i<=4){
            let m=e.map((e,i)=>{
                if (!i==0 && i<=8){
                return `<td>${e}</td>`
            }}).join("")
        
            const tr=document.createElement("tr");
            tr.innerHTML=m;
            const table=document.querySelector("#table");
            table.append(tr)
        }})
    }
    fr.readAsText(x.files[0])
})



