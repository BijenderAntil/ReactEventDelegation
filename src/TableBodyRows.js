import * as React from 'react';
export default function TableBodyRows({
  rows,
  TableCell,
  TableRow,
  year,
  keyNo,
  hideColumns
}) {

  //console.log('row=>', keyNo);
   const row = rows[year][keyNo];
  return (
    <React.Fragment>
      {row && ( <>
        {hideColumns[year].includes('approvedLoe')===true && (
            <TableCell style={{
            backgroundColor: '#fff',
            textAlign: 'left',
            paddingTop: '0px;',
          }}>{row.approvedLoe} </TableCell>
          )}
            {hideColumns[year].includes('apprrovedBudget')===true && (
          <TableCell component="td" scope="row">{row.apprrovedBudget} </TableCell>
            )}
            {hideColumns[year].includes('actualDays')===true && (
          <TableCell component="td" scope="row">{row.actualDays} </TableCell>
            )}
            {hideColumns[year].includes('actual')===true && (
          <TableCell component="td" scope="row">{row.actual} </TableCell>
            )}
            {hideColumns[year].includes('protected')===true && (
          <TableCell component="td" scope="row">{row.protected} </TableCell>
            )}
            {hideColumns[year].includes('rate')===true && (
          <TableCell component="td" scope="row">{row.rate} </TableCell>
            )}
            {hideColumns[year].includes('projected')===true && (
          <TableCell component="td" scope="row">{row.projected} </TableCell>
            )}
            {hideColumns[year].includes('totalLoeDays')===true && (
          <TableCell component="td" scope="row">{row.totalLoeDays} </TableCell>
            )}
            {hideColumns[year].includes('totalActual')===true && (
          <TableCell component="td" scope="row">{row.totalActual} </TableCell>
            )}
             {hideColumns[year].includes('variance')===true && (
          <TableCell component="td" scope="row">{row.variance} </TableCell>
            )}
             {hideColumns[year].includes('varianceApproved')===true && (
          <TableCell component="td" scope="row">{row.varianceApproved} </TableCell>
            )}
            </>
         )
        }
    </React.Fragment>
  );
}
