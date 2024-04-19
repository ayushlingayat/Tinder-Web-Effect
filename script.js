//get the data 
let users = [
    {
        profilePic : "https://images.unsplash.com/photo-1530092285049-1c42085fd395?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTh8fHNwcmluZ3xlbnwwfHwwfHx8MA%3D%3D",
        displaypic:"https://images.unsplash.com/photo-1541216970279-affbfdd55aa8?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTJ8fHdvbWFuJTIwbW9kZWxzJTIwYmxhY2t8ZW58MHx8MHx8fDA%3D",
        pendingMessage : 4,
        location: "Noida , India",
        Name : "Ayushi",
        age:23,
        interest: [{
            icon : `<i class="ri-music-2-fill text-white"></i>`,
            interest :'music'
        },{
            icon : `<i class="ri-quill-pen-fill text-white"></i>`,
            interest :'writing'
        }],
        bio:"Lorem, ipsum dolor sit amet consectetur adipisicing elit. ",
        isFriend : null
    },
    {
        profilePic :"https://images.unsplash.com/photo-1523996381875-89483b0c2eca?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTF8fGZsb3dlciUyMHdoaXRlfGVufDB8fDB8fHww",
        displaypic:"https://images.unsplash.com/photo-1595781277164-ace075847115?q=80&w=1887&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
        pendingMessage : 3,
        location: "Bhopal , India",
        Name : "Shivangi",
        age:25,
        interest: [{
            icon : `<i class="ri-music-2-fill text-white"></i>`,
            interest :'music'
        },{
            icon : `<i class="ri-quill-pen-fill text-white"></i>`,
            interest :'writing'
        }],
        bio:"Lorem, ipsum dolor sit amet consectetur adipisicing elit. Similique facilis natus quas.",
        isFriend : null
    },
    {
        profilePic :"https://images.unsplash.com/photo-1534528741775-53994a69daeb?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NHx8d29tYW4lMjBtb2RlbHN8ZW58MHx8MHx8fDA%3D",
        displaypic:"https://images.unsplash.com/photo-1628015081036-0747ec8f077a?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Nnx8Z2lybHxlbnwwfHwwfHx8MA%3D%3D",
        pendingMessage : 6,
        location: "Madhya Pradesh , India",
        Name : "Nishi",
        age:21,
        interest: [{
            icon : `<i class="ri-music-2-fill text-white"></i>`,
            interest :'music'
        },{
            icon : `<i class="ri-quill-pen-fill text-white"></i>`,
            interest :'writing'
        }],
        bio:"Lorem, ipsum dolor sit amet consectetur adipisicing elit. ",
        isFriend : null
    },
    {
        profilePic : "https://images.unsplash.com/photo-1519699047748-de8e457a634e?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTF8fGdpcmwlMjBibGFja3xlbnwwfHwwfHx8MA%3D%3D",
        displaypic:"https://images.unsplash.com/photo-1512310604669-443f26c35f52?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTR8fHdvbWFuJTIwbW9kZWxzfGVufDB8fDB8fHww",
        pendingMessage : 2,
        location: "Aurangabad , India",
        Name : "Amruta",
        age:22,
        interest: [{
            icon : `<i class="ri-music-2-fill text-white"></i>`,
            interest :'music'
        },{
            icon : `<i class="ri-quill-pen-fill text-white"></i>`,
            interest :'writing'
        }],
        bio:"Lorem, ipsum dolor sit amet consectetur adipisicing elit. Similique facilis natus quas.",
        isFriend : null
    }
];

function select(elem){
    return document.querySelector(elem);
}


let curr = 0;
let isAnimating = false;

let setInitial = (function setInitial(){
    select('.maincard img').src = users[curr].displaypic;
    select('.incomingcard img').src = users[curr+1]?.displaypic;

    select(".prflimg img").src = users[curr].profilePic;
    select(".badge h5").textContent = users[curr].pendingMessage;
    select(".location h3").textContent = users[curr].location;

    select('.name h1:nth-child(1)').textContent = users[curr].Name;
    select('.name h1:nth-child(2)').textContent = users[curr].age;


    let clutter ="";
    users[curr].interest.forEach(function(interest){
        clutter += `<div class="tag flex items-center gap-3 bg-white/30 px-3 py-1 rounded-full">
        ${interest.icon}
        <h3 class="text-3xl tracking-tight text-white text-sm capitalize">${interest.interest}</h3>
    </div>`;
    })

    select('.tags').innerHTML = clutter;
    select('.bio p').textContent =users[curr].bio;
    curr = 2;
})();

function imageChange(){
    
    if(!isAnimating){
        isAnimating = true;
        let tl = gsap.timeline({
            onComplete : function(){
                isAnimating = false;
              let main = select('.maincard');
              let incoming = select('.incomingcard');
    
    
              incoming.classList.remove("z-[2]");
              incoming.classList.add("z-[3]");
              incoming.classList.remove("incomingcard");
    
              main.classList.remove("z-[3]");
              main.classList.add("z-[2]");
    
              gsap.set(main ,{
                scale:1,
                opacity:1
              })
    
              if(curr === users.length) curr = 0;
              select('.maincard img').src = users[curr].displaypic;
              curr++;
              main.classList.remove("maincard");
              incoming.classList.add("maincard");
              maincard.classList.add("incomingcard");
    
            }
        });
        tl.to(".maincard" ,{
            scale: 1.1,
            opacity:0,
            ease:Circ,
            duration:.9
    
        },"a").from(".incomingcard" ,{
            scale: .9,
            opacity:0,
            ease:Circ,
            duration:1.1
    
        },"a");
    
        
    };
    }
    

    let deny = select('.deny');
    let accept = select('.accept');

    deny.addEventListener('click' , ()=>{
        imageChange();
    })

let container = (function containerCreator(){
    document.querySelectorAll(".element").forEach((element)=>{
        let div = document.createElement("div");
        div.classList.add(`${element.classList[1]}container` , "overflow-hidden");
        // console.log(div)
        div.appendChild(element)
        select(".details").appendChild("div");
    })
})();


gsap.from(".details .element" , {
    y: "100%",
    opacity:0,
    stagger:.1,
    ease:Power4.easeInOut,
    duration:1
})



setInitial();
containerCreator();