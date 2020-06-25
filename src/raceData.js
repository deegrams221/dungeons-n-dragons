
const races = [
  {
    id: 1,
    name: 'Human',
    description: "In the reckonings of most worlds, humans are the youngest of the common races, late to arrive on the world scene and short-lived in comparison to dwarves, elves, and dragons. Perhaps it is because of their shorter lives that they strive to achieve as much as they can in the years they are given. Perhaps they feel they have something to prove to the elder races, and that’s why they build their mighty empires on the foundation of conquest and trade.  Humans are the most adaptable and ambitious people among the common races. They have widely varying tastes, morals, and customs in the many different lands where they have settled. When they settle, though, they stay: they build cities to last for the ages, and great kingdoms that can persist for long centuries. An individual human might have a relatively short life span, but a human nation or culture preserves traditions with origins far beyond the reach of any single human’s memory. They live fully in the present—making them well suited to the adventuring life—but also plan for the future, striving to leave a lasting legacy. Individually and as a group, humans are adaptable opportunists, and they stay alert to changing political and social dynamics. Humans who seek adventure are the most daring and ambitious members of a daring and ambitious race. They seek to earn glory in the eyes of their fellows by amassing power, wealth, and fame. More than other people, humans champion causes rather than territories or groups.",
    img: 'https://media.wizards.com/images/dnd/newtodnd/NEW_TO_DD_Races_Human.png'
  },
  {
    id: 2,
    name: 'Elf',
    description: "Elves live in places of ethereal beauty, in the midst of ancient forests or in silvery spires glittering with faerie light, where soft music drifts through the air and gentle fragrances waft on the breeze. Elves love nature and magic, art and artistry, music and poetry, and the good things of the world. They are more often amused than excited, and more likely to be curious than greedy. They tend to remain aloof and unfazed by petty happenstance. When pursuing a goal, however, whether adventuring on a mission or learning a new skill or art, elves can be focused and relentless. They are slow to make friends and enemies, and even slower to forget them. They reply to petty insults with disdain and to serious insults with vengeance. Elves take up adventuring out of wanderlust. Since they are so long-lived, they can enjoy centuries of exploration and discovery. They dislike the pace of human society, which is both regimented from day to day but constantly changes over decades, so they find careers that let them travel freely and set their own pace. Elves also enjoy exercising their martial prowess or gaining greater magical power, and adventuring allows them to do so. Some might join with rebels fighting against oppression, and others might become champions of just causes.",
    img: 'https://media.wizards.com/images/dnd/newtodnd/NEW_TO_DD_Races_Elf.png'
  },
  {
    id: 3,
    name: 'Dwarf',
    description: "Kingdoms rich in ancient grandeur, halls carved into the roots of mountains, the echoing of picks and hammers in deep mines and blazing forges, a commitment to clan and tradition, and a burning hatred of goblins and orcs—these common threads unite dwarves across the multiverse, the heritage of every dwarf character. Dwarves respect the traditions of their clans, tracing their ancestry back to the founding of their most ancient strongholds in the youth of the world, and do not abandon those traditions lightly. Part of those traditions is devotion to the gods of the dwarves, who uphold the dwarven ideals of industrious labor, skill in battle, and devotion to the forge. Dwarves who take up the adventuring life might be motivated by a desire for treasure—for its own sake, for a specific purpose, or even out of an altruistic desire to help others. Other dwarves are driven by the command or inspiration of a deity, a direct calling or simply a desire to bring glory to one of the dwarf gods. Clan and ancestry are also important motivators. A dwarf might seek to restore a clan’s lost honor, avenge an ancient wrong his or her clan suffered, or earn a new place within the clan after having been exiled. Or a dwarf might search for the axe wielded by a mighty ancestor, lost on the field of battle centuries ago.",
    img: 'https://media.wizards.com/images/dnd/newtodnd/NEW_TO_DD_Races_Dwarf.png'
  },
  {
    id: 4,
    name: 'Halfling',
    description: "Halflings are an affable and cheerful people. They cherish the bonds of family and friendship as well as the comforts of hearth and home, harboring few dreams of gold or glory. Even adventurers among them usually venture into the world for reasons of community, friendship, wanderlust, or curiosity. They love discovering new things, even simple things, such as an exotic food or an unfamiliar style of clothing. Though some halflings live out their days in remote agricultural communities, others form nomadic bands that travel constantly, lured by the open road and the wide horizon to discover the wonders of new lands and peoples. But even these wanderers love peace, food, hearth, and home, though home might be a wagon jostling along an old dirt road. Halflings usually set out on the adventurer’s path to defend their communities, support their friends, or explore a wide and wonder-filled world. For them, adventuring is less a career than an opportunity or sometimes a necessity.",
    img: 'https://media.dnd.wizards.com/styles/mosaic_thumbnail/public/images/mosaic/Race_Halfling.jpg'
  },
  {
    id: 5,
    name: 'Gnome',
    description: "A constant hum of busy activity pervades the warrens and neighborhoods where gnomes form their close-knit communities. Louder sounds punctuate the hum: a crunch of grinding gears here, a minor explosion there, a yelp of surprise or triumph, and especially bursts of laughter. Though gnomes love jokes of all kinds, particularly puns and pranks, they’re just as dedicated to the more serious tasks they undertake. Many gnomes are skilled engineers, alchemists, tinkers, and inventors. They’re willing to make mistakes and laugh at themselves in the process of perfecting what they do, taking bold (sometimes foolhardy) risks and dreaming large.Curious and impulsive, gnomes might take up adventuring as a way to see the world or for the love of exploring. As lovers of gems and other fine items, some gnomes take to adventuring as a quick, if dangerous, path to wealth. Regardless of what spurs them to adventure, gnomes who adopt this way of life eke as much enjoyment out of it as they do out of any other activity they undertake, sometimes to the great annoyance of their adventuring companions.",
    img: 'https://media.dnd.wizards.com/styles/mosaic_thumbnail/public/images/mosaic/NEW_TO_DD_Races_Gnome_T_140527.jpg'
  },
  {
    id: 6,
    name: 'Half-Orc',
    description: "Some half-orcs are proud chiefs of orc tribes, whose human blood gives them an edge over their full-blooded orc rivals. Some are children of the frontiers, in places where orcs and human barbarians live in uneasy balance, fighting in some seasons and trading in others. Some are desperate outcasts doing whatever it takes to get by in a world that shuns them, making a living by strength and violence. And some half-orcs are adventurers, finding a home and a family like none they’ve ever known among people who don’t care about their ancestry, only about their valor and loyalty. Orcs regard battle scars as tokens of pride and ornamental scars as things of beauty. Other scars, though, mark an orc or half-orc as a former slave or a disgraced exile. Any half-orc who has lived among or near orcs has scars, whether they are marks of humiliation or of pride, recounting their past exploits and injuries. Such a half-orc living among humans might display these scars proudly or hide them in shame. Half-orcs most often live among orcs. Of the other races, humans are most likely to accept half-orcs, and half-orcs almost always live in human lands when not living among orc tribes. Whether proving themselves among rough barbarian tribes or scrabbling to survive in the slums of larger cities, half-orcs get by on their physical might, their endurance, and the sheer determination they inherit from their human ancestry.",
    img: 'https://media.dnd.wizards.com/styles/mosaic_thumbnail/public/images/mosaic/NEW_TO_DD_Races_HalfOrc_T_140722.jpg'
  },
  {
    id: 7,
    name: 'Tiefling',
    description: "Tieflings are derived from human bloodlines, and in the broadest possible sense, they still look human. However, their infernal heritage has left a clear imprint on their appearance. Tieflings have large horns that take any of a variety of shapes: some have curling horns like a ram, others have straight and tall horns like a gazelle’s, and some spiral upward like an antelopes’ horns. They have thick tails, four to five feet long, which lash or coil around their legs when they get upset or nervous. Their canine teeth are sharply pointed, and their eyes are solid colors—black, red, white, silver, or gold—with no visible sclera or pupil. Their skin tones cover the full range of human coloration, but also include various shades of red. Their hair, cascading down from behind their horns, is usually dark, from black or brown to dark red, blue, or purple.",
    img: 'https://media-waterdeep.cursecdn.com/avatars/thumbnails/7/641/420/618/636287076637981942.png'
  },
  {
    id: 8,
    name: 'Dragonborn',
    description: "Dragonborn look very much like dragons standing erect in humanoid form, though they lack wings or a tail. The first dragonborn had scales of vibrant hues matching the colors of their dragon kin, but generations of interbreeding have created a more uniform appearance. Their small, fine scales are usually brass or bronze in color, sometimes ranging to scarlet, rust, gold, or copper-green. They are tall and strongly built, often standing close to 6½ feet tall and weighing 300 pounds or more. Their hands and feet are strong, talonlike claws with three fingers and a thumb on each hand. The blood of a particular type of dragon runs very strong through some dragonborn clans. These dragonborn often boast scales that more closely match those of their dragon ancestor—bright red, green, blue, or white, lustrous black, or gleaming metallic gold, silver, brass, copper, or bronze.",
    img: 'https://media-waterdeep.cursecdn.com/avatars/thumbnails/6/340/420/618/636272677995471928.png'
  },
  {
    id: 9,
    name: 'Half-Elf',
    description: "To humans, half-elves look like elves, and to elves, they look human. In height, they’re on par with both parents, though they’re neither as slender as elves nor as broad as humans. They range from under 5 feet to about 6 feet tall, and from 100 to 180 pounds, with men only slightly taller and heavier than women. Half-elf men do have facial hair, and sometimes grow beards to mask their elven ancestry. Half-elven coloration and features lie somewhere between their human and elf parents, and thus show a variety even more pronounced than that found among either race. They tend to have the eyes of their elven parents.",
    img: 'https://media-waterdeep.cursecdn.com/avatars/thumbnails/6/481/420/618/636274618102950794.png'
  },
  {
    id: 10,
    name: 'Aarakocra',
    description: "From below, aarakocra look much like large birds. Only when they descend to roost on a branch or walk across the ground does their humanoid appearance reveal itself. Standing upright, aarakocra might reach 5 feet tall, and they have long, narrow legs that taper to sharp talons. Feathers cover their bodies. Their plumage typically denotes membership in a tribe. Males are brightly colored, with feathers of red, orange, or yellow. Females have more subdued colors, usually brown or gray. Their heads complete the avian appearance, being something like a parrot or eagle with distinct tribal variations.",
    img: 'https://media-waterdeep.cursecdn.com/avatars/thumbnails/7/622/420/618/636286750209394240.png'
  },
  {
    id: 11,
    name: 'Genasi',
    description: "As rare beings, genasi might go their entire lives without encountering another one of their kind. There are no great genasi cities or empires. Genasi seldom have communities of their own and typically adopt the cultures and societies into which they are born. The more strange their appearance, the harder time they have. Many genasi lose themselves in teeming cities, where their distinctiveness hardly raises an eyebrow in places accustomed to a variety of different people.",
    img: 'https://media-waterdeep.cursecdn.com/avatars/thumbnails/7/630/420/618/636286776277352504.png'
  },
  {
    id: 12,
    name: 'Goliath',
    description: "Among goliaths, any adult who can’t contribute to the tribe is expelled. A lone goliath has little chance of survival, especially an older or weaker one. Goliaths have little pity for adults who can’t take care of themselves, though a sick or injured individual is treated, as a result of the goliath concept of fair play. A permanently injured goliath is still expected to pull his or her weight in the tribe. Typically, such a goliath dies attempting to keep up, or the goliath slips away in the night to seek the cold will of fate. In some ways, the goliath drive to outdo themselves feeds into the grim inevitability of their decline and death. A goliath would much rather die in battle, at the peak of strength and skill, than endure the slow decay of old age. Few folk have ever meet an elderly goliath, and even those goliaths who have left their people grapple with the urge to give up their lives as their physical skills decay. Because of their risk-taking, goliath tribes suffer from a chronic lack of the experience offered by long- term leaders. They hope for innate wisdom in their leadership, for they can rarely count on a wisdom grown with age.",
    img: 'https://media-waterdeep.cursecdn.com/avatars/thumbnails/7/620/420/618/636286749289682134.png'
  },
  {
    id: 13,
    name: 'Orc of Exandria',
    description: "Orcs are one of Exandria's youngest races, and are said to have been born from elves seared by the blood of Gruumsh, the Ruiner. From the Explorer's Guide to Wildemount.",
    img: 'https://www.aidedd.org/dnd/images/orc.jpg'
  },
  {
    id: 14,
    name: 'Leonin',
    description: "Nomadic, lion-like humanoids who rarely interact with other peoples, having all they need in their shimmering homeland. From the Mythic Odysseys of Theros.",
    img: 'https://media.wizards.com/images/magic/daily/features/feat263c_taebubsbau.jpg'
  },
  {
    id: 15,
    name: 'Satyr',
    description: "Satyrs embody a fusion of huminoid civilization with the freedom of wild beasts. From the Mythic Odysseys of Theros.",
    img: 'https://media.comicbook.com/2020/06/satyr-dnd-1223653-1280x0.jpeg'
  },
  {
    id: 16,
    name: 'Aasimar',
    description: "Aasimar are placed in the worlds to serve as gaurdians of law and good. Their patrons expect them to strike at evil, lead by example, and further the cause of justice. From Volo's Guide to Monsters.",
    img: 'https://vignette.wikia.nocookie.net/forgottenrealms/images/9/9d/Aasimar-5e.png/revision/latest?cb=20180614210534'
  },
  {
    id: 17,
    name: 'Bugbear',
    description: "Bugbears feature in the nightmare tales of many races - great, heary beasts that creep through the shadows as quiet as cats. From Volo's Guide to Monsters.",
    img: 'https://media-waterdeep.cursecdn.com/avatars/thumbnails/0/221/255/315/636252765234633232.jpeg'
  },
  {
    id: 18,
    name: 'Firbolg',
    description: "Firbolg tribes cloister in remote forest strongholds, preferring to spend their days in quiet harmony with the woods. From Volo's Guide to Monsters.",
    img: 'https://vignette.wikia.nocookie.net/forgottenrealms/images/7/79/Firbolg-5e.jpg/revision/latest/scale-to-width-down/350?cb=20180623050202'
  },
  {
    id: 19,
    name: 'Goblin',
    description: "Goblins occupy an uneasy place in a dangerous world, and they react by lashing out at any creatures they believe they can bully. From Volo's Guide to Monsters.",
    img: 'https://media-waterdeep.cursecdn.com/avatars/thumbnails/0/351/218/315/636252777818652432.jpeg'
  },
  {
    id: 20,
    name: 'Hobgoblin',
    description: "War is the lifeblood of hobgoblins. Its glories are the dreams that inspire them. Its horrors don't feature in their nightmares. From Volo's Guide to Monsters.",
    img: 'https://media-waterdeep.cursecdn.com/avatars/thumbnails/0/389/267/315/636252781431932597.jpeg'
  },
  {
    id: 21,
    name: 'Kenku',
    description: "Haunted by an ancient crime that robbed them of their wings, the kenku wander the world as vagabonds and burglars who live at the edge of human society. From Volo's Guide to Monsters.",
    img: 'https://vignette.wikia.nocookie.net/forgottenrealms/images/0/04/Kenku-5e.png/revision/latest/scale-to-width-down/350?cb=20171010191131'
  },
  {
    id: 22,
    name: 'Kobold',
    description: "Typically timid and shy away from conflict, but they are dangerous and vicious if cornered. From Volo's Guide to Monsters.",
    img: 'https://media-waterdeep.cursecdn.com/avatars/thumbnails/0/379/233/315/636252780450300625.jpeg'
  },
  {
    id: 23,
    name: 'Lizardfolk',
    description: "Lizardfolk possess an alien and inscrutable mindset, their desires and thoughts driven by a different set of basic principles than those of warm-blooded creatures. From Volo's Guide to Monsters.",
    img: 'https://vignette.wikia.nocookie.net/forgottenrealms/images/5/57/Lizardfolk_mm5e.jpg/revision/latest/scale-to-width-down/350?cb=20170915185539'
  },
  {
    id: 24,
    name: 'Orc',
    description: "Orcs live a life that has no place for weakness, and every warrior must be strong enough to take what is needed by force. From Volo's Guide to Monsters.",
    img: 'https://vignette.wikia.nocookie.net/forgottenrealms/images/4/43/Orc-5e.jpg/revision/latest/scale-to-width-down/350?cb=20171010153900'
  },
  {
    id: 25,
    name: 'Tabaxi',
    description: "Hailing from a strange and distant land, wandering tabaxi are catlike humanoids driven by curiosity to collect interesting artifacts, gather tales and stories, and lay eyes on all the world's wonders. From Volo's Guide to Monsters.",
    img: 'https://vignette.wikia.nocookie.net/forgottenrealms/images/a/a2/Tabaxi-5e.jpg/revision/latest/scale-to-width-down/347?cb=20170131190820'
  },
  {
    id: 26,
    name: 'Triton',
    description: "Long-established guardians of the deep ocean floor, in recent years the noble tritons have become increasingly active in the world above. From Volo's Guide to Monsters.",
    img: 'https://vignette.wikia.nocookie.net/forgottenrealms/images/7/72/Triton-5e.jpg/revision/latest?cb=20190930164813'
  },
  {
    id: 27,
    name: 'Yuan-ti Pureblood',
    description: "The serpent creatures known as yuan-ti are all that remains of an ancient, decadent human empire. From Volo's Guide to Monsters.",
    img: 'https://vignette.wikia.nocookie.net/forgottenrealms/images/5/59/Yuan-ti_Pureblood-5e.png/revision/latest/scale-to-width-down/228?cb=20171011135901'
  },
  {
    id: 28,
    name: 'Tortle',
    description: "What many tortles consider a simple life, others might call a life of adventure. They are nomad survivalists eager to explore the wilderness. From The Tortle Package.",
    img: 'https://vignette.wikia.nocookie.net/forgottenrealms/images/7/72/Tortle-5e.png/revision/latest/scale-to-width-down/350?cb=20170928140158'
  },
  {
    id: 29,
    name: 'Changeling',
    description: "A changeling can shift its face and form with a thought as a form of artistic and emotional expression. From Eberron: Rising from the Last War.",
    img: 'https://media-waterdeep.cursecdn.com/avatars/7743/442/637093220264157986.jpeg'
  },
  {
    id: 30,
    name: 'Kalashtar',
    description: "The kalashtar are a compound people created from the union of humanity and renegade spirits from the plane of dreams. From Eberron: Rising from the Last War.",
    img: 'https://i.pinimg.com/originals/b2/fb/49/b2fb494fc0191ad574093f60bb04339b.png'
  },
  {
    id: 31,
    name: 'Orc of Eberron',
    description: "Thousands of years before humans came to Khorvaire, the land was dominated by wild orcs and goblinoids of the Dhakaani Empire. From Eberron: Rising from the Last War.",
    img: 'https://vignette.wikia.nocookie.net/forgottenrealms/images/4/43/Orc-5e.jpg/revision/latest/scale-to-width-down/350?cb=20171010153900'
  },
  {
    id: 32,
    name: 'Shifter',
    description: "Sometimes called weretouched. They are humanoids with a bestial aspect. From Eberron: Rising from the Last War.",
    img: 'https://media-waterdeep.cursecdn.com/avatars/thumbnails/7744/800/420/618/637093441069438573.png'
  },
  {
    id: 33,
    name: 'Warforged',
    description: "Warforged are made from wood and metal, but they can feel pain and emotion. Built as weapons, they must now find a purpose beyond war. From Eberron: Rising from the Last War.",
    img: 'https://media-waterdeep.cursecdn.com/attachments/thumbnails/7/608/350/437/warforgy.png'
  },
  {
    id: 34,
    name: 'Gith',
    description: "Long ago, the gith rose up to overthrow the mind flayers that held them in servitude, but two factions arose that remain bitter enemies today. From Mordenkainen's Tome of Foes.",
    img: 'https://i.pinimg.com/originals/ee/63/22/ee63227843d0ac43ca7dd2eefec177d0.png'
  },
  {
    id: 35,
    name: 'Centaur',
    description: "The upper bodies of centaurs are comparable to human torsos in size, and their lower equine bodies average about 4 feet tall at eh withers. They fill similar roles as cavalry warriors, messengers, outriders, and scouts. From Guildmasters' Guide to Ravnica.",
    img: 'https://articles.edhrec.com/wp-content/uploads/2019/01/Nikya.RNA_.jpg'
  },
  {
    id: 36,
    name: 'Loxodon',
    description: "Humanoid elephants, loxodons are strong, calm, and wise. From Guildmasters' Guide to Ravnica.",
    img: 'https://i.redd.it/iuvupxypf9d41.jpg'
  },
  {
    id: 37,
    name: 'Minotaur',
    description: "The minotaurs of Ravinica are strong in body, dedication, and courage. They are at home in the battlefield, willing to fight for their various causes. From Guildmasters' Guide to Ravnica.",
    img: 'https://media-waterdeep.cursecdn.com/attachments/thumbnails/5/0/850/624/c107.png'
  },
  {
    id: 38,
    name: 'Simic Hybrid',
    description: "The Simic Combine uses magic to transfer the traits of animals into humans, elves, and vedalken. From Guildmasters' Guide to Ravnica.",
    img: 'https://vignette.wikia.nocookie.net/d-n-d5e/images/0/0b/Simic_Hybrid.png/revision/latest/scale-to-width-down/340?cb=20191116222426'
  },
  {
    id: 39,
    name: 'Vedalken',
    description: "The blue-skinned vedalken strive for perfection above all else. From Guildmasters' Guide to Ravnica.",
    img: 'https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcQftvb_Oq_j2FjotM6ZeRzEMTcVUR49daLHWw&usqp=CAU'
  },
  {
    id: 40,
    name: 'Verdan',
    description: "The verdan owe their existence to chaos - doing their best to find their way in an unfamiliar world. From Acquisitions Incorporated.",
    img: 'https://vignette.wikia.nocookie.net/forgottenrealms/images/8/88/Verdan-5e.jpg/revision/latest?cb=20190811111038'
  },
  {
    id: 41,
    name: 'Locathah',
    description: "These resilient and proud fish-folk have endured war, slavery, and mistreatment at the hands of other aquatic creatures. From Locathah Rising.",
    img: 'https://vignette.wikia.nocookie.net/forgottenrealms/images/0/00/Locathah-5e.jpg/revision/latest?cb=20190625051141'
  },
  {
    id: 42,
    name: 'Grung',
    description: "Your grung character has an assortment of inborn abilities, part and parcel or grung nature. From One Grung Above.",
    img: 'https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcS0svWneX8IzIb6kk64cXlDa8HsEirsJi4ToA&usqp=CAU'
  }
];

export default races;