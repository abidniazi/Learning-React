import { useState } from 'react'
import { Input } from './components'
import useCurrencyInfo from './hooks/useCurrencyInfo'

function App() {
const[amount,setAmount]=useState(0);
const[from,setfrom]=useState("USD")
const[to,setTo]=useState("INR")
const[convertedAmount,setConvertedAmount]=useState(0)

const currencyInfo=useCurrencyInfo(from);

const options = Array.from(
  new Set([from, ...Object.keys(currencyInfo || {})])
);


const swap=()=>{
  setfrom(to)
  setTo(from)
  setConvertedAmount(amount)
  setAmount(convertedAmount)
}

const convert=()=>{
   if (!currencyInfo[to]) return;
  setConvertedAmount(amount * currencyInfo[to]);
}


  return (
    <div
        className="w-full h-screen flex flex-wrap justify-center items-center bg-cover bg-no-repeat"
        style={{
            
            backgroundImage: `url('https://wallpaperbat.com/img/2080850-what-are-the-key-factors-that-influence-foreign-currency-exchange-rates.jpg')`,
        }}
    >
        <div className="w-full">
            <div className="w-full max-w-md mx-auto border border-gray-60 rounded-lg p-5 backdrop-blur-sm bg-white/30">
                <form
                    onSubmit={(e) => {
                        e.preventDefault();
                        convert()
                       
                    }}
                >
                    <div className="w-full mb-1">
                        <Input
                            label="From"
                            amount={amount}
                            currencyOptions={options}
                            onCurrencyChange={(currency) => setfrom(currency.toUpperCase())}
                            selectCurrency={from}
                            onAmountChange={(amount) => setAmount(amount)}
                        />
                    </div>
                    <div className="relative w-full h-0.5">
                        <button
                            type="button"
                            className="absolute left-1/2 -translate-x-1/2 -translate-y-1/2 border-2 border-white rounded-md bg-blue-600 text-white px-2 py-0.5"
                            onClick={swap}
                        >
                            swap
                        </button>
                    </div>
                    <div className="w-full mt-1 mb-4">
                        <Input
                            label="To"
                            amount={convertedAmount}
                            currencyOptions={options}
                            onCurrencyChange={(currency) => setTo(currency.toUpperCase())}
                            selectCurrency={to}
                            amountDisable
                        />
                    </div>
                    <button type="submit" className="w-full bg-blue-600 text-white px-4 py-3 rounded-lg">
                        Convert {from.toUpperCase()} to {to.toUpperCase()}
                    </button>
                </form>
            </div>
        </div>
    </div>
);
}

export default App
