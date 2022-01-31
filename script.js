let numPage=0;
function ChangeAffichage(direction)
{
   switch (direction)
   {
       case "Left":
            numPage--;
            break;
       case "Right":
            numPage++;
            break;
   }
   if (numPage<0 ||numPage>3) //Reviens à 0 si je sort du tableaux
   {
       numPage=0;
   }
    let lesParts=[".presentation",".installation",".demonstration",".comparaison"];
    for (var unePart of lesParts){
        let part = document.querySelector(unePart);
        part.style.display="none";
    }
    document.querySelector(lesParts[numPage]).style.display="block";

    //Gestion de l'affichage à gauche 
    let menuListe = document.querySelectorAll(".navMap li")
    for(var unMenu of menuListe){
        unMenu.classList.remove("menuActif");
    }
    menuListe[numPage].classList.add("menuActif");
    //Remonte en haut de la page
    document.body.scrollTop = 0;
    document.documentElement.scrollTop = 0;
}
ChangeAffichage("Left");//Pour que l'affichage sois sur presentation au chargement de la page 

const arrowRight = document.querySelector(".arrowRight");
const arrowLeft = document.querySelector(".arrowLeft");

arrowRight.addEventListener("click",function(){
    ChangeAffichage("Right")
});
arrowLeft.addEventListener("click",function(){
    ChangeAffichage("Left")
});
//Gestion du clic sur un élément du menu 
const tabMenu = document.querySelectorAll(".navMap li")
for(let unMenu of tabMenu)
{
 unMenu.addEventListener("click",function(){
    numPage=unMenu.id
    ChangeAffichage("");
 });
}