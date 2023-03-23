import * as React from 'react';

export default function InnerRow({
    rows,
  TableCell,
  isYearCheck
}) {

const yr =2022;
  const printCol = [`name_${yr}`, `calories_${yr}`, `fat_${yr}`, `carbs_${yr}`, `protein_${yr}`, `row6_${yr}`, `row7_${yr}`, ];
  let putHtml = [];
  const isYearCheck1 = isYearCheck.filter((r)=>r != yr);

 
  console.log('row=>', isYearCheck1);
  isYearCheck1.map(year => {
    let rowData = rows[year];
            Object.values(rowData).map(row => {
             // console.log('row=>', row);
              putHtml.push( <TableCell component="th" scope="row">{row.name} </TableCell>);
              putHtml.push( <TableCell component="th" scope="row">{row.calories} </TableCell>);
              putHtml.push( <TableCell component="th" scope="row">{row.fat} </TableCell>);
            });
         
        });
   
 
  return (
    <React.Fragment>
            {putHtml}
    </React.Fragment>
  );
}
