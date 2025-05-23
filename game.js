// Create the game container
const gameContainer = document.getElementById('game-container');

// Create the Three.js scene, camera, and renderer
const scene = new THREE.Scene();
const camera = new THREE.PerspectiveCamera(75, window.innerWidth / window.innerHeight, 0.1, 1000);
const renderer = new THREE.WebGLRenderer({
    canvas: document.createElement('canvas'),
    antialias: true
});
renderer.setSize(window.innerWidth, window.innerHeight);
gameContainer.appendChild(renderer.domElement);

// Create the road
const roadGeometry = new THREE.PlaneGeometry(1000, 1000);
const roadMaterial = new THREE.MeshBasicMaterial({ color: 0xffffff });
const road = new THREE.Mesh(roadGeometry, roadMaterial);
road.rotation.x = -Math.PI / 2;
scene.add(road);

// Create the car
const carGeometry = new THREE.BoxGeometry(2, 1, 1);
const carMaterial = new THREE.MeshBasicMaterial({ color: 0xff0000 });
const car = new THREE.Mesh(carGeometry, carMaterial);
car.position.set(0, 1, 0);
scene.add(car);

// Create the camera controls
let cameraX = 0;
let cameraY = 0;
let cameraZ = 0;
document.addEventListener('keydown', (event) => {
    if (event.key === 'ArrowUp') {
        cameraZ -= 0.1;
    } else if (event.key === 'ArrowDown') {
        cameraZ += 0.1;
    } else if (event.key === 'ArrowLeft') {
        cameraX -= 0.1;
    } else if (event.key === 'ArrowRight') {
        cameraX += 0.1;
    }
    camera.position.set(cameraX, cameraY, cameraZ);
});

// Animate the scene
function animate() {
    requestAnimationFrame(animate);
    renderer.render(scene, camera);
}
animate();

// Add some lighting to the scene
const ambientLight = new THREE.AmbientLight(0x444444);
scene.add(ambientLight);

const directionalLight = new THREE.DirectionalLight(0xffffff);
directionalLight.position.set(0, 1, 0);
scene.add(directionalLight);
