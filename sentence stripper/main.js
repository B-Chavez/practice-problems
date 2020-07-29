var myNewSentence = "";
var mySecondSentence = "";
function sentenceStripper(sentence, charsToStrip){
    
    
    for(var i = 0; i < sentence.length; i++){
        
            if(sentence[i] === charsToStrip[0]){
                console.log("Removing " + sentence[i])
                
            } else {
                myNewSentence += sentence[i]                
                
            }
    }
    for(var i = 0; i < myNewSentence.length; i++){
        
        if(myNewSentence[i] === charsToStrip[1]){
            console.log("Removing " + myNewSentence[i])
            
        } else {
            mySecondSentence += myNewSentence[i]                
            
        }
}
   return mySecondSentence;  
    
}

