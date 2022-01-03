setInterval( async() => {
    let charsToBurn = selectedForAction.get('augmentWCharBurnedChars').size;
    if (charsToBurn) {
        getAugmentCost(charsToBurn);
    }
}, 1000)

setInterval( async() => {
    let tpsToBurn = selectedForAction.get('augmentTransponders').size;
    let capsulesToBurn = selectedForAction.get('augmentCapsules').size;
    if (tpsToBurn && capsulesToBurn) {
        if (tpsToBurn == capsulesToBurn) {
            getAugmentWithMatsCost(tpsToBurn);
        }
    }
}, 1000)