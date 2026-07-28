const songs = [
{
title:"Arabic Kuthu",
artist:"Anirudh Ravichander",
image:"https://picsum.photos/300?1"
},
{
title:"Hukum",
artist:"Anirudh Ravichander",
image:"https://picsum.photos/300?2"
},
{
title:"Vaathi Coming",
artist:"Anirudh Ravichander",
image:"https://picsum.photos/300?3"
},
{
title:"Megham Karukatha",
artist:"Dhanush",
image:"https://picsum.photos/300?4"
}
];

const songsContainer = document.getElementById("songs");
const search = document.getElementById("search");

function displaySongs(list){
    songsContainer.innerHTML="";

    list.forEach(song=>{
        songsContainer.innerHTML += `
        <div class="song">
            <img src="${song.image}">
            <h3>${song.title}</h3>
            <p>${song.artist}</p>
            <button>Play</button>
        </div>`;
    });
}

displaySongs(songs);

search.addEventListener("keyup",()=>{
    const value = search.value.toLowerCase();

    const filtered = songs.filter(song =>
        song.title.toLowerCase().includes(value) ||
        song.artist.toLowerCase().includes(value)
    );

    displaySongs(filtered);
});

