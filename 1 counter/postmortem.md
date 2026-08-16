```
html

<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>counter</title>
     <script src="https://cdn.tailwindcss.com"></script>  
</head>
<body>
    <article class="container text-center">
         <header class=" py-4 text-3xl font-bold uppercase w-full">Pre-capstone project: Counter</header>
        <main class="flex items-center justify-center h-[60vh]">
            <div class="space-y-6">
                 <output id="numberDisplay" class="text-6xl font-extrabold py-8" aria-label="Number Display">0</output>
        <section class="buttonContainer flex items-center justify-evenly gap-2 text-white">
            <!-- instead of it reading increment,decrement or reset twice it is bettter i don't put it-->
            <button class="button  increment bg-black py-[14px] px-[14px] rounded-xl hover:bg-gray-500 focus-visible:outline-none focus-visible:ring-4 focus-visible:ring-white ">
                increment
            </button> 
            <button class="button decrement  bg-black py-[14px] px-[14px] rounded-xl hover:bg-gray-500 focus-visible:outline-none focus-visible:ring-4 focus-visible:ring-white ">
                decrement
            </button>
            <button class="button reset  bg-black py-[14px] px-[14px] rounded-xl hover:bg-gray-500 focus-visible:outline-none focus-visible:ring-4 focus-visible:ring-white ">
                reset
            </button>
        </section>
        <div>The high score is <span class="highScore text-green-500 font-bold">0</span></div>
            </div>
    </main>
    </article>
    <script src="./input2.js"></script>
    
</body>
</html>
```
js(the new one you said i should recreate)
state={
    count:0,
    highScore:0
}
var outPut = document.querySelector('output#numberDisplay');
var highScore = document.querySelector('span.highScore');
var incrementBtn = document.querySelector("button.increment");
var decrementBtn = document.querySelector("button.decrement");
var resetBtn = document.querySelector("button.reset");
var savedHighScore = localStorage.getItem("highScore");
if (savedHighScore !== null) {
    state.highScore = parseInt(savedHighScore);
}

function run(){
    outPut.textContent=state.count
    highScore.textContent = state.highScore
    outPut.classList.remove("text-green-500", "text-yellow-400", "text-orange-500", "text-red-600");
    if (state.count<10) {
        outPut.classList.add("text-green-500");
    } else if (state.count>=10 && state.count<15){
        outPut.classList.add("text-yellow-400");
    }else if (state.count>=15 && state.count<20){
        outPut.classList.add("text-orange-500");
    }else if (state.count===20){
        outPut.classList.add("text-red-600");
    }
}

incrementBtn.addEventListener("click", function () {
    if (state.count<20){
        state.count += 1;
        if (state.count > state.highScore) {
            state.highScore = state.count;
            localStorage.setItem("highScore", state.highScore);
        }
        run();
    }
    
})

decrementBtn.addEventListener("click", function () {
    if (!(state.count===0)){
        state.count -= 1;
        run();
    }
})
resetBtn.addEventListener("click", function(){
    state.count=0;
    run();
})


run()

``` 

```
post mortem

* my front end has gotten rusty because it has been long i wrote tailwind and css but this mad me to start remebering them
* i don't know much about teminologies that exist like the minimum touch target but i tried to implement it using box model 
* i have along way to go to match up with the dream i have for myself and plans too if i am struggling with this
* i had a problem understanding render function but i could quickly catch up 
* i had a problem with updating the dom directly when i started i didn't create a state that will help with that
* i started oficially around 9:00 yesterday night i slep around 12am then continued around 8:20 this morning and as of now the thime is 10:17 am
* it is still rusty i felt like i could easily under stand this because i had previous knowledge on it but i still don understand local storage and i will say that is my biggest problem before even talking about oop that i am confident in
```