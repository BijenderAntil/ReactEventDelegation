import * as React from 'react';

export default function TableHeading({
    columns,
  TableCell,
  hideColumns,
  yr
}) {
    
  return (
    <React.Fragment>
      {Object.values(columns).map((col, key) => {
        if(col.hide !== true && hideColumns[yr].includes(col.field)===true)
          return <TableCell key={col.field}  style={{
            backgroundColor: '#ccc',
            textAlign: 'left',
            paddingTop: '0px;',
          }}>{col.headerName}</TableCell>;
      })}
    </React.Fragment>
  );
}
