import * as React from 'react';
import { DataGrid } from '@mui/x-data-grid';


// core components
import ExamplesNavbar from "components/Navbars/ExamplesNavbar.js";
import ProfilePageHeader from "components/Headers/ProfilePageHeader.js";
import DemoFooter from "components/Footers/DemoFooter.js";

// reactstrap components
import {
  Col
} from "reactstrap";
const columns = [
  { field: 'id', headerName: 'ID', width: 70 },
  { field: 'Nombre', headerName: 'Nombre', width: 130 },
  { field: 'Mail', headerName: 'Mail', width: 200},
  {
    field: 'Mensaje',
    headerName: 'Mensaje',
    description: 'This column has a value getter and is not sortable.',
    sortable: false,
    width: 1000
  },
];
const rows = [
  { id: 1, Nombre: 'Matias Rivero', Mail: 'mati.rivero@gmail.com', Mensaje: 'd' },
  { id: 2, Nombre: 'Leandro Morales', Mail: 'l.mora@gmail.com', Mensaje: 'Buenas Agustin, estoy muy interesado en tu perfil te dejo mis datos para que me contactes' },
  { id: 3, Nombre: 'Hernan Duarte', Mail: 'hrnan_du@gmail.com', Mensaje: 'Buenas Agustin, estoy muy interesado en tu perfil te dejo mis datos para que me contactes' },
  { id: 4, Nombre: 'Barbara Hoffman', Mail: 'bhoffman@gmail.com', Mensaje: 'Buenas Agustin, estoy muy interesado en tu perfil te dejo mis datos para que me contactes' },
  { id: 5, Nombre: 'Rene Ledezma', Mail: 'rene_lede@gmail.com', Mensaje: 'Buenas Agustin, estoy muy interesado en tu perfil te dejo mis datos para que me contactes' }
 ];

export default function ContactosPage() {
  return (
    <>
      <ExamplesNavbar />
      <ProfilePageHeader />
    
            <Col className="ml-auto mr-auto" >
      <div style={{ height: 400, width: '100%', alignContent:'center' }}>
             
      <DataGrid 
        rows={rows}
        columns={columns}
        initialState={{
          pagination: {
            paginationModel: { page: 0, pageSize: 5 },
          },
        }}
        pageSizeOptions={[5, 10]}
      />
    </div>
    </Col>
    <DemoFooter />
    </>
 
  );
}