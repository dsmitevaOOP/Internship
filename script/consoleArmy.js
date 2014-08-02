function choice (c, arr) {
    var capacity = c,
        i = 0,
        soldiers = [],
        res = [],
        resNum = [],
        sum = 0;

    while (arr[i][0] !== 0) {
        var soldier = {number: i, wage: arr[i][0], baggage: arr[i][1]};
        soldiers.push(soldier);
        i++;
    }

    soldiers.sort(compareWage).sort(compareBaggage).reverse();

    for (var count = 0; count < soldiers.length; count++) {

        if(sum + soldiers[count].wage <= capacity) {

            if (count + 1 < soldiers.length && soldiers[count + 1].wage === soldiers[count].wage && soldiers[count + 1].baggage >= soldiers[count].baggage) {
                sum = sum + soldiers[count + 1].wage;
                res.push(soldiers[count + 1]);
                resNum.push(soldiers[count + 1].number + 1);
            }
            else {
                sum = sum + soldiers[count].wage;
                res.push(soldiers[count]);
                resNum.push(soldiers[count].number + 1);
            }
        }
        else {
            continue;
        }
    }

    resNum.sort().join(',');
    console.log(resNum);
}

function compareWage(a,b) {
    if (a.wage < b.wage)
        return -1;
    if (a.wage > b.wage)
        return 1;
    return 0;
}

function compareBaggage(a,b) {
    if (a.baggage < b.baggage)
        return -1;
    if (a.baggage > b.baggage)
        return 1;
    return 0;
}

choice(5, [[1,1], [2,2], [2, 6], [2,3], [2,7], [2,5], [0]]);

