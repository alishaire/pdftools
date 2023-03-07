import React, { useState, useEffect } from 'react'
import Link from 'next/link';
import Head from 'next/head';

const Decimaltohexa = () => {

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
            return obj.topic !== 'decimal-to-Hexadecimal';

        })
        setDisplay(newarr);

    }, [])


    const [Decimal, setDecimal] = useState('');
    const [result, setResult] = useState('');

    const decimaltohexaconvert = (e) => {
        e.preventDefault();
        let number = parseInt(Decimal);
        let hexStr = number.toString(16).toUpperCase();
        setResult(hexStr);
    }
    return (
        <>
         <Head>
        <title> Decimal to Hexa-Decimal number converter | [Website Name]</title>
        <meta name="description" content=" Decimal to Hexa-Decimal number converter  " />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
        </Head>
            <div class="container calulator">
                <div class="rounding-calculator">
                    <h1>Decimal to Hexadecimal</h1>
                    <div>
                        <label>Type decimal Number</label>
                        <input class="input" type="Number" value={Decimal} onChange={(e) => { setDecimal(e.target.value) }} placeholder="Enter decimal Number" />
                    </div>
                    <button onClick={decimaltohexaconvert} className='calculator-button' >Convert</button>

                    <div>
                        <h3>
                            {result}
                        </h3>

                    </div>
                </div>
                <div className="content_sec">
                    <div className="content">
                      

                        <p><strong><span style={{ textDecoration: "underline" }}>What is decimal and hex.? Decimal to hex introduction</span></strong>.</p>
                        <p>Decimal is a system of numbering which stands with base 10. It belongs to the Latin word decimal whose meaning is 10th part. It is a special fraction system with a specific form. Hex is a system of numbering which is represented by base 16. In mathematics it is a positional numerals system which represents numbers using radix. Hexadecimal uses 16 symbols from 0 to 9 and A to F. It is used for presenting large numbers with fewer digits. It is also known as base 16 systems. Now the question is <strong>what is decimal to hex?</strong> <strong>Decimal to hex</strong> is a process of converting a decimal number to a hexadecimal number.</p>
                        <p><strong><span style={{ textDecoration: "underline" }}>Best decimal to hexadecimal converter. Lovepdf.co</span></strong></p>
                        <p><strong>Decimal to hexadecimal</strong> conversion is a method of converting decimal values to hexadecimal values. Means it is a system of changing values with 10 to with base 16. <strong>Lovepdf.co</strong> brings unbelievable tools for converting values. <strong>Decimal to hex</strong> is one of them. You can easily convert by using <strong>decimal to hexadecimal converter</strong>. It is very easy to use. Just write the values in the drop down menu and click on the convert button. Your values will be automatically converted to the hexadecimal values. Click on the save button.</p>
                        <p><strong><span style={{ textDecoration: "underline" }}>Decimal to hexadecimal conversion. With calculator</span></strong>.</p>
                        <p>Hexadecimal number system basically identifies binary and decimal systems. But it uses base 16 instead of base 10 and 2. Every hex digit represents four binary digits. That means hexadecimal is used to represent binary digits with fewer digits. In <strong>lovepdf.co</strong> website you can find a free <strong>hexadecimal calculator</strong>, in which you can add, subtract, multiply and divide hexadecimal values. You can use it online. You can do it by hand also by following the simple steps:</p>
                        <p>● Divide the decimal by 16 and keep dividing until the result become 15 or less</p>
                        <p>● Write the number before the decimal point.</p>
                        <p>● See and write the hex value in the decimal_hex table given below</p>
                        <p>● Write the value after the decimal point and multiply it by 16</p>
                        <p>● Repeat the above two steps until the remainder becomes zero.</p>
                        <p><strong><span style={{ textDecoration: "underline" }}>How to do decimal to hexadecimal online? Lovepdf.co</span></strong></p>
                        <p>Decimal is a system of numbering which stands with base 10. It is a special fraction system with a specific form. Hex is a system of numbering which is represented by base 16. In mathematics it is a positional numerals system which represents numbers using radix. <strong>Decimal to hex</strong> is a simple process of converting <strong>decimal values to hex values</strong>.&nbsp; You can do it by using the tool <strong>decimal to hex</strong>. You also do it by using a decimal to hexadecimal <strong>table</strong> given in the website. You can use tools online. It is totally free and easy to use. It has a user-friendly interface.</p>
                        <p><strong><span style={{ textDecoration: "underline" }}>Decimal to hexadecimal. with formula. explanation</span></strong>.</p>
                        <p>Decimal is a base 10 system while hex is base 16 system. Decimal uses 0 to 9 symbols in the system. Hexadecimal uses 0 to 9 and A to F symbols in the system. There is a rule to convert. Multiply each with starts from the unit place of the number with the powers of 16. The result will be base 10 or decimal number. Simple steps are considered as a formula of converting <strong>decimal to hex</strong>. By dividing you can convert <strong>decimal to hex</strong>. Write the decimal number as a dividend.&nbsp; Divide the decimal with the hexadecimal base 16. Write the remainder. Now change the remainder with the hexadecimal values by keeping an eye on the hexadecimal<strong> table</strong>. Repeat the above steps until you get the result greater than zero.</p>
                        <p>&nbsp;<strong><span style={{ textDecoration: "underline" }}>Conversion of decimal to hexadecimal. With steps.</span></strong></p>
                        <p>It is very easy to convert <strong>decimal to hexadecimal</strong> with tool <strong>decimal to hex converter</strong>. You can do it within a few seconds and a few clicks. But it is also easy to do it by hand. Following are the easy and detailed steps for converting <strong>decimal to hexadecimal.</strong></p>
                        <p><strong>Step 1</strong>: divide the decimal number by 16 (hexadecimal base)</p>
                        <p><strong>Step 2</strong>: write a remainder in a side</p>
                        <p><strong>Step 3</strong>: divide the quotient by 16 and continue the dividing till the quotient become zero</p>
                        <p>Step 4: write the value of the remainder in the reverse order to get the hexadecimal number</p>
                        <p><strong>Step 5</strong>: write down the numbers from 0 to 9 but write A to F instead of 10 to 15.</p>
                        <p><strong><span style={{ textDecoration: "underline" }}>How to do decimal to hexadecimal by hand? Examples</span></strong></p>
                        <p>Decimal is a system of numbering which stands with base 10. It belongs to the Latin word decimal whose meaning is 10th part. It is a special fraction system with a specific form. Hex is a system of numbering which is represented by base 16. In mathematics it is a positional numerals system which represents numbers using radix. Hexadecimal uses 16 symbols from 0 to 9 and A to F. <strong>Decimal to hexadecimal</strong> is a process of converting decimal values to hexadecimal values. You can do it with the tool <strong>decimal to hexadecimal </strong>introduced by the lovepdf.co website. Basically decimal and hexadecimal are from one family. You can better understand it with an example.</p>
                        <p><strong>We will use decimal value (960)<sub>10 </sub>to convert into hexadecimal.&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; </strong></p>
                        <p>&nbsp;Firstly, we divide 960 by 16(hexadecimal base)</p>
                        <p>960 &divide; 16 = 60 and remainder = 0</p>
                        <p>Again we divide quotient 60 by 16.</p>
                        <p>60 &divide; 16 = 3 and the remainder is 12.</p>
                        <p>Again dividing 3 by 16, the quotient is 0 and remainder is 3.</p>
                        <p>&nbsp;writing the remainder in reverse order and change the equivalent hexadecimal value for them from table, we get,</p>
                        <p>3=3, 12=C and 0=0</p>
                        <p>So the result is (960)<sub>10</sub> = (3C0)<sub>16</sub></p>
                        <p><strong><span style={{ textDecoration: "underline" }}>What is decimal to table. Lovepdf.co.</span></strong></p>
                        <p><strong>Decimal to hex table</strong> is used for obtaining the values and symbols that are used to write a decimal value to hex. <strong>Lovepdf.co</strong> provides tables for you.&nbsp; That is given below.&nbsp; You can also convert by using the tool <strong>hexadecimal to decimal.</strong></p>
                        <p><strong>Hexadecimal Decimal (Equivalent Value)</strong></p>
                        <p>0&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; 0</p>
                        <p>1&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; 1</p>
                        <p>2&nbsp;&nbsp;&nbsp; &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; 2</p>
                        <p>3&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; 3</p>
                        <p>4&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; 4</p>
                        <p>5&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; 5</p>
                        <p>6&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; 6</p>
                        <p>7&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; 7</p>
                        <p>8&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; 8</p>
                        <p>9&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; 9</p>
                        <p>A&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; 10</p>
                        <p>B&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; 11</p>
                        <p>C&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; 12</p>
                        <p>D&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; 13</p>
                        <p>E&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; 14</p>
                        <p>F&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; 15</p>
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

export default Decimaltohexa