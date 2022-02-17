// Create table functionality
function create() {
    const rows = document.getElementById('Nrows').value;
    const columns = document.getElementById('Ncol').value;
    
    // Check if rows and columns are valid
    if (rows > 0 && columns > 0) {
      // Create a table
      const tableEl = document.createElement('table');
      for (let i = 0; i < rows; i++) {
        // Create a row
        const rowEl = document.createElement('tr');
        rowEl.setAttribute('data-row-id', i);
        // Append row to table
        tableEl.appendChild(rowEl);
        for (let j = 0; j < columns; j++) {
          // Create a cell
          const colEl = document.createElement('td');
          colEl.setAttribute('data-row-id', i);
          colEl.setAttribute('data-col-id', j);
          colEl.innerHTML = 'data';
          colEl.setAttribute('contenteditable', true);
          // Append cell to row
          rowEl.appendChild(colEl);
        }
      }
      // Append table to table-box
      const ref = document.getElementById('table-box');
      ref.innerHTML = '';
      ref.appendChild(tableEl);
      return;
    }
    alert('Please enter rows and columns');
  }
  
  // Add column functionality
  function addRow() {
    // A table must exist to add column
    const tableRef = document.querySelector('#table-box table');
    if (tableRef) {
      // Find how many rows and columns does this table contain
      const rows = tableRef.querySelectorAll('tr[data-row-id]').length;
      const cols = tableRef.querySelectorAll('td[data-row-id="0"][data-col-id]').length;
      // Add new row with given column length
      const newRow = document.createElement('tr');
      newRow.setAttribute('data-row-id', rows);
      for (let i = 0; i < cols; i++) {
        // Create columns
        const newCol = document.createElement('td');
        newCol.setAttribute('data-row-id', rows);
        newCol.setAttribute('data-col-id', i);
        newCol.setAttribute('contenteditable', true);
        newCol.innerHTML = 'data';
        // Append column to new row
        newRow.appendChild(newCol);
      }
      // Append row to table
      tableRef.appendChild(newRow);
      return;
    }
    alert('A table must exist to add row');
  }
  
  // Functionality to remove row from end
  function removeRow() {
    const tableRef = document.querySelector('#table-box table');
    if (tableRef) {
      // Find last row
      const rows = tableRef.querySelectorAll('tr[data-row-id]');
      const lastRow = rows[rows.length - 1];
      // Remove row node
      tableRef.removeChild(lastRow);
      return;
    }
    alert('A table must exist to remove row');
  }
  
  // Functionality to add column
  function addCol() {
   // To add column in the end, we need to insert one cell to each row
   const tableRef = document.querySelector('#table-box table');
   if (tableRef) {
     const rows = tableRef.querySelectorAll('tr[data-row-id]');
     for (let i = 0; i < rows.length; i++) {
       // Get current cell count
       const cellCount = rows[i].querySelectorAll('td').length;
       // Create a new cell
       const newCell = document.createElement('td');
       newCell.setAttribute('data-row-id', i);
       newCell.setAttribute('data-col-id', cellCount);
       newCell.setAttribute('contenteditable', true);
       newCell.innerHTML = 'data';
       // Append the cell to current row
       rows[i].appendChild(newCell);
     }
     return;
   }
   alert('A table must exist to add a column');
  }
  
  // Functionality to remove column from end
  function removeCol() {
    // To remove column from end, we need to find last cell of each row and remove it
    const tableRef = document.querySelector('#table-box table');
   if (tableRef) {
     const rows = tableRef.querySelectorAll('tr[data-row-id]');
     for (let i = 0; i < rows.length; i++) {
       // Find last cell in this row
       const cols = rows[i].querySelectorAll('td');
       const lastCell = cols[cols.length - 1];
       // Remove it
       rows[i].removeChild(lastCell);
     }
     return;
   }
   alert('A table must exist to remove a column');
  }