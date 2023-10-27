import React from "react";
import { FaTwitter } from "react-icons/fa";
import { LuInstagram, LuFacebook} from "react-icons/lu";



export const FooterPage = () => {
    return (

        <div className="footer-class">
            <hr />
            <footer className="bg-white dark:bg-gray-900">

                <div>
                
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
                        <div className="footer-credits">
                            <p> © 2023 Cat's Meow  </p>
                                <p>We love cats as much as you do.
  </p>                  
                        </div>
                        <hr />
                
            </footer>
        </div>


    );
}