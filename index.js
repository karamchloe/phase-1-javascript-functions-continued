function saturdayFun(activity = "roller-skate"){
        return `This Saturday, I want to ${activity}!`

}
saturdayFun("I want to bathe my dog!")

function mondayWork(activity = "go to the office"){
   return `This Monday, I will ${activity}.`
}
mondayWork("work from home.")


function wrapAdjective(asterisk){
    return function innerFunc(adjective ="special"){
        return `You are ${asterisk}${adjective}${asterisk}!`
    }
}

let highlight = wrapAdjective("*");
let fullSentence = highlight("a hard worker")

let emphasize = wrapAdjective("||")
let newSentence = emphasize("a dedicated programmer")