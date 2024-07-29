// document.addEventListener("DOMContentLoaded", () => {
//   const imageUrlInput = document.getElementById("image-url");
//   const addImageButton = document.getElementById("add-image");
//   const imageContainer = document.getElementById("image-container");

//   loadImages();

//   addImageButton.addEventListener("click", () => {
//     const imageUrl = imageUrlInput.value;
//     if (imageUrl) {
//       addImage(imageUrl);
//       saveImage(imageUrl);
//       imageUrlInput.value = "";
//     }
//   });

//   function loadImages() {
//     const images = JSON.parse(localStorage.getItem("images")) || [];
//     images.forEach((imageUrl) => {
//       addImage(imageUrl);
//     });
//   }

//   function addImage(url) {
//     const img = document.createElement("img");
//     img.src = url;
//     img.alt = "User added image";
//     img.style.width = "200px";
//     img.style.height = "200px";
//     img.style.gap = "10px";
//     imageContainer.appendChild(img);
//   }

//   function saveImage(url) {
//     let images = JSON.parse(localStorage.getItem("images")) || [];
//     images.push(url);
//     localStorage.setItem("images", JSON.stringify(images));
//   }
// });
