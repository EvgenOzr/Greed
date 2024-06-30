const Greed = (dice: number[]) : number => {

    let totalScore = 0;
    let repeat = 0

    const otherNumbers = (elem: number) => {
        if(elem === 1) totalScore += 100;
        if(elem === 5) totalScore += 50;
    }

    const findRepeat = (item: number) => {
        const result = dice.filter((elem) => elem === item)
        if (result.length >= 3) {
            return item;
        } else {
            return null;
        }

    }

    for(let i = 1; i < 7; i++) {
        let score = findRepeat(i);
        if(score === 1){
            totalScore += 1000;
            repeat = 1;
        }else if(score === 2){
            totalScore +=200;
            repeat = 2;
        }else if(score === 3){
            totalScore +=300;
            repeat = 3;
        }else if(score === 4){
            totalScore +=400;
            repeat = 4;
        }else if(score === 5){
            totalScore +=500;
            repeat = 5;
        }else if(score === 6){
            totalScore +=600;
            repeat = 6;
        }
    }
    
    if (repeat === 0) {
        dice.forEach((elem) => otherNumbers(elem))
    } else {
        let counter = 0;
        dice.forEach((elem) => {
            if (counter === 3) {
                otherNumbers(elem) 
            } else {
                if(elem === repeat) {
                    counter++;
                }else {
                    otherNumbers(elem)  
                }
            }
        })
    }

    return totalScore;

}

export default Greed;