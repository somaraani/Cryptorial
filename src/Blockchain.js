import { Button, Card, CardActionArea, CardContent, CardHeader, CardMedia, Divider, Grid, Link, List, ListItem, TextField, Typography } from '@material-ui/core';
import { sha256 } from 'js-sha256';
import { default as React, useEffect } from 'react';
import { Link as RouterLink } from 'react-router-dom';
import './App.css';
import blockchainImg from './imgs/blockchain.jpg';
import hashingImg from './imgs/hashing.jpg';
import miningImg from './imgs/mining.jpg';
import sampleImage from './imgs/sample.jpg';
import transaction from './imgs/transaction.PNG';

export class Sample extends React.Component {

  constructor() {
    super();

    this.state = {
      transactionList: [{}],
      nonce: 0,
      hashValue: "22e5acf5097cece4b60c900121ed475398083743c13ecfefc53baca2b84fd6e9"
    }
  }

  calculateHash = () => {
    console.log(this.state.transactionList);
    var text = "00706c95522c813684861d2afcb9ec62d837bef458b6e895e3efe4aaa381a1b2";

    var list = this.state.transactionList;
    if(list == null || list.length == 0) {
      list = [{}];
    }

    list.forEach(transaction => {
      text += transaction.senderId + transaction.receiverId + transaction.amount;
    });

    text += this.state.nonce;

    this.setState({ hashValue: sha256(text) });
  }

  addTransaction = () => {
    const list = this.state.transactionList;
    list.push({
      senderId: "",
      receiverId: "",
      amount: 0
    });
    this.setState({ transactionList: list }, () => this.calculateHash());
  }

  setTransaction(index, key, value) {
    const list = this.state.transactionList;
    const item = list[index];
    item[key] = value;
    this.setState({ transactionList: list }, () => this.calculateHash());
  }

  reset = () => {
    this.setState({
      transactionList: [],
      nonce: 0,
      hashValue: "22e5acf5097cece4b60c900121ed475398083743c13ecfefc53baca2b84fd6e9"
    }, () => {
      this.setState({transactionList: [{}]});
    });
  } 

  solve = () => {
    this.reset();
    this.setState({nonce: "helkasdlas"}, () => this.calculateHash());
  }

  numberInputChange = (e) => {
    e.target.value = e.target.value.replace(/[^0-9.-]/g, "");
  }

