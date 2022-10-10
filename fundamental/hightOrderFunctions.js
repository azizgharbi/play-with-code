/*
 * Regroup with key
 */

var cars = [
    {
        make: 'audi',
        model: 'r8',
        year: '2012',
    },
    {
        make: 'audi',
        model: 'rs5',
        year: '2013',
    },
    {
        make: 'ford',
        model: 'mustang',
        year: '2012',
    },
    {
        make: 'ford',
        model: 'fusion',
        year: '2015',
    },
    {
        make: 'kia',
        model: 'optima',
        year: '2012',
    },
].reduce((r, a) => {
    r[a.make] = [...(r[a.make] || []), a];
    return r;
}, {});

console.log(cars);

/*
 * split every word in array
 */

const x = `ALPRAZOLAM XANAX ANXIETY F41.1
ALPRAZOLAM XANAX DEPRESSION F33.0`;

const y = x.split('\n').flatMap((el) => el.split(' '));

console.log(y);

/*
 * Remove duplication from array
 */

const arr = [8, 1, 2, 3, 2, 1, 2, 4, 1, 5, 6, 1, 7, 2, 3];

const res = arr.reduce((all, el) => {
    if (all.indexOf(el) === -1) all.push(el);
    return all;
}, []);

console.log(res);

const result = [...new Set(arr)];

console.log(result);

/*
 * Sort with position
 */

const json = {
    'dev@be-activ-it.fr-Quiz-10': {
        id: 'dev@be-activ-it.fr-Quiz-10',
        user_id: 'dev@be-activ-it.fr',
        myposition: 2,
        points: 35,
    },
    'fbl@be-activ-it.fr-Quiz-10': {
        id: 'fbl@be-activ-it.fr-Quiz-10',
        user_id: 'fbl@be-activ-it.fr',
        myposition: 1,
        points: 38,
    },
    'ddd@be-activ-it.fr-Quiz-10': {
        id: 'ddd@be-activ-it.fr-Quiz-10',
        user_id: 'ddd@be-activ-it.fr',
        myposition: 3,
        points: 37,
    },
};

const result = Object.values(json)
    .sort((a, b) => a.myposition - b.myposition)
    .reduce((all, curr) => {
        all[curr.id] = curr;
        return all;
    }, {});

console.log(result);
