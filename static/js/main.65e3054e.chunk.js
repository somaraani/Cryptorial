(this.webpackJsonpcryptorial=this.webpackJsonpcryptorial||[]).push([[0],{147:function(e,t,n){},165:function(e,t){},167:function(e,t){},186:function(e,t,n){"use strict";n.r(t);var a=n(2),c=n(0),i=n.n(c),o=n(12),s=n.n(o),r=(n(147),n(35)),l=n(11),h=n(125),d=n(50),j=n(264),b=n(254),u=n(129),g=n(265),x=n(36),m=n(192),y=n(269),O=n(238),p=n(245),f=n(250),v=n(251),k=n(247),w=n(270),C=n(263),T=n(248),B=n(249),S=n(243),N=n(253),A=n(261),I=n(130),H=n(17),L=n(124),z=n(262),D=n(120),E=n.n(D),R=n(121),M=n.n(R),U=n(122),_=n.n(U),W=n(117),V=n.n(W),q=n(118),P=n.n(q),F=n(119),G=n.n(F),J=n(4),Y=n(23),Q=n(14),$=(n(97),n(45)),K=n(46),X=n(59),Z=n(58),ee=n(267),te=n(244),ne=n(246),ae=n(88),ce=n.p+"static/media/blockchain.f9a1760d.jpg",ie=n.p+"static/media/hashing.cbc51e26.jpg",oe=n.p+"static/media/mining.eac784fc.jpg",se=n.p+"static/media/sample.61e356cf.jpg",re=n.p+"static/media/transaction.31c5eb05.PNG",le=function(e){Object(X.a)(n,e);var t=Object(Z.a)(n);function n(){var e;return Object($.a)(this,n),(e=t.call(this)).calculateHash=function(){console.log(e.state.transactionList);var t="00706c95522c813684861d2afcb9ec62d837bef458b6e895e3efe4aaa381a1b2",n=e.state.transactionList;null!=n&&0!=n.length||(n=[{}]),n.forEach((function(e){t+=e.senderId+e.receiverId+e.amount})),t+=e.state.nonce,e.setState({hashValue:Object(ae.sha256)(t)})},e.addTransaction=function(){var t=e.state.transactionList;t.push({senderId:"",receiverId:"",amount:0}),e.setState({transactionList:t},(function(){return e.calculateHash()}))},e.reset=function(){e.setState({transactionList:[],nonce:0,hashValue:"22e5acf5097cece4b60c900121ed475398083743c13ecfefc53baca2b84fd6e9"},(function(){e.setState({transactionList:[{}]})}))},e.solve=function(){e.reset(),e.setState({nonce:"helkasdlas"},(function(){return e.calculateHash()}))},e.numberInputChange=function(e){e.target.value=e.target.value.replace(/[^0-9.-]/g,"")},e.state={transactionList:[{}],nonce:0,hashValue:"22e5acf5097cece4b60c900121ed475398083743c13ecfefc53baca2b84fd6e9"},e}return Object(K.a)(n,[{key:"setTransaction",value:function(e,t,n){var a=this,c=this.state.transactionList;c[e][t]=n,this.setState({transactionList:c},(function(){return a.calculateHash()}))}},{key:"render",value:function(){var e,t=this;return e="0"==this.state.hashValue.charAt(0)&&"0"==this.state.hashValue.charAt(1)?Object(a.jsx)(x.a,{style:{textAlign:"center",color:"green"},variant:"h5",children:"SOLVED"}):Object(a.jsx)(x.a,{color:"secondary",style:{textAlign:"center"},variant:"h5",children:"NOT SOLVED"}),Object(a.jsxs)("div",{children:[Object(a.jsx)(x.a,{variant:"body1",children:"Begin by adding transactions to your block."}),Object(a.jsx)("br",{}),this.state.transactionList.map((function(e,n){return Object(a.jsxs)(O.a,{container:!0,fullWidth:!0,spacing:1,children:[Object(a.jsx)(O.a,{container:!0,item:!0,xs:4,children:Object(a.jsx)(ee.a,{label:"sender Id",onChange:function(e){return t.setTransaction(n,"senderId",e.target.value)},fullWidth:!0,color:"secondary",variant:"filled"})}),Object(a.jsx)(O.a,{container:!0,item:!0,xs:4,children:Object(a.jsx)(ee.a,{label:"receiver Id",onChange:function(e){return t.setTransaction(n,"receiverId",e.target.value)},fullWidth:!0,color:"secondary",variant:"filled"})}),Object(a.jsx)(O.a,{container:!0,item:!0,xs:4,children:Object(a.jsx)(ee.a,{label:"amount (number)",onChange:function(e){t.numberInputChange(e),t.setTransaction(n,"amount",e.target.value)},fullWidth:!0,color:"secondary",variant:"filled"})})]})})),Object(a.jsx)("br",{}),Object(a.jsx)(te.a,{fullWidth:!0,variant:"contained",onClick:this.addTransaction,color:"secondary",children:"Add Transaction"}),Object(a.jsx)("div",{style:{marginTop:50},children:Object(a.jsxs)(p.a,{children:[Object(a.jsx)(ne.a,{title:"Sample Block"}),Object(a.jsxs)(k.a,{children:[Object(a.jsx)(x.a,{color:"secondary",children:"Previous Hash:"}),"00706c95522c813684861d2afcb9ec62d837bef458b6e895e3efe4aaa381a1b2 ",Object(a.jsx)("br",{})," ",Object(a.jsx)("br",{}),Object(a.jsx)(x.a,{color:"secondary",children:"Transactions:"}),this.state.transactionList.map((function(e){return Object(a.jsxs)("div",{children:[null==e.senderId||0==e.senderId.trim().length?"A":e.senderId," to ",null==e.receiverId||0==e.receiverId.trim().length?"B":e.receiverId,": ",null==e.amount||0==e.amount?1:e.amount," BTC",Object(a.jsx)("br",{})]})})),Object(a.jsx)("br",{}),Object(a.jsx)(x.a,{color:"secondary",children:"Nonce (try changing)"}),Object(a.jsx)(ee.a,{onChange:function(e){t.setState({nonce:e.target.value},(function(){return t.calculateHash()}))},value:this.state.nonce,defaultValue:"0",fullWidth:!0,color:"secondary",variant:"filled"})]})]})}),Object(a.jsx)("br",{}),Object(a.jsx)("br",{}),Object(a.jsx)(x.a,{className:"hash",variant:"h6",color:"secondary",children:"output (SHA-256)"}),Object(a.jsx)(x.a,{nowrap:"false",className:"hash",style:{marginBottom:-30},variant:"h5",children:this.state.hashValue}),Object(a.jsx)(T.a,{style:{marginTop:60}}),Object(a.jsx)("br",{}),Object(a.jsx)(x.a,{style:{textAlign:"center"},children:"Solve this block by changing the nonce until you get a hash beginning with 2 0's"}),Object(a.jsx)("br",{}),e,Object(a.jsx)("br",{}),Object(a.jsx)(T.a,{}),Object(a.jsx)("br",{})," ",Object(a.jsx)("br",{}),Object(a.jsx)(x.a,{variant:"body2",children:"Don't worry if you can't get it quickly! This is a completely random process, and is what a miner does. It will keep trying values of the nonce until it gets the desired number of 0's. Once the block is solved, the miner will \"post\" its solution to the blockchain, where other miners will verify by calculating the hash of the block. The Block will then get added to the blockchain, and the process will repeat for the next block."}),Object(a.jsx)("br",{}),Object(a.jsxs)(O.a,{container:!0,fullWidth:!0,spacing:1,children:[Object(a.jsx)(O.a,{container:!0,item:!0,xs:6,children:Object(a.jsx)(te.a,{variant:"outlined",fullWidth:!0,onClick:this.reset,color:"secondary",children:"Reset Block"})}),Object(a.jsx)(O.a,{container:!0,item:!0,xs:6,children:Object(a.jsx)(te.a,{variant:"outlined",fullWidth:!0,onClick:this.solve,color:"primary",children:"Show a solved example"})})]})]})}}]),n}(i.a.Component);function he(){return Object(a.jsxs)("div",{children:[Object(a.jsx)(x.a,{variant:"body1",children:'Most cryptocurrencies are created by a process called mining. Mining is the process of "verifying" transactions in the block chain. Miners are rewarded for verifying those transactions with some cryptocurrency. A miner is generally a computer program, and will first verify all the transactions in the block, making sure that everyone sending money actually has that much money to spend. If you try to send more money than you have in your cryptocurrency wallet, then that transaction is invalid and will not be included in the block.'}),Object(a.jsx)("br",{}),Object(a.jsx)(x.a,{variant:"body1",children:'Remember that the block chain consists of a block of records, with each block containing a number of transactions. Everytime a block is "verified" by a miner, it is added to the blockchain, and all new transactions will be recorded on the next block. Miners compete to verify and solve a block so that they can get the reward. From this, we can see that a transaction is only "processed", once a miner has successfully verified and solved a block containing that transaction. Once the block containing the transaction is added to the blockchain, it cannot be changed again.'}),Object(a.jsx)("br",{}),Object(a.jsx)(x.a,{variant:"body1",children:"As more and more people start mining cryptocurrencies to get the reward, you can imagine that blocks would get created much quicker, since more people are competing at the same time to solve that block. This would cause inflation of the cryptocurrency, and so most cryptocurrencies require a proof of work along with verifying the transactions. Think of this proof of work as a very hard math puzzle the mining program needs to solve. Once it solves this puzzle, it will post the solution, along with the verified transactions to the blockchain. If this solution is valid, then the miner will get a reward, and the miners will start trying to solve the next block."}),Object(a.jsx)("br",{}),Object(a.jsx)(x.a,{variant:"body1",children:'For bitcoin, the proof of work is designed to take around 10 minutes. If a lot of people are competing to mine the bitcoin blockchain, and the time to solve it drops under 10 minutes, then the next block will have a harder "puzzle" to solve so that it will take 10 minutes. This keeps the supply of bitcoin steady.'}),Object(a.jsx)("br",{}),Object(a.jsx)(x.a,{variant:"body1",children:"What exactly is this puzzle that miners need to solve? It involves hashing! As we saw in the last section, changing only one letter in the input completely changed the output hash. Lets say our blockchain contained the following 3 transactions, and we took the hash of the text in the block."}),Object(a.jsx)("br",{}),Object(a.jsx)(T.a,{}),Object(a.jsx)(x.a,{variant:"body1",children:Object(a.jsxs)("ul",{children:[Object(a.jsx)("li",{children:"User A to User B: 1 BTC"}),Object(a.jsx)("li",{children:"User B to User C: 2 BTC"}),Object(a.jsx)("li",{children:"User C to user D: 1 BTC"})]})}),Object(a.jsx)(T.a,{}),Object(a.jsx)("br",{}),Object(a.jsx)(x.a,{className:"hash",variant:"h6",color:"secondary",children:"output (SHA-256)"}),Object(a.jsx)(x.a,{nowrap:"false",className:"hash",variant:"h5",children:"2c15326fa01fe0491f4f6f4f040f064b275395ef16f37724f14e01f75397071f"}),Object(a.jsx)(T.a,{style:{marginTop:60}}),Object(a.jsx)("br",{}),Object(a.jsx)(x.a,{variant:"body1",children:'The "difficulty" of the puzzle can be set by requiring that the output hash has a certain amount of 0\'s at the beggining. For the sake of this demonstration, we will say that our hash output requires 2 0\'s to be valid. Our hash currently has no 0\'s, and the way the hash is changed is by using a "nonce" value. The nonce is the solution of the puzzle, and is included in the input. Adding the nonce to our last example, we have:'}),Object(a.jsx)("br",{}),Object(a.jsx)(T.a,{}),Object(a.jsx)("br",{}),Object(a.jsx)(x.a,{variant:"body1",children:Object(a.jsxs)("ul",{children:[Object(a.jsx)("li",{children:"User A to User B: 1 BTC"}),Object(a.jsx)("li",{children:"User B to User C: 2 BTC"}),Object(a.jsx)("li",{children:"User C to user D: 1 BTC"}),Object(a.jsx)("li",{children:Object(a.jsx)("span",{className:"highlight",children:"Nonce: 38jvasde3avma"})})]})}),Object(a.jsx)(T.a,{}),Object(a.jsx)("br",{}),Object(a.jsx)(x.a,{className:"hash",variant:"h6",color:"secondary",children:"output (SHA-256)"}),Object(a.jsx)(x.a,{nowrap:"false",className:"hash",variant:"h5",children:"00706c95522c813684861d2afcb9ec62d837bef458b6e895e3efe4aaa381a1b2"}),Object(a.jsx)(T.a,{style:{marginTop:60}}),Object(a.jsx)("br",{}),Object(a.jsxs)(x.a,{children:["Changing the value of the nonce to anything else will completely change the hash. The way miners work is by guessing different values of the nonce until the required numbers of 0 is present in the hash. As you can imagine, for a large number of 0's, this is a very time consuming process, even for a computer that can try millions of combinations in seconds. Each bitcoin block contains a few things. These are as follow:",Object(a.jsxs)("ul",{children:[Object(a.jsx)("li",{children:"The hash output of the preceeding block"}),Object(a.jsx)("li",{children:"A timestamp of when the block was created"}),Object(a.jsx)("li",{children:"All the transactions included in the block"}),Object(a.jsx)("li",{children:"The current difficulty of the proof of work"}),Object(a.jsx)("li",{children:"The solution of the proof of work"})]})]}),Object(a.jsx)("br",{}),Object(a.jsx)(x.a,{variant:"body1",children:"Beyond just our transactions, our block contains the hash of the previous block. This is what makes cryptocurrencies secure. A user's balance is calculated by going to every previous block, and summing that user's transactions. If someone tried to change a transaction in a past block, then that block's hash will change, which will result in the next block's hash being wrong, and so on. Therefore to change a transaction, someone would have to go back and change every block, calculating a new nonce value and solving every puzzle, in only 10 minutes, before the next block is calculated. This is almost impossible with todays technology."}),Object(a.jsx)("br",{}),Object(a.jsx)(x.a,{variant:"body1",children:'Although solving a the puzzle is very difficult, confirming the result is not. Once we have the "correct" nonce value, all we have to do is generate the SHA-256 hash of that block using that value, and we can verify that the puzzle was solved correctly. Once a miner presents a solution to the block, every other miner will check this result to validate it. If the majority (51%) of the miners agree that the puzzle is solved, then it is added to the blockchain, and the miners will begin working on the next block.'}),Object(a.jsx)("br",{}),Object(a.jsx)(x.a,{variant:"body1",children:"The next section will have you create a sample blockchain block, and try solving the nonce yourself to see how it works."}),Object(a.jsx)("br",{}),Object(a.jsx)(Y.b,{style:{textDecoration:"none"},to:"/technology/sample",children:Object(a.jsx)(te.a,{variant:"outlined",color:"secondary",children:"Create sample blockchain"})})]})}function de(){var e=i.a.useState("e543fd2024389d2011ed92d9a4f662ab5228367d29a50115d45fb868a75153a1"),t=Object(l.a)(e,2),n=t[0],c=t[1];return Object(a.jsxs)("div",{children:[Object(a.jsxs)(x.a,{variant:"body1",children:["Before you can understand what mining is, you need to learn about hashing. Hashing is a process that encrypts data using a specified function. This function can be anything, for example, imagine a hashing function where you just replace each letter with its place in the alphabet. Then the word ",Object(a.jsx)("span",{className:"highlight",children:"hello"})," would become",Object(a.jsx)("span",{className:"highlight",children:" 8 5 12 12 15."})," Lets take it a step further, and make our hashing function sum the numbers. Then the hash of ",Object(a.jsx)("span",{className:"highlight",children:"hello"})," would be",Object(a.jsx)("span",{className:"highlight",children:" 52."})," Notice now that if you change ANY letter in the word hello, you will have a completely different hash."]}),Object(a.jsx)("br",{}),Object(a.jsxs)(x.a,{variant:"body1",children:["That is a rather simple hashing function. The hashing function that bitcoin uses is called SHA-256. 256 because the output will always be 256 bits, or 64 hexadecmial digits. A hexadecimal can have values from (0 - 9), and (A - F). SHA-256 uses a complicated process to create the hashes. You can read more about it ",Object(a.jsx)(B.a,{target:"_blank",href:"https://en.wikipedia.org/wiki/SHA-2",children:"here."})]}),Object(a.jsx)("br",{}),Object(a.jsx)(x.a,{variant:"body1",children:"The follow program will encrypt any text you write to SHA-256. Notice how changing only one letter will result in a completely different output."}),Object(a.jsx)("br",{}),Object(a.jsx)(ee.a,{id:"standard-multiline-static",label:"Input",color:"secondary",multiline:!0,onChange:function(e){c(Object(ae.sha256)(e.target.value))},variant:"filled",rows:2,fullWidth:!0,style:{marginBottom:60},defaultValue:"Try changing this text!"}),Object(a.jsx)("br",{}),Object(a.jsx)(x.a,{className:"hash",variant:"h6",color:"secondary",children:"output (SHA-256)"}),Object(a.jsx)(x.a,{nowrap:"false",className:"hash",variant:"h5",children:n}),Object(a.jsx)(T.a,{style:{marginTop:60}}),Object(a.jsx)("br",{}),Object(a.jsx)(x.a,{variant:"body1",children:"Now that you know what hashing is, you're ready to learn about mining!"}),Object(a.jsx)("br",{}),Object(a.jsx)(Y.b,{style:{textDecoration:"none"},to:"/technology/mining",children:Object(a.jsx)(te.a,{variant:"outlined",color:"secondary",children:"Learn about mining"})})]})}function je(){return Object(a.jsxs)("div",{children:[Object(a.jsx)(x.a,{variant:"body1",children:"Cryptocurrencies are built upon many technologies. The following is a list of the most important concepts that make cryptocurrencies secure and anonymous. You can read any of the following topics, but if you are a beginner to cryptocurrencies then we recommend reading them in the following order."}),Object(a.jsx)("br",{}),Object(a.jsxs)(O.a,{container:!0,alignItems:"stretch",children:[Object(a.jsx)(O.a,{item:!0,component:p.a,style:{margin:16,width:"100%"},md:!0,children:Object(a.jsx)(f.a,{children:Object(a.jsxs)(Y.b,{to:"/technology/blockchain",style:{textDecoration:"none",color:"inherit"},children:[Object(a.jsx)(v.a,{style:{height:200},image:ce,title:"Blockchain"}),Object(a.jsxs)(k.a,{children:[Object(a.jsx)(x.a,{gutterBottom:!0,variant:"h5",component:"h2",children:"Blockchain"}),Object(a.jsx)(x.a,{variant:"body2",color:"textSecondary",component:"p",children:"Introduction to what the blockchain is, and its siginificance to cryptocurrencies."})]})]})})}),Object(a.jsx)(O.a,{item:!0,component:p.a,style:{margin:16,width:"100%"},md:!0,children:Object(a.jsx)(f.a,{children:Object(a.jsxs)(Y.b,{to:"/technology/hashing",style:{textDecoration:"none",color:"inherit"},children:[Object(a.jsx)(v.a,{style:{height:200},title:"Hashing",image:ie}),Object(a.jsxs)(k.a,{children:[Object(a.jsx)(x.a,{gutterBottom:!0,variant:"h5",component:"h2",children:"Hashing"}),Object(a.jsx)(x.a,{variant:"body2",color:"textSecondary",component:"p",children:"Hashing is a process used extensively in blockchain, and is crucial to mining."})]})]})})})]}),Object(a.jsxs)(O.a,{container:!0,alignItems:"stretch",children:[Object(a.jsx)(O.a,{item:!0,component:p.a,style:{margin:16,width:"100%"},md:!0,children:Object(a.jsx)(f.a,{children:Object(a.jsxs)(Y.b,{to:"/technology/mining",style:{textDecoration:"none",color:"inherit"},children:[Object(a.jsx)(v.a,{style:{height:200},title:"Mining",image:oe}),Object(a.jsxs)(k.a,{children:[Object(a.jsx)(x.a,{gutterBottom:!0,variant:"h5",component:"h2",children:"Mining"}),Object(a.jsx)(x.a,{variant:"body2",color:"textSecondary",component:"p",children:"Mining is the process that creates cryptocurrency, and validates transactions."})]})]})})}),Object(a.jsx)(O.a,{item:!0,component:p.a,style:{margin:16,width:"100%"},md:!0,children:Object(a.jsx)(f.a,{children:Object(a.jsxs)(Y.b,{to:"/technology/sample",style:{textDecoration:"none",color:"inherit"},children:[Object(a.jsx)(v.a,{style:{height:200},title:"Sample Blockchain",image:se}),Object(a.jsxs)(k.a,{children:[Object(a.jsx)(x.a,{gutterBottom:!0,variant:"h5",component:"h2",children:"Sample Blockchain"}),Object(a.jsx)(x.a,{variant:"body2",color:"textSecondary",component:"p",children:"Interactive sample blockchain that will help you understand how miners work."})]})]})})})]})]})}function be(){return Object(a.jsxs)("div",{children:[Object(a.jsx)(x.a,{variant:"body1",children:'Unlike a tranditional currency that is regulated by a bank, cryptocurrencies are decentralized, meaning there isn\'t a one central location where transactions are hosted. Instead, cryptocurrency transactions are recorded on something called the blockchain. As the name implies, blockchain consists of a "chain" of digital "blocks".'}),Object(a.jsx)("br",{}),Object(a.jsx)(x.a,{variant:"body1",children:"Each block contains a collection of transaction (a digital receipt), and everyone using the blockchain has a copy of all these receipts (the blockchain). Everytime a new block is created it is added to the chain, and it cannot be changed again. Everyone using the blockchain gets a copy of the new block. Because everyone using the blockchain has a list of the transactions, cryptocurrencies are secure, since there is no way amounts can be fabricated or lied about."}),Object(a.jsx)("br",{}),Object(a.jsx)(x.a,{variant:"body1",children:"Cryptocurrencies are also completely anonymous. Cryptocurrency transactions identify senders and receivers using addresses. Each user has a unique address, and a private key that they can use to sign into their digital cryptocurrency wallet to send money to someone else. Addresses are not tied to a name or address, and so it is extremely difficult to find out where the money is coming from or going to."}),Object(a.jsx)("br",{}),Object(a.jsxs)(x.a,{variant:"body1",children:["For example, Bitcoin block 656055 (which can be viewed publically at this ",Object(a.jsx)(B.a,{href:"https://www.blockchain.com/btc/block/0000000000000000000d4ca3debe326d85b5b8cfd7477ed5256d097745371e9c?page=1",target:"_blank",variant:"body1",children:"link."})," ) Contains the following transaction:"]}),Object(a.jsx)("br",{}),Object(a.jsx)("img",{style:{justifyContent:"center",display:"flex"},src:re}),Object(a.jsx)("br",{}),Object(a.jsxs)(x.a,{variant:"body1",children:["This tells us that the user with ID ",Object(a.jsx)("span",{className:"highlight",children:"bc1qw..."})," sent user ",Object(a.jsx)("span",{className:"highlight",children:"3QJfg..."})," 0.18 BTC or $2,785.71 USD on 2020-11-08 08:14, and that ",Object(a.jsx)("span",{className:"highlight",children:"bc1qw"})," received 1.685 BTC back (imagine this as paying at a grocery store and getting change back)."]}),Object(a.jsx)("br",{}),Object(a.jsx)(x.a,{variant:"body1",children:'For bitcoin, each block contains a maximum of 4 MB of data. The blocks are created by "miners". Mining is the process which creates bitcoin, and seals blocks. Before you learn about mining, you must know what hashing is. Click the link below to learn about hashing!'}),Object(a.jsx)("br",{}),Object(a.jsx)(Y.b,{style:{textDecoration:"none"},to:"/technology/hashing",children:Object(a.jsx)(te.a,{variant:"outlined",color:"secondary",children:"Learn about hashing"})})]})}var ue=n(91),ge=n.n(ue),xe=n(115),me=n(255),ye=(n(154),n(257)),Oe=n(260),pe=n(252),fe=n(256),ve=n(258),ke=n(259),we=n(128),Ce=function(e){Object(X.a)(c,e);var t=Object(Z.a)(c);function c(){var e;Object($.a)(this,c),(e=t.call(this)).fetchCoins=Object(xe.a)(ge.a.mark((function t(){var n;return ge.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,e.CoinGeckoClient.coins.all();case 2:n=t.sent,e.setState({coins:n.data}),console.log(n.data);case 5:case"end":return t.stop()}}),t)}))),e.state={coins:[]};var a=n(156);return e.CoinGeckoClient=new a,e}return Object(K.a)(c,[{key:"componentDidMount",value:function(){this.fetchCoins()}},{key:"render",value:function(){var e;return e=0==this.state.coins.length?Object(a.jsxs)("div",{children:[Object(a.jsx)(me.a,{color:"secondary"}),Object(a.jsx)(x.a,{style:{textAlign:"center",marginTop:20},children:"Fetching Coins..."})]}):Object(a.jsx)(fe.a,{component:we.a,children:Object(a.jsxs)(ye.a,{children:[Object(a.jsx)(ve.a,{children:Object(a.jsxs)(ke.a,{children:[Object(a.jsxs)(pe.a,{children:[" ",Object(a.jsx)(x.a,{variant:"h6",color:"secondary",children:"Name"})," "]}),Object(a.jsx)(pe.a,{align:"right",children:Object(a.jsx)(x.a,{variant:"h6",color:"secondary",children:"Price (CAD)"})}),Object(a.jsx)(pe.a,{align:"right",children:Object(a.jsx)(x.a,{variant:"h6",color:"secondary",children:"Market Cap (CAD)"})}),Object(a.jsx)(pe.a,{align:"right",children:Object(a.jsx)(x.a,{variant:"h6",color:"secondary",children:"24h Change (%)"})})]})}),Object(a.jsx)(Oe.a,{children:this.state.coins.map((function(e){var t,n,c,i,o,s;return Object(a.jsxs)(ke.a,{children:[Object(a.jsx)(pe.a,{component:"th",scope:"row",children:Object(a.jsx)(x.a,{children:Object(a.jsxs)("b",{children:[e.name," "]})})}),Object(a.jsx)(pe.a,{align:"right",children:Object(a.jsx)(x.a,{children:null===(t=e.market_data)||void 0===t||null===(n=t.current_price)||void 0===n?void 0:n.cad})}),Object(a.jsx)(pe.a,{align:"right",children:Object(a.jsx)(x.a,{children:null===(c=e.market_data)||void 0===c||null===(i=c.market_cap)||void 0===i?void 0:i.cad})}),Object(a.jsx)(pe.a,{style:{color:(null===(o=e.market_data)||void 0===o?void 0:o.price_change_24h)>=0?"lightgreen":"red"},align:"right",children:Object(a.jsx)(x.a,{children:null===(s=e.market_data)||void 0===s?void 0:s.price_change_24h})})]},e.name)}))})]})}),Object(a.jsxs)("div",{children:[Object(a.jsx)("h1",{children:"Coin List"}),e]})}}]),c}(i.a.Component),Te=n.p+"static/media/economics.8d14d3db.jpg",Be={"/":"Cryptorial","/technology":"Technology","/technology/blockchain":"Blockchain","/technology/mining":"Mining","/technology/hashing":"Hashing","/technology/sample":"Sample Blockchain","/economics":"Economics","/economics/currencylist":"Currency List"},Se=240,Ne=Object(I.a)((function(e){return{root:{display:"flex",flexGrow:1},appBar:{transition:e.transitions.create(["margin","width"],{easing:e.transitions.easing.sharp,duration:e.transitions.duration.leavingScreen})},appBarShift:{width:"calc(100% - ".concat(Se,"px)"),marginLeft:Se,transition:e.transitions.create(["margin","width"],{easing:e.transitions.easing.easeOut,duration:e.transitions.duration.enteringScreen})},menuButton:{marginRight:e.spacing(2)},hide:{display:"none"},drawer:{width:Se,flexShrink:0,marginRight:-240},drawerPaper:{width:Se},drawerHeader:Object(d.a)(Object(d.a)({display:"flex",alignItems:"center",padding:e.spacing(0,1)},e.mixins.toolbar),{},{justifyContent:"flex-end"}),content:{flexGrow:1,padding:e.spacing(3),transition:e.transitions.create("margin",{easing:e.transitions.easing.sharp,duration:e.transitions.duration.leavingScreen})},contentShift:{transition:e.transitions.create("margin",{easing:e.transitions.easing.easeOut,duration:e.transitions.duration.enteringScreen})},nested:{paddingLeft:e.spacing(4)}}})),Ae=function(e){return Object(a.jsx)(B.a,Object(d.a)(Object(d.a)({},e),{},{component:Y.b}))};function Ie(e){var t=e.to,n=e.open,c=Object(h.a)(e,["to","open"]),i=Be[t];return Object(a.jsx)("li",{children:Object(a.jsxs)(N.a,Object(d.a)(Object(d.a)({button:!0,component:Y.b,to:t},c),{},{children:[Object(a.jsx)(A.a,{primary:i}),null!=n?n?Object(a.jsx)(V.a,{}):Object(a.jsx)(P.a,{}):null]}))})}function He(){return Object(a.jsxs)("div",{children:[Object(a.jsx)(x.a,{variant:"h2",color:"primary",style:{textAlign:"center",marginTop:"80px"},children:"Cryptorial"}),Object(a.jsx)(x.a,{variant:"h6",color:"textSecondary",style:{textAlign:"center",marginBottom:"60px"},children:"learn cyrpto"}),Object(a.jsx)(x.a,{variant:"body1",style:{marginBottom:"20px"},children:" Cryptocurrencies and other blockchain technologies have gained tremendous popularity in the last few years. Cryptocurrencies are currencies that are completely digital, having no controlling local authority. Instead, the transactions are handled by a public distributed ledger called a blockchain. Due to the security and anonymity provided by cryptocurrencies, their monitary value has increased drastically, and is now traded by investors just like stocks. This application will teach you the basics of blockchain and the cryptocurrency market. To fully understasnd cryptocurrencies, there are two main portions that need to be understood:"}),Object(a.jsxs)(O.a,{container:!0,alignItems:"stretch",children:[Object(a.jsx)(O.a,{item:!0,component:p.a,style:{margin:16},md:!0,children:Object(a.jsx)(f.a,{children:Object(a.jsxs)(Y.b,{to:"/technology",style:{textDecoration:"none",color:"inherit"},children:[Object(a.jsx)(v.a,{style:{height:200},image:ce,title:"Technology"}),Object(a.jsxs)(k.a,{children:[Object(a.jsx)(x.a,{gutterBottom:!0,variant:"h5",component:"h2",children:"Technology"}),Object(a.jsx)(x.a,{variant:"body2",color:"textSecondary",component:"p",children:"This section will teach you the basics of mining cryptocurrencies and blockchain, the technologies that cryptocurrencies are built upon."})]})]})})}),Object(a.jsx)(O.a,{item:!0,component:p.a,style:{margin:16},md:!0,children:Object(a.jsx)(f.a,{children:Object(a.jsxs)(Y.b,{to:"/economics",style:{textDecoration:"none",color:"inherit"},children:[Object(a.jsx)(v.a,{style:{height:200},title:"Economics",image:Te}),Object(a.jsxs)(k.a,{children:[Object(a.jsx)(x.a,{gutterBottom:!0,variant:"h5",component:"h2",children:"Economics"}),Object(a.jsx)(x.a,{variant:"body2",color:"textSecondary",component:"p",children:"This section introduces the economics of cryptocurrencies including an index of existing cryptocurrencies, and definitions of some of the most used terms."})]})]})})})]})]})}var Le=function(){var e=Ne(),t=Object(H.a)(),n=i.a.useState(!1),c=Object(l.a)(n,2),o=c[0],s=c[1],h=Object(L.a)({palette:{type:"dark"}}),d=Object(L.a)({palette:{type:"light"}}),O=i.a.useState(!0),p=Object(l.a)(O,2),f=p[0],v=p[1],k=function(){s(!1)};return Object(a.jsxs)(z.a,{theme:f?h:d,children:[Object(a.jsx)(C.a,{}),Object(a.jsx)(Y.a,{basename:"/Cryptorial/",children:Object(a.jsxs)("div",{className:e.root,children:[Object(a.jsx)(C.a,{}),Object(a.jsx)(j.a,{color:"inherit",position:"fixed",className:Object(J.a)(e.appBar,Object(r.a)({},e.appBarShift,o)),children:Object(a.jsxs)(b.a,{children:[Object(a.jsx)(u.a,{color:"inherit","aria-label":"open drawer",onClick:function(){s(!0)},edge:"start",className:Object(J.a)(e.menuButton,o&&e.hide),children:Object(a.jsx)(G.a,{})}),Object(a.jsx)(g.a,{children:Object(a.jsx)(Q.Route,{children:function(e){var t=e.location,n=t.pathname.split("/").filter((function(e){return e}));return"/"===t.pathname?Object(a.jsx)("p",{style:{flexGrow:1,float:"left"}}):Object(a.jsxs)(w.a,{style:{flexGrow:1,float:"left"},className:"crumbs","aria-label":"breadcrumb",children:[Object(a.jsx)(Ae,{color:"inherit",to:"/",children:Object(a.jsx)(x.a,{color:"textPrimary",children:"Cryptorial"})}),n.map((function(e,t){var c=t===n.length-1,i="/".concat(n.slice(0,t+1).join("/"));return c?Object(a.jsx)(x.a,{color:"secondary",children:Be[i]},i):Object(a.jsx)(Ae,{color:"inherit",to:i,children:Be[i]},i)}))]})}})}),Object(a.jsx)(m.a,{title:f?"Light mode":"Dark mode",children:Object(a.jsx)(u.a,{style:{float:"right"},color:"inherit","aria-label":"Switch theme",onClick:function(){v(!f)},className:Object(J.a)(e.menuButton,o&&e.hide),children:Object(a.jsx)(E.a,{})})})]})}),Object(a.jsxs)(y.a,{className:e.drawer,anchor:"left",open:o,onClose:k,classes:{paper:e.drawerPaper},children:[Object(a.jsx)("div",{className:e.drawerHeader,children:Object(a.jsx)(u.a,{onClick:k,children:"ltr"===t.direction?Object(a.jsx)(M.a,{}):Object(a.jsx)(_.a,{})})}),Object(a.jsx)(T.a,{}),Object(a.jsxs)(S.a,{children:[Object(a.jsx)(Ie,{to:"/",onClick:function(){return s(!1)}}),Object(a.jsx)(Ie,{to:"/technology",onClick:function(){return s(!1)}}),Object(a.jsxs)(S.a,{disablePadding:!0,children:[Object(a.jsx)(Ie,{to:"/technology/blockchain",className:e.nested,onClick:function(){return s(!1)}}),Object(a.jsx)(Ie,{to:"/technology/hashing",className:e.nested,onClick:function(){return s(!1)}}),Object(a.jsx)(Ie,{to:"/technology/mining",className:e.nested,onClick:function(){return s(!1)}}),Object(a.jsx)(Ie,{to:"/technology/sample",className:e.nested,onClick:function(){return s(!1)}})]}),Object(a.jsx)(Ie,{to:"/economics",onClick:function(){return s(!1)}}),Object(a.jsx)(S.a,{disablePadding:!0,children:Object(a.jsx)(Ie,{to:"/blockchain/currencylist",className:e.nested,onClick:function(){return s(!1)}})})]}),Object(a.jsx)(T.a,{})]}),Object(a.jsx)(g.a,{style:{paddingTop:"100px",paddingBottom:"200px"},className:Object(J.a)(e.content,Object(r.a)({},e.contentShift,o)),children:Object(a.jsxs)(Q.Switch,{children:[Object(a.jsx)(Q.Route,{exact:!0,path:"/",component:He}),Object(a.jsx)(Q.Route,{path:"/technology/blockchain",component:be}),Object(a.jsx)(Q.Route,{path:"/technology/hashing",component:de}),Object(a.jsx)(Q.Route,{path:"/technology/mining",component:he}),Object(a.jsx)(Q.Route,{path:"/technology/sample",component:le}),Object(a.jsx)(Q.Route,{path:"/technology",component:je}),Object(a.jsx)(Q.Route,{path:"/economics",component:Ce})]})})]})})]})},ze=n(123);n(185);s.a.render(Object(a.jsxs)(ze.BrowserRouter,{children:[console.log("/Cryptorial"),Object(a.jsx)(Le,{})]}),document.getElementById("root"))},97:function(e,t,n){}},[[186,1,2]]]);
//# sourceMappingURL=main.65e3054e.chunk.js.map