// import style
import "./style.css";

// import threejs
import * as THREE from "three";

// orbit controls
import { OrbitControls } from "three/examples/jsm/controls/OrbitControls.js";

// axes helper
import { AxesHelper } from "three";

// create a scene
const scene = new THREE.Scene();

// add a camera
const camera = new THREE.PerspectiveCamera(
    75, // field of view
    window.innerWidth / window.innerHeight // aspect ratio
);

// move the camera back a bit
camera.position.z = 3;

// add ambient light
const ambientLight = new THREE.AmbientLight(0xffffff, 0.5);
scene.add(ambientLight);

// add directional light
const directionalLight = new THREE.DirectionalLight(0xffffff, 0.5);
directionalLight.position.set(2, 2, 0);
scene.add(directionalLight);

// create a renderer
const renderer = new THREE.WebGLRenderer({ antialias: true, alpha: false });
renderer.setSize(window.innerWidth, window.innerHeight);
document.body.appendChild(renderer.domElement);

// add orbit controls
const controls = new OrbitControls(camera, renderer.domElement);

// new green cube of 1 "unit" in size
const geometry = new THREE.BoxGeometry(1, 1, 1);
const material = new THREE.MeshLambertMaterial({ color: 0x00ff00 });
const mesh = new THREE.Mesh(geometry, material);
scene.add(mesh);

// move the camera back a bit
camera.position.z = 3;

// axes helper
const axesHelper = new THREE.AxesHelper(2);
scene.add(axesHelper);

function animate() {
    requestAnimationFrame(animate);
    renderer.render(scene, camera);
}

animate();
