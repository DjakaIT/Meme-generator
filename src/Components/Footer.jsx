import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import { faLaughBeam } from "@fortawesome/free-solid-svg-icons";


export default function Footer(){
    return(
            <footer className="travel-footer"> 
                 <p>
                    Created with <FontAwesomeIcon icon={faLaughBeam} className="footer-icon"></FontAwesomeIcon> by &nbsp;
                <a href="https://github.com/DjakaIT" className="website-link">Daniel  &nbsp;(GitHUB)</a>  
                </p>
            </footer>
    );
}                   
