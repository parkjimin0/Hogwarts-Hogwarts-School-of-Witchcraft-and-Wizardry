const { db } = require('./server/db');
const { green, red } = require('chalk');
const { Student, Campus } = require('./server/db/index');

const campuses = [
  {
    name: 'Gryffindor',
    imageUrl:
      'https://www.hp-lexicon.org/wp-content/uploads/2015/08/gryffindor-shield-200x0-c-default.jpg',
    address: 'Hogwarts School of Witchcraft and Wizardry',
    description:
      'With a lion as its crest and Professor McGonagall at its head, Gryffindor is the house which most values the virtues of courage, bravery and determination.',
  },
  {
    name: 'Ravenclaw',
    imageUrl:
      'https://www.hp-lexicon.org/wp-content/uploads/2015/08/shield_rav-200x0-c-default.jpg',
    address: 'Ravenhouse 30021, Indonesia',
    description: `Ravenclaws prize wit, learning, and wisdom. It's an ethos etched into founder Rowena Ravenclaw diadem: 'wit beyond measure is man's greatest treasure`,
  },
  {
    name: 'Slytherin',
    imageUrl:
      'https://images-na.ssl-images-amazon.com/images/I/71kr-BFwiTL._UX522_.jpg',
    address: 'Dantes Inferno, NY, NY',
    description:
      'Slytherin is one of the four houses of Hogwarts School of Witchcraft and Wizardry and was founded by Salazar Slytherin. Slytherins are known for being cunning and ambitious, although it is also known to have produced many Dark witches and wizards.',
  },
  {
    name: 'Hufflepuff',
    imageUrl:
      'https://cdn7.bigcommerce.com/s-ydriczk/images/stencil/1280x1280/products/88364/91134/Harry-Potter-Hufflepuff-Crest-Official-wall-mounted-cardboard-cutout-buy-now-at-star__21122.1507640936.jpg?c=2?imbypass=on',
    address: 'Address Unknown',
    description:
      'Hufflepuffs value hard work, patience, loyalty, and fair play.',
  },
];
const students = [
  {
    firstName: 'Amy',
    lastName: 'Johnson',
    email: 'amy@hogwarts.edu',
    password: 'Hogwarts',
    imageUrl: 'https://img.pokemondb.net/artwork/large/charizard-mega-y.jpg',
    gpa: 3.76,
  },
  {
    firstName: 'Elvis',
    lastName: 'King',
    email: 'elvis@hogwarts.edu',
    password: 'Hogwarts',
    imageUrl:
      'https://cdn.vox-cdn.com/thumbor/1Evq57t9d53K2iHHjc6AkWRSKGA=/0x0:1280x960/1200x800/filters:focal(538x378:742x582)/cdn.vox-cdn.com/uploads/chorus_image/image/57601275/60861120_1280x960.0.0.jpg',
    gpa: 1.12,
  },
  {
    firstName: 'Bill',
    lastName: 'Kill',
    email: 'Bill@hogwarts.edu',
    password: 'Hogwarts',
    imageUrl: 'https://img.pokemondb.net/artwork/large/charizard-mega-y.jpg',
    gpa: 2.5,
  },
  {
    firstName: 'Draco',
    lastName: 'Malfoy',
    email: 'draco@hogwarts.edu',
    password: 'Hogwarts',
    imageUrl: 'https://img.pokemondb.net/artwork/large/charizard-mega-y.jpg',
    gpa: 4.0,
  },
  {
    firstName: 'Harry',
    lastName: 'Potter',
    email: 'harry@hogwarts.edu',
    password: 'Hogwarts',
    imageUrl: 'https://img.pokemondb.net/artwork/large/charizard-mega-y.jpg',
    gpa: 1.0,
  },
];

const seed = async () => {
  await db.sync({ force: true });

  console.log(green('Seeding success!'));
  // seed your database here!
  return Student.bulkCreate(students).then(() => Campus.bulkCreate(campuses));
};

seed().catch(err => {
  console.error(red('Oh noes! Something went wrong!'));
  console.error(err);
  db.close();
});
