document.getElementById('getJoke').addEventListener('click', async () => {
    const res = await fetch('https://v2.jokeapi.dev/joke/Any?type=single');
    const data = await res.json();
    console.log(data)
    document.getElementById('joke').textContent = data.joke;
});

// document.getElementById('getJoke').addEventListener('click', ()=>{
//     fetch('https://v2.jokeapi.dev/joke/Any?type=single')
//     .then(response => response.json())
//     .then(data => {
//         document.getElementById('joke').textContent = data.joke
//     })
//     .catch(error => console.log(error))
// })