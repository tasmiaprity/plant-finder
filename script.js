const plants = [
  { name: "Foxglove", sun: "partial", moisture: "moist", space: "medium", wildlife: "Bumblebees" },
  { name: "Hawthorn", sun: "full", moisture: "moist", space: "large", wildlife: "Birds and moths" },
  { name: "Primrose", sun: "partial", moisture: "moist", space: "small", wildlife: "Early bees and butterflies" },
  { name: "Bluebell", sun: "shade", moisture: "moist", space: "small", wildlife: "Bumblebees" },
  { name: "Wild marjoram", sun: "full", moisture: "dry", space: "small", wildlife: "Bees and butterflies" },
];

const plantList = document.getElementById("plant-list");

function showPlants(list) {
  plantList.innerHTML = "";
  list.forEach(function (plant) {
    const card = document.createElement("div");
    card.innerHTML =
      "<h2>" + plant.name + "</h2>" +
      "<p>Sun: " + plant.sun + "</p>" +
      "<p>Moisture: " + plant.moisture + "</p>" +
      "<p>Space: " + plant.space + "</p>" +
      "<p>Helps: " + plant.wildlife + "</p>";
    plantList.appendChild(card);
  });
}

showPlants(plants);