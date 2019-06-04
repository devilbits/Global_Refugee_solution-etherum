# Global Refugee Solution
To securely store the data of the refugees of a particular country to avoid data tampering and ending up being denied of their rights. Also a token can be issued to them for their expenses and it also aids in tracking their expenditure.

## System requirements

1. Operating system: Ubuntu 16.04
2. System RAM: 4 GB or above (recommended 8 GB)
3. Free System storage: 4 GB on /home

## Installation prequisites

1. Ensure that NodeJS is installed in the system. For more information about NodeJS, go to https://nodejs.org. To check if installed, open a terminal window:
```
node -v
```
2. If NodeJS is not installed, go to https://nodejs.org and download the compatible version based on system OS, or in a terminal window:
```
sudo apt-get install -y nodejs
```
3. Ensure that Truffle is installed. Truffle Suite helps to develop Dapps easily. For more information, go to https://truffleframework.com/. To check if installed, in terminal window:
```
truffle version
```
4. If Truffle is not installed, in terminal window:
``` 
pm install -g truffle
```
5. Ensure that ganache-cli is installed. Ganache CLI is the latest version of TestRPC: a fast and customizable blockchain emulator.
```
npm install -g ganache-cli
```
6. Ensure that geth is installed. Geth is the official Golang implementation of the Ethereum protocol. To check, in a terminal window:
```
geth version
```
7. To install geth, in a terminal window:
```
sudo apt-get install software-properties-common
sudo add-apt-repository -y ppa:ethereum/ethereum
sudo apt-get update
sudo apt-get install ethereum
```
8. Ensure that Go and C compilers are installed. In a terminal window:
```
sudo apt-get install -y build-essential
```
### Installation/Set-up instructions (ganache)

1. Open the Dapp project folder in VS Code.
2. Open a terminal window in the project folder.
```
npm rebuild //(to resolve node version incompatibility issues)
```
3. Open another terminal window. Run ganache-cli.
```
ganache-cli
```
4. Back in original terminal window, run truffle migrate.
```
truffle migrate --reset
```
5. Copy deployed contract address (of Buy) from truffle migrate window and replace in index.js file (line 22). Save file.
6. In original terminal window, start server.
```
npm start
```
7. Open a browser window. Go to https://localhost:3000
8. Copy individual addresses from ganache terminal and use the Dapp features.



### Installation/Set-up instructions (geth)

1. Open the Dapp project folder in VS Code. Comment ganache deployment details in truffle-config.js and uncomment geth deployment details. Save file.
2. Open a terminal window in the project folder.
```
npm rebuild //(to resolve node version incompatibility issues)
```
3. Open another terminal window 
```
geth --rpc --rpcport "8545" --rpccorsdomain "*" --rpcapi "db,eth,net,web3,personal,account" --ipcpath "~/.ethereum/geth.ipc" --dev

```
4. Open another terminal window 
```
geth attach
```
5. Start mining in geth console(not neaded).
```
miner.start()
```
6. Back in original terminal window, run truffle migrate.
```
truffle migrate --reset
```
7. Copy deployed contract address (of Buy) from truffle migrate window and replace in index.js file (line 22). Save file.
8. In original terminal window, start server.
```
npm start
```
9. Open a browser window. Go to https://localhost:3000

```
10. To exit the project, stop the mining process in geth console window. Then give CTRL+C in other terminal windows to exit.
```
miner.stop()
```

