import { Button, CircularProgress, Dialog, DialogActions, DialogContent, DialogTitle, Grid, LinearProgress, Tooltip, Typography } from '@material-ui/core';
import Paper from '@material-ui/core/Paper';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableContainer from '@material-ui/core/TableContainer';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import ArrowDownwardIcon from '@material-ui/icons/ArrowDownward';
import ArrowUpwardIcon from '@material-ui/icons/ArrowUpward';
import HelpIcon from '@material-ui/icons/HelpOutline';
import { CanvasJSChart } from 'canvasjs-react-charts';
import { default as React } from 'react';


class Economics extends React.Component {

    constructor(props) {
        super(props)

        this.state = {
            coins: [],
            sort: 'price',
            orderUp: true,
            dialogOpen: false,
            dialogTopic: '',
            selectedRow: -1,
            historicalChange: [],
            historicalDuration: 1
        }

        const CoinGecko = require('coingecko-api');
        this.CoinGeckoClient = new CoinGecko();
    }

    fetchCoins = async () => {
        const coins = await this.CoinGeckoClient.coins.all();
        coins.data.sort((a, b) => b.market_data?.current_price?.cad - a.market_data?.current_price?.cad);
        this.setState({ coins: coins.data });
        console.log(coins.data)
    }

    componentDidMount() {
        this.fetchCoins();
    }

    sortByPrice = () => {
        this.setState({
            selectedRow: -1,
            coins: [],
            historicalChange: []
        })

        const coins = this.state.coins;
        this.setState({ orderUp: (this.state.sort == 'price') ? !this.state.orderUp : true }, () => {
            if (this.state.orderUp) {
                coins.sort((a, b) => b.market_data?.current_price?.cad - a.market_data?.current_price?.cad);
            } else {
                coins.sort((a, b) => a.market_data?.current_price?.cad - b.market_data?.current_price?.cad);
            }
            this.setState({ coins: coins });
            this.setState({ sort: 'price' });
        });
    }

    getHistorical = async (coin, days) => {
        this.setState({historicalChange: []});
        const historical = await this.CoinGeckoClient.coins.fetchMarketChart(coin, {days: days, vs_currency: 'CAD'});
        const dataPoints = [];

        this.setState({historicalDuration: days});

        historical.data.prices.forEach((element) => {
            dataPoints.push({
                x: new Date(element[0]),
                y: element[1]
            });
        });

        this.setState({ historicalChange: dataPoints });
    }

    sortByCap = () => {
        this.setState({
            selectedRow: -1,
            historicalChange: []
        })

        const coins = this.state.coins;
        this.setState({ orderUp: (this.state.sort == 'market') ? !this.state.orderUp : true }, () => {
            if (this.state.orderUp) {
                coins.sort((a, b) => b.market_data?.market_cap?.cad - a.market_data?.market_cap?.cad);
            } else {
                coins.sort((a, b) => a.market_data?.market_cap?.cad - b.market_data?.market_cap?.cad);
            }
            this.setState({ coins: coins });
            this.setState({ sort: 'market' });
        });
    }

    expandCurrency = (index) => {
        this.setState({ selectedRow: index, historicalChange: [] }, () => {
            this.getHistorical(this.state.coins[index].id, 1);
        }
        );
    }

