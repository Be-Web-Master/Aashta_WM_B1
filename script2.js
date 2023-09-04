//My code....
//html
{/* <form id="sort-form">
<select id="columnDropdown" name="columnsDropdown" class="columnsDropdown"></select>
<label for="asc">Ascending</label>
<input name="sortOrder" type="radio" id="asc" value="Ascending">
<label for="desc">Descending</label>
<input name="sortOrder" type="radio" id="desc" value="Descending">
<button id="sort-btn" type="submit">Sort</button>
</form>
<button id="columnBtn">Add column</button>
<table id="table" border="1">
<thead id="thead">
</thead>
<tbody id="tbody">
</tbody>
</table>
<button id="rowBtn">Add row</button>
<button id="clearBtn">Clear</button>
 */}

//js
const table = document.getElementById('table')
const thead = document.getElementById('thead')
const tbody = document.getElementById('tbody')

const clearBtn = document.getElementById('clearBtn')
clearBtn.onclick = clearTableData

const columnBtn = document.getElementById('columnBtn')
columnBtn.onclick = addNewColumn

const rowBtn = document.getElementById('rowBtn')
rowBtn.onclick = addNewRow

const LOCAL_STORAGE_TABLE_KEY = 'tableStateData'

let tableState = {
    header: [],
    body: []
}

const sortingDropdown = document.getElementById('columnDropdown')
const sortForm = document.getElementById('sort-form')
// const selectOption=document.querySelector('.columnsDropdown')

sortForm.addEventListener('submit', (event) => {
    event.preventDefault()
    const selectedcolumnName = event.target.columnsDropdown.value
    const sortingOrder = event.target.sortOrder.value
    console.log(selectedcolumnName)
    console.log(sortingOrder)
    const columnNumber = tableState.header.find(headerObj => headerObj.columnName === selectedcolumnName).columnNumber

    tableState.body.sort((obj1, obj2) => {
        if (Number(obj1.cellDetails[columnNumber].cellValue) > Number(obj2.cellDetails[columnNumber].cellValue)) {
            if (sortingOrder === 'Ascending') return 1;
            else return -1;
        }
        else {
            if (sortingOrder === 'Descending') return 1;
            else return -1;
        }
    })
    updateTableData(tableState)
    console.log({ selectedcolumnName, sortingOrder, columnNumber })
})

const createSortingFormElements = () => {
    //dropdown 
    sortingDropdown.innerHTML = ""
    tableState.header.forEach((columnHeader) => {
        const optionElem = document.createElement('option')
        optionElem.setAttribute('value', columnHeader.columnName)
        optionElem.innerText = columnHeader.columnName
        //    console.log(optionElem)
        sortingDropdown.append(optionElem)
    })
}
// createSortingFormElements()
// tableState.header.length && tableState.body.length && createSortingFormElements();


//to store data in local storage
if (localStorage.getItem(LOCAL_STORAGE_TABLE_KEY)) {
    tableState = JSON.parse(localStorage.getItem(LOCAL_STORAGE_TABLE_KEY));
    createTableUI(tableState)
} else {
    localStorage.setItem(LOCAL_STORAGE_TABLE_KEY, JSON.stringify(tableState));
}


tbody.addEventListener('keyup', (event) => {
    console.log(event.target.id)
    const [rowNumber, columnNumber] = event.target.id.split('-');
    console.log(rowNumber, columnNumber, tableState)
    tableState.body[rowNumber].cellDetails[columnNumber].cellValue = event.target.value
    updateTableData()
})
thead.addEventListener('keyup', (event) => {
    console.log(event.target.id)
    const [rowNumber, columnNumber] = event.target.id.split('-');
    tableState.header[columnNumber].columnName = event.target.value
    updateTableData()
})

function clearUI() {
    thead.innerHTML = ""
    tbody.innerHTML = ""
}

function createTableUI() {
    clearUI()
    tableState.header.map((elem) => {
        const inputElement = createInput(elem.columnNumber)
        inputElement.value = elem.columnName
        const th = document.createElement(elem.elementType)
        th.append(inputElement)
        thead.append(th)

    })
    tableState.body.map((elem) => {
        const tr = document.createElement(elem.elementType)
        for (const rowElem of elem.cellDetails) {
            const td = document.createElement(rowElem.elementType)
            const rowTextarea = createTextarea(rowElem.rowNumber, rowElem.columnNumber)
            rowTextarea.value = rowElem.cellValue
            td.append(rowTextarea)
            tr.append(td)
        }
        tbody.append(tr)
    })
    createSortingFormElements()
}
// createTableUI()

function createInput(columnNumber) {
    const input = document.createElement('input')
    input.setAttribute('id', `0-${columnNumber}`)
    input.setAttribute('type','text')
    input.setAttribute('placeholder', 'Enter');
    return input;
}
function createTextarea(rowNumber, columnNumber) {
    const textarea = document.createElement('textarea')
    textarea.setAttribute('id', `${rowNumber}-${columnNumber}`)
    return textarea;
}

//This function add new columns in a table.
//And forEach function is adding cell to the new column
function addNewColumn() {
    const headerObj =
    {
        elementType: `th`,
        columnName: ``,
        columnNumber: tableState.header.length,
        sort: undefined
    }
    tableState.header.push(headerObj)
    tableState.body.forEach((rowObj, idx) => {
        rowObj.cellDetails.push(
            {
                elementType: 'td',
                columnNumber: headerObj.columnNumber,
                rowNumber: idx,
                cellValue: ''
            })
    })
    updateTableData()
    createSortingFormElements()
    createTableUI(tableState)
}

//This function add new row in a table.
//And forEach function is adding cell
function addNewRow() {
    const rowObj = {
        elementType: 'tr',
        rowNumber: tableState.body.length,
        cellDetails: []
    }
    tableState.header.forEach((headerElement) => {
        rowObj.cellDetails.push(
            {
                elementType: "td",
                columnNumber: headerElement.columnNumber,
                rowNumber: tableState.body.length,
                cellValue: ''
            })
    })
    tableState.body.push(rowObj)
    updateTableData()
    createTableUI(tableState)
}

function updateTableData() {
    localStorage.setItem(LOCAL_STORAGE_TABLE_KEY, JSON.stringify(tableState));
}

//clear the data from local Storage
function clearTableData() {
    localStorage.clear()
}