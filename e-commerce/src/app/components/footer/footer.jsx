import React from "react";
import { FaTwitter } from "react-icons/fa";
import { LuInstagram } from "react-icons/lu";
import { LuFacebook } from "react-icons/lu";


export const FooterPage = () => {
    return (

        <div className="footer-class">
            <hr />
            <footer className="bg-white dark:bg-gray-900">

                <div>
                    <div className="grid">
                        <div>
                            <div className="footer-products">
                                <h2>Products</h2>
                                <ul>
                                    <li>
                                        <a href="#">Model 000</a>
                                    </li>
                                    <li>
                                        <a href="#">Model 001</a>
                                    </li>
                                    <li>
                                        <a href="#">Laces</a>
                                    </li>
                                    <li>
                                        <a href="#">Masks</a>
                                    </li>
                                    <li>
                                        <a href="#">No-show Socks</a>
                                    </li>
                                    <li>
                                        <a href="#">Crew Socks</a>
                                    </li>
                                    <li>
                                        <a href="#">Gift Cards</a>
                                    </li>
                                </ul>
                            </div>
                            <div className="footer-support">
                                <h2>Support</h2>
                                <ul>
                                    <li>
                                        <a href="#">Help Center</a>
                                    </li>
                                    <li>
                                        <a href="#">FAQ</a>
                                    </li>
                                    <li>
                                        <a href="#">Order</a>
                                    </li>
                                    <li>
                                        <a href="#">Order Status</a>
                                    </li>
                                    <li>
                                        <a href="#">Return & Exchanges</a>
                                    </li>
                                    <li>
                                        <a href="#">Constact Us</a>
                                    </li>

                                </ul>
                            </div>
                            <div className="footer-everything">
                                <h2>Everything Else</h2>
                                <ul>
                                    <li>
                                        <a href="#">Community</a>
                                    </li>
                                    <li>
                                        <a href="#">Why Sopa</a>
                                    </li>
                                    <li>
                                        <a href="#">About</a>
                                    </li>
                                    <li>
                                        <a href="#">Discount Program</a>
                                    </li>
                                    <li>
                                        <a href="#">Sopa Blog</a>
                                    </li>
                                    <li>
                                        <a href="#">Sopa Ambassadors</a>
                                    </li>
                                </ul>
                            </div>
                            <div className="footer-socialmedia">
                                <h2> Social</h2>
                                <ul>
                                    <li>
                                        <p> <FaTwitter /> Twitter</p>
                                    </li>
                                    <li>
                                        <p> <LuInstagram /> Instagram</p>
                                    </li>
                                    <li>
                                        <p> <LuFacebook /> Facebook</p>
                                    </li>
                                </ul>
                            </div>
                        </div>
                    </div>
                </div>
            </footer>
        </div>


    );
}