import React, { useState, useEffect } from 'react'
import Link from 'next/link';
import Head from 'next/head'

const Binarytohex = () => {

   

    const [display, setDisplay] = useState([])


    useEffect(() => {
        const newarr = relatedconverter.filter((obj) => {
            return obj.topic !== 'binary-to-hexadecimal';

        })
        setDisplay(newarr);

    }, [])


    const [Binary, setBinary] = useState('');
    const [result, setResult] = useState('');

    const Binarytohexconvert = (e) => {
        e.preventDefault();
        var hexa = parseInt(Binary, 2).toString(16);
        setResult(hexa);
    }
    return (
        <>
           <Head>
        <title> Binary to Hexadecimal number converter | [Website Name]</title>
        <meta name="description" content=" Binary to Hexadecimal number converter " />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
        </Head>


            <div class="container calulator">
                <div class="rounding-calculator">
                    <h1> Binary to hexadecimal converter</h1>
                    <div>
                        <label>Type Binary Number</label>
                        <input class="input" value={Binary} type="number" onChange={(e) => { setBinary(e.target.value) }} placeholder="Enter Binary Number" />
                    </div>
                    <button onClick={Binarytohexconvert} className='calculator-button' >Convert</button>

                    <div>
                        <h3>
                            {result}
                        </h3>

                    </div>
                </div>
                
            </div>
        </>
    )
}

export default Binarytohex