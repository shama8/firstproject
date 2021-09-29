import './navbar.css'
export default function Navbar(){
    return(
        <div classNme="top">
            <div className="topLeft">Logo</div>
            <div className="topCenter" >
                <ul className="topList">
                    <li className="topListItem">The Mentour.com</li>
                </ul>
            </div>
            <div className="topRight">
                <ul className="topList">
                <li className="topListItem">LOGIN</li>
                </ul>
            </div>
        </div>
    )
}