// document.getElementById('main').addEventListener('click',function(event){
//     event.target.parentNode.removeChild(event.target);
// })

const cards = document.getElementsByClassName('card');
for(const card of cards){
    card.addEventListener('mouseover',function(){
        this.style.border="1px solid gray";
    })

    card.addEventListener('mouseout',function(){
        this.style.border="0";
    })
}