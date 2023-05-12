import * as React from 'react';
import { styled } from '@mui/material/styles';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell, { tableCellClasses } from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';


// core components
import ExamplesNavbar from "components/Navbars/ExamplesNavbar.js";
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
    backgroundColor: "#2a9d8f",
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

function createData(nombre, telefono, mail, mensaje) {
  return { nombre, telefono, mail, mensaje};
}

const rows = [
  createData('Barbara Hoffman','1157386926', 'bhoffman@hotmail.com', 'Buenas, estoy interesada en tu perfil, me gustaria contactarme con vos para hablar sobre el trabajo'),
  createData('Matias Rivero','1157453826','mati_rivero@gmail.com','Hola Paola, me llamo Matias y trabajo en ASD. Me gustaría hablar contigo sobre una oportunidad de trabajo que tenemos disponible en nuestra empresa que creo que podría interesarte. Te dejo mi contacto'),
  createData('Matias Wisnieski','1157263826', 'mw198@hotmail.com','Buenaas Paola, Me impresionó tu experiencia y habilidades y creo que podrías ser un buen ajuste para una de nuestras posiciones abiertas')
  
];

function BasicModal(mensaje) {
  const [open, setOpen] = React.useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);

  return (
    <div>
      <Button onClick={handleOpen}>Ver mensaje</Button>
      <Modal
        open={open}
        onClose={handleClose}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
        <Box sx={style}>
          <Typography id="modal-modal-title" variant="h6" component="h2">
            Mensaje
          </Typography>
          <Typography id="modal-modal-description" sx={{ mt: 2 }}>
            {mensaje}
          </Typography>
        </Box>
      </Modal>
    </div>
  );
}

export default function ContactosPage() {
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
          {rows.map((row) => (
            <StyledTableRow key={row.nombre}>
              <StyledTableCell component="th" scope="row">
                {row.nombre}
              </StyledTableCell>
              <StyledTableCell align="left">{row.telefono}</StyledTableCell>
              <StyledTableCell align="left">{row.mail}</StyledTableCell>
              <StyledTableCell align="left"> 
              {BasicModal(row.mensaje)} 
              </StyledTableCell>
            </StyledTableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
 </Col>
    </div>
    <DemoFooter />
    </>
 
    );
}
