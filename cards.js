
const shivanDragon = {
    id: 'shivan',
    name: 'Shivan Dragon',
    image: './assets/shivan.jpg',
    description: 'Flying, R: +1/+0 until end of turn.',
    category: 'Creature',
    price: 6199.99,
    color: 'red',
    mana: 6
};
const moat = {
    id: 'moat',
    name: 'Moat',
    image: './assets/moat.jpg',
    description: 'Non-flying creatures cannot attack.', 
    category: 'Enchantment',
    price: 459.90,
    color: 'white',
    mana: 4
};

const counterspell = {
    id: 'counter',
    name: 'Counterspell',
    image: './assets/counterspell.jpg',
    description: 'Counters target spell as it is being cast.',
    category: 'Creature',
    price: 399.95,
    color: 'blue',
    mana: 2
};

const darkRitual = {
    id: 'dark',
    name: 'Dark Ritual',
    image: './assets/darkRitual.jpg',
    description: 'Add 3 black mana to your mana pool.',
    category: 'Interrupt',
    price: 94.00,
    color: 'black',
    mana: 1
};

const forceOfNature = {
    id: 'force',
    name: 'Force of Nature',
    image: './assets/forceOfNature.jpg',
    description: 'Trample You must pay GGGG during upkeep or Force of Nature does 8 damage to you. You may still attack with Force of Nature even if you failed to pay the upkeep.',
    category: 'Creature',
    price: 300.00,
    color: 'green',
    mana: 6
};

export let cardList = [
    shivanDragon,
    moat,
    counterspell,
    darkRitual,
    forceOfNature
];
