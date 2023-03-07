import React, { useState, useEffect } from 'react'
import Link from 'next/link';
import Head from 'next/head';


const Decimaltooctal = () => {

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
            return obj.topic !== 'decimal-to-Octal ';

        })
        setDisplay(newarr);

    }, [])


    const [Decimal, setDecimal] = useState('');
    const [result, setResult] = useState('');

    const decimaltooctalconvert = (e) => {
        e.preventDefault();
        let number = parseInt(Decimal);
        let hexStr = number.toString(8).toUpperCase();
        setResult(hexStr);
    }
    return (
        <>
        <Head>
        <title> Decimal to Octal number converter | [Website Name]</title>
        <meta name="description" content=" Decimal to Octal number converter " />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
        </Head>

            <div class="container calulator">
                <div class="rounding-calculator">
                    <h1>Decimal to Octal</h1>
                    <div>
                        <label>Type decimal Number</label>
                        <input class="input" type="Number" value={Decimal} onChange={(e) => { setDecimal(e.target.value) }} placeholder="Enter decimal Number" />
                    </div>
                    <button onClick={decimaltooctalconvert} className='calculator-button' >Convert</button>

                    <div>
                        <h3>
                            {result}
                        </h3>

                    </div>
                </div>
                <div className="content_sec">
                    <div className="content">
                        <p><strong>What is decimal and octal? Decimal to octal introduction.</strong></p>
                        <p><strong>Decimal</strong> is a system of numbering which stands with base 10. It belongs to the Latin word decimal whose meaning is 10th part. It is a special fraction system with a specific form. It uses 0 to 9 in its values. While <strong>octal</strong> is the base 8 numbering system. It comes from the Latin word eight. It uses the first eight digits 0 to 7. It is mostly used to represent binary numbers by grouping binary numbers into three. It is also called the oct number system. <strong>Decimal to octal</strong> is a process of converting decimal values to octal values. In this system we divide the number by 8 which is the octal base to get the result equal to octal number.</p>
                        <p><strong><span style={{ textDecoration: "underline" }}>How to do decimal to octal. Best converter. Lovepdf.co.</span></strong></p>
                        <p><strong>Decimal to octal</strong> is a process of converting decimal values to octal values. <strong>Lovepdf.co</strong> is a website of tools that provides all the tools you need in your business. It is a house of online free tools. By using <strong>decimal to octal converter</strong> you can easily convert values. Just write the decimal values in the drop down menu and hit the convert button. Your value will automatically convert. You can do it with tools in a few seconds.</p>
                        <p><strong><span style={{ textDecoration: "underline" }}>Decimal to octal conversion examples with answers.</span></strong></p>
                        <p><strong>Decimal number system</strong> is base 10 number system (0 to 9) while octal is a base 8 number system that uses only eight digits to represent numbers.&nbsp; <strong>Decimal to octal</strong> means a method of converting base 10 values to base 8 values. It is easy for you to understand with examples. There are many ways of converting <strong>decimal to octal</strong>. These methods are grouped in <strong>direct and indirect methods</strong>. In an <strong>indirect</strong> <strong>method</strong>, firstly, we will convert a decimal number to another number like binary or hexadecimal. Then in the octal number from the table. In the direct<strong> method</strong> we will convert directly <strong>decimal to octal</strong> by dividing a decimal number with 8.&nbsp;</p>
                        <p>Here are some examples with solutions for you provided by lovepdf.co.</p>
                        <p><strong>Example 1</strong>: convert decimal number 98 into octal number with <strong>indirect method</strong></p>
                        <p>Firstly, we will convert it into binary or hexadecimal number</p>
                        <p>= (98)<sub>10</sub></p>
                        <p>= (1x2<sup>6</sup>+1x2<sup>5</sup>+0x2<sup>4</sup>+0x2<sup>3</sup>+0x2<sup>2</sup>+1x2<sup>1</sup>+0x2<sup>0</sup>)<sub>10</sub> or (6x16<sup>1</sup>+2x16<sup>0</sup>)<sub>10</sub></p>
                        <p>= (1100010)<sub>2</sub></p>
                        <p><em>= </em>(62)<sub>16</sub></p>
                        <p>Than we will convert every digit of hexadecimal with four bit of binary number</p>
                        <p>= (0110 0010)<sub>2</sub></p>
                        <p>= (001 100 010)<sub>2</sub></p>
                        <p>= (1 4 2)<sub>8</sub></p>
                        <p>= (142)<sub>8&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; &nbsp;&nbsp;&nbsp; </sub></p>
                        <p><strong>Converting with direct method</strong></p>
                        <p><strong>Example 2</strong>: we will use decimal number 210 to convert octal number.</p>
                        <p>In the direct method we directly divide the decimal number with eight (8) because 8 is the base number of octal.</p>
                        <p>We will divide continuously until the quotient becomes zero.</p>
                        <p>210 / 8 = 26&nbsp;&nbsp;&nbsp;&nbsp; &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; 2 remainder</p>
                        <p>26 / 8 = 3&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; 2 remainder</p>
                        <p>3 / 8 = 0&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; 3 remainder</p>
                        <p>Write the remainder in reverse order.&nbsp; 322</p>
                        <p>This is the octal number of the decimal number.</p>
                        <p><strong>Example 3: we will use 52<sub>10</sub> decimal number to convert into octal.</strong></p>
                        <p><strong>Solution: </strong>Divide 52 by 8</p>
                        <p>52 &divide; 8 = 6(Quotient) and (4) Remainder</p>
                        <p>Repeat this step again</p>
                        <p>6 &divide; 8 = 0(Quotient) and (6) Remainder</p>
                        <p>Quotient is zero now, write quotient in reverse order 64</p>
                        <p>Answer is (52)<sub>10</sub> = (64)<sub>8</sub></p>
                        <p><strong><span style={{ textDecoration: "underline" }}>How to decimal to octal conversion with steps?</span></strong></p>
                        <p><strong>Decimal to octal conversion</strong> is a process of converting decimal values to octal values. It is very easy with tools provided by <strong>lovepdf.co</strong>.&nbsp; It is an online free website. You can convert with a few clicks. You can use it in your android phone by installing its <strong>app</strong>. It has a user-friendly interface. it saves your time. You can convert by writing a number in a given box and hit on the convert button. Your value will automatically convert within a few seconds.&nbsp; You can do it by hand. Follow the simple steps for converting that is given below:</p>
                        <p>● Note down the given decimal number</p>
                        <p>● If the decimal is less than 8, the octal is same to the decimal number</p>
                        <p>● But if the decimal number is greater than 7 then multiply it with eight (base of octal number)</p>
                        <p>● Write the remainder aside</p>
                        <p>● Repeat above two steps until the quotient becomes less than 7.</p>
                        <p>● Write down the remainder in reverse order.</p>
                        <p>The result you got is equal to the decimal number.</p>
                        <p><strong><span style={{ textDecoration: "underline" }}>What is decimal to octal formula?</span></strong></p>
                        <p><strong>Decimal</strong> is a system of numbering which stands with base 10. It belongs to the Latin word decimal whose meaning is 10th part. It is a special fraction system with a specific form. It uses 0 to 9 in its values. While <strong>octal</strong> is the base 8 numbering system. It comes from the Latin word eight. It uses the first eight digits 0 to 7. It is mostly used to represent binary numbers by grouping binary numbers into three. It is also called the oct number system. There is no specific formula to convert decimal to octal. But there are many ways to convert which are classified into <strong>direct and indirect methods</strong>.&nbsp; In an indirect method, firstly, we will convert a decimal number to another number like binary or hexadecimal. Then in the octal number from the table. In the direct method we will convert directly decimal to octal by dividing a decimal number with 8. You can easily do it with tools <strong>decimal to octal.</strong></p>
                        <p><strong>How to convert decimal number to octal number?</strong></p>
                        <p>It is very easy to convert. You can use <strong>decimal number to octal number</strong> convert with tool decimal to octal provided by <strong>lovepdf.co</strong>. Like other converters it is a system of base converting. In simple words it is a process of converting base 10 (decimal value base) to base 8 (octal value base).&nbsp;</p>
                        <p><strong>What is decimal and octal? Decimal to octal introduction.</strong></p>
                        <p><strong>Decimal</strong> is a system of numbering which stands with base 10. It belongs to the Latin word decimal whose meaning is 10th part. It is a special fraction system with a specific form. It uses 0 to 9 in its values. While <strong>octal</strong> is the base 8 numbering system. It comes from the Latin word eight. It uses the first eight digits 0 to 7. It is mostly used to represent binary numbers by grouping binary numbers into three. It is also called the oct number system. <strong>Decimal to octal</strong> is a process of converting decimal values to octal values. In this system we divide the number by 8 which is the octal base to get the result equal to octal number.</p>
                        <p><strong><span style={{ textDecoration: "underline" }}>How to do decimal to octal. Best converter. Lovepdf.co.</span></strong></p>
                        <p><strong>Decimal to octal</strong> is a process of converting decimal values to octal values. <strong>Lovepdf.co</strong> is a website of tools that provides all the tools you need in your business. It is a house of online free tools. By using <strong>decimal to octal converter</strong> you can easily convert values. Just write the decimal values in the drop down menu and hit the convert button. Your value will automatically convert. You can do it with tools in a few seconds.</p>
                        <p><strong><span style={{ textDecoration: "underline" }}>Decimal to octal conversion examples with answers.</span></strong></p>
                        <p><strong>Decimal number system</strong> is base 10 number system (0 to 9) while octal is a base 8 number system that uses only eight digits to represent numbers.&nbsp; <strong>Decimal to octal</strong> means a method of converting base 10 values to base 8 values. It is easy for you to understand with examples. There are many ways of converting <strong>decimal to octal</strong>. These methods are grouped in <strong>direct and indirect methods</strong>. In an <strong>indirect</strong> <strong>method</strong>, firstly, we will convert a decimal number to another number like binary or hexadecimal. Then in the octal number from the table. In the direct<strong> method</strong> we will convert directly <strong>decimal to octal</strong> by dividing a decimal number with 8.&nbsp;</p>
                        <p>Here are some examples with solutions for you provided by lovepdf.co.</p>
                        <p><strong>Example 1</strong>: convert decimal number 98 into octal number with <strong>indirect method</strong></p>
                        <p>Firstly, we will convert it into binary or hexadecimal number</p>
                        <p>= (98)<sub>10</sub></p>
                        <p>= (1x2<sup>6</sup>+1x2<sup>5</sup>+0x2<sup>4</sup>+0x2<sup>3</sup>+0x2<sup>2</sup>+1x2<sup>1</sup>+0x2<sup>0</sup>)<sub>10</sub> or (6x16<sup>1</sup>+2x16<sup>0</sup>)<sub>10</sub></p>
                        <p>= (1100010)<sub>2</sub></p>
                        <p><em>= </em>(62)<sub>16</sub></p>
                        <p>Than we will convert every digit of hexadecimal with four bit of binary number</p>
                        <p>= (0110 0010)<sub>2</sub></p>
                        <p>= (001 100 010)<sub>2</sub></p>
                        <p>= (1 4 2)<sub>8</sub></p>
                        <p>= (142)<sub>8&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; &nbsp;&nbsp;&nbsp; </sub></p>
                        <p><strong>Converting with direct method</strong></p>
                        <p><strong>Example 2</strong>: we will use decimal number 210 to convert octal number.</p>
                        <p>In the direct method we directly divide the decimal number with eight (8) because 8 is the base number of octal.</p>
                        <p>We will divide continuously until the quotient becomes zero.</p>
                        <p>210 / 8 = 26&nbsp;&nbsp;&nbsp;&nbsp; &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; 2 remainder</p>
                        <p>26 / 8 = 3&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; 2 remainder</p>
                        <p>3 / 8 = 0&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; 3 remainder</p>
                        <p>Write the remainder in reverse order.&nbsp; 322</p>
                        <p>This is the octal number of the decimal number.</p>
                        <p><strong>Example 3: we will use 52<sub>10</sub> decimal number to convert into octal.</strong></p>
                        <p><strong>Solution: </strong>Divide 52 by 8</p>
                        <p>52 &divide; 8 = 6(Quotient) and (4) Remainder</p>
                        <p>Repeat this step again</p>
                        <p>6 &divide; 8 = 0(Quotient) and (6) Remainder</p>
                        <p>Quotient is zero now, write quotient in reverse order 64</p>
                        <p>Answer is (52)<sub>10</sub> = (64)<sub>8</sub></p>
                        <p><strong><span style={{ textDecoration: "underline" }}>How to decimal to octal conversion with steps?</span></strong></p>
                        <p><strong>Decimal to octal conversion</strong> is a process of converting decimal values to octal values. It is very easy with tools provided by <strong>lovepdf.co</strong>.&nbsp; It is an online free website. You can convert with a few clicks. You can use it in your android phone by installing its <strong>app</strong>. It has a user-friendly interface. it saves your time. You can convert by writing a number in a given box and hit on the convert button. Your value will automatically convert within a few seconds.&nbsp; You can do it by hand. Follow the simple steps for converting that is given below:</p>
                        <p>● Note down the given decimal number</p>
                        <p>● If the decimal is less than 8, the octal is same to the decimal number</p>
                        <p>● But if the decimal number is greater than 7 then multiply it with eight (base of octal number)</p>
                        <p>● Write the remainder aside</p>
                        <p>● Repeat above two steps until the quotient becomes less than 7.</p>
                        <p>● Write down the remainder in reverse order.</p>
                        <p>The result you got is equal to the decimal number.</p>
                        <p><strong><span style={{ textDecoration: "underline" }}>What is decimal to octal formula?</span></strong></p>
                        <p><strong>Decimal</strong> is a system of numbering which stands with base 10. It belongs to the Latin word decimal whose meaning is 10th part. It is a special fraction system with a specific form. It uses 0 to 9 in its values. While <strong>octal</strong> is the base 8 numbering system. It comes from the Latin word eight. It uses the first eight digits 0 to 7. It is mostly used to represent binary numbers by grouping binary numbers into three. It is also called the oct number system. There is no specific formula to convert decimal to octal. But there are many ways to convert which are classified into <strong>direct and indirect methods</strong>.&nbsp; In an indirect method, firstly, we will convert a decimal number to another number like binary or hexadecimal. Then in the octal number from the table. In the direct method we will convert directly decimal to octal by dividing a decimal number with 8. You can easily do it with tools <strong>decimal to octal.</strong></p>
                        <p><strong>How to convert decimal number to octal number?</strong></p>
                        <p>It is very easy to convert. You can use <strong>decimal number to octal number</strong> convert with tool decimal to octal provided by <strong>lovepdf.co</strong>. Like other converters it is a system of base converting. In simple words it is a process of converting base 10 (decimal value base) to base 8 (octal value base).&nbsp;</p>
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

export default Decimaltooctal