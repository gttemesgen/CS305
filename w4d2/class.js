"use strict"
class Bank{
    static nextNum=0;
    constructor(){
        Bank.nextNum++;
        this. _account=[];
    }
    addAccount(){
       this._account.push(new Account(Bank.nextNum++))
    }
    addSavingsAccount(interest){
        this._account.push(new SavingsAccount(Bank.nextNum++,interest))
    }
    addCheckingAccount(overdraft){
        this._account.push(new CheckingAccount(Bank.nextNum++,overdraft))
    }

    closeAccount(number){
        let index=this._account.findIndex((item)=>item._number===number)
        this._account.splice(index,1)
    }
    accountReport(){
      let accountReport=""
      for(let account of this._account ){
        accountReport+=account.toString()+"\n"
      }
      return accountReport;
    }
}

