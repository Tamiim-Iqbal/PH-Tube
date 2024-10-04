function getTimeString(time) {
    //get Hour and rest seconds
    const hour = parseInt(time / 3600);
    if(hour >= 24)
    {
        const day = parseInt(hour / 24);
        if(day >= 365)
        {
            const year = parseInt(day / 365);
            const remainingDay = (day % 365);
            const extraDay = parseInt(remainingDay);
            return `${year} years ${extraDay} days ago`;
        }     
        else
        {
            const remainingHour = (hour % 24);
            const extraHour = parseInt(remainingHour);
            return `${day} days ${extraHour} hours ago`;
        }       
        
    }
    else
    {
        let remainingSecond = time % 3600;
        const minute = parseInt(remainingSecond / 60);
        return `${hour} hours ${minute} min ago`;
    }
   
  }


const loadVideos = () => {
  fetch("https://openapi.programming-hero.com/api/phero-tube/videos")
    .then((response) => response.json())
    .then((data) => displayVideos(data.videos))
    .catch((error) => console.error(error));
};

const displayVideos = (videos) => {
  const videoContainer = document.getElementById("videos");

  // console.log(categories);
    videos.forEach((video) => {
    console.log(video);

    // create card
    const card = document.createElement("div");
    card.classList = "card card-compact";

// const cardDemo = {
//   category_id: "1001",
//   video_id: "aaad",
//   thumbnail: "https://i.ibb.co/f9FBQwz/smells.jpg",
//   title: "Smells Like Teen Spirit",
//   authors: [
//     {
//       profile_picture: "https://i.ibb.co/k4tkc42/oliviar-harris.jpg",
//       profile_name: "Oliver Harris",
//       verified: true,
//     },
//   ],
//   others: {
//     views: "5.4K",
//     posted_date: "1672656000",
//   },
//   description:
//     "'Smells Like Teen Spirit' by Oliver Harris captures the raw energy and rebellious spirit of     youth. With over 5.4K views, this track brings a grunge rock vibe, featuring powerful guitar riffs and compelling vocals. Oliver's verified profile guarantees a quality musical journey that resonates with fans of dynamic, high-energy performances.",
// };

    card.innerHTML = `
    <figure class="h-56 rounded-lg relative">
        <img class="h-full w-full object-cover" src="${video.thumbnail}" 
        />
        ${video.others.posted_date?.length == 0 ? "" : `<span class="absolute right-3 bottom-2 bg-gray-800 text-xs rounded text-white px-2 py-1">${getTimeString(video.others.posted_date)}</span>`}
        
    </figure>

    <div class="px-0 py-3 flex gap-4">
        <div>
            <img class="w-10 h-10 rounded-full object-cover" src=${video.authors[0].profile_picture} />
        </div>

        <div>
            <h2 class="font-bold">${video.title}</h2>
                <div class="flex items-center gap-2">
                    <p class="text-sm text-gray-400 mb-2">${video.authors[0].profile_name}</p>

                    ${video.authors[0].verified == true? `<img class="w-5" src="https://img.icons8.com/?size=96&id=D9RtvkuOe31p&format=png"/>`: ""}
                </div>
        </div>  
    </div>
    <p class="text-xs"> <button  onclick="loadDetails('${video.video_id}')" class="btn btn-sm btn-error">details </button> </p>
    `;
    videoContainer.append(card);
  });
};

loadVideos();
