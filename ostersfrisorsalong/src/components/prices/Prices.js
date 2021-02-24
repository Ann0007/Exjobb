import React from 'react';
import './prices.css'
import Navbar from '../navbar/Navbar';
import Footer from '../footer/Footer';
import hairstyle from '../../images/hairstyle.jpg'
import { makeStyles } from '@material-ui/core/styles';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableContainer from '@material-ui/core/TableContainer';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import Paper from '@material-ui/core/Paper';

const useStyles = makeStyles({
    table: {
      minWidth: 650,
    },
});

    function createData(name, price) {
        return { name, price};
    }

    const rows = [
        createData('Kort hår', '385 kr'),
        createData('Halvlångt hår', '400 kr'),
        createData('Långt hår', '480 kr'),
        createData('Herrklippning', '245 kr'),
        createData('Barn: Pojke', '245 kr'),
        createData('Barn: Flicka', '300 kr'),
    ];

    function colordata(name, price) {
        return { name, price};
    }

    const rows2 = [
        colordata('Kort hår', '450 kr'),
        colordata('Halvlångt hår', '550 kr'),
        colordata('Långt hår', '600 kr'),
   
    ];

    function bleachdata(name, price) {
        return { name, price};
    }

    const rows3 = [
        bleachdata('Kort hår', '600 kr'),
        bleachdata('Halvlångt hår', '700 kr'),
        bleachdata('Långt hår', '800 kr'),
        bleachdata('Flera färger', '900 kr'),
    ];
  
    function stylingdata(name, price) {
        return { name, price};
    }

    const rows4 = [
        stylingdata('Håruppsättning', '600 kr'),
        stylingdata('Tvätt & styling', '280 kr'),
        stylingdata('Inpackning', '100 kr'),
    ];

    function otherdata(name, price) {
        return { name, price};
    }

    const rows5 = [
        otherdata('Permanent', '680 kr'),
        otherdata('Slingor i hätta', '580 kr'),
        otherdata('Brynformning', '100 kr'),
        otherdata('Brynformning med färg', '200 kr'),
    ];

function Prices (){
    const classes = useStyles();

    return(
        <div className="prices-container">
            <Navbar/>
            <div className="priceInfo-box">
                <div className="row">
                    <div className="col">
                        <p className="cutHeader">Behandlingar</p>
                        <p className="price-text" >
                            Behöver du hjälp med en håruppsättning inför bröllop? Kanske en ny hårfärg, 
                            en ny frisyr eller både och? Vill du bara unna sig något riktigt extra? <br/> 
                            Då har du kommit till rätt ställe!
                            <br/><br/>   
                            I menyn hittar du alla våra behandlingar, 
                            allt från klippning, färgning, uppsättning och mycket mer. Välkommen!
                        </p>              
                    </div>
                    
                    <div className="col">
                        <img className="hairstyleImg" src={hairstyle} alt="A hairstyle"/>
                    </div> 
                    <a href="https://www.bokadirekt.se/" target="_blank"> 
                        <button className="reserve-button-gallery">Boka</button>
                    </a>
                </div>
            </div>
            <div className="table-content">
                <div className="cut-table">
                    <TableContainer component={Paper}>
                        <Table className={classes.table} aria-label="simple table">
                            <TableHead>
                                <TableRow>
                                    <TableCell className="box-header">Klippning</TableCell>
                                    <TableCell className="box-header" align="left">Pris</TableCell>
                                </TableRow>
                            </TableHead>
                            <TableBody>
                                {rows.map((row) => (
                                <TableRow key={row.name}>
                                    <TableCell className="row-name" component="th" scope="row">
                                        {row.name}
                                    </TableCell>
                                    <TableCell className="row-price" align="left">{row.price}</TableCell>
                                </TableRow>
                                ))}
                            </TableBody>
                        </Table>
                    </TableContainer>
                </div>
       <div className="color-table">
                    <TableContainer component={Paper}>
                        <Table className={classes.table} aria-label="simple table">
                            <TableHead>
                                <TableRow>
                                    <TableCell className="box-header">Färg</TableCell>
                                    <TableCell className="box-header" align="left">Pris</TableCell>
                                </TableRow>
                            </TableHead>
                            <TableBody>
                                {rows2.map((rows2) => (
                                <TableRow key={rows2.name}>
                                    <TableCell className="row-name" component="th" scope="row">
                                        {rows2.name}
                                    </TableCell>
                                    <TableCell className="row-price" align="left">{rows2.price}</TableCell>
                                </TableRow>
                                ))}
                            </TableBody>
                        </Table>
                    </TableContainer>
                </div>                         
                <div className="bleach-table">
                    <TableContainer component={Paper}>
                        <Table className={classes.table} aria-label="simple table">
                            <TableHead>
                                <TableRow>
                                    <TableCell className="box-header">Folieslingor</TableCell>
                                    <TableCell className="box-header" align="left">Pris</TableCell>
                                </TableRow>
                            </TableHead>
                            <TableBody>
                                {rows3.map((rows3) => (
                                <TableRow key={rows3.name}>
                                    <TableCell className="row-name" component="th" scope="row">
                                        {rows3.name}
                                    </TableCell>
                                    <TableCell className="row-price" align="left">{rows3.price}</TableCell>
                                </TableRow>
                                ))}
                            </TableBody>
                        </Table>
                    </TableContainer>
                </div>
                <div className="styling-table">
                    <TableContainer component={Paper}>
                        <Table className={classes.table} aria-label="simple table">
                            <TableHead>
                                <TableRow>
                                    <TableCell className="box-header">Styling</TableCell>
                                    <TableCell className="box-header" align="left">Pris</TableCell>
                                </TableRow>
                            </TableHead>
                            <TableBody>
                                {rows4.map((rows4) => (
                                <TableRow key={rows4.name}>
                                    <TableCell className="row-name" component="th" scope="row">
                                        {rows4.name}
                                    </TableCell>
                                    <TableCell className="row-price" align="left">{rows4.price}</TableCell>
                                </TableRow>
                                ))}
                            </TableBody>
                        </Table>
                    </TableContainer>
                </div> 
                <div className="other-table">
                    <TableContainer component={Paper}>
                        <Table className={classes.table} aria-label="simple table">
                            <TableHead>
                                <TableRow>
                                    <TableCell className="box-header">Övriga behandlingar</TableCell>
                                    <TableCell className="box-header" align="left">Pris</TableCell>
                                </TableRow>
                            </TableHead>
                            <TableBody>
                                {rows5.map((rows5) => (
                                <TableRow key={rows5.name}>
                                    <TableCell className="row-name" component="th" scope="row">
                                        {rows5.name}
                                    </TableCell>
                                    <TableCell className="row-price" align="left">{rows5.price}</TableCell>
                                </TableRow>
                                ))}
                            </TableBody>
                        </Table>
                    </TableContainer>
                </div>                                                                         
            </div>
            <Footer/>
        </div>
    )
}
export default Prices;