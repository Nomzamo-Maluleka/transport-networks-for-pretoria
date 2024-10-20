const map = L.map('map').setView([-25.7461, 28.1881], 12); // Centered on Pretoria


L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
  maxZoom: 19,
  attribution: '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
}).addTo(map);

// Example GeoJSON data for transport routes
const transportRoutes = {
  "type": "FeatureCollection",
  "features": [
    {
      "type": "Feature",
      "properties": {"name": "Route 1", "trafficLevel": "High"},
      "geometry": {
        "type": "LineString",
        "coordinates": [[28.15, -25.75], [28.20, -25.75]]
      }
    },
    {
      "type": "Feature",
      "properties": {"name": "Route 2", "trafficLevel": "Low"},
      "geometry": {
        "type": "LineString",
        "coordinates": [[28.15, -25.75], [28.15, -25.80]]
      }
    }
    //
  ]
};


const routeLayer = L.geoJSON(transportRoutes, {
  style: function(feature) {
    return {color: feature.properties.trafficLevel === "High" ? "red" : "green"};
  },
  onEachFeature: function(feature, layer) {
    layer.on('click', function() {
      document.getElementById('info-text').innerText = `Route: ${feature.properties.name}\nTraffic Level: ${feature.properties.trafficLevel}`;
    });
  }
}).addTo(map);

// Simple route optimization example
document.getElementById('optimize-route').addEventListener('click', function() {
  alert('Optimizing route...');
  // This is a placeholder for route optimization logic
  // Implement Dijkstra's algorithm or another pathfinding algorithm for optimization
});