import * as React from 'react';
import Pagination from '@mui/material/Pagination';
import './mystyle.scss';
import {
  DataGrid,
  gridPageCountSelector,
  gridPageSelector,
  GridToolbarContainer,
  GridToolbarColumnsButton,
  GridToolbarFilterButton,
  GridToolbarExport,
  GridToolbarDensitySelector,
} from '@mui/x-data-grid';
import Box from '@mui/material/Box';
import Fab from '@mui/material/Fab';
import Grid from '@mui/material/Grid';
import FormGroup from '@mui/material/FormGroup';
import FormControlLabel from '@mui/material/FormControlLabel';
import Checkbox from '@mui/material/Checkbox';


import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import Paper from "@mui/material/Paper";
import TableHeading from './TableHeading';
import TableBodyRows from './TableBodyRows';

import SettingsIcon from '@mui/icons-material/Settings';
// Box
import PropTypes from 'prop-types';
import Button from '@mui/material/Button';
import Avatar from '@mui/material/Avatar';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import ListItemAvatar from '@mui/material/ListItemAvatar';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemText from '@mui/material/ListItemText';
import DialogTitle from '@mui/material/DialogTitle';
import Dialog from '@mui/material/Dialog';
import PersonIcon from '@mui/icons-material/Person';
import AddIcon from '@mui/icons-material/Add';
import Typography from '@mui/material/Typography';
import { blue } from '@mui/material/colors';
//
import { makeStyles } from "@material-ui/core/styles";
import Drawer from "@material-ui/core/Drawer";
import Divider from "@material-ui/core/Divider";
import ListItemIcon from "@material-ui/core/ListItemIcon";

import Switch from '@mui/material/Switch';


