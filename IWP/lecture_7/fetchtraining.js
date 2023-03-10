
async function test(){
    let fetched =  await fetch("https://people.cs.aau.dk/~bnielsen/IWP/scores.json")
    let test2 = await fetched.json()//.then(console.log)
    console.log(test2);
    for(let i = 0; i < 3; i++){
        console.log(test2[i].navn);
    }
}
test();
