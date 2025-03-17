import React, { useState, useEffect, useRef } from 'react';
import { TypeAnimation } from 'react-type-animation';
import '../styles/Terminal.css';


const Terminal = () => {
    const [inputValue, setInputValue] = useState('');
    const [output, setOutput] = useState([]);

    // Terminal çıktıları için referans
    const terminalRef = useRef(null);

    const handleKeyDown = (event) => {
        if (event.key === 'Enter') {
            let newOutput = [...output, `>> ${inputValue}`];

            if (inputValue.trim().toLowerCase() === 'help') {
                newOutput.push("about, projects, experience, socials, clear");
            }
            if(inputValue.trim().toLowerCase() === 'about'){
                newOutput.push("I am Ugur Emir Azi, a computer engineering student at Bartin university. I am developing myself as full-stack developer! 🚀 during this process, I have learned React, Java, Python and Javascript.");
            }
            if(inputValue.trim().toLowerCase() === 'projects'){
                newOutput.push("starbucks clone\njira-application\nburger-website\npokemon-data-analysis\npython-quiz-app\nand finally my portfolio! 🚀 if u wanna see more details, scroll!");
            }
            if(inputValue.trim().toLowerCase() === 'experience'){
                newOutput.push("let me tell the truth, I don't have any experience yet. But I am working on it! 🚀");
            }
            if(inputValue.trim().toLowerCase() === 'socials'){
                newOutput.push("linkedin: Uğur Emir Azı\ninstagram: ugurzi\ngithub: ugurazi\nmail:uguremirazi@gmail.com");
            }
            if(inputValue.trim().toLowerCase() === 'clear'){
                newOutput = [];
            }

            setOutput(newOutput);
            setInputValue('');
        }
    };

    useEffect(() => {
        if (terminalRef.current) {
            terminalRef.current.scrollTop = terminalRef.current.scrollHeight;
        }
    }, [output]);

    return (
        <div className="cardY">
            <div className="card">
                <section className="container">
                    <div className="navbar">
                        <button className="red"></button>
                        <button className="yellow"></button>
                        <button className="green"></button>
                    </div>
                    <span className="name"> 📁 ugur emir azi</span>
                    <div className="fullCard" ref={terminalRef}> {/* Terminal scroll alanı */}
                        <div className="cardOne">
                            <TypeAnimation
                                sequence={['visitor@uguremirazi.com ~ % welcome to my interactive web terminal! \n~ for a list of available commands, type \'help\'']}
                                wrapper="p"
                                speed={82}
                                style={{ whiteSpace: 'pre-line', fontSize: '1em' }}
                                cursor={false}
                            />
                            <div className="terminal-output">
                                {output.map((line, index) => (
                                    line.startsWith(">>") ? (<p className='input-line' key={index}>{line}</p>) : (
                                    <TypeAnimation
                                    key={index}
                                    sequence={[line]}
                                    wrapper="p"
                                    speed={90}
                                    style={{ whiteSpace: 'pre-line', fontSize: '1em' }}
                                    cursor={false}
            />
        )
    ))}
</div>

                            <div className="withButton">
                                <input
                                    className="clickOne"
                                    type="text"
                                    value={inputValue}
                                    onChange={(e) => setInputValue(e.target.value)}
                                    onKeyDown={handleKeyDown}
                                    autoFocus
                                />
                            </div>
                        </div>
                    </div>
                </section>
            </div>
        </div>
    );
};

export default Terminal;
