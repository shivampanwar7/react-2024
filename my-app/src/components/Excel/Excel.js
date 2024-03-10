import "./Excel.css";
import { useState } from "react";
import PropTypes from 'prop-types';
Excel.propTypes = {
  headers: PropTypes.arrayOf(PropTypes.any),
  initialData: PropTypes.arrayOf(PropTypes.arrayOf(PropTypes.any)),

}
function clone(data) {
  return JSON.parse(JSON.stringify(data));
}

export default function Excel({headers, initialData}) {
  const dataCopy = clone(initialData);
  const [dataValue, setDataValue] = useState(initialData);
  const [sorting,setSorting] = useState({
    column: null,
    descending: false
  })
  function sort(e) {
    const column = e.target.cellIndex;
    const descending = sorting.column === column && !sorting.descending;
     dataCopy.sort((a,b)=>{
      if(a[column] === b[column]) {
        return 0;
      }
      return descending
        ? a[column] < b[column]
          ? 1
          : -1
        : a[column] > b[column]
          ? 1
          : -1;
    })
    setDataValue(dataCopy);
    setSorting({column, descending});
  }
  const [edit,setEdit] = useState(null);
  //const [typeSearchedValue,onSearchValue] = useState('');
  const[searchFlag, toggleSearch] = useState(true);
  function showEditor(e) {
  setEdit(
    {
      row: parseInt(e.target.parentNode.dataset.row, 10),
      column: e.target.cellIndex
    }
  )
}

  function save(e) {
    e.preventDefault();
    const input = e.target.firstChild;
    const dataCopy = clone(initialData);
    dataCopy[edit.row][edit.column] = input.value;
    setEdit(null);
    setDataValue(dataCopy);
  } 
  function searchToggle() {
    const flagValue = searchFlag ? false : true;
    toggleSearch(flagValue);
  }
  function onSearch(e) {
    const dataCopy = clone(initialData);
    console.log(dataCopy);
  }
  return (
    <>
      <h1>Excel</h1>
      <table className="table-container" onClick={sort}>
        <thead>
        <button onClick={searchToggle}>{searchFlag ? 'Show Search': 'Hide Search'}</button>
          <tr className="excel-sheet-table">
            
            {headers.map((th) => {
              return <th key={th}>{th}</th>;
            })}
          </tr>
          <tr>
          {headers.map((th) => {
              return <>{searchFlag ? '' : <input type="text" onChange={onSearch} />}</>
            })}
          
          </tr>
        </thead>
        <tbody onDoubleClick={showEditor}>
        
          {dataValue.map((bookdetailRow, index) => {
            return (
              
              <tr className="excel-sheet-table" key={index} data-row={index}>
                
                {bookdetailRow.map((cell, idx) => {
                  if(edit && edit.row === index && edit.column === idx)
                  cell = (
                    <form onSubmit={save}>
                      <input type="text" defaultValue={cell} />
                    </form>
                  )
                 return <td key={idx}>
                  
                  {cell}</td>;
                })}
              </tr>
            );
          })}
        </tbody>
      </table>
    </>
  );
}
