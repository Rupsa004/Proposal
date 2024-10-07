const all=document.querySelector('.all');
const question=document.querySelector('.question');
const yesbtn=document.querySelector('.yesbtn');
const nobtn=document.querySelector('.nobtn');
const gif=document.querySelector('.gif')

const allRect= all.getBoundingClientRect();
const nobtnRect= nobtn.getBoundingClientRect();

yesbtn.addEventListener('click',()=>{
    question.innerHTML= 'I love you to <i class="fa-regular fa-heart"></i>';
    gif.src='https://i.pinimg.com/originals/c1/06/bf/c106bf4eb19f7bb86969b8d8a9178ffd.gif'
});

nobtn.addEventListener('mouseover',()=>{
    question.innerHTML='Whyyyyyyyy?plsss <i class="fa-regular fa-face-sad-cry"></i>'
    gif.src="https://i.pinimg.com/originals/f3/78/4d/f3784dc54de78b85eac662dc55ba64aa.gif"
    const i= Math.floor(Math.random()*(allRect.width - nobtnRect.width))+1;
    const j= Math.floor(Math.random()*(allRect.height - nobtnRect.height))+1;
    
    nobtn.style.left =i+'px';
    nobtn.style.top=j+'px';

});
