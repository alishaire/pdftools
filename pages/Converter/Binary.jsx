import React, { useState, useEffect } from 'react'
import Link from 'next/link';
import Head from 'next/head'
import AnimatedNumber from "animated-number-react";
const Binary = () => {

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
      return obj.topic !== 'binary-to-decimal';

    })
    setDisplay(newarr);

  }, [])



  let convertedArr = [];
  let value;
  let conversion;

  const [dec, setDec] = useState("");

  const convertToDec = (bin) => {
    let length = bin.length;
    let pos = length - 1;

    for (let i = 0; i <= length - 1; i++) {
      if (parseInt(bin.charAt(i)) !== 0 && parseInt(bin.charAt(i)) !== 1) {
        alert("Por favor, digite apenas 0 e 1.");
        return;
      } else {
        value = parseInt(bin.charAt(i)) * Math.pow(2, pos);
        convertedArr.push(value);
        pos -= 1;
        conversion = convertedArr.reduce((acc, curr) => {
          return acc + curr;
        }, 0);
      }
    }
    return conversion;
  };

  const onChange = (e) => {
    convertToDec(e.target.value);
    setDec(conversion);
  };
  return (
    <>
    <Head>
        <title> Binary to Decimal numbers converter | [Website Name]</title>
        <meta name="description" content=" Binary to Decimal numbers converter" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
        </Head>

      <div class="container calulator">
        <div class="rounding-calculator">
          <h1>Binary To Decimal</h1>
          <div>
            <label>Type Binary Number</label>
            <input name="input" type="text" onChange={onChange} />
          </div>
          {/* <button className='calculator-button' onClick={convert}>Convert</button> */}

          <div>
            <AnimatedNumber
              className="numbers"
              value={dec}
              duration={1000}
              formatValue={(v) => v.toFixed(0)}
              frameStyle={(perc) => ({ opacity: perc / 100 })}
            />
          </div>
        </div>
        <div className="content_sec">
          <div className="content">
           

            <p><strong><span style={{ textDecoration: "underline" }}>What are binary and decimal numbers? Binary to decimal.</span></strong></p>
            <p>The binary is a numbering system where only two possible values are used for presenting. values are only 0 and 1. It is called the base 2 number system. In computer language, binary numbers are used for applications. The binary is also called <strong>a bit</strong> system. While decimal is a base 10 number system where the values can be expressed in the first 10 digits from 0 to 9. It is also mostly used in computer applications for processing. <strong>Binary to decimal</strong> is a system of converting binary to decimal. It is very simple and easy.</p>
            <p><strong><span style={{ textDecoration: "underline" }}>Binary to decimal. Online and free to use... lovepdf.co</span></strong></p>
            <p><strong>Lovepdf.co</strong> website is a website that provides a tool for converting. <strong>Binary to decimal</strong> is one of these. You can convert online. It is free and easy to use. On this website, you can see the instructions that will help you to solve the problem. <strong>Binary to decimal</strong> is a very easy task. Open the website and write the binary number in the drop-down menu. Your <strong>bit</strong> will automatically convert to decimal. You can also do it by hand which you will see <strong>below</strong> in the article.</p>
            <p><strong><span style={{ textDecoration: "underline" }}>How to convert binary to decimal online?</span></strong></p>
            <p>Converting <strong>binary to decimal</strong> is very easy and simple with the binary-to-decimal tool provided by <strong>love pdf.co.</strong> Simply copy or write the number in a given box and click on the convert button. Your number will be converted. You can do it by hand by following these simple steps.</p>
            <p>● Multiply each binary number separately with the base</p>
            <p>● add all the numbers. Result is ready now</p>
            <p><strong><span style={{ textDecoration: "underline" }}>Binary to decimal conversion. By formula</span></strong></p>
            <p>Converting binary to decimal is a very easy task. But it has more attention than others. It has a unique formula for solving. Shortly decimal numbers are the sum of binary digits that have base 2. (2n). Where n stands for power. During converting&nbsp; binary to decimal, we apply operations on every digit of a binary number from right to left with powers of 2 ( base 2) which start from zero (0) now add every result combinely to get the decimal number of it.&nbsp; <strong>The formula</strong> for decimal numbers is</p>
            <p>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; Decimal number = n<sup>th</sup>bit x 2<sup>n-1</sup></p>
            <p>This is the basic formula for decimal number while converting <strong>binary to decimal</strong> we will use the formula shown below:</p>
            <p>N = b<sub>n</sub>q<sup>n</sup> + b<sub>n</sub> -<sub>1</sub> qn-<sup>2</sup> + &hellip;&hellip;&hellip; + b<sub>2</sub> q<sup>2</sup> + b<sub>1</sub> q<sup>1</sup> + b<sub>0</sub>q<sup>0</sup> + b-<sub>1</sub>q-<sup>1</sup> + b-<sub>2</sub>q-<sup>2</sup></p>
            <p>In this formula:</p>
            <p>&nbsp;the decimal number is N</p>
            <p>B is the digit</p>
            <p>&nbsp;</p>
            <p>And q is the base value which starts from the most important digit to qn to the last significant order.</p>
            <p><strong><span style={{ textDecoration: "underline" }}>What is the binary-to-decimal converter? Best converter.</span></strong></p>
            <p><strong>A binary decimal</strong> converter is a tool that helps you to explore the decimal value from a binary number value. Decimal numbers are the sum of binary digits with their power 2n. . <strong>Binary to decimal</strong> converter&nbsp; tool is the best converter for you. You can convert binary digits to decimals with just a few clicks. <strong>Lovepdf.co</strong> designs it for you. It is a time-saving converter and user-friendly.&nbsp;</p>
            <p><strong><span style={{ textDecoration: "underline" }}>How can you do binary to decimal conversion? Examples</span></strong>.</p>
            <p>The binary is a base 2 number system and the decimal is a base 10 number system<strong>. Binary-to-decimal</strong> conversion is a method of converting binary values to decimal values. In <strong>the binary-to-decimal conversion</strong> method, we show that the values of binary numbers are equal to decimal number values with their bases. In this method, the base is very important. For example, the binary number has base 2 so it has only two digits 0 and 1 same as the decimal number system has base 10 and which uses only 10 digits 0 to 9. <strong>Binary-to-decimal conversion</strong> is very important because it helps to read the numbers that are represented as a set of 0s and 1s. In decimal numbers, users can easily understand the values as compared to binary numbers. For example, it will be easier to understand for you.</p>
            <p>We will use (1110)<sub>2</sub> numbers for example</p>
            <p>(1110)<sub>2</sub></p>
            <p>We will start to write from the right side</p>
            <p>= (0 &times; 2)<sup>0</sup> + (1 &times; 2)<sup>1</sup> + (1 &times; 2)<sup>2</sup> + (1 &times; 2)<sup>3</sup></p>
            <p>= (0 &times; 2) + (1 &times; 2) + (1 &times; 4) + (1 &times; 8)</p>
            <p>= 0 + 2 + 4 + 8</p>
            <p>= 14</p>
            <p>So( 1110)<sub>2</sub> = (14)<sub>10</sub></p>
            <p><strong><span style={{ textDecoration: "underline" }}>Binary to the decimal conversion method</span></strong></p>
            <p>Binary-to-decimal conversion is a method of converting binary digits to decimals numbers so that everyone can understand. You can easily convert binary values to decimal by using <strong>the binary-to-decimal conversion tool</strong> introduced by <strong>lovepdf.co</strong> on their website of tools. Decimal values can be easily understood by everyone and it is a commonly used number system. There are <strong>two methods </strong>of converting from binary to decimal</p>
            <p><strong>1 conversion with positional notation method</strong></p>
            <p><strong>2 conversion with the doubling method</strong></p>
            <p>In <strong>the positional notation method</strong>, values are determined by a weight based on its position. We can get the result by multiplying every digit by base 2 raised to the relevant power depending upon the position of the digit in the number. A sum of all the values is a required number of the decimal number obtained from the binary values.</p>
            <p>By <strong>the doubling method</strong>, it is very easy to convert. As its name shows, we will double every value for multiplying. We will start the left side from the digit and double the previous number and add the current digit. We will continue the same process for the next digit and so on. The sum gained at the end step is the required decimal number.</p>
            <p><strong><span style={{ textDecoration: "underline" }}>What is a binary to decimal calculator? Uses.</span></strong></p>
            <p>The binary is based on a 2 number system which only has 2 digits 0 and 1 while the decimal system has base 10 and has only 10 digits 0 to 9. Apart from all these differences we can compute all the functions such as addition and subtraction. Multiplication and division with a calculator. You can do it with the given <strong>calculator</strong> in <strong>binary to decimal converter</strong>. Just click on the calculator button and do the operation you want.&nbsp;</p>
            <p><strong><span style={{ textDecoration: "underline" }}>binary to decimal converter. with solution lovepdf.co</span></strong></p>
            <p><strong>lovepdf.co</strong> is a user-friendly website. It is the house of tools. It introduced the tools of converting that will save you time. You can use it easily. There is also a solution for <strong>how to use it, how to convert binary to decimal.?&nbsp; </strong>You can see a chart and also a calculator here to find numbers from binary to decimal. Here is the step by step information for working.</p>
            <p><strong><span style={{ textDecoration: "underline" }}>Explanation of Binary into decimal.</span></strong></p>
            <p>The binary is a system of base 2 and the decimal is a base 10 base number system. <strong>Binary-to-decimal</strong> <strong>conversion </strong>is very necessary to understand the applications of computers. Because computer programs use the language of binary digits called <strong>(bit).</strong> To understand the values it is important to convert.</p>
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

export default Binary