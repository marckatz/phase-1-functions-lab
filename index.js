function distanceFromHqInBlocks(dest){
    return Math.abs(dest - 42);
}

function distanceFromHqInFeet(dest){
    return distanceFromHqInBlocks(dest) * 264;
}

function distanceTravelledInFeet(start, end){
    return Math.abs(start - end)*264;
}

function calculatesFarePrice(start, end){
    const dist = distanceTravelledInFeet(start, end);
    if(dist < 400){
        return 0;
    }
    else if(dist < 2000){
        return 0.02 * (dist-400);
    }
    else if(dist < 2500){
        return 25;
    }
    else{
        return 'cannot travel that far';
    }

}