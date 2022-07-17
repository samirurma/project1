const fileSelector = document.querySelector('#new_file-selector');
fileSelector.addEventListener("change", () => {
    const fr = new FileReader();
    fr.onloadend = e => {
        let r = fr.result.split("\n").map(e => {
            return e.split(",")
        })
        console.log(r)
        r.forEach((e,i) => {
            if (i<=4){
            let m = e.map((e,i) => {
                if (!i==0 && i<=8){
                return `<td>${e}</td>`
            }}).join("")
            const tr = document.createElement("tr");
            tr.innerHTML = m;
            const table = document.querySelector("#table2");
            table.append(tr)
        }})
       
        
    }
    fr.readAsText(x.files[0])
})

// new line
// create a empty dic
// for loop
// use if condtion , if condition like if it is there ,
// d.code.itemStock+arr[3] pass as integer value
// if d.code.deal>arr[4]
//    d.code
// 
// if d.code.free>arr[5]
// if d.code.mrp<arr[6]
// if d.code.rate<arr[7]
// else ->if it mot there
// d[code]={itemName:arr[1],itemStock:arr[3],} deal4 free5 mrp6 rate7 exp8    pass as integer value