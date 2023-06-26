import * as React from 'react';
import { styled } from '@mui/material/styles';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell, { tableCellClasses } from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';
import { useEffect, useState,useRef } from 'react';
import getContacts from '../../api/contactos.api';



// core components
import ExamplesNavbar from "components/Navbars/ContactosNavbar.js";
import ProfilePageHeader from "components/Headers/ProfilePageHeader.js";
import DemoFooter from "components/Footers/DemoFooter.js";

import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import Modal from '@mui/material/Modal';

import {
  Row,
  Col
} from "reactstrap";


const style = {

    position: 'absolute',
  
    top: '50%',
  
    left: '50%',
  
    transform: 'translate(-50%, -50%)',
  
    width: 400,
  
    bgcolor: 'background.paper',
  
    border: '2px solid #000',
  
    boxShadow: 24,
  
    p: 4,
  
  };// reactstrap components

const StyledTableCell = styled(TableCell)(({ theme }) => ({
  [`&.${tableCellClasses.head}`]: {
    backgroundColor: "#287271",
    color: theme.palette.common.black
  },
  [`&.${tableCellClasses.body}`]: {
    fontSize: 14,
    backgroundColor: "#e9c46a"
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


export default function ContactosPage() {

  const [rows, setContacts] = useState([]);
  const accessToken = sessionStorage.getItem('access-token')
  const [showModal, setShowModal] = useState(false);
  const [selectedMessage, setSelectedMessage] = useState('');
 
  useEffect(() => {
    getContacts(accessToken,setContacts);
  }, [setContacts,accessToken]);

 
  const openModal = (message) => {
    setSelectedMessage(message);
    setShowModal(true);
  };

  const closeModal = () => {
    setSelectedMessage('');
    setShowModal(false);
  };

  return (
    <>
    
      <ExamplesNavbar />
      <ProfilePageHeader />
    
      <div className="ml-auto mr-auto" lg = "6" >
      <Col >

    <TableContainer component={Paper}>
      <Table sx={{  width: "50%" , marginTop : "60px", marginBottom : "90px",marginLeft : "auto",marginRight : "auto"}} aria-label="customized table">
        <TableHead>
          <TableRow>
            <StyledTableCell>Nombre</StyledTableCell>
            <StyledTableCell align="left">Telefono</StyledTableCell>
            <StyledTableCell align="left">Mail</StyledTableCell>
            <StyledTableCell align="left">Mensaje</StyledTableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {rows.map((row,index) => (
            <StyledTableRow key={row.name}>
              <StyledTableCell component="th" scope="row">
                {row.name}
              </StyledTableCell>
              <StyledTableCell align="left">{row.telefono}</StyledTableCell>
              <StyledTableCell align="left">{row.email}</StyledTableCell>
              <StyledTableCell align="left"> 
              <button onClick={() => openModal(row.mensaje)}>Ver Mensaje</button>
              </StyledTableCell>
            </StyledTableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
 </Col>
 {showModal && (
        <div className="modal">
          <div className="modal-content">
            <h3>Mensaje</h3>
            <p>{selectedMessage}</p>
            <Button onClick={closeModal} >Close</Button>
          </div>
        </div>
      )}

      <style>
        {`
          .modal {
                        position: fixed;
                        top: 20;
                        left: 20;
                        width: 10;
                        height: 2;
                        background-color: rgba(0, 0, 0, 0);
                        display: flex;
                        align-items: center;
                        justify-content: center;
                      }

                      .modal-content {
                        background-color: white;
                        padding: 20px;
                        border-radius: 4px;
                        text-align: center;
                        width: 50%;
                        
                      }
        `}
      </style>
    </div>
    <DemoFooter />
    </>
  );
}
