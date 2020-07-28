var myNewSentence = "";
var x = 0;
function sentenceStripper(sentence, charsToStrip){
    
    for(var i = 0; i < sentence.length; i++){
        
            if(sentence[i] === charsToStrip[x]){
                console.log(sentence[i])
                
            } else {
                myNewSentence += sentence[i]                
                
            }
    }
    x++
}



