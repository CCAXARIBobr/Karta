// let fruits = ["Яблоко", "Банан", "Апельсин"]
// console.log(fruits[0]);

// for (let i = 0; i < fruits.length; i++) {
//     console.log(fruits[i]);
// }

// fruits.push("Груша")
// fruits.unshift("Манго")

// fruits.forEach(function(item, index) {
//     console.log(index, item)
// })

// let cities = [
//     {name: "Москва", description: "Столица России"},
//     {name: "Вашингтон", description: "Столица США"},
//     {name: "Лондон", description: "Столица Великобритании"}
// ]

// // for (let element of cities) {
// //     console.log(element);
// // }

// f = prompt("Какой ваш любимый фрукт?")
// fruits.push(f)

// for (let i = 0; i < fruits.length; i++) {
//     console.log(fruits[i]);
// }

// s = prompt("Напишите название города")
// sd = prompt("Напишите описание названного города")

// cities.push({name: s, description: sd})

// for (let element of cities) {
//     console.log(element);
// }

// let a = [5, 123, 1, 423, 654, 49, 29, 132, 423, 24, 132]
// let b = 0

// for (let i = 0; i < a.length; i ++) {
//     b+=a[i]    
// }

// alert(b)

// alert(s / a.length)

// even = 0, odd = 0
// for (let i = 0; i < a.length; i ++) {
//     if (a[i] % 2 == 0) {
//         even++
//     }
//     else {
//         odd++
//     }
// }
// alert("Чётные: " + even + " Нечётные: " + odd)

// const modal = document.getElementById("modal")
// const closeBtn = document.querySelector(".close")

// function openModal() {
//     modal.style.display = "block";
// }

// function closeModal() {
//     modal.style.display = "none";
// }

// window.onclick = function(event) {
//     if (event.target === modal || event.target === closeBtn) {
//         closeModal()
//     }
// }

const cities = [
    {name: "Москва", description: "Моска - столица России", image: "images/Moscva.png" },
    {name: "Санкт-Петербург", description: "Питер - северная культурная столица России", image: "images/Piter.png"},
    {name: "Казань", description: "Казань - столица Татарстана", image: "images/Kazan.png"},
    {name: "Краснодар", description: "Краснодар - южная столица России", image: "images/Krasnodar.png"},
    {name: "Сочи", description: "Сочи - курортный город", image: "images/Sochi.png"}
]

const markers = document.querySelectorAll('.marker')
const infoBox = document.getElementById('info-box')

const modal = document.getElementById('modal')
const modalTitle = document.getElementById('modal-title')
const modalDescription = document.getElementById('modal-description')
const modalImg = document.getElementById('modal-img')

markers.forEach(marker => {
    marker.addEventListener('mouseover', () => {
        const city = cities[marker.getAttribute('data-id')]
        infoBox.textContent = city.name
        infoBox.style.top = `${marker.offsetTop - 30}px`
        infoBox.style.left = `${marker.offsetLeft}px`
        infoBox.classList.add('visible')
    })

    marker.addEventListener('mouseout', () => {
        infoBox.classList.remove("visible")
    })

    marker.addEventListener('click', () => {
        const city = cities[marker.getAttribute('data-id')]
        modalTitle.textContent = city.name;
        modalDescription.textContent = city.description
        modalImg.src = city.image;
        modal.style.display = 'flex'
    })
})

function closeModal(event) {
    modal.style.display = 'none'
}