  render() {
    var solved;
    if (this.state.hashValue.charAt(0) == '0' && this.state.hashValue.charAt(1) == '0') {
      solved = <Typography style={{ textAlign: 'center', color: 'green' }} variant="h5">
        SOLVED
      </Typography>
    } else {
      solved = <Typography color='secondary' style={{ textAlign: 'center' }} variant="h5">
        NOT SOLVED
      </Typography>
    }

    return (
      <div>
        <Typography variant="body1">
          Begin by adding transactions to your block.
        </Typography>

        <br />

        {this.state.transactionList.map((transaction, index) =>
          <Grid container fullWidth spacing={1}>
            <Grid container item xs={4}>
              <TextField label="sender Id" onChange={(e) => this.setTransaction(index, "senderId", e.target.value)} fullWidth color="secondary" variant="filled" />
            </Grid>

            <Grid container item xs={4}>
              <TextField label="receiver Id" onChange={(e) => this.setTransaction(index, "receiverId", e.target.value)} fullWidth color="secondary" variant="filled" />
            </Grid>
            <Grid container item xs={4}>
              <TextField label="amount (number)" onChange={(e) => {this.numberInputChange(e); this.setTransaction(index, "amount", e.target.value)}} fullWidth color="secondary" variant="filled" />
            </Grid>
          </Grid>
        )}

        <br />

        <Button fullWidth variant="contained" onClick={this.addTransaction} color="secondary">
          Add Transaction
        </Button>

        <div style={{ marginTop: 50 }}>
          <Card>

            <CardHeader title="Sample Block" />

            <CardContent>
              <Typography color="secondary">Previous Hash:</Typography>
            00706c95522c813684861d2afcb9ec62d837bef458b6e895e3efe4aaa381a1b2 <br /> <br />
              <Typography color="secondary">Transactions:</Typography>
              {this.state.transactionList.map(transaction =>
                <div>
                  {transaction.senderId == null || transaction.senderId.trim().length == 0 ? "A" : transaction.senderId} to {transaction.receiverId == null || transaction.receiverId.trim().length == 0 ? "B" : transaction.receiverId}: {transaction.amount == null || transaction.amount == 0 ? 1 : transaction.amount} BTC
                <br />
                </div>
              )}

              <br />
              <Typography color="secondary">Nonce (try changing)</Typography>
              <TextField onChange={(e) => { this.setState({ nonce: e.target.value }, () => this.calculateHash()) }} value={this.state.nonce} defaultValue="0" fullWidth color="secondary" variant="filled" />
            </CardContent>
          </Card>
        </div>

        <br />
        <br />

        <Typography className="hash" variant="h6" color="secondary">
          output (SHA-256)
            </Typography>

        <Typography nowrap="false" className="hash" style={{ marginBottom: -30 }} variant="h5">
          {this.state.hashValue}
        </Typography>

        <Divider style={{ marginTop: 60 }}></Divider>

        <br />

        <Typography style={{ textAlign: 'center' }}>
          Solve this block by changing the nonce until you get a hash beginning with 2 0's
        </Typography>
        <br />

        {solved}

        <br />

        <Divider />

        <br /> <br />
        <Typography variant="body2">
          Don't worry if you can't get it quickly! This is a completely random process, and is what a miner does. It will keep trying values of the nonce until it gets the desired number of 0's. Once the block is solved, the miner will "post" its solution to the blockchain,
          where other miners will verify by calculating the hash of the block. The Block will then get added to the blockchain, and the process will repeat for the next block.
        </Typography>

        <br />


        <Grid container fullWidth spacing={1}>
          <Grid container item xs={6}>
            <Button variant="outlined" fullWidth onClick={this.reset} color="secondary">
              Reset Block
        </Button>
          </Grid>

          <Grid container item xs={6}>
            <Button variant="outlined" fullWidth onClick={this.solve} color="primary">
              Show a solved example
        </Button>
          </Grid>
        </Grid>


      </div>);
  }
}


