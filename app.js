console.log("Let's get this Party started !");

let url =''


async function getGif(q){
    const response =  await axios.get("http://api.giphy.com/v1/gifs/search?api_key=MhAodEJIJxQMxW9XqxKjyXfNYdLoOIym", {params: {q: q} })
    url = response.data.data[Math.round(Math.random()*50)].embed_url
    appendGif(url)
    
}

const button = document.querySelector("#search")
const searchtext = document.querySelector("#searchtext")
console.log(button)

button.addEventListener('click', function(e){
    e.preventDefault()
    getGif(searchtext.value)
    
    url=''
    
    
})


function appendGif(url){
    const newGif = document.createElement('iframe')
    newGif.src=url;
    newGif.classList.add("gif")
    const output = document.querySelector('.output')
    output.append(newGif)
}

const removebutton = document.querySelector('#remove')
removebutton.addEventListener('click', function(){
    const output = document.querySelector('.output')
    output.innerHTML='';
})