//Lista de canciones
const songList = [
    
    {
        title: "Animal - Wos & Acru",
        file: "ANIMAL.mp3",
        cover: "1.jpg"
    },

    {
        title: "Flaca - Calamaro",
        File: "Flaca.mp3",
        cover: "2.jpg"
    },

    {
        title: "Bang Bang - Warsame",
        File: "bangbang",
        cover: "3.jpg"
    },
]

// Capturar elementos del DOM para trabajar con JS
const songs = document.getElementById("songs")


// Cargar canciones y mostrar el listado
function loadSongs() {
    songList.forEach((song, index) => {
        // Crear li
        const li = document.createElement("li")
        // Crear a
        const link = document.createElement("a")
        // Hidratar a
        link.textContent = song.title
        link.href = "#"
        // Añadir a li
        li.appendChild(link)
        // añadir li a lu
        songs.appendChild(li)
     })
}

// Cargar cancion seleccionada
function loadSong(songIndex)

// GO!
loadSongs()