export function Mining() {
  return (
    <div>

      <Typography variant="body1">
        Most cryptocurrencies are created by a process called mining. Mining is the process of "verifying" transactions in the block chain. Miners are rewarded
        for verifying those transactions with some cryptocurrency. A miner is generally a computer program, and will first verify all the transactions in the block,
        making sure that everyone sending money actually has that much money to spend. If you try to send more money than you have in your cryptocurrency wallet,
        then that transaction is invalid and will not be included in the block.
                </Typography>

      <br />

      <Typography variant="body1">
        Remember that the block chain consists of a block of records, with each block containing a number of transactions. Everytime a block is "verified" by a miner,
        it is added to the blockchain, and all new transactions will be recorded on the next block. Miners compete to verify and solve a block so that they can get
        the reward. From this, we can see that a transaction is only "processed", once a miner has successfully verified and solved a block containing that transaction.
        Once the block containing the transaction is added to the blockchain, it cannot be changed again.
      </Typography>

      <br />

      <Typography variant="body1">
        As more and more people start mining cryptocurrencies to get the reward, you can imagine that blocks would get created much quicker, since more people are competing
        at the same time to solve that block. This would cause inflation of the cryptocurrency, and so most cryptocurrencies require a proof of work along with verifying the transactions.
        Think of this proof of work as a very hard math puzzle the mining program needs to solve. Once it solves this puzzle, it will post the solution, along with the verified transactions
        to the blockchain. If this solution is valid, then the miner will get a reward, and the miners will start trying to solve the next block.
      </Typography>

      <br />

      <Typography variant="body1">

        For bitcoin, the proof of work is designed to take around 10 minutes. If a lot of people are competing to
        mine the bitcoin blockchain, and the time to solve it drops under 10 minutes, then the next block will have a harder "puzzle" to solve so that it will take 10 minutes.
        This keeps the supply of bitcoin steady.
          </Typography>

      <br />

      <Typography variant="body1">
        What exactly is this puzzle that miners need to solve? It involves hashing! As we saw in the last section, changing only one letter in the input completely changed the output hash. Lets say
        our blockchain contained the following 3 transactions, and we took the hash of the text in the block.
      </Typography>

      <br />

      <Divider />

      <Typography variant="body1">
        <ul>
          <li>User A to User B: 1 BTC</li>
          <li>User B to User C: 2 BTC</li>
          <li>User C to user D: 1 BTC</li>
        </ul>
      </Typography>

      <Divider />
      <br />
      <Typography className="hash" variant="h6" color="secondary">
        output (SHA-256)
            </Typography>

      <Typography nowrap="false" className="hash" variant="h5">
        2c15326fa01fe0491f4f6f4f040f064b275395ef16f37724f14e01f75397071f

      </Typography>

      <Divider style={{ marginTop: 60 }}></Divider>

      <br />

      <Typography variant="body1">

        The "difficulty" of the puzzle can be set by requiring that the output hash has a certain amount of 0's at the beggining. For the sake of this demonstration,
        we will say that our hash output requires 2 0's to be valid. Our hash currently has no 0's, and the way the hash is changed is by using a "nonce" value. The
        nonce is the solution of the puzzle, and is included in the input. Adding the nonce to our last example, we have:
      </Typography>

      <br />

      <Divider />
      <br />

      <Typography variant="body1">
        <ul>
          <li>User A to User B: 1 BTC</li>
          <li>User B to User C: 2 BTC</li>
          <li>User C to user D: 1 BTC</li>
          <li><span className="highlight">Nonce: 38jvasde3avma</span></li>
        </ul>
      </Typography>


      <Divider></Divider>
      <br />
      <Typography className="hash" variant="h6" color="secondary">
        output (SHA-256)
            </Typography>

      <Typography nowrap="false" className="hash" variant="h5">
        00706c95522c813684861d2afcb9ec62d837bef458b6e895e3efe4aaa381a1b2
      </Typography>

      <Divider style={{ marginTop: 60 }}></Divider>

      <br />

      <Typography>
        Changing the value of the nonce to anything else will completely change the hash. The way miners work is by guessing different values of the nonce until the required numbers of 0 is present in the hash.
        As you can imagine, for a large number of 0's, this is a very time consuming process, even for a computer that can try millions of combinations in seconds.

        Each bitcoin block contains a few things. These are as follow:

          <ul>
          <li>
            The hash output of the preceeding block
            </li>

          <li>
            A timestamp of when the block was created
            </li>

          <li>
            All the transactions included in the block
          </li>

          <li>
            The current difficulty of the proof of work
          </li>

          <li>
            The solution of the proof of work
          </li>

        </ul>
      </Typography>

      <br />

      <Typography variant="body1">
        Beyond just our transactions, our block contains the hash of the previous block. This is what makes cryptocurrencies secure. A user's balance is calculated by going to every previous block,
        and summing that user's transactions. If someone tried to change a transaction in a past block, then that block's hash will change, which will result in the next block's hash being wrong, and so on. Therefore to change a transaction,
        someone would have to go back and change every block, calculating a new nonce value and solving every puzzle, in only 10 minutes, before the next block is calculated. This is almost impossible with todays technology.
      </Typography>

      <br />

      <Typography variant="body1">
        Although solving a the puzzle is very difficult, confirming the result is not. Once we have the "correct" nonce value, all we have to do is generate the SHA-256 hash of that block using that value, and we can verify
        that the puzzle was solved correctly. Once a miner presents a solution to the block, every other miner will check this result to validate it. If the majority (51%) of the miners agree that the puzzle is solved,
        then it is added to the blockchain, and the miners will begin working on the next block.
      </Typography>

      <br />

      <Typography variant="body1">
        The next section will have you create a sample blockchain block, and try solving the nonce yourself to see how it works.

      </Typography>

      <br />

      <RouterLink to="/technology/sample">
        <Button variant="outlined" color="secondary">
          Create sample blockchain
            </Button>
      </RouterLink>
    </div>
  );
}


