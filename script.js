const table=document.getElementById('table')
const thead=document.getElementById('thead')
const tbody=document.getElementById('tbody')
const columnBtn=document.getElementById('columnBtn')
columnBtn.onclick = addColumn
const rowBtn=document.getElementById('rowBtn')
rowBtn.onclick= addRowData

const storeTable={
 header:[
   {
    element:"th",
    columnName:"column A",
    order:1,
    sort:undefined,
   },
   {
    element:"th",
    columnName:"column B",
    order:1,
    sort:undefined,
   },{
    element:"th",
    columnName:"column C",
    order:1,
    sort:undefined,
   }],
 body:[
    {
        element:'tr',
        rowOrder:1,
        columnElems:[
            {
                elemType:"td",
                columnName:"columnA",
                rowOrder:1,
                value:'row1'
            },
            {
                elemType:"td",
                columnName:"column B",
                rowOrder:1,
                value:'row2'
            },
            {
                elemType:"td",
                columnName:"column C",
                rowOrder:1,
                value:'row3'
            }]
    },
        {
            element:'tr',
            rowOrder:2,
            columnElems:[
                {
                    elemType:"td",
                    columnName:"columnA",
                    rowOrder:2,
                    value:'row1'
                },
                {
                    elemType:"td",
                    columnName:"column B",
                    rowOrder:2,
                    value:'row2'
                },
                {
                    elemType:"td",
                    columnName:"column C",
                    rowOrder:2,
                    value:'row3'
                }]
        },
            {
                element:'tr',
                rowOrder:3,
                columnElems:[
                    {
                        elemType:"td",
                        columnName:"columnA",
                        rowOrder:3,
                        value:'row1'
                    },
                    {
                        elemType:"td",
                        columnName:"column B",
                        rowOrder:3,
                        value:'row2'
                    },
                    {
                        elemType:"td",
                        columnName:"column C",
                        rowOrder:3,
                        value:'row3'
                    }]
}]
}

function storeTableData(){
    storeTable.header.map((elem)=>{
        const th = document.createElement(elem.element)
        th.innerText=elem.columnName
        thead.append(th)
    })
    storeTable.body.map((elem)=>{
            const tr=document.createElement(elem.element)
            for (const rowElem of elem.columnElems) {  
                const td =tr.appendChild(document.createElement(rowElem.elemType))
                td.innerText=rowElem.value
            }
           tbody.append(tr)
        })
    }  
storeTableData()

function createRowInput(){
    const input=document.createElement('input')
    input.setAttribute('type','text')
    input.setAttribute('placeholder','Enter row');
    return input;
}

function addColumn(){
    const columnCount=thead.childElementCount
    const th=document.createElement('th')
    thead.append(th)
    // th.append( createColumnInput())
    th.innerText=`Column ${columnCount}`

    if(tbody.childElementCount){
        for (const elem of tbody.children) {
            const td=document.createElement('td')
            elem.appendChild(td)
       td.append(createRowInput())
        }
    }
   
}

function addRowData(){
    const tr=document.createElement('tr')
    tbody.append(tr)
    for(let j=1;j<=thead.children.length;j++){
       const td=document.createElement('td')
       tr.appendChild(td)
       td.append(createRowInput())
   }
}
// for(let i=1;i<=3;i++){
//     addColumn(i)
//     addRowData(i)
// }
