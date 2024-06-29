const GreedOld = (dice: Array<number>) => {

    const findRepeat = (item: number) => {
        const result = dice.filter((elem) => elem === item)
        console.log(result);
        
    }

    findRepeat(1)
    findRepeat(2)
    findRepeat(3)
    findRepeat(4)
    findRepeat(5)
    findRepeat(6)
}


GreedOld([2,3,4,5,6])

export {};