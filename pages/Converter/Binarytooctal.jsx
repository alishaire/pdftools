import React, { useState, useEffect } from 'react'
import Link from 'next/link';
import Head from 'next/head'

const Binarytooctal = () => {


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
      return obj.topic !== 'binary-to-Octal';

    })
    setDisplay(newarr);

  }, [])


  const [binary, setBinary] = useState('');
  const [hex, setHex] = useState('');

  const handleChange = (event) => {
    const binaryValue = event.target.value;
    const hexValue = parseInt(binaryValue, 2).toString(8);
    setBinary(binaryValue);
    setHex(hexValue);
  }


  return (
    <>
     <Head>
        <title> Binary to Octal number converter | [Website Name]</title>
        <meta name="description" content=" Binary to Octal number converter " />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
        </Head>
    



      <div class="container calulator">
        <div class="rounding-calculator">
          <h1>Hexa To Binary</h1>
          <div>
            <label>Type Binary Number</label>
            <input class="input" type="Number" value={binary} onChange={handleChange} placeholder="Enter Binary Number" />
          </div>
          <button className='calculator-button' >Convert</button>

          <div>
            <h3>
              {hex}
            </h3>

          </div>
        </div>
        <div className="content_sec">
          <div className="content">
            <p><strong><span style={{ textDecoration: "underline" }}>What is a binary to octal? Introduction.</span></strong></p>
            <p><strong><span style={{ textDecoration: "underline" }}>&nbsp;</span></strong></p>
            <p>The binary is a base 2 number system. There are only two possible values that can be used in binary numbers 0 and 1. It is also called a <strong>bit</strong> system. In computer applications, binary digits are used. It is invented by Gottfried Leibniz. In electronics binary numbers 0 and 1 refers to on and off. While <strong>octal</strong> is the base 8 numbering system. It comes from the Latin word eight. It uses the first eight digits 0 to 7. It is mostly used to represent binary numbers by grouping binary numbers into three. It is also called <strong>oct</strong> number system. <strong>Binary to octal</strong> is a process of converting binary numbers to octal numbers. But we cannot convert <strong>binary to octal</strong> directly, so firstly we have to convert <strong>binary to decimal</strong> and then <strong>decimal to octal.</strong></p>
            <p><strong>&nbsp;</strong></p>
            <p><strong><span style={{ textDecoration: "underline" }}>Binary to the octal converter. Best converter. Lovepdf.co</span></strong></p>
            <p><strong>&nbsp;</strong></p>
            <p><strong>Binary-to-octal conversion</strong> is a method of converting binary digits to octal. <strong>Lovepdf.co</strong> provides a tool for converting binary to octal directly. Write the binary number in the drop-down menu and click on the converting button. Your binary digits will automatically convert into octal numbers. <strong>Binary to octal</strong> <strong>converter</strong> is very easy to use. You can do it by hand also just follow the few steps that are given below.</p>
            <p>&nbsp;</p>
            <p>● Write down the binary number</p>
            <p>&nbsp;</p>
            <p>● Multiply every binary digit by 2n-1 ( n is the digit&rsquo;s place from the decimal)</p>
            <p>&nbsp;</p>
            <p>● Result is a decimal number equal to the given binary number</p>
            <p>&nbsp;</p>
            <p>● Divide the decimal number by eight (base of octal)</p>
            <p>&nbsp;</p>
            <p>● Write down the reminder from below to up.</p>
            <p>&nbsp;</p>
            <p><strong><span style={{ textDecoration: "underline" }}>How can you do binary to octal? By formula.</span></strong></p>
            <p><strong><span style={{ textDecoration: "underline" }}>&nbsp;</span></strong></p>
            <p><strong>Binary to octal</strong> is a process of transferring binary digits to octal notation. In others, words changing a base 2 number system into an 8-base system is called <strong>binary to octal conversion</strong>. But you cannot convert it directly. <strong>Binary-to-decimal conversion</strong> is very important for obtaining an octal number. Firstly we have to do binary numbers into decimals and then in octal. The main thing in this process is to change first in decimal.</p>
            <p>&nbsp;</p>
            <p><strong><span style={{ textDecoration: "underline" }}>Binary to octal conversion. With examples.</span></strong></p>
            <p><strong><span style={{ textDecoration: "underline" }}>&nbsp;</span></strong></p>
            <p><strong>Lovepdf.co</strong> introduces a tool for converting <strong>binary to octal</strong> directly. It saves you time. It is online and free to use. It is used to represent binary numbers by grouping binary numbers into three. We will explain it with examples so that you can easily understand.</p>
            <p>We will use the binary number 10010110 into an octal number for converting.</p>
            <p>Firstly we will convert them into decimal numbers with base 2.</p>
            <p>= (10010110)2</p>
            <p>= 1x2<sup>7</sup>+0x2<sup>6</sup>+0x2<sup>5</sup>+1x2<sup>4</sup>+0x2<sup>3</sup>+1x2<sup>2</sup>+1x2<sup>1</sup>+0x2<sup>0</sup></p>
            <p>= 128+0+0+16+0+4+2+0</p>
            <p>= (150)<sub>10 </sub>this is result of a binary number that equal to the given binary number</p>
            <p>For gaining octal numbers now we will convert decimal numbers to octal numbers with base 8</p>
            <p>= (150)<sub>10</sub></p>
            <p>= 2x8<sup>2</sup>+2x8<sup>1</sup>+6x8<sup>0</sup></p>
            <p>= (226)<sub>8</sub> this is the answer.</p>
            <p>&nbsp;</p>
            <p><strong><span style={{ textDecoration: "underline" }}>What is binary to octal table? Lovepdf.co</span></strong></p>
            <p><strong><span style={{ textDecoration: "underline" }}>&nbsp;</span></strong></p>
            <p>The binary is a base 2 number system while octal is a base 8 number system. <strong>Binary to octal</strong> is a system of converting binary numbers to octal. It is used to represent a binary number more shorten. <strong>Lovepdf.co</strong> website provides <strong>binary to octal</strong> tables for you. By this table, you can easily write the value of octal equal to binary. The table is given below.</p>
            <p>Binary Number &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; Octal Number</p>
            <p>0 &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; 0</p>
            <p>1 &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; 1</p>
            <p>10 &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; 2</p>
            <p>11 &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; 3</p>
            <p>100 &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; 4</p>
            <p>101 &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; 5</p>
            <p>110 &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; 6&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;</p>
            <p>111 &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; 7</p>
            <p>1000 &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; 10</p>
            <p>1001 &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; 11&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;</p>
            <p>1010 &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; 12</p>
            <p>1011 &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; 13</p>
            <p>1100 &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; 14</p>
            <p>1101 &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; 15</p>
            <p>1110 &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; 16</p>
            <p>1111 &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; 17</p>
            <p>10000 &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; 20</p>
            <p>10001 &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; 21</p>
            <p>10010 &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; 22</p>
            <p>10011 &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; 23</p>
            <p>10100 &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; 24</p>
            <p>10101 &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; 25</p>
            <p>10110 &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; 26</p>
            <p>10111 &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; 27</p>
            <p>11000 &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; 30</p>
            <p>11001 &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; 31</p>
            <p>11010 &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; 32</p>
            <p>11011 &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; 33</p>
            <p>11100 &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; 34</p>
            <p>11101 &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; 35</p>
            <p>11110 &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; 36</p>
            <p>11111 &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; 37</p>
            <p>100000 &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; 40</p>
            <p>1000000 &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; 100</p>
            <p>10000000 &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; 200</p>
            <p><strong><span style={{ textDecoration: "underline" }}>What does binary number to octal number mean</span></strong>?</p>
            <p>&nbsp;</p>
            <p><strong>Binary number to octal number</strong> is a system to represent binary numbers to specific given octal numbers. In octal numbers, there are specific fixed numbers that show binary numbers mentioned above in the article. You can easily write <strong>binary numbers to an octal number</strong> by seeing the table and showing your binary number shorten.</p>
            <p>&nbsp;</p>
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

export default Binarytooctal