export function Hashing() {
  const [hashOut, setOut] = React.useState("e543fd2024389d2011ed92d9a4f662ab5228367d29a50115d45fb868a75153a1");

  function convertSHA(e) {
    setOut(sha256(e.target.value));
  };

  return (
    <div>
      <Typography variant="body1">
        Before you can understand what mining is, you need to learn about hashing. Hashing is a process that encrypts data using a specified function. This function can be anything,
                for example, imagine a hashing function where you just replace each letter with its place in the alphabet. Then the word <span className="highlight">hello</span> would become
                <span className="highlight"> 8 5 12 12 15.</span> Lets take it a step further, and make our hashing function sum the numbers. Then the hash of <span className="highlight">hello</span> would be
                <span className="highlight"> 52.</span> Notice now that if you change ANY letter in the word hello, you will have a completely different hash.
            </Typography>

      <br />

      <Typography variant="body1">
        That is a rather simple hashing function. The hashing function that bitcoin uses is called SHA-256. 256 because the output will always be 256 bits, or 64 hexadecmial digits. A hexadecimal can
                have values from (0 - 9), and (A - F). SHA-256 uses a complicated process to create the hashes. You can read more about it <Link target="_blank" href="https://en.wikipedia.org/wiki/SHA-2">here.</Link>
      </Typography>

      <br />

      <Typography variant="body1">
        The follow program will encrypt any text you write to SHA-256. Notice how changing only one letter will result in a completely different output.
            </Typography>

      <br />

      <TextField
        id="standard-multiline-static"
        label="Input"
        color="secondary"
        multiline
        onChange={convertSHA}
        variant="filled"
        rows={2}
        fullWidth
        style={{ marginBottom: 60 }}
        defaultValue="Try changing this text!"
      />

      <br />
      <Typography className="hash" variant="h6" color="secondary">
        output (SHA-256)
            </Typography>

      <Typography nowrap="false" className="hash" variant="h5">
        {hashOut}
      </Typography>

      <Divider style={{ marginTop: 60 }}></Divider>

      <br />

      <Typography variant="body1">
        Now that you know what hashing is, you're ready to learn about mining!
            </Typography>
      <br />

      <RouterLink to="/technology/mining">
        <Button variant="outlined" color="secondary">
          Learn about mining
            </Button>
      </RouterLink>

    </div>
  );
}

export function Technology() {
  return (
    <div>
      <Typography variant="body1">
        Cryptocurrencies are built upon many technologies. The following is a list of the most important concepts that make cryptocurrencies secure and anonymous.
        You can read any of the following topics, but if you are a beginner to cryptocurrencies then we recommend reading them in the following order.
            </Typography>

      <br />

      <Grid container alignItems="stretch">

        <Grid item component={Card} style={{ margin: 16, width: '100%'}} md >
          <CardActionArea >
            <RouterLink to="/technology/blockchain" style={{ textDecoration: 'none', color: 'inherit' }}>
              <CardMedia
                style={{ height: 200 }}
                image={blockchainImg}
                title="Blockchain"
              />

              <CardContent>
                <Typography gutterBottom variant="h5" component="h2">
                  Blockchain
                </Typography>
                <Typography variant="body2" color="textSecondary" component="p">
                  Introduction to what the blockchain is, and its siginificance to cryptocurrencies.
                </Typography>
              </CardContent>
            </RouterLink>
          </CardActionArea>
        </Grid>

        <Grid item component={Card} style={{ margin: 16, width: '100%' }} md>
          <CardActionArea>
            <RouterLink to="/technology/hashing" style={{ textDecoration: 'none', color: 'inherit' }}>

              <CardMedia
                style={{ height: 200 }}
                title="Hashing"
                image={hashingImg}
              />

              <CardContent>
                <Typography gutterBottom variant="h5" component="h2">
                  Hashing
                </Typography>

                <Typography variant="body2" color="textSecondary" component="p">
                  Hashing is a process used extensively in blockchain, and is crucial to mining.
               </Typography>
              </CardContent>
            </RouterLink>
          </CardActionArea>
        </Grid>
        
      </Grid>

      <Grid container alignItems="stretch">

        <Grid item component={Card} style={{ margin: 16, width: '100%' }} md>
          <CardActionArea>
            <RouterLink to="/technology/mining" style={{ textDecoration: 'none', color: 'inherit' }}>

              <CardMedia
                style={{ height: 200 }}
                title="Mining"
                image={miningImg}
              />

              <CardContent>
                <Typography gutterBottom variant="h5" component="h2">
                  Mining
                </Typography>

                <Typography variant="body2" color="textSecondary" component="p">
                  Mining is the process that creates cryptocurrency, and validates transactions.
               </Typography>
              </CardContent>
            </RouterLink>
          </CardActionArea>
        </Grid>

        <Grid item component={Card} style={{ margin: 16, width: '100%' }} md>
          <CardActionArea>
            <RouterLink to="/technology/sample" style={{ textDecoration: 'none', color: 'inherit' }}>

              <CardMedia
                style={{ height: 200 }}
                title="Sample Blockchain"
                image={sampleImage}
              />

              <CardContent>
                <Typography gutterBottom variant="h5" component="h2">
                  Sample Blockchain
                </Typography>

                <Typography variant="body2" color="textSecondary" component="p">
                  Interactive sample blockchain that will help you understand how miners work.
               </Typography>
              </CardContent>
            </RouterLink>
          </CardActionArea>
        </Grid>
      </Grid>
    </div>
  );
}

