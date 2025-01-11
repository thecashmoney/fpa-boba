import './style.css'
import * as THREE from "three";
import { GLTFLoader } from "three/examples/jsm/loaders/GLTFLoader.js";

const scene = new THREE.Scene();

const camera = new THREE.PerspectiveCamera(75, window.innerWidth/window.innerHeight, 0.1, 1000);

const renderer = new THREE.WebGLRenderer({
  canvas: document.querySelector("#bg"),
})

renderer.setPixelRatio(window.devicePixelRatio);
renderer.setSize(window.innerWidth, window.innerHeight);
// camera.position.setZ(7.5);
// camera.position.setY(3);
// camera.position.setX(6);

renderer.render(scene, camera);

//load in cup
const loader = new GLTFLoader();

loader.load("cup.glb", function (gltf) {
  scene.add(gltf.scene);
  gltf.scene.position.set(-6,-3,-7.5);
}, undefined, function (error) {
  console.error(error);
});

//lights
// const pointLight = new THREE.PointLight(0xffffff);
// pointLight.position.set(0,0,0);

const ambientLight = new THREE.AmbientLight(0xffffff);
scene.add(ambientLight);

// const lightHelper = new THREE.PointLightHelper(pointLight);
// scene.add(lightHelper);

//background
const color = new THREE.Color().setHex(0xf6d193);
scene.background = color;


function animate() {
  requestAnimationFrame(animate);
  renderer.render(scene, camera);
}

animate();