export default function ColumnSelectorGrid() {
  const [fiscalYear, setFiscalYear] = React.useState({
    2022: 2022,
    2023: 2023,
    2024: 2024,
  });
  const [isYearCheck, setIsYearCheck] = React.useState([2022]);
  const [hideColumns, setHideColumns] = React.useState({2022:['approvedLoe','apprrovedBudget', 'actualDays','actual','protected','rate','projected','totalLoeDays','totalActual','variance','varianceApproved']});
  const [columns, setColumns] = React.useState([
    { field: 'id', headerName: 'ID', hide: true },
    {
      field: 'approvedLoe',
      headerName: 'Approved LOE',
      cellClassName: 'super-app-theme--cell',
    },
    { field: 'apprrovedBudget', headerName: 'Approved Budget', width: 150 },
    { field: 'actualDays', headerName: 'ACTUAL LOE(Days)' },
    { field: 'actual', headerName: 'Actual(s)' },
    { field: 'protected', headerName: 'Protected LOE(Days)' },
    { field: 'rate', headerName: 'Rate($)' },
    { field: 'projected', headerName: 'Projected($)' }, 
    { field: 'totalLoeDays', headerName: 'Total LOE (Days)' }, 
    { field: 'totalActual', headerName: 'Total Actual + Protection($)' }, 
    { field: 'variance', headerName: 'Variance LOE' }, 
    { field: 'varianceApproved', headerName: 'Variance Budget($)-Approved Total($)' }
  ]);
 
  const [rows, setRows] = React.useState(
    { 2022: [ {
      id: '2d6bcc0c-a0d3-55f2-9afe-c113c3fbd483',
      approvedLoe: `10`,
      apprrovedBudget: 50000.00,
      actualDays: 10.00,
      actual: 15000.00,
      protected: 15.00,
      rate: 500.00,
      projected: 25000.00,
      totalLoeDays: 10.00,
      totalActual: 15000.00,
      variance: 1.05,
      varianceApproved: 50000.00,
    },
    {
      id: '2d6bcc0c-a0d3-55f2-9afe-c113c3fbd482',

      approvedLoe: `10`,
      apprrovedBudget: 8000.00,
      actualDays: 10.00,
      actual: 1000.00,
      protected: 20.25,
      rate: 200.00,
      projected: 4000.00,
      totalLoeDays: 12.00,
      totalActual: 1000.00,
      variance: 0.75,
      varianceApproved: 8000.00,
    },
    {
      id: '2d6bcc0c-a0d3-55f2-9afe-c113c3fbd482',

      approvedLoe: `12.50`,
      apprrovedBudget: 18000.00,
      actualDays: 6.00,
      actual: 2000.00,
      protected: 12.50,
      rate: 200.00,
      projected: 9000.00,
      totalLoeDays: 6.00,
      totalActual: 2000.00,
      variance: 3.02,
      varianceApproved: 18000.00,
    },
    {
      id: '2d6bcc0c-a0d3-55f2-9afe-c113c3fbd489',

      approvedLoe: `6.00`,
      apprrovedBudget: 4500.00,
      actualDays: 15.00,
      actual: 2500.0,
      protected: 15,
      rate: 100.00,
      projected: 1500.00,
      totalLoeDays: 15.00,
      totalActual: 1500.00,
      variance: 1.05,
      varianceApproved: 4500.00,
    }

  ]} );
  const handleChange = (e) => {
    const { name, value } = e.target;
    let rowsTemp = rows;
    let hideColumnsTemp = hideColumns;
    if (e.target.checked === true) {
      setIsYearCheck([ ...isYearCheck, value]);
      setHideColumns({...hideColumnsTemp, [value]: ['approvedLoe','apprrovedBudget', 'actualDays','actual','protected','rate','projected','totalLoeDays','totalActual','variance','varianceApproved']});
     
      const row_data = {
        [value]: [
          {
            id: '2d6bcc0c-a0d3-55f2-9afe-c113c3fbd483',
            approvedLoe: `10-${value}`,
    apprrovedBudget: 50000.00,
    actualDays: 10.00,
    actual: 15000.00,
    protected: 15.00,
    rate: 500.00,
    projected: 25000.00,
    totalLoeDays: 10.00,
    totalActual: 15000.00,
    variance: 1.05,
    varianceApproved: 50000.00,
          },
          {
            id: '2d6bcc0c-a0d3-55f2-9afe-c113c3fbd482',
            approvedLoe: `10${value}`,
    apprrovedBudget: 8000.00,
    actualDays: 10.00,
    actual: 1000.00,
    protected: 20.25,
    rate: 200.00,
    projected: 4000.00,
    totalLoeDays: 12.00,
    totalActual: 1000.00,
    variance: 0.75,
    varianceApproved: 8000.00,
          },
          {
            id: '2d6bcc0c-a0d3-55f2-9afe-c113c3fbd482',
            approvedLoe: `12.50-${value}`,
    apprrovedBudget: 18000.00,
    actualDays: 6.00,
    actual: 2000.00,
    protected: 12.50,
    rate: 200.00,
    projected: 9000.00,
    totalLoeDays: 6.00,
    totalActual: 2000.00,
    variance: 3.02,
    varianceApproved: 18000.00,
          },
          {
            id: '2d6bcc0c-a0d3-55f2-9afe-c113c3fbd4821',
            approvedLoe: `6.00-${value}`,
            apprrovedBudget: 4500.00,
            actualDays: 15.00,
            actual: 2500.0,
            protected: 15,
            rate: 100.00,
            projected: 1500.00,
            totalLoeDays: 15.00,
            totalActual: 1500.00,
            variance: 1.05,
            varianceApproved: 4500.00,
          },
        ]
      };
    
      setRows({ ...rowsTemp, ...row_data });
    } else {
      let tempIsYearCheck = isYearCheck;
      const new_setYear = tempIsYearCheck.filter((r)=>r != value);

     //console.log('tempIsYearCheck--=>', new_setYear);
     setIsYearCheck(new_setYear);
     //setHideColumns({...hideColumnsTemp, [value]: ['approvedLoe','apprrovedBudget', 'actualDays','actual','protected','rate','projected','totalLoeDays','totalActual','variance','varianceApproved']});
      delete rowsTemp[value];
      delete hideColumnsTemp[value];
      setHideColumns(hideColumnsTemp);
    }
  };
 // console.log('isYearCheck=>', isYearCheck);
 const finTableHeading = [
  { field: 'id', hide: true }, {
field: 'account',
headerName: 'Account',hideable: false,
cellClassName: 'super-app-theme--cell',},
{ field: 'employee', headerName: 'Employee', width: 150 },
{ field: 'roleInProject', headerName: 'Role in Project', width: 150 },
];
const finTableRows =[{id:'2d6bcc0c-a0d3-55f2-9afe-c113c3fbd411', account:'0539-1000 Direct Labour', employee:'TestUser2 (1234)', roleInProject:'chief of party'},{id:'2d6bcc0c-a0d3-55f2-9afe-c113c3fbd412', account:'0539-1000 Direct Labour', employee:'TestUser2 (4567)', roleInProject:'Marketing'},{id:'2d6bcc0c-a0d3-55f2-9afe-c113c3fbd413', account:'0545 International Travel', employee:'', roleInProject:'Consultant'},{id:'6d6bcc0c-a0d3-55f2-9afe-c113c3fbd413', account:'0551:- Direct OOC', employee:'', roleInProject:''}];
 
const [selectedRow, setSelectedRow] = React.useState({});



const year_print  ={2022:2022, 2023:2023};
const yr = 2022;
const isYearCheck1 = isYearCheck.filter((r)=>r != yr); 

const [open, setOpen] = React.useState(false);
const [selectedValue, setSelectedValue] = React.useState('');

const handleClickOpen = () => {
  setOpen(true);
};

const handleClose = (value) => {
  setOpen(false);
  setSelectedValue(value);
};

return (
    <>
      <FormGroup>
        {Object.values(fiscalYear).map((val, key) => {
         // console.log('990==', key);
         if(key===0) {
          return (
            
            <FormControlLabel
              control={
                <Checkbox
                  value={val}
                  onClick={handleChange}
                  checked
                />
              }
              label={val}
            />
          );
            }
        else{
              return (<FormControlLabel
                control={
                  <Checkbox
                    value={val}
                    onClick={handleChange}
                  />
                }
                label={val}
              />)

            }
          
        })}
      </FormGroup>
      <div style={{ height: 400, width: '100%', display: 'flex' }}>
      <DataGrid
      sx={{minWidth: '35%;'}}
          components={{
            Toolbar: CustomToolbarYear, Pagination: CustomPagination,
          }}
          columns={finTableHeading}
          rows={finTableRows}
          rowHeight={30}
          headerHeight={40}
        />


<TableContainer component={Paper}>
      <Table sx={{ minWidth: 650 }} size="small" aria-label="a dense table">
        <TableHead>
          
        <TableRow>
        <SettingsIcon onClick={handleClickOpen}></SettingsIcon>
            <SimpleDialog
        selectedValue={selectedValue}
        open={open}
        onClose={handleClose}
        columns={columns}
        hideColumns={hideColumns} setHideColumns={setHideColumns} isYearCheck={isYearCheck}
      />
        {isYearCheck.map((val, key) => {
        //  console.log('hideColumns=>', hideColumns);
          return (<TableCell component="th" scope="row" colSpan={11}>
            
             <Fab  align="left" variant="extended" size="medium" color="primary" className="edit-btn"  aria-label="add">
          <span> {val}</span>{' '}
          <span style={{ padding: '50px' }}>Download</span>
        </Fab></TableCell>)
        
      })
      }
        </TableRow>  
        <TableRow>
        {isYearCheck.map((val, key) => {
         //console.log('TableRow=>', columns);
        
          return(<TableHeading TableCell={TableCell} columns={columns} hideColumns={hideColumns} yr={val}></TableHeading>);
         
      })
      }
        </TableRow>
        </TableHead>
        <TableBody>
        {Object.values(rows['2022']).map((row, key) => {
        //console.log('row=sd>',key, row);
         return( <TableRow
            onClick={() => setSelectedRow(key)}
            key={key}
           
          >
             {hideColumns['2022'].includes('approvedLoe')===true && (
          <TableCell style={{
            backgroundColor: '#fff',
            textAlign: 'left',
            paddingTop: '0px;',
          }} >{row.approvedLoe} </TableCell>
            )}
            {hideColumns['2022'].includes('apprrovedBudget')===true && (
          <TableCell component="td" scope="row">{row.apprrovedBudget} </TableCell>
            )}
            {hideColumns['2022'].includes('actualDays')===true && (
          <TableCell component="td" scope="row">{row.actualDays} </TableCell>
            )}
            {hideColumns['2022'].includes('actual')===true && (
          <TableCell component="td" scope="row">{row.actual} </TableCell>
            )}
            {hideColumns['2022'].includes('protected')===true && (
          <TableCell component="td" scope="row">{row.protected} </TableCell>
            )}
            {hideColumns['2022'].includes('rate')===true && (
          <TableCell component="td" scope="row">{row.rate} </TableCell>
            )}
            {hideColumns['2022'].includes('projected')===true && (
          <TableCell component="td" scope="row">{row.projected} </TableCell>
            )}
            {hideColumns['2022'].includes('totalLoeDays')===true && (
          <TableCell component="td" scope="row">{row.totalLoeDays} </TableCell>
            )}
            {hideColumns['2022'].includes('totalActual')===true && (
          <TableCell component="td" scope="row">{row.totalActual} </TableCell>
            )}
             {hideColumns['2022'].includes('variance')===true && (
          <TableCell component="td" scope="row">{row.variance} </TableCell>
            )}
             {hideColumns['2022'].includes('varianceApproved')===true && (
          <TableCell component="td" scope="row">{row.varianceApproved} </TableCell>
            )}
          {isYearCheck1.map(year => {
           
            return(
          <TableBodyRows rows={rows} TableCell={TableCell} year={year} keyNo={key} hideColumns={hideColumns}></TableBodyRows>
            )
          },[key])
          }
          </TableRow>);
         })
        }
        
        </TableBody>
      </Table>
    </TableContainer>
      </div>
    </>
  );
}

