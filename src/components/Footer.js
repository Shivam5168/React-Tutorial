import "../components/FooterStyles.css";
import { FaHome, FaPhone, FaMailBulk, FaLinkedin, FaFacebook, FaTwitter } from "react-icons/fa"
import React from 'react'

const Footer = () => {
    return (
        <div className="footer">
            <div className="footer-container">
                <div className="left">
                    <div className="location">
                        <FaHome size={20} style={{ color: "#fff", marginRight: "2rem" }} />
                        <div>
                            <p>Phase 7, Sector 61 (Mohali)</p>
                            <p>India</p>
                        </div>
                    </div>
                    <div className="phone"><h4><FaPhone size={20} style={{ color: "#fff", marginRight: "2rem" }} /> 9472052351</h4></div>
                    <div className="email"><h4><FaMailBulk size={20} style={{ color: "#fff", marginRight: "2rem" }} />pradhanshivam@seasia.in</h4></div>
                </div>
                <div className="right">
                <h4>About The Company</h4>
                <p>Certainly! To create a responsive navbar that opens from the right side when the hamburger menu is clicked, you can use HTML, CSS, and JavaScript.</p>
                <div className="social"><FaFacebook size={20} style={{ color: "#fff", marginRight: "2rem" }} /><FaTwitter size={20} style={{ color: "#fff", marginRight: "2rem" }} /><FaLinkedin size={20} style={{ color: "#fff", marginRight: "2rem" }} /></div>
                </div>
            </div>
        </div>
    )
}

export default Footer
