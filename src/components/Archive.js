import React from "react";
import './Archives.css';
import GitLogo from './images/gitLogo.png'
import { Modal, Button } from 'react-bootstrap';
import NotesToText1 from './images/NotesToText1.PNG'
import NotesToText2 from './images/NotesToText2.PNG'
import cverseCommands from './images/cverseCommands.PNG'
import cversestatsCanada from './images/cversestatsCanada.PNG'
import cverseReddit from './images/cverseReddit.PNG'
import cverseNews from './images/cverseNews.PNG'
import desktopCleaner2 from './images/desktopCleaner2.PNG'
import BitcoinPrice1 from './images/BitcoinPrice1.PNG'
import BitcoinPrice2 from './images/BitcoinPrice2.PNG'
import infoIcon from './images/infoIcon.png'

const Archive = () => {
    const [show2, setshow2] = React.useState(false);
    const handleshow2Close = () => setshow2(false);
    const handleshow2Show = () => setshow2(true);

    const [show3, setshow3] = React.useState(false);
    const handleshow3Close = () => setshow3(false);
    const handleshow3Show = () => setshow3(true);

    const [show7, setshow7] = React.useState(false);
    const handleshow7Close = () => setshow7(false);
    const handleshow7Show = () => setshow7(true);

    const [show8, setshow8] = React.useState(false);
    const handleshow8Close = () => setshow8(false);
    const handleshow8Show = () => setshow8(true);

    return (
        <div className="archive">
            <br />
            <br />
            <table>
                <thead>
                    <tr>
                        <th scope="col">Year</th>
                        <th scope="col">Title</th>
                        <th scope="col">Built With</th>
                        <th scope="col">Description</th>
                        <th scope="col">GitHub</th>
                        <th scope="col">Info</th>
                    </tr>
                </thead>
                <tbody>
                    <tr>
                        <td >2020</td>
                        <td >COVID19 Stats Tracker</td>
                        <td >Python</td>
                        <td >Created for Hackathon, BOTHACKS. Incorporates APIs that draw live data including total cases, total recovered and total deaths in order to inform the user of the severity and numbers of the COVID-19 pandemic.</td>
                        <td ><a href="https://github.com/jackyliu1999/COVID19-Stats-Tracker"> <img src={GitLogo} alt="" /></a></td>
                        <td><img src={infoIcon} onClick={handleshow3Show} alt="" /></td>
                    </tr>
                    <tr>
                        <td >2020</td>
                        <td >Notes to Text Converter</td>
                        <td >Python</td>
                        <td >Takes handwritten notes and converts them into text. Incorporates optical character recognition tool, pytesseract for the conversion functionality. Tkinter was utilized in order to provide a user-friendly interface.</td>
                        <td ><a href="https://github.com/jackyliu1999/Notes-to-Text-Converter"> <img src={GitLogo} alt="" /></a></td>
                        <td><img src={infoIcon} onClick={handleshow2Show} alt="" /></td>
                    </tr>
                    <tr>
                        <td >2020</td>
                        <td>Bitcoin Price Notifier</td>
                        <td>Python</td>
                        <td>Notifies users of Bitcoin price fluctuation by extracting the live price of Bitcoin from Yahoo Finance. Allows users to set a benchmark and once the price hits the designated benchmark, verbally notifies user.</td>
                        <td><a href="https://github.com/jackyliu1999/Bitcoin-Price-Notifier"> <img src={GitLogo} alt="" /></a></td>
                        <td><img src={infoIcon} onClick={handleshow8Show} alt="" /></td>
                    </tr>
                    <tr>
                        <td >2020</td>
                        <td>Desktop Cleaner</td>
                        <td>Python</td>
                        <td>Desktop cleaner is a Python-based automation script that sorts folders based on file type (images, documents, spreadsheets, installers, music, videos) into a user inputted directory.</td>
                        <td><a href="https://github.com/jackyliu1999/Desktop-Cleaner"> <img src={GitLogo} alt="" /></a></td>
                        <td><img src={infoIcon} onClick={handleshow7Show} alt="" /></td>
                    </tr>
                </tbody>
            </table>
            <br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br />

            <Modal size="lg" show={show2} onHide={handleshow2Close}>
                <Modal.Header closeButton>
                    <Modal.Title>Notes to Text Converter</Modal.Title>
                </Modal.Header>
                <Modal.Body>
                    <b>GitHub: <a href="https://github.com/jackyliu1999/Notes-to-Text-Converter">github.com/jackyliu1999/Notes-to-Text-Converter</a></b><br />
        Notes to Text Converter is a program that takes handwritten notes and converts them into text. The program aims to give students the option to be able to take handwritten notes in class and have the ability to transfer them to their computer at a later time. Notes to Text Converter
 incorporates optical character recognition tool, Python-tesseract also known as pytesseract for the conversion functionality. Tkinter was utilized in order to provide a user-friendly interface.
        <br /><b>Programming Languages:</b><br />
                    <li>Python</li>
                    <b>Libraries Imported:</b><br />
                    <li>pytesseract </li>
                    <li>Tkinter </li>
                    <li>PIL </li>
                    <b>How to use:</b><br />
                    <li>1. Take a picture of your handwritten notes</li>
                    <li>2. Open command prompt and change directory to folder containing the program</li>
                    <li>3. Type "python imgToText.py"</li>
                    <li>4. Click Browse File</li>
                    <img class="img-fluid" src={NotesToText1} alt="" />
                    <li>5. Choose image containing handwritten notes</li>
                    <li>6. Choose a name for the new file containing the converted notes</li>
                    <img class="img-fluid" src={NotesToText2} alt="" />
                    <li>7. File containing the converted notes will be located in the same directory as the program</li>
                </Modal.Body>
                <Modal.Footer>
                    <Button variant="secondary" onClick={handleshow2Close}>
                        Close
          </Button>
                </Modal.Footer>
            </Modal>

            <Modal size="lg" show={show3} onHide={handleshow3Close}>
                <Modal.Header closeButton>
                    <Modal.Title>COVID19 Stats Tracker - BOTHACKS</Modal.Title>
                </Modal.Header>
                <Modal.Body>
                    <b>GitHub: <a href="https://github.com/jackyliu1999/COVID19-Stats-Tracker" >github.com/jackyliu1999/COVID19-Stats-Tracker</a></b><br />
                    <b>Collaborated with:</b> <a href="https://github.com/jacky-h-nguyen" >Jacky Nguyen</a>, <a href="https://github.com/ansonwong250" >Anson Wong</a><br />
                    <b>Inspiration:</b><br />
        COVID-19 is a worldwide pandemic that was first identified in late 2019 in Wuhan, China. As of August 2020, more than 20 million cases resulting in over 800,000 deaths have been documented worldwide. Information regarding the coronavirus is scattered and countless individuals have found it exceedingly difficult to scavenge for information while balancing their readjusted life due to the pandemic. COVID19 Stats Tracker acts as a haven of live information regarding the virus, incorporating various pandemic-related APIs as well as voice activated commands.
        <br /> <b>What it does:</b><br />
        COVID19 Stats Tracker incorporates APIs that draw live data including total cases, total recovered and total deaths in order to inform the user of the severity and numbers of the COVID-19 pandemic. Furthermore, the user is able to filter results in accordance to their own country. COVID19 Stats Tracker also features commands that links the user to pandemic-related resources. Due to the fact that social media and the news are ingrained into the lives of our society, COVID19 Stats Tracker displays the most recent news articles and Reddit posts regarding COVID-19. Lastly, all of commands are activated via voice recognition, allowing easy access for each and every individual.
        <img class="img-fluid" src={cverseCommands.PNG} alt="" />
                    <br /> <b>How it was built:</b><br />
          COVID19 Stats Tracker was built using Python incorporating the libraries: requests, Tkinter, datetime, webbrowser, newsapi, speech_recognition and pyttsx3. The requests module was utilized in order to web scrape data for live stats of the pandemic. Datetime was used to display the current time while the webbrowser library was used to open links to COVID-19 resources. The newsapi library was used to fetch the top pandemic-related news articles. Lastly, in conjunction with all the commands, speech_recognition allows the user to activate commands via voice while pyttsx3 reads out prompts.
        <br /> <b>Demo: </b> <br />
                    <img class="img-fluid" src={cversestatsCanada} alt="" />
                    <img class="img-fluid" src={cverseReddit} alt="" />
                    <img class="img-fluid" src={cverseNews} alt="" />
                </Modal.Body>
                <Modal.Footer>
                    <Button variant="secondary" onClick={handleshow3Close}>
                        Close
          </Button>
                </Modal.Footer>
            </Modal>

            <Modal size="lg" show={show7} onHide={handleshow7Close}>
                <Modal.Header closeButton>
                    <Modal.Title>Desktop Cleaner</Modal.Title>
                </Modal.Header>
                <Modal.Body><b>GitHub: <a href="https://github.com/jackyliu1999/Desktop-Cleaner" >github.com/jackyliu1999/Desktop-Cleaner</a></b><br />
                    <b>Functionality:</b><br />
        Desktop cleaner is a Python-based automation script that sorts folders based on file type (images, documents, spreadsheets, installers, music, videos) into a user inputted directory.
        <br /><b>Libraries Imported: </b><br />
                    <li>os</li>
                    <li>sys</li>
                    <li>shutil</li>
                    <br /><b>Demo: </b><br />
                    <img class="img-fluid" src={desktopCleaner2} alt="" /><br />
                    <li>Input file type to sort</li>
                    <li>Input Starting Directory</li>
                    <li>Input Destination Directory</li>
                    <li>Desktop Cleaner then moves all files of inputted type into the destination directory and creates a new folder to store thecollection of files</li>
                </Modal.Body>
                <Modal.Footer>
                    <Button variant="secondary" onClick={handleshow7Close}>
                        Close
          </Button>
                </Modal.Footer>
            </Modal>

            <Modal size="lg" show={show8} onHide={handleshow8Close}>
                <Modal.Header closeButton>
                    <Modal.Title>Bitcoin Price Notifier</Modal.Title>
                </Modal.Header>
                <Modal.Body><b>GitHub: <a href="https://github.com/jackyliu1999/Bitcoin-Price-Notifier" >github.com/jackyliu1999/Bitcoin-Price-Notifier</a></b><br />
                    <b>Functionality:</b><br />
        Notifies users of Bitcoin price fluctuation by extracting the live price of Bitcoin from Yahoo Finance. Allows users to set a benchmark and once the price hits the designated benchmark, verbally notifies user.
        <br /><b>Libraries Imported: </b><br />
                    <li>Selenium</li>
                    <li>pyttsx3</li>
                    <br /><b>Demo: </b><br />
                    <img class="img-fluid" src={BitcoinPrice1} alt="" /><br />
        Users are able to input a pricing benchmark and whether to be notified once price is higher or lower than the designated benchmark. Users are also able to display current prices to the terminal.
        <img class="img-fluid" src={BitcoinPrice2} alt="" /><br />
        Once benchmark is hit, notifies the user verbally using the pyttsx3 library.
        </Modal.Body>
                <Modal.Footer>
                    <Button variant="secondary" onClick={handleshow8Close}>
                        Close
          </Button>
                </Modal.Footer>
            </Modal>
        </div>
    )
}

export default Archive;