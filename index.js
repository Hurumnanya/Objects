// ANSWER TO NUMBER ONE QUESTION
function instagramPost(handleOfAuthor, content, imageLink, numberOfViews, numberOfLikes,){
    this.handleOfAuthor = handleOfAuthor;
    this.content = content;
    this.postImage = imageLink;
    this.numberOfViews = numberOfViews;
    this.numberOfLikes = numberOfLikes;
};

// ANSWER TO NUMBER TWO QUESTION

let felicia = new instagramPost("Felicia", 
"Hello friends!!! it's my first time being here, I'm a software engineer,nice to meet you all",
"https://www.google.com/imgres?imgurl=https%3A%2F%2Fres.cloudinary.com%2Fhighereducation%2Fimages%2Ff_auto%2Cq_auto%2Fv1662733269%2FComputerScience.org%2FGettyImages-1250639681%2FGettyImages-1250639681.jpg%3F_i%3DAA&imgrefurl=https%3A%2F%2Fwww.computerscience.org%2Fresources%2Fsoftware-developer-vs-software-engineer%2F&tbnid=ys0h40fwAeGsPM&vet=12ahUKEwjHk7zkuMv9AhX_WqQEHZmhCgAQMygFegUIARDtAQ..i&docid=2BVH0EZGNSjtqM&w=2000&h=1333&q=software%20developer&ved=2ahUKEwjHk7zkuMv9AhX_WqQEHZmhCgAQMygFegUIARDtAQ",
"500k+ views",
"385k likes"
); 
console.log (felicia);

// SECOND INSTAGRAM POST

let Reinvent = new instagramPost("Re_Invent", 
"Get your quality footwears at reinvent, a brand you can trust always",
"https://s3-eu-west-1.amazonaws.com/coliseumimages/square_a36e947908da4ce7.jpg",
"2m views",
"500k+ likes"
);
console.log(Reinvent);

// ANSWER TO NUMBER THREE QUESTION

function createPerson(name, age, location){
    return{
        Name: name,
        Age: age,
        Location: location
    }
}

let musa = createPerson("Musa", 22, "Badagry");
console.log (musa);

function createJambScores(eng, govt, lit, crk){
    return{
        ENG: eng,
        GOVT: govt,
        LIT: lit, 
        CRK: crk 
    }
}

let musaScore = createJambScores(70, 85, 82, 94);
console.log (musaScore);


// Merging musa with musaScore

Object.assign(musa, musaScore);
console.log({musa});

// ANSWER TO NUMBER FOUR QUESTION

// DIFFERENT WAYS OF CLONING AN OBJECT INCLUDES

// USING Object.assign()

let clothShop = {
    male: "Shirts",
    female: "Blowses",
    children: "Top"
};

console.log(clothShop);

console.log("USING OBJECT.ASSIGN METHOD");

let clothShop2 = Object.assign({},clothShop);
clothShop2.male = "Shirts & Trousers";
clothShop2.female = "Blowses & Skirts";
clothShop2.children = "Top & Shorts";

console.log (clothShop2);

console.log("USING SPREAD SYNTAX METHOD");

let clothShop3 = {...clothShop};
clothShop3.male = "Shirts, Polo & Trousers";
clothShop3.female = "Blowses, Gowns & Skirts";
clothShop3.children = "Top, Stockings & Shorts";

console.log (clothShop3);

console.log("USING JSON.PARSE METHOD");

let clothShop4 = JSON.parse(JSON.stringify(clothShop));
clothShop4.male = "Shirts, Polo,Shorts & Trousers";
clothShop4.female = "Blowses, Gowns, Trousers & Skirts";
clothShop4.children = "Top, Stockings, Gown & Shorts";

console.log (clothShop4);

// ANSWER TO NUMBER FIVE QUESTION

const presidentialCandidates = {
    AAC: 'Omoyele Sowore',
    ACCORD: 'Christopher Imumolen',
    APC: 'Bola Ahmed Tinubu',
    LP: 'Peter Obi',
    NNPP: 'Rabiu Kwankwaso',
    PDP: 'Atiku Abubakar',
}

for (let property in presidentialCandidates){
    console.log(presidentialCandidates[property] + " is the presidential candidate of " + property);
}
 






























 