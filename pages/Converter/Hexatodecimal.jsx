import React, { useState, useEffect } from 'react'
import Link from 'next/link';
import Head from 'next/head';

const Hexatodecimal = () => {

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
      return obj.topic !== 'Hexadecimal-to-decimal ';

    })
    setDisplay(newarr);

  }, [])

  const [hex, setHex] = useState('');
  const [result, setResult] = useState('');


  console.log(hex);


  const hexTodecimalconvert = (e) => {
    e.preventDefault();
    // function hexToBinary() {
    var hexRegex = /[0-9A-Fa-f]/g;
    if (hex.match(hexRegex) && hex.length > 0) {

      let value = parseInt(hex, 16);
      setResult(value);
    } else {
      // return 'Invalid Hexadecimal';
      let value = 'Invalid Hexadecimal';
      setResult(value);
    }
    // }

  }

  return (
    <>
       <Head>
        <title> Hexadecimal to Decimal Number converter | [Website Name]</title>
        <meta name="description" content=" Hexadecimal to Decimal Number converter" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
        </Head>

      <div class="container calulator">
        <div class="rounding-calculator">
          <h1>Hexa To Decimal
          </h1>
          <div>
            <label>Type Hexadecimal Number</label>
            <input class="input" id="ti1" name='binary_text' onChange={(e) => { setHex(e.target.value) }} type="text" />
          </div>
          <button className='calculator-button' onClick={hexTodecimalconvert}>Convert</button>

          <div>
            {result}
          </div>
        </div>
        <div className="content_sec">
          <div className="content">
            <p><strong><span style={{ textDecoration: "underline" }}>What are hex and decimal? Hex to decimal introduction.</span></strong></p>
            <p><strong>Hex</strong> is a system of numbering that is represented by base 16. In mathematics, it is a positional numerals system that represents numbers using radix. Hexadecimal uses 16 symbols from 0 to 9 and A to F. It is used for presenting a large number with fewer digits. It is also known as <strong>the base 16 system</strong>.&nbsp; <strong>Decimal</strong> is a system of numbering that stands with base 10. It belongs to the Latin word decimal whose meaning is the 10th part. It is a special fraction system with a specific form. <strong>Hex to decimal</strong> is a system of converting your hexadecimal number system into a decimal system. There is a rule to convert. Multiply each with starts from the unit place of the number with the powers of 16. The result will be base 10 or a decimal number.</p>
            <p><strong><span style={{ textDecoration: "underline" }}>What is a hexadecimal translator? Lovepdf.co</span></strong></p>
            <p>Hexadecimal is a base 16 numbering system. It represents large numbers in fewer digits. <strong>The hexadecimal translator</strong> is used to convert hex values into text form. <strong>Lovepdf.co</strong> introduces a tool for converting hexadecimal into text. It is <strong>a hexadecimal translator</strong>. You can use it easily. Just write the hexadecimal numbers into the given box. It will automatically translate the hex number. It gives 100 % accurate results. <strong>Lovepf.co</strong> uses advanced techniques for converting your number values.&nbsp;</p>
            <p><strong><span style={{ textDecoration: "underline" }}>A brief explanation of the hexadecimal number system.</span></strong></p>
            <p>Hexa means six. It is also called the base 16 number system. It is known as the hex number system. It uses 16 possible symbols and values from 0 to 9. It is used for representing a large number with fewer digits. In chemistry, hexa is used to define six atoms. It is also used to define six groups of atoms in the compound. Hexadecimal is also called <strong>the numbering system with base 16</strong>. It has 0 to 15 (0,1,2,3,4,5,6,7,8,9,10,11,12,13,14,15) and A to F(A, B, C, D, E, F) symbols in the system. To represent two digits' numeral values it uses the alphabetic character. And it is considered authentic numerals. Each hexadecimal digit represents a decimal value. The decimal system is a base 10 number system. It is used for writing a computer program and to represent numbers that are stored in the main memory of computers.</p>
            <p><strong><span style={{ textDecoration: "underline" }}>Hex to decimal conversion, with the calculator. Lovepdf.co</span></strong></p>
            <p>The hexadecimal number system is identified with the binary and decimal systems. But it uses base 16 instead of base 10 and 2. Every hex digit represents four binary digits. That means hexadecimal is used to represent binary digits with fewer digits. <strong>Hex to decimal</strong> is a system of converting hex values to decimal values. In <strong>lovepdf.co</strong> website you can find a free <strong>hexadecimal calculator</strong>, in which you can add, subtract, multiply, and divide hexadecimal values. It is free of cost and easy to use. You can use it online. You can also use converter <strong>hex to decimal</strong> here. You can also calculate by hand. Just follow the easy simple steps that are given below:</p>
            <p>● Divide the number by 16</p>
            <p>● Write the remainder aside</p>
            <p>● again divide the quotient by 16 and still repeat the process till the quotient value becomes zero.</p>
            <p>You can also do operations by keeping an eye on the hexadecimal table provided by <strong>lovepdf.co</strong>.</p>
            <p><strong><span style={{ textDecoration: "underline" }}>How can you do hex to decimal online?</span></strong></p>
            <p>Hex is a system of numbering that is represented by base 16. It is used for presenting a large number with fewer digits. Decimal is a system of numbering that stands with base 10. <strong>Hex to decimal converter</strong> is a process of converting hex values to decimal values. You can easily do it by using a tool <strong>hex to decimal</strong> introduced by <strong>lovepdf.co</strong> on their tool website. It is an online free website that can be used on computers and also on <strong>android mobile</strong> by installing the <strong>app</strong>. Simply open the website and click on the converter option <strong>hex to decimal</strong>. Write the hex value in the drop-down menu and click on the convert button. Hex values will automatically convert into decimal values.</p>
            <p><strong><span style={{ textDecoration: "underline" }}>What are hexadecimal numbers? With examples</span></strong>.</p>
            <p>The hexadecimal numbers system is a base 16 number system. It is also called a positional number system in which every digit has a weight of the power of 16 that means every digit is 16 times more powerful than the previous digit.&nbsp; <strong>Hexadecimal numbers</strong> consist of numbers and alphabets. More explanation with example</p>
            <p>The number we use is 7CF.</p>
            <p>In hexadecimal system,</p>
            <p>7 = 7</p>
            <p>C = 12</p>
            <p>F = 15</p>
            <p>We multiply each digit with the powers of 16 starting from the unit place of the number to convert it into a decimal number.</p>
            <p>7CF = (7 &times; 16<sup>2</sup>) + (12 &times; 16<sup>1</sup>) + (15 &times; 16<sup>0</sup>)</p>
            <p>= (7 &times; 256) + (12 &times; 16) + (15 &times; 1)</p>
            <p>= 1792 + 192 + 15&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;</p>
            <p>&nbsp;If you want to convert hex numbers into decimals. You can use <strong>a hex table</strong> or can see a <strong>hex chart. </strong>You can write hexadecimal numbers by following these steps</p>
            <p>Write the digit whose value is to be determined</p>
            <p>See the position of the digit in the number table</p>
            <p>See the base of the number and write it.</p>
            <p><strong><span style={{ textDecoration: "underline" }}>Best hexadecimal converter. Hex to decimal</span></strong>.</p>
            <p><strong>Hex to decimal converter</strong> is the best converter that is available online and free on the website <strong>lovepdf.co</strong>. It is very easy to use. <strong>Hex to decimal converter</strong> will convert your number within a few seconds. You can use it freely. Just write the hex value in the given place and click on the convert button. Your value will be automatically converted. You can also do it on your mobile by installing the <strong>lovepdf.co app</strong> in android phones.</p>
            <p><strong><span style={{ textDecoration: "underline" }}>What is a hex to the decimal table? Lovepdf.co.</span></strong></p>
            <p><strong>Hex to the decimal table</strong> is used for obtaining the values and symbols that are used to write a hex value to decimal. <strong>Lovepdsf.co</strong> provides a table for you. That is given below. You can also convert by using the tool <strong>hexadecimal to decimal. </strong></p>
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

export default Hexatodecimal