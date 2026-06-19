import {useState} from 'react';
import './App.css';
import {Country} from "./Country";
import {v1} from "uuid";

export type BanknotesType = 'USD' | 'RUB' | 'All'
export type MoneyType = {
    banknote: BanknotesType
    nominal: number
    id: string
}

let defaultMoney: MoneyType[] = [
    {banknote: 'USD', nominal: 100, id: v1()},
    {banknote: 'USD', nominal: 100, id: v1()},
    {banknote: 'RUB', nominal: 100, id: v1()},
    {banknote: 'USD', nominal: 100, id: v1()},
    {banknote: 'USD', nominal: 100, id: v1()},
    {banknote: 'RUB', nominal: 100, id: v1()},
    {banknote: 'USD', nominal: 100, id: v1()},
    {banknote: 'RUB', nominal: 100, id: v1()},
]


export const moneyFilter = (money: MoneyType[], filter: BanknotesType): MoneyType[] => {

    if (filter === 'All') { return money}
    return money.filter(el => el.banknote === filter)
}


export const App = () => {
    const [money, setMoney] = useState<MoneyType[]>(defaultMoney)
    const [filterValue, setFilterValue] = useState<BanknotesType>('All')   // по умолчанию указываем все банкноты


    const filteredMoney = moneyFilter(money, filterValue)

    const addMoney = (banknote: BanknotesType) => {
        const newBanknote = {banknote, nominal: 100, id: v1()}
        setMoney([...money, newBanknote])
    }

    const removeMoney = (key: BanknotesType) => {
        const indexOfMoney = money.findIndex(el => el.banknote === key)
         if (indexOfMoney !== -1) {
             // @ts-ignore
             setMoney(money.filter((el, i) => i !== indexOfMoney));
         }
    }

    return (
        <div className="App">
            <Country
                data={filteredMoney}
                setFilterValue={setFilterValue}
                addMoney={addMoney}
                removeMoney={removeMoney}
            />
        </div>
    );
}
