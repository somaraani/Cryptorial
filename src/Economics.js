import { LinearProgress, Typography } from '@material-ui/core';
import { DataGrid } from '@material-ui/data-grid';
import { makeStyles } from '@material-ui/core/styles';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableContainer from '@material-ui/core/TableContainer';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import Paper from '@material-ui/core/Paper';

import { default as React } from 'react';

class Economics extends React.Component {

    constructor() {
        super()

        this.state = {
            coins: []
        }

        const CoinGecko = require('coingecko-api');
        this.CoinGeckoClient = new CoinGecko();
    }

    fetchCoins = async () => {
        const coins = await this.CoinGeckoClient.coins.all();
        this.setState({coins: coins.data});
        console.log(coins.data);
    }

    componentDidMount() {
        this.fetchCoins();
    }

    render() {
        var table;

        if(this.state.coins.length == 0) {
            table = <div>
                    <LinearProgress color="secondary" />
                    <Typography style={{textAlign: 'center', marginTop: 20}}>Fetching Coins...</Typography>
                </div>
        } else {
            table = <TableContainer component={Paper}>
            <Table>
                <TableHead>
                    <TableRow>
                        <TableCell> <Typography  variant="h6" color='secondary'>Name</Typography> </TableCell>
                        <TableCell align="right"><Typography variant="h6" color='secondary'>Price (CAD)</Typography></TableCell>
                        <TableCell align="right"><Typography  variant="h6" color='secondary'>Market Cap (CAD)</Typography></TableCell>
                        <TableCell align="right"><Typography  variant="h6" color='secondary'>24h Change (%)</Typography></TableCell>
                    </TableRow>
                </TableHead>
                <TableBody>
                    {this.state.coins.map((row) => (
                        <TableRow key={row.name}>
                            <TableCell component="th" scope="row">
                               <Typography><b>{row.name} </b></Typography>
                            </TableCell>
                            <TableCell align="right"><Typography>{row.market_data?.current_price?.cad}</Typography></TableCell>
                            <TableCell align="right"><Typography>{row.market_data?.market_cap?.cad}</Typography></TableCell>
                            <TableCell style={{color: (row.market_data?.price_change_24h >= 0) ? 'lightgreen' : 'red' }} align="right"><Typography>{row.market_data?.price_change_24h}</Typography></TableCell>
                        </TableRow>
                    ))}
                </TableBody>
            </Table>
        </TableContainer>
        }

        return (
            <div>
                <h1>Coin List</h1>
                {table}
            </div>
        );
    }

}

export default Economics;