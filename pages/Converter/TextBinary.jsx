import React, { useState, useEffect } from 'react'
import Link from 'next/link';
import Head from 'next/head';

const TextBinary = () => {

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
      return obj.topic !== 'Ascii(Text)-to-Binary ';

    })
    setDisplay(newarr);

  }, [])



  const [dec, setDec] = useState({
    binary_text: ""
  })
  function convert(e) {
    e.preventDefault();
    var output = document.getElementById("ti2");
    var input = document.getElementById("ti1").value;
    output.value = "";
    for (var i = 0; i < input.length; i++) {
      output.value += input[i].charCodeAt(0).toString(2) + " ";
    }
  }
  return (
    <>
     <Head>
        <title> Ascii(Text) to Binary Number converter | [Website Name]</title>
        <meta name="description" content=" Hexadecimal to Decimal Number converter" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
        </Head>

      <div class="container calulator">
        <div class="rounding-calculator">
          <h1>Text to Binary</h1>
          <div>
            <label>Text</label>
            <input class="input" id="ti1" name='binary_text' value={dec.name} onChange={(e) => { setDec(e.target.value) }} type="text" />
          </div>
          <button className='calculator-button' onClick={convert}>Convert</button>

          <div>
            <textarea
              disabled
              name=""
              id="ti2"
              cols="50"
              rows="5"
              placeholder="Result"
            ></textarea>
          </div>
        </div>
        <div className="content_sec">
          <div className="content">
            <p><strong><span style={{ textDecoration: "underline" }}>What is ascii and binary? Ascii to binary introduction.</span></strong></p>
            <p>Ascii stands for American standard code for information interchange. It is most commonly used for changing format for text data in computers and on the internet. It is also called an 8 bit code system. Eight bit is also called a byte. In computers it is known as byte.&nbsp; It consists of 128 alphabets, numeric and special characters and control codes. Binary numbers are the numbers which are expressed only in two digits 0, 1 according to digital electronics and mathematics. In computers a binary system is applied internally. Every digit is represented as a bit. Binary numbers are also called base 2. Only two digits are used 0 and 1 in the binary system.&nbsp; For computer language the binary system is used.&nbsp; <strong>Ascii to binary</strong> is a process of converting ascii special codes to binary values. By converting <strong>ascii to binary,</strong> binary digits can be stored in one byte of a computer memory.</p>
            <p><strong><span style={{ textDecoration: "underline" }}>What is the ascii character in the binary chart?</span></strong></p>
            <p><strong>Ascii</strong> is a basic encoding format that is used for electronic communication between computers.&nbsp; <strong>The Ascii table chart</strong> is a collection of 128 alphabets, numeric and special characters, and control codes. It is used in computers during working. 7 bits are enough to show a character in ascii, but most computers used 8 bits for ascii characters. It is also called an 8 bit<strong> code system</strong>. Each eight bit is known as a byte. Every binary code whose value is eight digits can be stored as one byte in computers. <strong>Lovepdf.co</strong> is a tool website. A <strong>ascii character chart or table</strong> is available on the website. You can see it below.</p>
            <p><strong><span style={{ textDecoration: "underline" }}>How to convert ascii to binary online. Best tool. Lovepdf.co</span></strong></p>
            <p>Ascii stands for American standard code for information interchange. It is most commonly used for changing format for text data in computers and on the internet. . In computers a binary system is applied internally. Every digit is represented as a bit. Binary numbers are also called base 2<strong>. Ascii to binary</strong> conversion is a process of converting ascii codes to binary digits. It is very easy to convert by tool provided by <strong>lovepdf.co</strong> in their website of tools. It is free of cost. You can use it online. It is reliable and friendly to use. You can do it by just writing the ascii codes in the given box. Click on the convert button. Your ascii codes will automatically convert to the binary values. You can save it by copying it. You can also do it by hand. <strong>Lovepdf.co</strong> also provides detailed steps by writing it by hand. Follow these easy simple steps</p>
            <p>● Write character</p>
            <p>● Write the decimal codes of character from the ascii table (given in the website)</p>
            <p>● Translate decimal to binary byte</p>
            <p>● Repeat the same procedure to the next byte</p>
            <p><strong><span style={{ textDecoration: "underline" }}>What is ascii character to binary? Explanation</span></strong>.</p>
            <p><strong>Ascii to binary</strong> is a process of converting ascii characters to binary digits. In computer applications binary values are used so it is necessary to convert ascii characters for making a value readable. Ascii has a specific code that represents binary values. It is given below.</p>
            <p>Let.&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; Ascii co.&nbsp; Bin&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; Let.&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; Ascii co.&nbsp; Bin</p>
            <p>a&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; 097&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; 01100001&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; A&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; 065&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; 01000001</p>
            <p>b&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; 098&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; 01100010&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; B&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; 066&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; 01000010</p>
            <p>c&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; 099&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; 01100011&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; C&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; 067&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; 01000011</p>
            <p>d&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; 100&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; 01100100&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; D&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; 068&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; 01000100</p>
            <p>e&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; 101&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; 01100101&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; E&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; 069&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; 01000101</p>
            <p>f&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; 102&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; 01100110&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; F&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; 070&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; 01000110</p>
            <p>g&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; 103&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; 01100111&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; G&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; 071&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; 01000111</p>
            <p>h&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; 104&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; 01101000&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; H&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; 072&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; 01001000</p>
            <p>i&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; 105&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; 01101001&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; I&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; 073&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; 01001001</p>
            <p>j&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; 106&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; 01101010&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; J&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; 074&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; 01001010</p>
            <p>k&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; 107&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; 01101011&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; K&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; 075&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; 01001011</p>
            <p>l&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; 108&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; 01101100&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; L&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; 076&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; 01001100</p>
            <p>m&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; 109&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; 01101101&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; M&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; 077&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; 01001101</p>
            <p>n&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; 110&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; 01101110&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; N&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; 078&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; 01001110</p>
            <p>o&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; 111&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; 01101111&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; O&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; 079&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; 01001111</p>
            <p>p&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; 112&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; 01110000&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; P&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; 080&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; 01010000</p>
            <p>q&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; 113&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; 01110001&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; Q&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; 081&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; 01010001</p>
            <p>r&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; 114&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; 01110010&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; R&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; 082&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; 01010010</p>
            <p>s&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; 115&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; 01110011&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; S&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; 083&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; 01010011</p>
            <p>t&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; 116&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; 01110100&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; T&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; 084&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; 01010100</p>
            <p>u&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; 117&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; 01110101&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; U&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; 085&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; 01010101</p>
            <p>v&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; 118&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; 01110110&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; V&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; 086&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; 01010110</p>
            <p>w&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; 119&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; 01110111&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; W&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; 087&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; 01010111</p>
            <p>x&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; 120&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; 01111000&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; X&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; 088&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; 01011000</p>
            <p>y&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; 121&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; 01111001&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; Y&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; 089&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; 01011001</p>
            <p>z&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; 122&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; 01111010&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; Z&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; 090&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; 01011010</p>
            <p>&nbsp;</p>
            <p><strong><span style={{ textDecoration: "underline" }}>What is text to binary code generator. Uses. Introduction</span></strong>.</p>
            <p><strong>Lovepdf.co</strong> is a website that introduces tools for making your business easy. By using tools you can save your time. <strong>Text to binary generator</strong> is a tool of converting or generating text codes to binary values (0 and 1). Just write the text or words in the drop down menu and hit on the convert button. Your words will be converted within a few seconds. You can also attach a file or URL for converting.&nbsp; It is the best converter on the internet. You can also install the lovepdf.co app on your android phone. It is an online free website.</p>
            <p><strong><span style={{ textDecoration: "underline" }}>Table of alphabets, characters symbols. Ascii code table.</span></strong></p>
            <p><strong>The Ascii table</strong> consists of numbers, letters and special symbols. Every character is designed with a special 7 bit code. In alphabets the ascii values for lowercase is from 97 to 122 while in uppercase it is from 65 to 90. It is a 7 bit code table that means minimized coasts in American English. You can see the code table briefly in the website <strong>lovepdf.co.</strong></p>
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

export default TextBinary