// var navMenuAnchorTabs = document.querySelectorAll('.nav-menu a');

// for(var i=0; i< navMenuAnchorTabs.length; i++)
// {
//     navMenuAnchorTabs[i].addEventListener('click', function()
//     {
//        event.preventDefault();
       
//        var targetSectionID = this.textContent.trim().toLowerCase();
//        var targetSection = document.getElementById(targetSectionID);
//        console.log(targetSection);
//      interval = setInterval(function(){


//         coordinate = targetSection.getBoundingClientRect();
//         console.log(coordinate);
//         if(coordinate.top <= 0)
//         {
//             clearInterval(interval);
//             return;
//         }
//         else if(coordinate.top < 66.984375)
//        {
//         clearInterval(interval);
//         return;
//        } 
      
       
//         window.scrollBy(0,50);
       
        

//      }, 20);
     

//     });
// }

// scrolling skill section

progress = document.querySelectorAll('.skill-progress > div');
skillContainer = document.getElementById('skills-container')
window.addEventListener('scroll', chechkkScroll);
animationDone = false;

function initailBars()
{
    for(let bar of progress)
    bar.style.width = 0 + '%';

}
initailBars();

function fillBars()
{
    for(let bar of progress)
    {
        let targerwidth = bar.getAttribute('data-bar-width');
        let currentwidth = 0;
        let interval = setInterval(function(){
            if(currentwidth > targerwidth)
            {
                clearInterval(interval);
                return;

            }
            currentwidth++;
            bar.style.width = currentwidth + '%';

        },5);
    }


}


function chechkkScroll(){
    coordinate = skillContainer.getBoundingClientRect();
    if(!animationDone && coordinate.top <= window.innerHeight)
    {
        animationDone = true;
        console.log("skill is visible");
        fillBars();

    }
    else if(coordinate.top > window.innerHeight)
    {
     animationDone = false;
     initailBars();
    }
}


function myfun(a)
{
    if(a=='cal')
    {
    window.location = 'calculator/cal.html';
    }
    else if(a=='tiktak')
    {
    window.location = 'tiktak/index.html';
    }
    else if(a=='counter')
    {
    window.location = 'counter/counter.html';
    }
    else if(a=='bootstrap')
    {
    window.location = 'bootstrap/index.html';
    }
    else if(a=='restra')
    {
    window.location = 'restaurant/restchegg.html';
    }
}