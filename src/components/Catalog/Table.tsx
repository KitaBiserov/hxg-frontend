import React from "react";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell,  { tableCellClasses }  from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import Paper from "@mui/material/Paper";
import { styled } from '@mui/material/styles';


const StyledTableCell = styled(TableCell)(({ theme }) => ({
  [`&.${tableCellClasses.head}`]: {
    backgroundColor: theme.palette.common.black,
    color: theme.palette.common.white,
  },
  [`&.${tableCellClasses.body}`]: {
    fontSize: 14,
  },
}));


const StyledTableRow = styled(TableRow)(({ theme }) => ({
  '&:nth-of-type(odd)': {
    backgroundColor: theme.palette.action.hover,
  },
  // hide last border
  '&:last-child td, &:last-child th': {
    border: 0,
  },
}));

export interface tableContent {
  
  row: string;
  value: string;
}


interface BasicTableProps {
  table: tableContent[];
  title: string;
}



export default function BasicTable({ table, title } : BasicTableProps) {
  



  return (
    
      <TableContainer sx={{width: "100%"}} component={Paper}>
        <Table
          className="sc-catalog--popup__table-container table"
          aria-label="simple table"
        >
          <TableHead>
            <StyledTableRow>
              <StyledTableCell>Characteristics</StyledTableCell>
              <StyledTableCell align="right">{title}</StyledTableCell>
            </StyledTableRow>
          </TableHead>
          <TableBody>
            {table.map((obj,idx) => (
              <StyledTableRow
                key={idx}
                sx={{ "&:last-child td, &:last-child th": { border: 0 } }}
              >
                <StyledTableCell component="th" scope="row">
                  {obj.row.toUpperCase()}
                </StyledTableCell>
                <StyledTableCell align="center">{obj.value}</StyledTableCell>
               
              </StyledTableRow>
            ))}
          </TableBody>
        </Table>
      </TableContainer>
  
  );
}
