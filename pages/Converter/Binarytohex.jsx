import React, { useState, useEffect } from 'react'
import Link from 'next/link';
import Head from 'next/head'

const Binarytohex = () => {

    const relatedconverter = [
        {
            topic: 'binary-to-decimal ',
            topiclink: '/Converter/Binary'
        },
        {
            topic: 'binary-to-ascii ',
            topiclink: '/Converter/Binarytoascii'
        },
        {
            topic: 'binary-to-Octal ',
            topiclink: '/Converter/Binarytooctal'
        },
        {
            topic: 'binary-to-hexadecimal ',
            topiclink: '/Converter/Binarytohex'
        },
        {
            topic: 'Hexadecimal-to-Binary ',
            topiclink: '/Converter/Hexatobinary'
        },
        {
            topic: 'Hexadecimal-to-decimal ',
            topiclink: '/Converter/Hexatodecimal'
        },
        {
            topic: 'Hexadecimal-to-ascii ',
            topiclink: '/Converter/Hexatoascii'
        },
        {
            topic: 'Ascii(Text)-to-Binary ',
            topiclink: '/Converter/TextBinary'
        },
        {
            topic: 'Ascii(Text)-to-Hexadecimal ',
            topiclink: '/Converter/Asciitodecimal'
        },
        {
            topic: 'decimal-to-Hexadecimal ',
            topiclink: '/Converter/Decimaltohexa'
        },
        {
            topic: 'Ascii(Text)-to-decimal converter',
            topiclink: '/Converter/Asciitodecimal'
        },
        {
            topic: 'decimal-to-Octal ',
            topiclink: '/Converter/Decimaltooctal'
        },
        {
            topic: 'decimal-to-binary ',
            topiclink: '/Converter/Decimaltobinary'
        },

    ]

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
                <div className="content_sec">
                    <div className="content">
                       

                        <p><strong><span style={{ textDecoration: "underline" }}>Converting binary to hex with example</span></strong>.</p>
                        <p>Explanation of binary to hex with an example. With example, it is very easy to understand. We will use the number 1101010 for explanation. It is 16 bit in decimal format. Now, come to example</p>
                        <p>1101010 with base 2, (1101010)<sub>2</sub></p>
                        <p>1x2<sup>6</sup>+1x2<sup>5</sup>+0x2<sup>4</sup>+1x2<sup>3</sup>+0x2<sup>2</sup>+1x2<sup>1</sup>+0x2<sup>0</sup></p>
                        <p>64+32+0+8+0+2+0</p>
                        <p>(106)<sub>10</sub></p>
                        <p>Then convert it into hexadecimal number</p>
                        <p>6x16<sup>1</sup>+10x16<sup>0</sup></p>
                        <p>(6A)<sub>16 </sub>answer.</p>
                        <p><strong><span style={{ textDecoration: "underline" }}>Binary to hex chart.</span></strong></p>
                        <p>By using the binary to hex convert tool provided by <strong>lovepdf.co</strong>, you can easily handle the binary system without any problem. Just write the number that you want to convert<strong> binary to hex</strong>. Our tool will convert your number without any problem. It is also providing a chart for your help. You can easily use these instruments online.</p>
                        <p><strong><span style={{ textDecoration: "underline" }} >11111111 in the binary system.</span></strong></p>
                        <p>The binary numbers totally depend on 0 and 1. You can easily check numbers in binary to hex with the tool of <strong>binary to hex.</strong> Binary numbers are only <strong>2s complement to decimal conversion</strong>. Simply 11111111 is 255 in binary. 11111111 is the base 2 binary number. 11111111 is less than 256 and 256 is 2 to the 8<sup>th</sup> power.<strong>&nbsp; Lovepdf.co&rsquo;s</strong> tool <strong>binary to hex</strong> introduced <strong>8-bit calculator</strong> and<strong> base calculator</strong> in their tool kit. It is totally free and reliable for use. You can use them freely. In the binary system any power of 2 is expressed as 1 with the number of 0&rsquo;s, equal to that power.</p>
                        <p><strong><span style={{ textDecoration: "underline" }}>FFFF is in hexadecimal.</span></strong></p>
                        <p>In hexadecimal F is 15, so FFFF is</p>
                        <p>15x16<sup>3</sup>+15x16<sup>2</sup>+15x16<sup>1</sup>+15x16<sup>0</sup></p>
                        <p>61440+3840+240+15</p>
                        <p>65535=FFFF</p>
                        <p>You can easily see the result of FFFF in the binary system by using our chart available in the binary to hex tool.</p>
                        <p><strong><span style={{ textDecoration: "underline" }}>Converting binary to hexadecimal</span></strong>.</p>
                        <p><strong>Lovepdf.co</strong> is a website which provides tools related to binary hex family. You can easily convert binary to hex or hex to binary by using a tool kit. You can also convert <strong>binary fraction to decimal</strong> with the use of <strong>binary to hex</strong> converter. Just choose the tool according to your needs. Write the digit in the drop menu and click the convert button. Your digit will automatically convert.</p>
                    </div>
                    <div className="related_topics">
                        <div className="tableofcontent">
                            <div className="heading">Table of Content</div>
                            <div className="topicnames">binary</div>
                        </div>
                        <div className="tableofcontent">
                            <div className="heading">Related Converters</div>
                            {
                                display.map((obj) => {
                                    return (
                                        <div className="topicnames"><Link href={obj.topiclink}>{obj.topic}</Link></div>
                                    )
                                })
                            }

                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Binarytohex