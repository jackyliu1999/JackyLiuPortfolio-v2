import React from "react";
import './Resume.css';

const Archive = () => {
    return (
        <div className="">
            <br />
            <br />
            <div className='resume'>
                <br /><br />
                <h2 id="resume" style={{ textAlign: "center" }}><b>Other Projects</b></h2>
                <section id="resume" class="resume">
                    <div class="container">

                        <div class="row">
                            <div class="col-lg-6">
                                <h3 class="resume-title"></h3>
                                <div class="resume-item">
                                    <h5>ChatJS</h5>
                                    <li>Frontend and backend for a chatroom web application developed using React. Features a login and registration server. Incorporates Socket.IO in order to implement the functionality that allows communication between users.</li>
                                    <li><a style={{ color: "blue" }} href="https://github.com/jackyliu1999/ChatJS">github.com/jackyliu1999/ChatJS</a></li>
                                </div>
                                <div class="resume-item">
                                    <h5>COVID19 Stats Tracker</h5>
                                    <p>
                                        <li>Created for Hackathon, BOTHACKS. Incorporates APIs that draw live data including total cases, total recovered and total deaths in order to inform the user of the severity and numbers of the COVID-19 pandemic.</li>
                                        <li><a style={{ color: "blue" }} href="https://github.com/jackyliu1999/COVID19-Stats-Tracker">github.com/jackyliu1999/COVID19-Stats-Tracker</a></li>
                                    </p>
                                </div>
                                <div class="resume-item">
                                    <h5>Desktop Cleaner	</h5>
                                    <p>
                                        <li>Desktop cleaner is a Python-based automation script that sorts folders based on file type (images, documents, spreadsheets, installers, music, videos) into a user inputted directory.</li>
                                        <li><a style={{ color: "blue" }} href="https://github.com/jackyliu1999/Desktop-Cleaner">github.com/jackyliu1999/Desktop-Cleaner</a></li>
                                    </p>
                                </div>
                            </div>


                            <div class="col-lg-6">
                                <h3 class="resume-title"></h3>
                                <div class="resume-item">
                                    <h5>Notes to Text Converter</h5>
                                    <li>Takes handwritten notes and converts them into text. Incorporates optical character recognition tool, pytesseract for the conversion functionality. Tkinter was utilized in order to provide a user-friendly interface.</li>
                                    <li><a style={{ color: "blue" }} href="https://github.com/jackyliu1999/Notes-to-Text-Converter">github.com/jackyliu1999/Notes-to-Text-Converter</a></li>
                                </div>
                                <div class="resume-item">
                                    <h5>Bitcoin Price Notifier	</h5>
                                    <p>
                                        <li>Notifies users of Bitcoin price fluctuation by extracting the live price of Bitcoin from Yahoo Finance. Allows users to set a benchmark and once the price hits the designated benchmark, verbally notifies user.</li>
                                        <li><a style={{ color: "blue" }} href="https://github.com/jackyliu1999/Bitcoin-Price-Notifier">github.com/jackyliu1999/Bitcoin-Price-Notifier</a></li>
                                    </p>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>
            </div>
        </div>
    )
}

export default Archive;