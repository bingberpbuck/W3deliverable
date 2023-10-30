import React from 'react';

function Body() {
    return (
        <div>
            <link rel="stylesheet" href="https://fonts.googleapis.com/css?family=Trirong"></link>
            <img
            src = "IMG_5076.JPG"
            width = "301.5"
            height = "552"
            />
            

            <div id = "header">
                <h1> <strong> David Lee </strong> </h1>
                <h3> <strong> Class of 2027 </strong> </h3>
            </div>

            <div id = "list">
                <p> Hello! My name's David and I'm a freshman in SAS studying economics and computer science. Some of my hobbies/interests include: </p>
                <ul> 
                    <li> Running </li>
                    <li> Piano </li>
                    <li> Karaoke </li>
                    <li> A lot of sports </li>
                </ul>
            </div>

            <div id = "links">
                <p> Check out my Github: </p>
                <a target="_blank" href="https://github.com/bingberpbuck">
                    Github
                </a>
            </div>
        </div>
    );
  }

  export default Body;