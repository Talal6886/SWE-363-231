// Create a scene
var scene = new THREE.Scene();

// Create a camera
var camera = new THREE.PerspectiveCamera(75, window.innerWidth / window.innerHeight, 0.1, 1000);
camera.position.z = 5;

// Create a renderer
var renderer = new THREE.WebGLRenderer({ canvas: document.getElementById("canvas") });
renderer.setSize(window.innerWidth, window.innerHeight);

// Fetch launch data from the SpaceX API
function fetchLaunchData() {
  var apiUrl = "https://api.spacexdata.com/v3/launches";

  fetch(apiUrl)
    .then(response => response.json())
    .then(data => {
      // Clear previous visualizations
      scene.clear();

      // Create new visualizations for each launch
      data.forEach((launch, index) => {
        var sphereGeometry = new THREE.SphereGeometry(0.5, 32, 32);
        var sphereMaterial = new THREE.MeshBasicMaterial({ color: getRandomColor() });
        var sphere = new THREE.Mesh(sphereGeometry, sphereMaterial);
        sphere.position.set(index * 2, 0, 0); // Position the spheres horizontally
        scene.add(sphere);

        // Attach launch details to the sphere as custom data
        sphere.userData.launch = launch;

        // Add click event listener to show launch details
        sphere.addEventListener('click', showLaunchDetails);
      });

      // Render the scene
      renderer.render(scene, camera);
    })
    .catch(error => {
      console.log("Error fetching launch data:", error);
    });
}

// Fetch launch data initially and every 10 seconds
fetchLaunchData();
setInterval(fetchLaunchData, 10000);

// Helper function to generate random colors
function getRandomColor() {
  return Math.random() * 0xffffff;
}

// Function to show launch details when a sphere is clicked
function showLaunchDetails(event) {
  var sphere = event.target;
  var launch = sphere.userData.launch;

  // Display launch details in the console (customize this part according to your needs)
  console.log("Mission Name: " + launch.mission_name);
  console.log("Launch Date: " + launch.launch_date_utc);
  console.log("Rocket Name: " + launch.rocket.rocket_name);
  console.log("Launch Site: " + launch.launch_site.site_name_long);
}