export function Blockchain() {
  return (
    <div>

      <Typography variant="body1">
        Unlike a tranditional currency that is regulated by a bank, cryptocurrencies are decentralized, meaning there isn't a one central location where transactions are hosted.
        Instead, cryptocurrency transactions are recorded on something called the blockchain. As the name implies, blockchain consists of a "chain" of digital "blocks".
            </Typography>

      <br />

      <Typography variant="body1">
        Each block contains a collection of transaction (a digital receipt), and everyone using the blockchain has a copy of all these receipts (the blockchain). Everytime a
        new block is created it is added to the chain, and it cannot be changed again. Everyone using the blockchain gets a copy of the new block. Because everyone using the blockchain
        has a list of the transactions, cryptocurrencies are secure, since there is no way amounts can be fabricated or lied about.
            </Typography>

      <br />

      <Typography variant="body1">
        Cryptocurrencies are also completely anonymous. Cryptocurrency transactions identify senders and receivers using addresses. Each user has a unique address, and a private key
        that they can use to sign into their digital cryptocurrency wallet to send money to someone else. Addresses are not tied to a name or address, and so it is extremely difficult
        to find out where the money is coming from or going to.
            </Typography>

      <br />

      <Typography variant="body1">
        For example, Bitcoin block 656055 (which can be viewed publically at this <Link href="https://www.blockchain.com/btc/block/0000000000000000000d4ca3debe326d85b5b8cfd7477ed5256d097745371e9c?page=1" target="_blank" variant="body1">link.</Link> )
                Contains the following transaction:
            </Typography>

      <br />

      <img style={{ justifyContent: 'center', display: 'flex' }} src={transaction} />

      <br />

      <Typography variant="body1">
        This tells us that the user with ID <span className="highlight">bc1qw...</span> sent user <span className="highlight">3QJfg...</span> 0.18 BTC or $2,785.71 USD on 2020-11-08 08:14, and that <span className="highlight">bc1qw</span> received
            1.685 BTC back (imagine this as paying at a grocery store and getting change back).
            </Typography>

      <br />

      <Typography variant="body1">
        For bitcoin, each block contains a maximum of 4 MB of data. The blocks are created by "miners". Mining is the process which creates bitcoin, and seals blocks. Before you learn about mining, you must know what
        hashing is. Click the link below to learn about hashing!
            </Typography>


      <br />

      <RouterLink to="/technology/hashing">
        <Button variant="outlined" color="secondary">
          Learn about hashing
            </Button>
      </RouterLink>



    </div>

  );
}
