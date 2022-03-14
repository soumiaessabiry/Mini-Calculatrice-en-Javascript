// -------------- for variable globale---------------//
   var barraffich=document.getElementById("barreaffichage");
   var nbrdechar;  //nombre de caractaire sisire sur barr d'affichage.
   var dernierechar; //stocker le derniree caractaire sisire
   var charavantdernier;//stocker le caractaire avant derniree caractaire sisire
   var charavantdernier=barraffich.value.substring(nbrdechar-2,nbrdechar-1);
   var oper=['+','-','*','/','.'];
   var premierechar=  barraffich.value ;
   var conteurpoint=0;
   var valeur = barraffich.value; 
   var contoper=0;

// ----------------------------------- for functions-----------------------------------------------------//
    //1- function pour afficher le nombre de chaque inpute =number=>afficher le caracteresur screen://nbr paramaitre de function  
        function number(nbr){ 
            barraffich.value +=nbr;
            nbrdechar=barraffich.value.length;//calcule le nbre des caracraire taper sur l'ecrent 
            dernierechar=nbr;
            affcharavantdernier();//derniere char
            verificationchar();//char avant derniere
            evitcompopert();
            evitdivsur();
            doublepoint() ;
            dbpointavecoper();
            operation();
        }
    //2- function supprimer pour supprimer le contenu de barre d'affichage =s=>supprier le contenu de screen://spr paramaitre de function.  
        function supbaff(c){
             barraffich.value ="";
            // suppbaraffparclic();
            // doublepoint()
            conteurpoint=0;
            // supcharparchar();
            contoper=0;
           
        }
    //3- Function de calcule:
        function operation(){
            barraffich.value=eval(barraffich.value);
        }
    // 4- function pour afficher le carataire  avant dernire qui saisie actuelmemt : 
        function affcharavantdernier(){
            charavantdernier=barraffich.value.substring(nbrdechar-2,nbrdechar-1);
            // console.log("derniere char :"+dernierechar);
            // console.log("avnat derniere char :"+charavantdernier);
        }
    // function pour faire un comparison entre le dernirer char et avant le derniere char  
        function verificationchar(){
            if(oper.includes(dernierechar) && oper.includes(charavantdernier)){
                if (dernierechar==charavantdernier) {
                    supdoboper();
                }else{ 
                    supencoperation();
                }
            }
        }
    // function pour supprimer si en trouve deux operation au meme temp[++ -- ..;]
        function supdoboper() {
            barraffich.value=barraffich.value.substring(0,nbrdechar-1);
            // alert("suppen meme type");
            
        }
    // function  qui enregistre la derniere operation et supprimer lenciene operation 
        function supencoperation(){
            barraffich.value=barraffich.value.slice(0,nbrdechar-2)+barraffich.value.slice(nbrdechar-1);
           
        }
    // eviter de commencer par une operation
        function evitcompopert() {
            premierechar=barraffich.value.slice(0);//afficher le premiere caractaire
            // console.log(" le pemiere char et :"+premierechar);
            nbrdechar=barraffich.value.length;
            //  console.log(" le caractaire :"+nbrdechar);
            if (nbrdechar==1 && oper.includes(premierechar) ) {
                // barraffich.value=barraffich.value.substring(nbrdechar);
                barraffich.value=document.getElementById("barreaffichage").innerHTML="Désolé Nous ne pouvons pas commencer par une operation ";
            }
        }
    // eviter de diviser sur 0
        function evitdivsur() {
            if (dernierechar==0 && charavantdernier=='/' ) {
                //barraffich.value=barraffich.value.substring(nbrdechar);
                // document.getElementById("barreaffichage").innerHTML="Désolé... Nous ne pouvons pas diviser par zéro";
                barraffich.value=document.getElementById("barreaffichage").innerHTML="Désolé...Nous ne pouvons pas diviser par zéro";
            }
       }
    // eviter d'eviter double point :
        function doublepoint(){
            if (dernierechar=='.') {
                conteurpoint++;
                console.log("conteurpoint"+conteurpoint);
                if ( dernierechar=='.' && conteurpoint!=1 ) {
                    barraffich.value = barraffich.value.substring(0,  barraffich.value.length - 1);
                console.log("supp .");
                
                }  
            }  
        }
    // eviter d'eviter double point avec operation :
        function dbpointavecoper(){
            if((dernierechar=="+"||dernierechar=="-"||dernierechar=="*"||dernierechar=="/")){
                conteurpoint=0;
            }
        }   
    //supprimer char par char  
        function supcharparchar(){
            if (supbaff) {
                barraffich.value = barraffich.value.substring(0,  barraffich.value.length - 1);
            }
    }
   