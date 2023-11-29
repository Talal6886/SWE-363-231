var scene = new THREE.Scene();


var camera = new THREE.PerspectiveCamera(75, window.innerWidth / window.innerHeight, 0.1, 1000);
camera.position.z = 5;


var renderer = new THREE.WebGLRenderer({ canvas: document.getElementById("canvas") });
renderer.setSize(window.innerWidth, window.innerHeight);

function fetchLaunchData() {
  var apiUrl = "https://api.spacexdata.com/v3/launches";

  fetch(apiUrl)
    .then(response => response.json())
    .then(data => {
      
      scene.clear();


      data.forEach((launch, index) => {
        var sphereGeometry = new THREE.SphereGeometry(0.5, 32, 32);
        var sphereMaterial = new THREE.MeshBasicMaterial({ color: getRandomColor() });
        var sphere = new THREE.Mesh(sphereGeometry, sphereMaterial);
        sphere.position.set(index * 2, 0, 0); 
        scene.add(sphere);

     
        sphere.userData.launch = launch;

        
        sphere.addEventListener('click', showLaunchDetails);
      });

      // Render the scene
      renderer.render(scene, camera);
    })
    .catch(error => {
      console.log("Error fetching launch data:", error);
    });
}


fetchLaunchData();
setInterval(fetchLaunchData, 10000);


function getRandomColor() {
  return Math.random() * 0xffffff;
}


function showLaunchDetails(event) {
  var sphere = event.target;
  var launch = sphere.userData.launch;


  console.log("Mission Name: " + launch.mission_name);
  console.log("Launch Date: " + launch.launch_date_utc);
  console.log("Rocket Name: " + launch.rocket.rocket_name);
  console.log("Launch Site: " + launch.launch_site.site_name_long);
}