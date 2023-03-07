import React, { useState,useEffect } from 'react'
import Link from 'next/link';
import Head from 'next/head'

const Binarytoascii = () => {


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
      return obj.topic !== 'binary-to-ascii';

    })
    setDisplay(newarr);

  }, [])


  const [Binary, setBinary] = useState('');
  const [result, setResult] = useState('');

  console.log(Binary);


  const Binarytoasciiconvert = (e) => {
    e.preventDefault();
    if (Binary.match(/[10]{8}/g)) {
      var wordFromBinary = Binary.match(/([10]{8}|\s+)/g).map(function (fromBinary) {
        return String.fromCharCode(parseInt(fromBinary, 2));
      }).join('');
      setResult(wordFromBinary);
      return console.log(wordFromBinary);
    } else {
      setResult('inavalid binary text')
    }

  }

  return (


    <>
     <Head>
        <title> Binary to Ascii(Text) converter | [Website Name]</title>
        <meta name="description" content="Binary to Ascii(Text) converter" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
        </Head>



      <div class="container calulator">
        <div class="rounding-calculator">
          <h1> Binary to ascii text converter</h1>
          <div>
            <label>Type Binary Number</label>
            <input class="input" value={Binary} type="number" onChange={(e) => { setBinary(e.target.value) }} placeholder="Enter Binary Number" />
          </div>
          <button onClick={Binarytoasciiconvert} className='calculator-button' >Convert</button>

          <div>
            <h3>
              {result}
            </h3>

          </div>
        </div>
        <div className="content_sec">
          <div className="content">
            <p><strong><span style={{ textDecoration: "underline" }}>What does binary to Ascii mean? Binary and ascii.</span></strong></p>
            <p><strong>Binary numbers</strong> are numbers that are expressed only in two digits 0, 1 according to digital electronics and mathematics. In computers, a binary system is applied internally. Every digit is represented as a bit. Binary numbers are also called base 2. Only two digits are used 0 and 1 in a binary system.</p>
            <p>For a computer language, the binary system is used. <strong>Ascii</strong> is an abbreviation of (the American standard code for information interchange). It is most commonly used for changing the format of text data on computers and on the internet. It consists of 128 alphabets, numeric and special characters, and control codes<strong>. Binary to ascii</strong> is a method of transferring binary values or binary data to ascii format. In a binary system, you can transfer files as raw data while in ascii mode you can transfer textual data.</p>
            <p><strong><span style={{ textDecoration: "underline" }}>Binary to text converter. Best converter lovepdf.co</span></strong></p>
            <p><strong>Binary-to-text conversion</strong> or encoding are necessary for converting <strong>binary to text</strong> when the channel does not allow binary digit for storing. <strong>Binary-to-text converter</strong> is very easy to use. <strong>Lovepdf.co</strong> introduces a binary-to-text converter where you can easily convert binary values into plain texts. In others words, you can say that <strong>binary to text converter</strong> is a process of converting binary values into a set of printable characters. Just write the binary numbers in the drop-down menu and click on the converter button. Your binary values will automatically convert into text. You can easily save your data by clicking the save button.</p>
            <p><strong><span style={{ textDecoration: "underline" }}>ASCII (American standard code for information interchange). Table.</span></strong></p>
            <p>Ascii is a basic encoding format that is used for electronic communication between computers.&nbsp; <strong>Ascii table</strong> is a collection of 128 alphabets, numeric and special characters, and control codes. That is used in computer during working. 7 bits are enough to show a character in ascii, but most computers used 8 bits for ascii characters. You can see an ascii table in <strong>the binary to ascii</strong> tool provided by <strong>lovepdf.co</strong> on their website. If you want to insert an ascii code into your document simply press and hold the ALT button during typing the character code.</p>
            <p>Table of alphabets, characters symbols. Ascii code table.</p>
            <p>Ascii table consists of numbers, letters, and special symbols. Every character is designed with a special 7-bit code. In the alphabet, the ascii values for lowercase are from 97 to 122 while in uppercase it is from 65 to 90. It is a 7-bit code table that&rsquo;s means minimized coasts in American English. You can see the code table briefly on the website lovepdf.co.</p>
            <p><strong><span style={{ textDecoration: "underline" }}>Binary to ascii converter. Lovepdf.co converting app</span></strong></p>
            <p>Binary and ascii are two different kinds of communication formats that are used for sending a postscript file from a computer. <strong>Binary to ascii converter</strong> is a tool that helps you to convert ascii format to binary and translate it to a readable format<strong>. Lovepdf.co </strong>introduces a tool for converting <strong>binary to ascii</strong>. Where you can easily convert your data and make it easy for reading. Write a binary number in the given place than click on the convert button your value will be automatically converted to ascii format. Now click save button.</p>
            <p><strong><span style={{ textDecoration: "underline" }}>How can you convert binary to ascii codes?</span></strong></p>
            <p>It is very easy to convert <strong>binary to ascii</strong> code by hand. Just follow the table that is given above in the website and follow the codes to write and achieve the result. You can do it by following the simple steps.</p>
            <p>Firstly convert every four binary digits into one hex digit</p>
            <p>Now make a pair of hex digit</p>
            <p>Convert every hex digit into a decimal number</p>
            <p>At the end convert decimals numbers into ascii characters</p>
            <p><strong><span style={{ textDecoration: "underline" }}>What is bin to ascii. Binary to ascii.</span></strong></p>
            <p>Binary numbers are expressed in base 2. There are only two digits used 0 and 1 in the binary system. Ascii stands for (American standard code for information interchange). It is most commonly used for encoding format for text data in computers and on the internet. Binary <strong>(bin to ascii</strong> ) is a process of decoding <strong>ascii text from binary</strong> numbers and translating it to a readable format.</p>
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

export default Binarytoascii