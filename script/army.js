function choice () {
    var comma = new RegExp(',', 'g'),
        space = new RegExp(' ', 'g'),
        temp = getValueSoldiers().replace(comma, '').replace(space, '').split(''),
        soldiers = [],
        capacity = Number(getValueCapacity()),
        sum = 0,
        res = [],
        resNum = [],
        num = 1;

    for (var i = 0; i < temp.length - 1; i = i + 2) {
        var soldier = {number: num, wage: Number(temp[i]), baggage: Number(temp[i + 1])};
        soldiers.push(soldier);
        num++;
    }

    soldiers.sort(compareWage).sort(compareBaggage).reverse();

    for (var count = 0; count < soldiers.length; count++) {

        if(sum + soldiers[count].wage <= capacity) {

            if (count + 1 < soldiers.length && soldiers[count + 1].wage === soldiers[count].wage &&
                soldiers[count + 1].baggage >= soldiers[count].baggage) {
                sum = sum + soldiers[count + 1].wage;
                res.push(soldiers[count + 1]);
                resNum.push(soldiers[count + 1].number);
            }
            else {
                sum = sum + soldiers[count].wage;
                res.push(soldiers[count]);
                resNum.push(soldiers[count].number);
            }
        }
        else {
            continue;
        }
    }

    resNum.sort().join(',');
    document.getElementById('res').innerHTML = resNum.toString();
}


function compareWage(a, b) {
    if (a.wage < b.wage)
        return -1;
    if (a.wage > b.wage)
        return 1;
    return 0;
}

function compareBaggage(a, b) {
    if (a.baggage < b.baggage)
        return -1;
    if (a.baggage > b.baggage)
        return 1;
    return 0;
}

function getValueSoldiers() {
    return document.getElementById("sold").value;
}

function getValueCapacity() {
    return document.getElementById("capacity").value;
}
