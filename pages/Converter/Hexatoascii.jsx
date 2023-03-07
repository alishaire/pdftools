import React, { useState, useEffect } from 'react'
import Link from 'next/link';
import Head from 'next/head';

const Hexatoascii = () => {

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
      return obj.topic !== 'Hexadecimal-to-ascii ';

    })
    setDisplay(newarr);

  }, [])


  const [hex, setHex] = useState('');
  const [result, setResult] = useState('');


  console.log(hex);


  const hexaToasciiconvert = (e) => {
    e.preventDefault();

    var hexRegex = /[0-9A-Fa-f]/g;
    if (hex.match(hexRegex) && hex.length > 0) {

      var hexa = hex.toString().split(" ").join("");
      var str = '';
      for (var n = 0; n < hexa.length; n += 2) {
        str += String.fromCharCode(parseInt(hexa.substr(n, 2), 16));
      }
      setResult(str);
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
        <title> Decimal to Ascii(Text) converter | [Website Name]</title>
        <meta name="description" content=" Decimal to Ascii(Text) converter " />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
        </Head>

      <div class="container calulator">
        <div class="rounding-calculator">
          <h1>Hexa To Ascii</h1>
          <div>
            <label>Type Hexadecimal Number</label>
            <input class="input" id="ti1" name='binary_text' onChange={(e) => { setHex(e.target.value) }} type="text" />
          </div>
          <button className='calculator-button' onClick={hexaToasciiconvert}>Convert</button>

          <div>
            {result}
          </div>
        </div>
        <div className="content_sec">
          <div className="content">
            <p><strong><span style={{ textDecoration: "underline" }}>What is hex and ascii? Hex to ascii introduction</span></strong></p>
            <p><strong>Hex</strong> is a system of numbering which is represented by base 16. In mathematics it is a positional numerals system which represents numbers using radix. Hexadecimal uses 16 symbols from 0 to 9 and A to F. It is used for presenting large numbers with fewer digits. It is also known as base 16 systems. In chemistry, hexa is used to define six atoms. It is also used to define six groups of atoms in the compound. Hexadecimal is also called the numbering system with base 16. It has 0 to 15 (0,1,2,3,4,5,6,7,8,9,10,11,12,13,14,15) and A to F(A, B, C, D, E, F) symbols in the system. <strong>Ascii</strong> stands for the American standard code for information interchange. It is most commonly used for changing the format of text data on computers and on the internet. It consists of 128 alphabets, numeric and special characters, and control codes. Ascii is also called a text<strong> string</strong>. <strong>Hex to ascii </strong>is a process of converting hex values to ascii text or string.</p>
            <p><strong><span style={{ textDecoration: "underline" }}>Hex to ascii converter. Loverpdf.co</span></strong></p>
            <p><strong>Hex to ascii converter </strong>is a tool for converting hex values to ascii characters. <strong>Lovepdf.co</strong> is a tool website that introduces a <strong>hex to ascii converter</strong>. Converting hex to ascii by hand is a difficult task but you can easily do it by tool <strong>hex to ascii converter</strong>. Just write the hex values in the drop down menu and click on the convert button. Hex value will automatically convert into ascii character within a few seconds.</p>
            <p><strong><span style={{ textDecoration: "underline" }}>How can you do hex to string online.</span></strong></p>
            <p><strong>Hex to string</strong> converter is a process of converting hex values to a string. In this method you can easily make hex values to a readable format. By using a <strong>hex to string</strong> tool you can easily convert your hex data into a readable format that everyone can easily understand. You can easily make hex values to a plain text, letters and English words by using the<strong> hex to string</strong> tool provided by <strong>lovepdf.co</strong>. It is an online free tool. You have to insert value into the given box and hit the convert button. Your hex data will automatically convert. Just copy and paste the string for save.</p>
            <p><strong>Hex to text converter. Best converter. Lovepdf.co</strong></p>
            <p>&nbsp;<strong>Hex i</strong>s also known as base 16 or hexadecimal. It is used to represent a large number with fewer digits. Hexadecimal uses 16 symbols from 0 to 9 and A to F. In mathematics it is a positional numerals system which represents numbers using radix. Hex is a language of symbols and characters. That is difficult to understand.&nbsp; <strong>Text </strong>is a basic form of language. Everyone can easily understand it. In other words it is a readable format that anyone can understand.&nbsp; <strong>Hex to text converter</strong> is a tool of converting hex values to text to make it easy to understand. With this tool you can easily understand lengthy numerals codes of hexadecimal values. Write the hex value in the given box. You can also attach or upload a file in the given option. Click on the convert button. Within a few seconds you will get the desired result. This will be 100 % accurate. <strong>Hex to ascii, hex to text</strong> or <strong>hex to string</strong> is an easily accessible tool. <strong>Lovepdf.co</strong> website is compatible with all the devices. It has a user-friendly interface.</p>
            <p><strong><span style={{ textDecoration: "underline" }}>Hexadecimal to text conversion. Step by step.</span></strong></p>
            <p><strong>Hexadecimal to text conversion</strong> is very easy with tools. It is used to represent large numerals values to a readable format. You can do it with the tool <strong>hexadecimal to text</strong> converter that introduces the lovepdf.co website in their tool website. You can do it by hand also. Just follow these easy steps that are given below:</p>
            <p>● Write the hex byte.</p>
            <p>● Convert hex byte to decimal by seeing table</p>
            <p>● See and write the ascii character from <strong>ascii table</strong> (that is available in website lovepdf.co)</p>
            <p>● Repeat the same process with the next byte.</p>
            <p><strong><span style={{ textDecoration: "underline" }}>Hex to ascii converter online. Lovepdf.co</span></strong></p>
            <p>Hex is a system of numbering which is represented by base 16. In mathematics it is a positional numerals system which represents numbers using radix. Hexadecimal uses 16 symbols from 0 to 9 and A to F. It is used for presenting large numbers with fewer digits. Ascii stands for the American standard code for information interchange. It is most commonly used for changing the format of text data on computers and on the internet. It consists of 128 alphabets, numeric and special characters, and control codes. <strong>Hex to ascii converter</strong> is used to convert hex values to a readable format. <strong>Hex to ascii converter</strong> is easy to handle. You can use it online. It is free and user friendly. You can use it in your android phone also by installing the lovepdf.co app in your mobile phone.</p>
            <p><strong>Explanation of hex to ascii table.&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; </strong></p>
            <p>If you are converting <strong>hex to ascii</strong>. You have to need a table. That is available on the website. You can easily write a number by looking at a table. Table is given below.</p>
            <p>Char.&nbsp;&nbsp; Dec.&nbsp;&nbsp;&nbsp; Hex.&nbsp;&nbsp;&nbsp; &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; Char.&nbsp;&nbsp; Dec.&nbsp;&nbsp;&nbsp; Hex.&nbsp;&nbsp;&nbsp; &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; Char.&nbsp;&nbsp; Dec.&nbsp;&nbsp;&nbsp; Hex.</p>
            <p>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; 32&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; 20&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; @&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; 64&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; 40&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; `&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; 96&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; 60</p>
            <p>!&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; 33&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; 21&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; A&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; 65&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; 41&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; a&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; 97&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; 61</p>
            <p>"&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; 34&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; 22&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; B&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; 66&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; 42&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; b&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; 98&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; 62</p>
            <p>#&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; 35&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; 23&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; C&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; 67&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; 43&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; c&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; 99&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; 63</p>
            <p>$&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; 36&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; 24&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; D&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; 68&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; 44&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; d&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; 100&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; 64</p>
            <p>%&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; 37&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; 25&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; E&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; 69&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; 45&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; e&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; 101&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; 65</p>
            <p>&amp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; 38&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; 26&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; F&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; 70&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; 46&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; f&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; 102&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; 66</p>
            <p>'&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; 39&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; 27&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; G&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; 71&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; 47&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; g&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; 103&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; 67</p>
            <p>(&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; 40&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; 28&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; H&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; 72&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; 48&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; h&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; 104&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; 68</p>
            <p>)&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; 41&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; 29&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; I&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; 73&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; 49&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; i&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; 105&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; 69</p>
            <p>*&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; 42&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; 2A&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; J&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; 74&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; 4A&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; j&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; 106&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; 6A</p>
            <p>+&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; 43&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; 2B&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; K&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; 75&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; 4B&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; k&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; 107&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; 6B</p>
            <p>,&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; 44&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; 2C&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; L&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; 76&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; 4C&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; l&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; 108&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; 6C</p>
            <p>-&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; 45&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; 2D&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; M&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; 77&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; 4D&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; m&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; 109&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; 6D</p>
            <p>.&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; 46&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; 2E&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; N&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; 78&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; 4E&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; n&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; 110&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; 6E</p>
            <p>/&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; 47&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; 2F&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; O&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; 79&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; 4F&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; o&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; 111&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; 6F</p>
            <p>0&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; 48&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; 30&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; P&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; 80&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; 50&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; p&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; 112&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; 70</p>
            <p>1&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; 49&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; 31&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; Q&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; 81&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; 51&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; q&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; 113&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; 71</p>
            <p>2&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; 50&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; 32&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; R&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; 82&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; 52&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; r&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; 114&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; 72</p>
            <p>3&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; 51&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; 33&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; S&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; 83&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; 53&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; s&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; 115&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; 73</p>
            <p>4&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; 52&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; 34&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; T&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; 84&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; 54&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; t&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; 116&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; 74</p>
            <p>5&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; 53&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; 35&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; U&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; 85&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; 55&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; u&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; 117&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; 75</p>
            <p>6&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; 54&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; 36&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; V&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; 86&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; 56&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; v&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; 118&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; 76</p>
            <p>7&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; 55&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; 37&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; W&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; 87&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; 57&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; w&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; 119&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; 77</p>
            <p>8&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; 56&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; 38&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; X&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; 88&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; 58&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; x&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; 120&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; 78</p>
            <p>9&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; 57&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; 39&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; Y&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; 89&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; 59&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; y&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; 121&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; 79</p>
            <p>:&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; 58&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; 3A&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; Z&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; 90&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; 5A&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; z&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; 122&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; 7A</p>
            <p>;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; 59&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; 3B&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; [&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; 91&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; 5B&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; & nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; 123&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; 7B</p>
            <p>&lt;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; 60&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; 3C&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; \&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; 92&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; 5C&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; |&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; 124&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; 7C</p>
            <p>=&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; 61&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; 3D&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; ]&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; 93&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; 5D&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; 125&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; 7D</p>
            <p>&gt;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; 62&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; 3E&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; ^&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; 94&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; 5E&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; ~&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; 126&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; 7E</p>
            <p>?&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; 63&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; 3F&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; _&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; 95&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; 5F&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; 127&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; 7F</p>
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

export default Hexatoascii