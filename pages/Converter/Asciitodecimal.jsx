import React, { useState, useEffect } from 'react'
import Link from 'next/link'
import Head from 'next/head'

const Asciitodecimal = () => {

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
            topic: 'Ascii(Text)-to-decimal converter',
            topiclink: '/Converter/Asciitodecimal'
        },
        {
            topic: 'decimal-to-Hexadecimal ',
            topiclink: '/Converter/Decimaltohexa'
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
            return obj.topic !== 'Ascii(Text)-to-decimal converter';

        })
        setDisplay(newarr);

    }, [])



    const [Ascii, setAscii] = useState('');
    const [result, setResult] = useState('');

    const asciitodecimalconvert = (e) => {
        e.preventDefault();

        var result = '';
        for (var i = 0; i < Ascii.length; i++) {
            let decimal = Ascii.charCodeAt(i);
            result += decimal + ' ';
        }
        setResult(result);
    }
    return (
        <>
         <Head>
        <title> Ascii(text) to Decimal number converter | [Website Name]</title>
        <meta name="description" content="Ascii(text) to Decimal number converter" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
        </Head>
         


            <div class="container calulator">
                <div class="rounding-calculator">
                    <h1>Ascii text to decimal converter</h1>
                    <div>
                        <label>Type Ascii (Text)</label>
                        <input class="input" value={Ascii} type="text" onChange={(e) => { setAscii(e.target.value) }} placeholder="Enter Ascii (Text) " />
                    </div>
                    <button onClick={asciitodecimalconvert} className='calculator-button' >Convert</button>

                    <div>
                        <h3>
                            {result}
                        </h3>

                    </div>
                </div>
                <div className="content_sec">
                    <div className="content">
                        <p><strong><span style={{ textDecoration: "underline" }}>What does ascii to decimal mean? Ascii and decimal introduction.</span></strong></p>
                        <p><strong>Ascii</strong> stands for American standard code for information interchange. It is most commonly used for changing format for text data in computers and on the internet. It is also called an 8 bit code system. Eight bit is also called a byte. In computers it is known as byte.&nbsp; It consists of 128 alphabets, numeric and special characters and control codes. There are two types of ascii codes: standard<strong> ascii</strong> codes and <strong>extended ascii</strong> codes.&nbsp; <strong>Decimal</strong> is a system of numbering that stands with base 10. It belongs to the Latin word decimal whose meaning is the 10th part. It is a special fraction system with a specific form.&nbsp; <strong>Ascii to decimal</strong> means converting ascii codes to decimal values. Ascii lies 0 to 255 in decimal and 00 to FF in hexadecimal.&nbsp; An ascii code is a decimal of the character and that decimal can be converted to binary digits.</p>
                        <p><strong><span style={{ textDecoration: "underline" }}>Text to decimal information.&nbsp; Lovepdf.co.</span></strong></p>
                        <p><strong>Text to decimal</strong> is a process of converting <strong>text into decimal</strong>. Briefly it is a method in which we can represent a text and proceed in the form of numbers that can be easily converted back into text. It is also used for security purposes. You can do it by tool text to decimal provided by <strong>lovepdf.co web</strong>.&nbsp; Mostly it is used when a computer memory is on repair.</p>
                        <p><strong><span style={{ textDecoration: "underline" }}>How to do text to decimal conversion. Text to decimal translator.</span></strong></p>
                        <p><strong>Text to decimal conversion</strong> is a process of converting plain text to binary digits. <strong>Lovepdf.co</strong> <strong>introduces</strong> a tool website where you can easily convert your required values to a desired tool. It is an online free tool. Just write the text in the drop down menu and click on the convert button. Your text will automatically convert into binary digits. It gives you a 100 % accurate result.&nbsp; You can also convert it by keeping an eye on the ascii<strong> or text table</strong> that is given below in the website.</p>
                        <p><strong><span style={{ textDecoration: "underline" }}>Ascii to decimal converter. Online free. Best converter. Lovepdf.co.</span></strong></p>
                        <p>Ascii is a basic encoding format that is used for electronic communication between computers.&nbsp; The Ascii table chart is a collection of 128 alphabets, numeric and special characters, and control codes. That is used in computers during working. 7 bits are enough to show a character in ascii, but most computers used 8 bits for ascii characters. It is also called an 8 bit code system. Each eight bit is known as a byte. Decimal is a system of numbering that stands with base 10. It belongs to the Latin word decimal whose meaning is the 10th part. It is a special fraction system with a specific form. <strong>Ascii to decimal conversion</strong> is a process of converting ascii codes into decimal values. It is very easy by using a tool. <strong>Ascii to decimal</strong> convert is an online free and world best tool introduced by <strong>lovepdf.co</strong> website. Simply write the ascii codes in the given box and hit the convert button. Ascii codes will automatically convert into decimal values.</p>
                        <p><strong><span style={{ textDecoration: "underline" }}>Ascii to decimal table. Conversion with table.</span></strong></p>
                        <p><strong>Ascii to decimal</strong> is a converting system. In which you can convert <strong>ascii codes to decimal values</strong>. You can do it with the tool ascii to decimal or watching the <strong>ascii table</strong>. That is available on the website <strong>lovepdf.co.</strong> A table is given below.</p>
                        <p><strong><span style={{ textDecoration: "underline" }}>How to convert ascii values to decimal?</span></strong></p>
                        <p>It is very easy to convert <strong>ascii to decimal</strong> with tools. <strong>Ascii to decimal</strong>. It is also done using tables. The Ascii table is very lengthy. <strong>The Ascii table chart</strong> is a collection of 128 alphabets, numeric and special characters, and control codes. Ascii lies 0 to 255 in decimal and 00 to FF in hexadecimal.&nbsp; An ascii code is a decimal of the character and that decimal can be converted to binary digits. It is mentioned <strong>above</strong>.</p>
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

export default Asciitodecimal