function CustomToolbar(props) {
  return (
    <GridToolbarContainer>
      <Box
        width="20px"
        display="flex"
        justifyContent="flex-start"
        alignItems="left"
      >
        <GridToolbarColumnsButton sx={{ ml: 2 }} />
      </Box>

      <Fab
        align="left"
        variant="extended"
        size="medium"
        color="primary"
        className="edit-btn"
        aria-label="add"
      >
        <span> {props.myCustomProp}</span>{' '}
        <span style={{ padding: '50px' }}>Download</span>
      </Fab>
    </GridToolbarContainer>
  );
}
function CustomToolbarYear(){
return (
  <GridToolbarContainer><Fab
      align="left"
      variant="extended"
      size="medium"
      color="primary"
      className="edit-btn"
      aria-label="add"
    >
      <span>fins 2020</span>{' '}
    
    </Fab>
  </GridToolbarContainer>);
}

function CustomPagination() {
  return <></>;
}

function SimpleDialog(props) {
  const { onClose, selectedValue, open, columns, hideColumns, setHideColumns, isYearCheck } = props;

  const handleClose = () => {
    onClose(selectedValue);
  };

  const handleListItemClick = (e, cols) => {
    const { name, checked, value } = e.target;
    const hideColumnsTemp = hideColumns;
    //console.log(name, checked, value);
    if(checked === true){
     // {2022:['name','calories', 'fat']}
     let pushYr = [];
     if(hideColumnsTemp[name] !== undefined){
       pushYr = hideColumnsTemp[name].push(cols);
     }
     else{
      pushYr = hideColumnsTemp[name].push([cols]);
     }
      setHideColumns({...hideColumnsTemp, ...pushYr});
    }
    else{
      const hideTemp = hideColumnsTemp[name].filter((r)=>{
       return r != cols;
      })
      setHideColumns({...hideColumnsTemp, [name]:hideTemp});
     
    }
    //onClose(value);
  };
  
  let hideShowHtml = [];
  isYearCheck.forEach((yr)=>{
    
    columns.map((col) => {
    if(col.field !== 'id'){
      const title_hide = `${col.headerName} (${yr})`;
     // console.log('--', hideColumns.includes(col.field));
      hideShowHtml.push(<ListItem disableGutters>
        <ListItemButton onClick={(e) => handleListItemClick(e, col.field)} key={col.field} defaultName={col.field}>
        <FormGroup>
  <FormControlLabel control={<Switch name={yr} defaultChecked={hideColumns[yr].includes(col.field) ? true: false} />} label={title_hide} />
</FormGroup>
        </ListItemButton>
      </ListItem>);
  }
})
}) 
  return (
    <Dialog onClose={handleClose} open={open}>
      <DialogTitle>Hide Columns</DialogTitle>
      <List sx={{ pt: 0 }}>
      {hideShowHtml}

        
      </List>
    </Dialog>
  );
}

SimpleDialog.propTypes = {
  onClose: PropTypes.func.isRequired,
  open: PropTypes.bool.isRequired,
  selectedValue: PropTypes.string.isRequired,
};
