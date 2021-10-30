/**
 * - Tạo 3 class liên kết với nhau và áp dụng interface 
 * - Có function riêng và chung của mỗi class
 * - Ít nhất 3 function và 3 class
 */

interface IUser{
    uid: string;
    name: string;
    // tài khoản liên kết
    bankCard:[];
    isAuthentication: boolean;
    getUserInfo: (userId:string)=> IUser
    getTransactionList:(userId:string)=>ITransaction[]
    // rút tiền
    withdraw:(amount:number)=> boolean
    // kiểm tra thanh toán giao dịch thành công hay không
    checkStatusPayment:(transaction:number)=>boolean
}
interface ITransaction{
    uid: string;
    date: string;
    amount: number;
    gateway: IAccountHolder;
}
interface IAccountHolder{
    bank: string;
    number: string;
    password: string;
    userName: string;
    identify: string;
    address: string;
    dob: string;
}

class User implements IUser{
    uid: string;
    name: string;
    bankCard:[];
    isAuthentication: boolean;
    getUserInfo: (userId:string)=> IUser
    getTransactionList:(userId:string)=>ITransaction[]
    // rút tiền
    withdraw:(amount:number)=> boolean
    // kiểm tra thanh toán giao dịch thành công hay không
    checkStatusPayment:(transaction:number)=>boolean
    
}   

class Transaction implements ITransaction{
    uid: string;
    date: string;
    amount: number;
    gateway: IAccountHolder;
}

// chủ tài khoản
class AccountHolder{
    bank: string;
    number: string;
    password: string;
    userName: string;
    identify: string;
    address: string;
    dob: string;
}

class DebitCard extends AccountHolder {
    balance: number;
    getBalance: ()=>number;
    deposit: (amount:number)=>boolean;
}

class CreditCard extends AccountHolder{
    validDate: string;
    lineOfCredit: number;
    cvv: number;
}