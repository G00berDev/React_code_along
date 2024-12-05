import React, { useState } from 'react'; // Import useState for state management
import Gallery from './tutorial/gallery'; // Import the Gallery component
import TestComponent from './tutorial/03-useEffect/3-useEffect-fetch-data.jsx';

// const images = [
// {
//     pictureName: "Sunset View",
//     pictureURL: "https://res.cloudinary.com/dwafwtcba/image/upload/v1733173714/cld-sample-2.jpg",
//     altText: "A beautiful sunset over the mountains"
// },
// {
//     pictureName: "Beach Landscape",
//     pictureURL: "https://res.cloudinary.com/demo/image/upload/v1/beach.jpg",
//     altText: "A tranquil beach with blue skies"
// },
// {
//     pictureName: "City Skyline",
//     pictureURL: "https://res.cloudinary.com/dwafwtcba/image/upload/v1733173957/VJffSb7CToipND72TwpxZA_ftsfn1.webp",
//     altText: "A modern city skyline at dusk"
// },
// {
//     pictureName: "Forest Path",
//     pictureURL: "https://res.cloudinary.com/dwafwtcba/image/upload/v1733173995/360_F_176490466_umk6agJJkM0kEhM3bj1q9IidD66FiqmS_tbtu73.jpg",
//     altText: "A peaceful forest path"
// },
// {
//     pictureName: "Mountain Peak",
//     pictureURL: "https://res.cloudinary.com/dwafwtcba/image/upload/v1704352519/sample.jpg",
//     altText: "Snow-capped mountain peaks at dawn"
// },
// {
//     pictureName: "Urban Streets",
//     pictureURL: "https://res.cloudinary.com/dwafwtcba/image/upload/v1621490744/urban.jpg",
//     altText: "Busy urban streets at sunset"
// },
// {
//     pictureName: "Desert Landscape",
//     pictureURL: "https://res.cloudinary.com/dwafwtcba/image/upload/v1608000583/desert.jpg",
//     altText: "Golden sand dunes under a clear sky"
// },
// {
//     pictureName: "Lakeside View",
//     pictureURL: "https://res.cloudinary.com/dwafwtcba/image/upload/v1608000992/lakeside.jpg",
//     altText: "A serene lake surrounded by mountains"
// },
// {
//     pictureName: "Autumn Forest",
//     pictureURL: "https://res.cloudinary.com/dwafwtcba/image/upload/v1575062194/autumn_forest.jpg",
//     altText: "Bright autumn leaves on forest trees"
// },
// {
//     pictureName: "Winter Wonderland",
//     pictureURL: "https://res.cloudinary.com/dwafwtcba/image/upload/v1608001393/winter.jpg",
//     altText: "Snowy landscape with trees and mountains"
// },
// {
//     pictureName: "Ocean Waves",
//     pictureURL: "https://res.cloudinary.com/dwafwtcba/image/upload/v1575060194/ocean.jpg",
//     altText: "Ocean waves crashing on the shore"
// },
// {
//     pictureName: "Desert Sunrise",
//     pictureURL: "https://res.cloudinary.com/dwafwtcba/image/upload/v1575061204/desert_sunrise.jpg",
//     altText: "A breathtaking desert sunrise"
// },
// {
//     pictureName: "Coastal Cliffs",
//     pictureURL: "https://res.cloudinary.com/dwafwtcba/image/upload/v1582190904/cliffs.jpg",
//     altText: "Tall cliffs above the ocean"
// },
// {
//     pictureName: "Tropical Paradise",
//     pictureURL: "https://res.cloudinary.com/dwafwtcba/image/upload/v1592213990/tropical.jpg",
//     altText: "A tropical beach with palm trees"
// },
// {
//     pictureName: "Snowy Village",
//     pictureURL: "https://res.cloudinary.com/dwafwtcba/image/upload/v1608001709/snowy_village.jpg",
//     altText: "A cozy snowy village with warm lights"
// },
// {
//     pictureName: "Starry Night",
//     pictureURL: "https://res.cloudinary.com/dwafwtcba/image/upload/v1608002023/stars.jpg",
//     altText: "A starry sky over a peaceful landscape"
// },
// {
//     pictureName: "Lavender Fields",
//     pictureURL: "https://res.cloudinary.com/dwafwtcba/image/upload/v1608002405/lavender_fields.jpg",
//     altText: "Vibrant lavender fields under the sun"
// },
// {
//     pictureName: "Rainforest",
//     pictureURL: "https://res.cloudinary.com/dwafwtcba/image/upload/v1608002730/rainforest.jpg",
//     altText: "A lush, green rainforest"
// },
// {
//     pictureName: "Rolling Hills",
//     pictureURL: "https://res.cloudinary.com/dwafwtcba/image/upload/v1608003052/rolling_hills.jpg",
//     altText: "Rolling hills covered with green grass"
// }
// ];


// const App = () => {
// // State to track the boolean value (true/false)
// const [isTrue, setIsTrue] = useState(true);

// // State to track the count of how many times the button was pressed
// const [count, setCount] = useState(0);

// // Function to toggle the boolean value and increment the count
// const toggleState = () => {
// setIsTrue(!isTrue); // Toggle the boolean state
// setCount(count + 1); // Increment the count
// };

// return (
// <div className="App">
// <h1>React Gallery</h1>
// {/* Display the gallery */}
// <Gallery images={images} />

// {/* Display the current state and button press count */}
// <h2>Current State: {isTrue ? 'True' : 'False'}</h2>
// <p>Button pressed {count} times</p>

// {/* Button to toggle the state */}
// <button
// onClick={toggleState}
// style={{
//     backgroundColor: isTrue ? 'green' : 'red', // Change color based on state
//     color: 'white',
//     padding: '10px 20px',
//     fontSize: '16px',
//     border: 'none',
//     borderRadius: '5px',
//     cursor: 'pointer',
// }}
// >
// Toggle State
// </button>
// </div>
// );
// };

function App() {
    return(
        <div className='container'>
            <h2>Advanced Tutorial</h2>
            <TestComponent/>
        </div>
    )
}

export default App;
