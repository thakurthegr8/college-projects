const workSection = document.querySelector("#works");
const workData = [{
    designDescription:"Hand Design For",
    designFor:"@EmannuelJosito",
    design:"i1.png",
},{
    designDescription:"bounce at beat",
    designFor:"@Barbarabonis",
    design:"bounce.gif",
},{
    designDescription:"tea sipping",
    designFor:"@EmannuelJosito",
    design:"tea.gif",
},{
    designDescription:"Hand Design For",
    designFor:"@EmannuelJosito",
    design:"ill4.png",
},{
    designDescription:"Parking illustration for",
    designFor:"@Barbarabonis",
    design:"ill2.png",
},{
    designDescription:"Parking illustration for",
    designFor:"@Barbarabonis",
    design:"car.gif",
}
];

const cardCss = (imgData)=>{
    return ` background-image:url("images/${imgData}");`;
}
let row = 1;
let count = 1;
let ar = ["col-span-0","md:col-span-1 lg:col-span-2"];

const setWorks = (item,index)=>{
        if((index+1)%2){
            workSection.innerHTML += ` <div class="flex flex-col rounded ${ar[0]}" style=${cardCss(item.design)}>
            <div class="flex w-full flex-col rounded justify-end items-start h-full p-6 cursor-pointer opacity-0 hover:opacity-100 transition bg-gradient-to-t from-black ">
                <div class="flex flex-col ml-4">
                    <h1 class="text-white text-3xl">${item.designDescription}</h1>
                    <h1 class="text-green-500 text-base -mt-1 font-semibold">${item.designFor}</h1>
                </div>
            </div> 
        </div>`;
        }
        else{
            workSection.innerHTML += ` <div class="flex flex-col rounded ${ar[1]}" style=${cardCss(item.design)}>
            <div class="flex w-full flex-col rounded justify-end items-start cursor-pointer h-full p-6 opacity-0 hover:opacity-100 transition bg-gradient-to-t from-black ">
                <div class="flex flex-col ml-4">
                    <h1 class="text-white text-3xl">${item.designDescription}</h1>
                    <h1 class="text-green-500 text-base -mt-1 font-semibold">${item.designFor}</h1>
                </div>
            </div> 
        </div>`;
        }
       
}

workData.forEach((item,index)=>{
    setWorks(item,index);
    if(count == 2){
        ar.reverse();
        count = 0;
    }
    count = count + 1;
    console.log(ar);
});
console.log(workData);