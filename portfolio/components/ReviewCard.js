const reviewsSection = document.querySelector("#reviews");
const verifiedThumbTag = "<img src=\"images/Layer_1.svg\" alt=\"\" class=\"w-6 ml-2\">";
const reviewData =[{
    userName :"Marcus Brown",
    userOrigin:"From Fiverr",
    isVerified:true,
    reviewText : "Had an amazing experience with Alice...She is awesome in making designs. She is cooperative and make up to the mark designs exactly what I suggested. Thanks Alice. :-)",
    reviewTime:"09:50PM",
    thumbColor:"red",
    sentFromDevice:"Mobile",
    verifiedThumb : function(){
            return this.isVerified?verifiedThumbTag:"";
    }
    },
    {userName :"Lucia grey",
    userOrigin:"From Fiverr",
    isVerified:false,
    reviewText : "Had an amazing experience with Alice...She is awesome in making designs. She is cooperative and make up to the mark designs exactly what I suggested. Thanks Alice. :-)",
    reviewTime:"09:50PM",
    thumbColor:"purple",
    sentFromDevice:"Mobile",
    verifiedThumb : function(){
            return this.isVerified?verifiedThumbTag:"";
        }
    },
    {userName :"John Hamilton",
    userOrigin:"From Fiverr",
    isVerified:true,
    reviewText : "Had an amazing experience with Alice...She is awesome in making designs. She is cooperative and make up to the mark designs exactly what I suggested. Thanks Alice. :-)",
    reviewTime:"08:54PM",
    thumbColor:"pink",
    sentFromDevice:"Desktop",
    verifiedThumb : function(){
            return this.isVerified?verifiedThumbTag:"";
        }
    },{
    userName :"Lewis Cooper",
    isVerified:false,
    reviewText : "Had an amazing experience with Alice...She is awesome in making designs. She is cooperative and make up to the mark designs exactly what I suggested. Thanks Alice. :-)",
    reviewTime:"09:10PM",
    thumbColor:"green",
    sentFromDevice:"Mobile",
    verifiedThumb : function(){
            return this.isVerified?verifiedThumbTag:"";
    }
}] ;

const setReviews = (item,index)=>{
    reviewsSection.innerHTML += ` <div class="p-6 border border-gray-500 rounded flex flex-col">
    <div class="flex flex-row justify-start items-center">
        <div class="rounded p-4 rounded-full bg-${item.thumbColor}-500 w-12 flex text-center justify-center items-center h-12"><span class="font-bold text-black">${item.userName[0]}</span></div>
        <div class="flex flex-col ml-4">
            <h1 class="text-black">${item.userName}</h1>
            <h1 class="text-gray-500 text-base -mt-1 font-semibold">${item.userOrigin}</h1>
        </div>
        ${item.verifiedThumb()}
    </div>
    <p class="text-base my-3 font-semibold text-black">
      ${item.reviewText}
    </p>
    <hr class="mt-2">
    <div class="flex flex-row justify-between items-center text-sm">
        <span class="text-gray-500 mt-2">${item.reviewTime}</span>
        <span class="text-gray-500 mt-2">Sent From ${item.sentFromDevice}</span>
    </div>
</div>`;
}
reviewData.forEach(setReviews);
console.log(reviewData);