    render() {

        //chart options
        const chartOptions = {
            theme: (this.props.isDark) ? "dark2" : "light2",
            title: {
                text: "Price Change"
            },
            backgroundColor: (this.props.isDark) ? "#424242" : "#FFFFFF",
            height: 300,
            axisY: {
                includeZero: false,
                title: "Price in CAD",
                prefix: "$",
            },
            data: [{
                type: "line",
                lineColor: "#F50057",
                xValueFormatString: "MMM YYYY",
                yValueFormatString: "$#,##0.00",
                dataPoints: this.state.historicalChange
            }]
        }

        //Main Table
        var table;

        if (this.state.coins.length == 0) {
            table = <div>
                <LinearProgress color="secondary" />
                <Typography style={{ textAlign: 'center', marginTop: 20 }}>Fetching Coins...</Typography>
            </div>
        } else {
            table = <TableContainer component={Paper}>
                <Table>
                    <TableHead>
                        <TableRow>
                            <TableCell> <Typography variant="h6" color='inherit'>Name</Typography> </TableCell>
                            <TableCell align="center">
                                <Typography variant="h6" color='inherit'>

                                    {this.state.sort === 'price' ? (this.state.orderUp)
                                        ?
                                        <Tooltip title="Sorting ascending by price">
                                            <ArrowUpwardIcon style={{ color: 'lightgreen', verticalAlign: 'middle', display: 'inline-flex' }} />
                                        </Tooltip>
                                        :
                                        <Tooltip title="Sorting ascending by price">
                                            <ArrowDownwardIcon style={{ color: 'red', verticalAlign: 'middle', display: 'inline-flex' }} />
                                        </Tooltip>
                                        :
                                        null}

                                    <Tooltip title="Sort by Price">
                                        <Button onClick={this.sortByPrice}>
                                            <Typography style={{ textDecoration: 'underline' }} variant="h6" color='inherit'>
                                                Price (CAD)
                                            </Typography>
                                        </Button>
                                    </Tooltip>
                                    <Tooltip title="Learn about price">
                                        <HelpIcon onClick={() => this.setState({ dialogOpen: true, dialogTopic: 'Price' })} style={{ cursor: 'pointer', verticalAlign: 'middle', display: 'inline-flex' }} color='secondary' />
                                    </Tooltip>

                                </Typography>
                            </TableCell>
                            <TableCell align="center">
                                <Typography variant="h6" color='inherit'>

                                    {this.state.sort === 'market' ? (this.state.orderUp)
                                        ?
                                        <Tooltip title="Sorting ascending by market cap">
                                            <ArrowUpwardIcon style={{ color: 'lightgreen', verticalAlign: 'middle', display: 'inline-flex' }} />
                                        </Tooltip>
                                        :
                                        <Tooltip title="Sorting ascending by market cap">
                                            <ArrowDownwardIcon style={{ color: 'red', verticalAlign: 'middle', display: 'inline-flex' }} />
                                        </Tooltip>
                                        :
                                        null}

                                    <Tooltip title="Sort by Market Cap">
                                        <Button onClick={this.sortByCap}>
                                            <Typography style={{ textDecoration: 'underline' }} variant="h6" color='inherit'>
                                                Market Cap (CAD)
                                        </Typography>
                                        </Button>
                                    </Tooltip>
                                    <Tooltip title="Learn about market cap">
                                        <HelpIcon onClick={() => this.setState({ dialogOpen: true, dialogTopic: 'Market Cap' })} style={{ cursor: 'pointer', verticalAlign: 'middle', display: 'inline-flex' }} color='secondary' />
                                    </Tooltip>
                                </Typography>
                            </TableCell>
                            <TableCell align="center"><Typography variant="h6" color='inherit'> 24h Change
                             <Tooltip title="Learn about 24h change">
                                    <HelpIcon onClick={() => this.setState({ dialogOpen: true, dialogTopic: '24h Change' })} style={{ marginLeft: '7px', cursor: 'pointer', verticalAlign: 'middle', display: 'inline-flex' }} color='secondary' />
                                </Tooltip></Typography>
                            </TableCell>
                        </TableRow>
                    </TableHead>
                    <TableBody>
                        {this.state.coins.map((row, index) => (

                            (this.state.selectedRow == index) ?

                                <TableRow key={row.id} spacing={1}>
                                    <TableCell style={{ paddingTop: 30, paddingBottom: 40 }} colSpan={4} component="th" scope="row">


                                        <Grid container>
                                            <Grid item xs={5}>
                                                <Typography variant='h6'>
                                                    <img style={{ verticalAlign: 'middle', display: 'inline-flex', marginRight: 10 }} src={row.image.small}></img>
                                                    {row.name} ({row.symbol})
                                        </Typography>

                                                <br />

                                                <div style={{ paddingLeft: 60 }}>
                                                    <Typography variant='body1'>
                                                        Price: ${row.market_data?.current_price?.cad} <br />
                                                         Circulating Supply: {row.market_data?.circulating_supply} <br />
                                                        Market Cap: ${row.market_data?.market_cap?.cad} <br />
                                                    </Typography>

                                                    <br />

                                                    <Typography variant='subtitle1' color='textSecondary'>
                                                        Select Price Change Duration
                                                    </Typography>

                                                    <Button variant="outlined" onClick={() => this.getHistorical(row.id, 1)} disabled={this.state.historicalDuration === 1} style={{margin: 10, marginLeft: 0}} color="secondary"> Daily </Button>
                                                    <Button variant="outlined" onClick={() => this.getHistorical(row.id, 30)} disabled={this.state.historicalDuration === 30} style={{margin: 10}} color="secondary"> Monthly </Button>
                                                    <Button variant="outlined" onClick={() => this.getHistorical(row.id, 365)} disabled={this.state.historicalDuration === 365} style={{margin: 10}} color="secondary"> Yearly </Button>


                                                </div>



                                            </Grid>

                                            <Grid item xs={7}>
                                                {this.state.historicalChange.length > 0
                                                    ?
                                                    <CanvasJSChart options={chartOptions}
                                                        onRef={ref => this.chart = ref}
                                                    />
                                                    :
                                                    <div>
                                                        <CircularProgress color="secondary" />
                                                        <Typography>Loading Chart...</Typography>                    
                                                    </div>

                                                }
                                            </Grid>
                                        </Grid>


                                    </TableCell>
                                </TableRow>

                                :

                                <TableRow hover onClick={() => this.expandCurrency(index)} style={{ cursor: 'pointer' }} key={row.id}>
                                    <TableCell component="th" scope="row">
                                        <Typography variant="body1" color='inherit'>{row.name}</Typography>
                                    </TableCell>
                                    <TableCell align="center"><Typography>{row.market_data?.current_price?.cad}</Typography></TableCell>
                                    <TableCell align="center"><Typography>{row.market_data?.market_cap?.cad}</Typography></TableCell>
                                    <TableCell align="center" style={{ color: (row.market_data?.price_change_percentage_24h >= 0) ? 'lightgreen' : 'red' }} ><Typography>{row.market_data?.price_change_percentage_24h > 0 ? "+" : ""}{row.market_data?.price_change_percentage_24h}%</Typography></TableCell>
                                </TableRow>
                        ))}
                    </TableBody>
                </Table>
            </TableContainer>
        }

        //helper dialogs

        var dialogContent;

        if (this.state.dialogTopic === 'Price') {
            dialogContent = <DialogContent dividers>
                <Typography gutterBottom>
                    This term denotes the price of a single currency, in terms of CAD. In other words, it is how much people are willing to pay for a single unit of this currency.
                </Typography>
                <br />
                <Typography gutterBottom>
                    While "real" currencies such as the American Dollar are backed by government agencies, cryptocurrencies are not backed and have no actual worth.
                    Insted, their value is strictly determined by the market price, which fluctuates much like stocks. The more people buy the cryptocurrency,
                    the more its value increases, and if lots of people sell it, then the value decreases.
                </Typography>
            </DialogContent>
        } else if (this.state.dialogTopic === 'Market Cap') {
            dialogContent = <DialogContent dividers>
                <Typography gutterBottom>
                    Market cap, or "market capatalization", measures the total value of a cryptocurrency. This is calculated by multiplying the value of a single unit, by the number of
                    coins currently in circulation.
            </Typography>
                <br />
                <Typography gutterBottom>
                    This metric is used by investors to determine the "safety" of investing in a cryptocurrency. Currencies with larger market caps are considered safer since they are less likely to fail.
            </Typography>
            </DialogContent>
        } else {
            dialogContent = <DialogContent dividers>
                <Typography gutterBottom>
                    The 24h change measures the change in the price of the coin in the last 24 hours.
            </Typography>
                <br />
                <Typography gutterBottom>
                    This metric can be used to determine the short term change of a cryptocurrency, and is useful for investors to see how their currencies are performing day to day.
            </Typography>
            </DialogContent>
        }


        return (
            <div>
                <Dialog onClose={() => { this.setState({ dialogOpen: false }) }} open={this.state.dialogOpen}>
                    <DialogTitle id="customized-dialog-title" onClose={() => this.setState({ dialogOpen: false })}>
                        {this.state.dialogTopic}
                    </DialogTitle>
                    {dialogContent}
                    <DialogActions>
                        <Button autoFocus onClick={() => this.setState({ dialogOpen: false })} color="secondary">
                            Close
                        </Button>
                    </DialogActions>
                </Dialog>
                <Typography>This list shows 50 popular cryptocurrencies. Click on the <span style={{ textDecoration: "underline" }}>underlined</span> headers to sort by that column, and click
                on any of the help (<HelpIcon style={{ verticalAlign: 'middle', display: 'inline-flex' }} color='secondary' />) icons to learn more about that term. Click on any of the rows to learn more about the currency! </Typography>
                <br />
                {table}
            </div>
        );
    }

}
export default Economics;