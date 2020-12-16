//import logo from './logo.svg';
import './index.css';

//Complete Project
function App() {
    return ( <
        div className = "App" >
        <
        header >
        <
        div className = "header" >
        <
        h2 > To Do List < /h2>{" "} <
        /div>{" "} <
        /header>{" "} <
        section >
        <
        div class = "player-container" >
        <
        span class = "Gym" > Gym < /span> <
        select class = "choice" >
        <
        option value = "12:00" > 12: 00 < /option> <
        option value = "1:00" > 1: 00 < /option> <
        option value = "2:00" > 2: 00 < /option> <
        option value = "3:00" > 3: 00 < /option> <
        option value = "4:00" > 4: 00 < /option> <
        option value = "5:00" > 5: 00 < /option> <
        option value = "6:00" > 6: 00 < /option> <
        option value = "7:00" > 7: 00 < /option> <
        option value = "8:00" > 8: 00 < /option> <
        option value = "9:00" > 9: 00 < /option> <
        option value = "10:00" > 10: 00 < /option> <
        option value = "11:00" > 11: 00 < /option> <
        span class = "name" > Name < /span> <
        /select> <
        select >
        <
        option value = "am" > am < /option> <
        option value = "pm" > pm < /option> <
        /select> <
        /div> <
        div class = "player-container" >
        <
        span class = "Shop" > Shop < /span> <
        select class = "choice" >
        <
        option value = "12:00" > 12: 00 < /option> <
        option value = "1:00" > 1: 00 < /option> <
        option value = "2:00" > 2: 00 < /option> <
        option value = "3:00" > 3: 00 < /option> <
        option value = "4:00" > 4: 00 < /option> <
        option value = "5:00" > 5: 00 < /option> <
        option value = "6:00" > 6: 00 < /option> <
        option value = "7:00" > 7: 00 < /option> <
        option value = "8:00" > 8: 00 < /option> <
        option value = "9:00" > 9: 00 < /option> <
        option value = "10:00" > 10: 00 < /option> <
        option value = "11:00" > 11: 00 < /option> <
        span class = "name" > Name < /span> <
        /select> <
        select >
        <
        option value = "am" > am < /option> <
        option value = "pm" > pm < /option> <
        /select> <
        /div> <
        div class = "player-container" >
        <
        span class = "Study" > Study < /span> <
        select class = "choice" >
        <
        option value = "12:00" > 12: 00 < /option> <
        option value = "1:00" > 1: 00 < /option> <
        option value = "2:00" > 2: 00 < /option> <
        option value = "3:00" > 3: 00 < /option> <
        option value = "4:00" > 4: 00 < /option> <
        option value = "5:00" > 5: 00 < /option> <
        option value = "6:00" > 6: 00 < /option> <
        option value = "7:00" > 7: 00 < /option> <
        option value = "8:00" > 8: 00 < /option> <
        option value = "9:00" > 9: 00 < /option> <
        option value = "10:00" > 10: 00 < /option> <
        option value = "11:00" > 11: 00 < /option> <
        span class = "name" > Name < /span> <
        /select> <
        select >
        <
        option value = "am" > am < /option> <
        option value = "am" > pm < /option> <
        /select> <
        /div> <
        div class = "player-container" >
        <
        span class = "Sleep" > Sleep < /span> <
        select class = "choice" >
        <
        option value = "12:00" > 12: 00 < /option> <
        option value = "1:00" > 1: 00 < /option> <
        option value = "2:00" > 2: 00 < /option> <
        option value = "3:00" > 3: 00 < /option> <
        option value = "4:00" > 4: 00 < /option> <
        option value = "5:00" > 5: 00 < /option> <
        option value = "6:00" > 6: 00 < /option> <
        option value = "7:00" > 7: 00 < /option> <
        option value = "8:00" > 8: 00 < /option> <
        option value = "9:00" > 9: 00 < /option> <
        option value = "10:00" > 10: 00 < /option> <
        option value = "11:00" > 11: 00 < /option> <
        span class = "name" > Name < /span> <
        /select> <
        select >
        <
        option value = "am" > am < /option> <
        option value = "pm" > pm < /option> <
        /select> <
        /div> <
        /section>{" "} <
        section >
        <
        h1 id = "contactHeading" > HOW CAN WE DO BETTER ? < /h1>{" "} <
        form action = "https://formspree.io/xqkyryyz"
        method = "POST" >
        <
        label >
        <
        br / >
        Name / Company :
        <
        br / >
        <
        input class = "inputBox"
        type = "text"
        name = "name" / >
        <
        /label> <
        label >
        <
        br / >
        Email:
        <
        br / >
        <
        input class = "inputBox"
        type = "email"
        name = "replyto" / >
        <
        /label> <
        label >
        <
        br / >
        Suggestions:
        <
        br / >
        <
        textarea name = "message" > < /textarea> <
        input id = "sendButton"
        type = "submit"
        value = "Send" / >
        <
        /label> <
        /form> <
        /section> <
        /div>
    );
}

export default App;