import React,{useState} from 'react'
import DeviceThermostatIcon from '@mui/icons-material/DeviceThermostat';

const Home = () => {
    const [celsius, setCelsius] = useState('');
    const [fahrenheit, setFahrenheit] = useState('');
    const [kelvin, setKelvin] = useState('');

    const convertCelsius = (value) => {
        const c = parseFloat(value);
        const f = (c * 9) / 5 + 32;
        const k = c + 273.15;
        setFahrenheit(f.toFixed(2));
        setKelvin(k.toFixed(2));
        setCelsius(value);
    };

    const convertFahrenheit = (value) => {
        const f = parseFloat(value);
        const c = ((f - 32) * 5) / 9;
        const k = ((f - 32) * 5) / 9 + 273.15;
        setCelsius(c.toFixed(2));
        setKelvin(k.toFixed(2));
        setFahrenheit(value);
    };

    const convertKelvin = (value) => {
        const k = parseFloat(value);
        const c = k - 273.15;
        const f = (c * 9) / 5 + 32;
        setCelsius(c.toFixed(2));
        setFahrenheit(f.toFixed(2));
        setKelvin(value);
    };
    const handleClear = () => {
        setCelsius('');
        setFahrenheit('');
        setKelvin('');
      };
    return (
        <div className=' bg-indigo-950 h-[100vh] flex justify-center items-center'>
            <div className='bg-gray-300 w-fit p-5 rounded-3xl'>
                <h1 className='text-center text-3xl font-bold mb-5'>Temperature Converter<DeviceThermostatIcon/> </h1>
                <div className='flex flex-col gap-6 justify-center items-center'>
                    <div>
                        <input
                            type="number"
                            placeholder="Enter Celsius"
                            value={celsius}
                            onChange={(e) => convertCelsius(e.target.value)}
                            className='rounded  p-2'
                        />
                        <span className='p-2 px-3 text-white rounded bg-zinc-900' >°C</span>           
                    </div>
                    <div>
                        <input
                            type="number"
                            placeholder="Enter Fahrenheit"
                            value={fahrenheit}
                            onChange={(e) => convertFahrenheit(e.target.value)}
                            className='rounded p-2'
                        />
                        <span className='p-2 px-3 text-white rounded bg-zinc-900'>°F</span>
                    </div>
                    <div>
                        <input
                            type="number"
                            placeholder="Enter Kelvin"
                            value={kelvin}
                            onChange={(e) => convertKelvin(e.target.value)}
                            className='rounded p-2'
                        />
                        <span className='p-2 px-3.5 text-white rounded bg-zinc-900'>K</span>
                    </div>
                    <button onClick={handleClear} className='p-2 px-3 text-white rounded bg-zinc-900'>All Clear</button>
                </div>
            </div>
        </div>
    )
}

export default Home
