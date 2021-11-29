
let clickedCard = null;

function onCardClicked(e){
    const target=e.currentTarget;
    
    if(
        target === clickedCard ||
        target.className.includes('done')
    ) {
        return;
    }

    target.className=target.className
        .replace('color-hidden', '')
        .trim();
        target.className +=' done';
        
    
    if(!clickedCard){
//ako nismo kliknuli karticu, pratiti je, prikazati boju
        clickedCard=target;
    } else if(clickedCard){
//ako smo vec kliknuli karticu, proeriti da li se nova koju otvorimo poklapa sa starom
        if(clickedCard.getAttribute('data-color') !== 
        target.getAttribute('data-color'))
        {
            console.log('cards not equal');
            setTimeout(() => {
                console.log("we are here!");
                clickedCard.className =
                clickedCard.className.replace('done', '').trim() +
                ' color-hidden';
                target.className = 
                target.className.replace('done', '').trim() +
                ' color-hidden';
                clickedCard=null;
            }, 500);
        }else{
            clickedCard=null;
        }
    }
}