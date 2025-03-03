// // function getuserlocation(){
// //     if(!Navigator.geoloation){
// //         console.log("Geolocation is not supported by your browser.");
// //         return;
// //     }

// // navigator.geolocation.getCurrentPosition(
    
    
// //         (position) => {
// //             console.log("Latitude:",position.coords.latitude);
// //             console.log("longitude:", position.coords.longitude);
// //         },
// //         (err)=>{
// //             console.log("unable to get location",err);
// //         }
// // )

// // }
// function initMap() {
//     // Try to get the user's location
//     if (navigator.geolocation) {
//         navigator.geolocation.getCurrentPosition(
//             (position) => {
//                 const userLocation = {
//                     lat: position.coords.latitude,
//                     lng: position.coords.longitude
//                 };

//                 // Create a map centered at the user's location
//                 const map = new google.maps.Map(document.getElementById("map"), {
//                     zoom: 15,
//                     center: userLocation,
//                 });

//                 // Add a marker at the user's location
//                 new google.maps.Marker({
//                     position: userLocation,
//                     map: map,
//                 });
//             },
//             () => {
//                 handleLocationError(true);
//             }
//         );
//     } else {
//         // Browser doesn't support Geolocation
//         handleLocationError(false);
//     }
// }

// function handleLocationError(browserHasGeolocation) {
//     console.error(
//         browserHasGeolocation
//             ? "Error: The Geolocation service failed."
//             : "Error: Your browser doesn't support geolocation."
//     );
// }

// // Initialize the map when the window loads
// window.onload = initMap;
