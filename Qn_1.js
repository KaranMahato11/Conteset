let url = "https://kontests.net/api/v1/all";
let response = fetch(url);
response.then((v) => {
    return v.json();
}).then((contest) => {
    console.log(contest);
    ihtml = "";

    // List of image URLs
    const imageUrls = [
        "https://cdn.mos.cms.futurecdn.net/3eSHhTo4WUYwXJUpMCxEUo.jpg",
        "https://res.cloudinary.com/highereducation/images/f_auto,q_auto/v1659635843/BestColleges.com/Bootcamp-Student-Learning-to-Code_301240e55a/Bootcamp-Student-Learning-to-Code_301240e55a.jpg",
        "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQGbWrFAq4tQeRDuyJfl52UgkHlJwxa7uozpA&usqp=CAU",
        "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTeRDvW4JnlJxE9wKHWPA0CD6o5ZTZZGmj0PA&usqp=CAU",
        "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTMdneuDIWB5nGB3NmPJskjp_kLRGAT7MSNkQ&usqp=CAU",
        "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ3wCSLN5ZDUOcGgpmFmGfKuA2zpbCzSdEHDg&usqp=CAU",
        "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSmg2Qf9k-Zp3zLASFCAXxeSvqJrSBucdbPHw&usqp=CAU",
        "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQe9e8kRfrf-gDBjRHHsYiS8qqzTg_3Q2ynVA&usqp=CAU",
        "https://images.unsplash.com/opengraph/1x1.png?auto=format&fit=crop&w=1200&h=630&q=60&mark-w=64&mark-align=top%2Cleft&mark-pad=50&blend-w=1&mark=https%3A%2F%2Fimages.unsplash.com%2Fopengraph%2Flogo.png&blend=https%3A%2F%2Fimages.unsplash.com%2Fphoto-1542831371-29b0f74f9713%3Fcrop%3Dfaces%252Cedges%26cs%3Dtinysrgb%26fit%3Dcrop%26fm%3Djpg%26ixid%3DM3wxMjA3fDB8MXxzZWFyY2h8NHx8Y29kaW5nfGVufDB8fHx8MTY4NDY4MDg5M3ww%26ixlib%3Drb-4.0.3%26q%3D60%26w%3D1200%26auto%3Dformat%26h%3D630%26mark-w%3D750%26mark-align%3Dmiddle%252Ccenter%26blend-mode%3Dnormal%26blend-alpha%3D10%26mark%3Dhttps%253A%252F%252Fimages.unsplash.com%252Fopengraph%252Fsearch-input.png%253Fauto%253Dformat%2526fit%253Dcrop%2526w%253D750%2526h%253D84%2526q%253D60%2526txt-color%253D000000%2526txt-size%253D40%2526txt-align%253Dmiddle%25252Cleft%2526txt-pad%253D80%2526txt-width%253D660%2526txt-clip%253Dellipsis%2526txt%253Dcoding%26blend%3D000000"
    ];

    // Counter for image URLs
    let imageUrlIndex = 0;

    for (item in contest) {
        console.log(contest[item]);

        // Get the current image URL
        const imageUrl = imageUrls[imageUrlIndex];
        imageUrlIndex = (imageUrlIndex + 1) % imageUrls.length;

        ihtml += `
        <div class="card mx-4 my-4" style="width: 18rem;">
            <img src="${imageUrl}" class="card-img-top" alt="...">
            <div class="card-body " >
                <h5 class="card-title">${contest[item].name}</h5>
                <p class="card-text">Status is ${contest[item].status} and site is ${contest[item].site}</p>
                <p class="card-text">In 24 Hours? ${contest[item].in_24_hours}</p>
                <p>Starts at: ${contest[item].start_time}</p>
                <p>Ends at: ${contest[item].end_time}</p>
                <a href="${contest[item].url}" class="btn btn-primary my-4">Visit Contest</a>
            </div>
        </div>
        `;
    }
    cardContainer.innerHTML = ihtml;
});



//*********** Q_N 2 *****************
let n = localStorage.getItem('note')
alert("Your note is " + n)

let a = prompt("enter your note:")
if (a) {
    localStorage.setItem("note", a)
}

let c = confirm("Do you want to delet your note?")
if(c){
    localStorage.removeItem("note")
    alert("Note deleted succesfully!");
}