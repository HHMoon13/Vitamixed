import React from 'react';
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
    minWidth: 200,
  },
});

const  NavTabs = (props) => {

    const IngrediItems = [];
    const classes = useStyles();
    console.log(props.data["ingredients"])

    // for (const [index, value] of props.data["ingredients"]) {
    //     IngrediItems.push(<li>value</li> );
    // }
        return (
                <div class="card card-nav-tabs">
                    <div class="card-header card-header-primary">
                            <div class="nav-tabs-wrapper d-flex justify-content-center" >
                                <ul class="nav nav-tabs" data-tabs="tabs">
                                    <li class="tab-item">
                                        <a class="nav-link active" href="#ingredients" data-toggle="tab">
                                            <i class="material-icons">local_dining</i>
                                            INGREDIENTS
                                        </a>
                                    </li>
                                    <li class="tab-item">
                                        <a class="nav-link" href="#nutritions" data-toggle="tab">
                                            <i class="material-icons">grass</i>
                                            NUTRITIONS
                                        </a>
                                    </li>
                                   
                                </ul>
                            </div>
                        </div>
                   
                    <div class="card-body">
                        <div class="tab-content text-center" >
                            <div class="tab-pane active" id="ingredients">
                               
                                <Table className={classes.table} size="small" aria-label="simple table" >
                                    <TableBody>
                                    {props.data["ingredients"].map((row) => (
                                        <TableRow key={row}>
                                            <TableCell component="th" scope="row">
                                                {<lis>{row}</lis>}
                                            </TableCell>
                                        </TableRow>
                                    ))}
                                    </TableBody>
                                </Table>
                             
                              
                            </div>
                            <div class="tab-pane" id="nutritions">
                            <ul>
                                {props.data["nutritions"].map((item) =>
                                   <li>{item}</li>
                                )}
                              </ul>
                            </div>
                           
                        </div>
                    </div>
                </div>  
                
  );
}

export default NavTabs;