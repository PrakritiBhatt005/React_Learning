import { useState } from 'react'
import { InputBox } from './components'
import useCurrencyInfo from './hooks/useCurrencyInfo'

function App() {

  const [amount, setAmount] = useState(0)
  const [from, setFrom] = useState("usd")
  const [to, setTo] = useState("inr")
  const [convertedAmount, setConvertedAmount] = useState(0)

  const currencyInfo = useCurrencyInfo(from)

  const options = Object.keys(currencyInfo)

  const swap = () =>{
    setFrom(to)
    setTo(from)
    setConvertedAmount(amount)
    setAmount(convertedAmount)

  }
  const convert = () => {
    setConvertedAmount(amount * currencyInfo[to])}

   return (
        <div
            className="w-full h-screen flex flex-wrap justify-center items-center bg-cover bg-no-repeat"
            style={{
                backgroundImage: `url('data:image/jpeg;base64,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')`,
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
                            <InputBox
                                label="From"
                                amount={amount}
                                currencyOptions={options}
                                onCurrencyChange={(currency)=> setAmount(amount)}
                                selectCurrency={from}
                                onAmountChange={(amount)=> setAmount(amount)}

                                
                            />
                        </div>
                        <div className="relative w-full h-0.5">
                            <button
                                type="button"
                                onClick={swap}
                                className="absolute left-1/2 -translate-x-1/2 -translate-y-1/2 border-2 border-white rounded-md bg-blue-600 text-white px-2 py-0.5"
                                
                            >
                                swap
                            </button>
                        </div>
                        <div className="w-full mt-1 mb-4">
                            <InputBox
                                label="To"
                                amount={convertedAmount}
                                currencyOptions={options}
                                onCurrencyChange={(currency)=> setTo(currency)}
                                selectCurrency={from}
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
