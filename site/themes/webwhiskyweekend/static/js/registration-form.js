const roomSelect = document.querySelector(".room-select");
const roomCost = document.querySelector(".room-cost");
const roomPhotoButton = document.querySelector(".room-photo-button");
const mapLocationButton = document.querySelector(".map-location-button");
const roomPhoto = document.querySelector(".room-photo");
const mapLocation = document.querySelector(".map-location");
let optionValue;
let roomRate;

const getValue = () => {
    optionValue = parseInt(roomSelect.options[roomSelect.selectedIndex].value);
};
const getCost = () => {
    getValue();
    fetch("../rooms.json")
    .then(res => res.json())
    .then(data => {
        for(i = 0; i < data.rooms.length; i++){
            if(data.rooms[i].MapID === optionValue) {
                roomRate = data.rooms[i].Rate;
                roomCost.innerText = roomRate;
            };
        };
    });
};
const showRoomPhoto = () => {
    roomPhoto.classList.remove("d-none");
    mapLocation.classList.add("d-none");
};
const showMapLocation = () => {
    mapLocation.classList.remove("d-none");
    roomPhoto.classList.add("d-none");
};

roomPhotoButton.addEventListener("click", showRoomPhoto);
mapLocationButton.addEventListener("click", showMapLocation);
