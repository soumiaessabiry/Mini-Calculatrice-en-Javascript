
// -------------- for variable globale---------------//
   var barraffich=document.getElementById("barreaffichage");
   var nbrdechar;  //nombre de caractaire sisire sur barr d'affichage.
   var dernierechar; //stocker le derniree caractaire sisire
   var charavantdernier;//stocker le caractaire avant derniree caractaire sisire

   

// -------------- for function simple---------------//
      //1- function pour afficher le nombre de chaque inpute =number=>afficher le caracteresur screen://nbr paramaitre de function  
    function number(nbr){ 
        barraffich.value +=nbr;
        nbrdechar=barraffich.value.length;
        dernierechar=nbr;
        charavantdernier=dernierechar.value;
        console.log( "derniere char :"+dernierechar);
        // console.log( "charavantdernier char :"+charavantdernier);


     }
      //2- function supprimer pour supprimer le contenu de barre d'affichage =s=>supprier le contenu de screen://spr paramaitre de function.  
function supbaff(c){
    barraffich.value="";
}
    //3- Function de calcule:
    function operation(){
        barraffich.value=eval(barraffich.value);
    }
// -------------- for function complex---------------//
    // 4- sauvgarde les nbrs saisire dans la barre de screen: 


