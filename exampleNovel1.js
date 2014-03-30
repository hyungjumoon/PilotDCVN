var preload = [
  "hero_prisoner.png","guard.png","executioner.png","death.png","dad.png", "mom.png"
];

var preloadObj = new Array(preload.length);
for (var i = 0; i < preload.length; i++)
{
    preloadObj[i] = new Image();
    preloadObj[i].src = preload[i];
}

/* Declare variables for characters, positions, and text blocks here */
var script; // this variable will hold your script
var hero;
var soldier;
var executioner;
var mom;
var dad;
var n; // short for "narrator"
var photo;
var textBlock;
var shopkeeper;
var pirategirl;
var captain;
var shopkeeper2;
var senex;
var stella;
var goddess;

var leftSide;
var rightSide;
var upperCenter;
var rightTop;
var offScreen;
var leftCenter;
var rightCenter;

var audio;
/*
    This function must exist, and must have this name
*/
function prepareNovel()
{
    novel.imagePath = "images/"; // path to your image directory
    novel.audioPath = "audio/"; // path to your audio directory
    
    // initialize your characters, positions, and text blocks here
    hero = new Character("Hero", {color: "rgb(64, 204, 64)"});
    soldier = new Character("Soldier", "rgb(64, 204, 64)");
    executioner = new Character("Executioner", "rgb(64, 204, 64)");
    death = new Character("Death", "rgb(64, 204, 64)");
    dad = new Character("Dad", "rgb(64, 204, 64)");
    mom = new Character("Mom", "rgb(64, 204, 64)");
	shopkeeper = new Character("Shopkeeper", {color: "rgb(50, 205, 50)"});
    pirategirl = new Character("Pirate Girl", {color: "rgb(50, 205, 50)"});
    captain = new Character("Captain", {color: "rgb(50, 205, 50)"});
    shopkeeper2 = new Character("Shopkeeper2", {color: "rgb(50, 205, 50)"});
    senex = new Character("Old Man", {color: "rgb(50, 205, 50)"});
    stella = new Character("Stella", {color: "rgb(50, 205, 50)"});
    goddess = new Character("Life Goddess", {color: "rgb(100, 100, 255)"});
	n = new Character("");
    
    leftSide = new Position(0, .75, 0, 1);
    rightSide = new Position(800, 450, 1, 1);
    upperCenter = new Position(0.5, 0.3, 0.5, 0.5);
    rightTop = new Position(1, 0.1, 1, 0);
    offScreen = new Position(50, .5,0,0);
    leftCenter = new Position(150, 0.75, 0, 1);
    rightCenter = new Position(650, 0.75, 0, 1);
    
    photo = new Character("");  
    lionText = new TextBlock("myText");
    
    // and put your script commands into this array
    script = [
        //scene1
    	label, "start",
        scene, "black4.png",
        audio, {src:"heartofcourage", format:["mp3"], loop:true, action:"play"},
        n, "You open your eyes and see that you are in a line near an executioner, waiting to be beheaded.",
        n, "You have no idea who you are or where you are.",
        hero, {image: "hero_prisoner.png", position: leftSide},
        hero, "Who am I? Why am I here?",
        soldier, {position: rightSide, image: "guard.png"},
        soldier, "Move along, prisoner!",
        scene, "scene2.jpg",
        label, "menu1a",
        menu, [
            "What do you do?",
            "Fight the soldier and escape.", [jump, "fight1"],
            "Move along.", [jump, "move1"],
        ],
        
        label, "fight1",
        n, "You try knock out the soldier and escape.",
        soldier, "Argggggh!",
        jump, "forest1",
        
        label, "move1",
        scene, "scene2.jpg",
        hero, {visibility: "visible"},
        executioner, {image: "executionor.png", position: rightSide},
        executioner, "Stay, still prisoner, accept your punishment!",
        n,"Suddenly, time seems to freeze and a mysterious pale man in a black hood with a sycthe appears.",
        executioner, {visibility: 'hidden', position: offScreen},
        death, {image: "death.png", position: rightSide},
        death, "Do you want to live?",

        label, "menu1b",
        menu, [
            "How do you respond?",
            "You look really sketchy!", [jump, "death1"],
            "Yes, I want to live.", [jump, "transition1"],
        ],
        
 		label, "death1",
 		n, "You died, what a shame",
 		jump, "Death1",
        
 		label, "transition1",
 		scene, "black4.png",
        n,"You black out and somehow you end up in a forest",
        jump,"forest1",
        
        label, "forest1",
        scene, "scene3.png",
        audio, {src:"tos", format:["mp3"], loop:true, action:"play"},
        n, "You are in the forest alone.",
        n, "You see a stream, and you choose to follow it.",
        n, "After a long time you see a waterfall. You settle down and wash your face in the river.",
        hero,{visibility: 'hidden', position: offScreen},
        jump, "temp68",
        
        label, "temp68",
		scene, "black4.png",
        audio, {src:"lacie", format:["mp3"], loop:true, action:"play"},
		n, "When the cold water hits, you see a powerful flashback.",
		jump, "scene4",
        
		label, "scene4",
        scene, "scene4.png",
        dad,{image: "dad.png", position: rightSide},
        mom,{image: "mom.png", position: leftSide},
        n, "It is you, and people who you assume are your family.",
        
        label, "temp67",
		scene, "black4.png",
		n, "You return to your senses.",
        jump, "town1",
        n, "You see town nearby",
        
		
		//scene 2
		label, "menu2a",
		label, "town1",
		scene, "town1.png",
        audio, {src:"firsttown", format:["mp3"], loop:true, action:"play"},
		n, "You enter the town. Inside, you see a town hall, a fountain, shops, and an inn.",
		menu, [
			"Which do you choose to visit?",
			"Town Hall", [jump, "Town Hall2"],
			"Fountain", [jump, "Fountain2"],
			"Shop", [jump, "Shop2"],
			"Inn", [jump, "Inn2"],
		],
		
		label, "Town Hall2",
		scene, "town hall.png",
		n, "Nobody appears to be inside. You return outside.",
		jump, "menu2a",
	
		label, "Fountain2",
		scene, "fountain2.png",
		n, "A few children are playing around the fountain. There seems to be nothing of interest here. You return to where you came from.",
		jump, "menu2a",
		
		label, "Shop2",
		scene, "shop2.png",
		hero,{visibility: 'visible', position: leftSide},
		shopkeeper, {image: "shopkeeper.png",position: rightSide},
		shopkeeper, "Leave this place... If you don't have money, you aren't wanted.",
		jump, "menu2a",
		
		label, "Inn2",
		scene, "inn2.png",
		n, "The owner is absent. There are a stack of maps on one of the tables. You pick one up.",
		jump, "Map2",
		
		label, "Map2",
		scene, "map.png",
		n, "The map is displayed. You notice that you appear to be at Mu Lung Garden.",
		jump, "temp2",
		
		label, "temp2",
		scene, "black4.png",
		n, "Seeing the map triggers another memory.",
		jump, "hometown3",
		    
		label, "hometown3",
		scene, "hometown3.png",
		n, "You see a beautiful countryside landscape.",
		n, "It seems oddly familiar, as if you grew up there.",
		n, "And yet you can't seem to remember anything else.",
		n, "You see beautiful fields in the background and sunflowers in the foreground.",
		n, "Nonetheless, you cannot locate this place on the map.",
		jump, "temp66",
		
		label, "temp66",
		scene, "black4.png",
		n, "You return to your senses.",
        jump, "leaving2",
		
		label, "leaving2",
		scene, "inn2.png",
		n, "You decide to leave the empty inn and exit.",
		jump, "exiting2",
		
		label, "exiting2",
		scene, "town1.png",
		n, "You leave the town behind and continue on your journey.",
		jump, "menu3a",
		
		//scene 3
		label, "menu3a",		
		scene, "Road3.png",
        audio, {src:"lithharbor", format:["mp3"], loop:true, action:"play"},
		menu, [
			"The road forks into two paths. Which do you choose?",
			"Go North", [jump, "North3"],
			"Go South", [jump, "South3"],
		],
		
		label, "North3",
		scene, "Cliffs3.png",
		hero, {visibility: "visible"},
		n, "There are large cliffs ahead. It is impossible to continue forwards.",
		n, "You decide to turn back around.",
		jump, "menu3a",
		
		
		      
		label, "South3",
		scene, "Desert3.png",
		hero, {visibility: "visible"},
		n, "A giant desert looms ahead. You walk into it and see giant ships sailing through the desert-sea.",
		n, "None of them will stop for a straggler. After walking through the desert for a long time you see a mirage.",
		jump, "temp65",
		
		label, "temp65",
		scene, "black4.png",
		n, "The mirage causes you to see another flashback.",
        jump, "Mirage3",
		
		label, "Mirage3",
		scene, "scene4.png",
		dad,{image: "DeadDad.png", position: leftSide},
        mom,{image: "DeadMom.png", position: rightSide},
        audio, {src:"hopevsdespair", format:["mp3"], loop:true, action:"play"},
		n, "This is your family. Your mother and your father. Everybody is lying on the floor and covered in blood.",
		n, "You black out.",
		jump, "temp64",
		
		label, "temp64",
		scene, "black4.png",
		n, "You slowly wake up.",
        jump, "ship4",
		
		//scene4
		label, "ship4",
		scene, "ship4.png",
		audio, {src:"hesapirate", format:["mp3"], loop:true, action:"play"},
		dad,{visibility: 'hidden', position: offScreen},
        mom,{visibility: 'hidden', position: offScreen},
        hero, {visibility: 'visible', position: leftSide},
		pirategirl, {image: "pirategirl.png", position: rightSide},
		n, "You wake up on a ship. There is a girl staring at you.",
		pirategirl, "Hello, I am a sailor working as a pirate on this horrid ship.",
		pirategirl, "The work is hard but they pay is fair. Our captain told us to rescue you, and wants to talk to you.",
		jump, "temp63",	
		
		label, "temp63",
		scene, "black4.png",
		n, "She takes you to the captain.",
        jump, "room4",
		
		label, "room4",
		scene, "caproom4.png",
        hero, {visibility: "visible"},
		captain, {image: "captain.png",position: rightSide},
		n, "The captain eyes you wearily.",
		captain, "'You are from that family.'",
		audio, {src:"witsend", format:["mp3"], loop:true, action:"play"},
		hero, "'...I do not understand. I have forgotten all but bits of my past.'",
		n, "Disgusted, the captain orders you to be thrown off the ship.",
		jump, "shipagain4",
		
		label, "shipagain4",
		scene, "ship4.png",
		audio, {src:"bloodritual", format:["mp3"], loop:true, action:"play"},
        hero, {visibility: "visible"},
        pirategirl, {visibility: "visible"},
		pirategirl, "I greatly pity your circumstances. Would you like me to help?",
		menu, [
			"Do you want to accept the pirate girl's help?",
			"Yes", [jump, "yes4"],
			"No", [jump, "no4"],
		],
		//shiranui #2
		label, "no4",
		scene, "desert3.png",
        hero, {visibility: "visible"},
		n, "You are thrown into the desert and die a slow painful death alone.",
		jump, "Death1",

		label, "yes4",
		scene, "ship4.png",
		audio, {src:"upisdown", format:["mp3"], loop:true, action:"play"},
        hero, {visibility: "visible"},
        pirategirl, {visibility: "visible"},
		n, "The pirate girl hides you in a barrel until the next stop.",
		jump, "dark4",
		
		label, "dark4",
		scene, "black4.png",
		n, "She smuggles you off the ship in the barrel.",
		n, "Shortly after, the captain finds discovers her act and kicks her off the ship with you.",
		jump, "town4a",

		label, "town4a",
		audio, {src:"withmyfriends", format:["mp3"], loop:true, action:"play"},
		scene, "town4.png",
        hero, {visibility: "visible"},
        pirategirl, {visibility: "visible"},
		pirategirl, "Well, it was about time for me to leave that dump anyways.",
		n, "You see a shop that sells a variety of wares.",
		pirategirl, "Would you like to get some less tattered clothes?",
		n, "You thank her profusely for her help and graciously accept her request.",
		jump, "shop4",
		
		label, "shop4",
		scene, "shop4.png",
        hero, {visibility: "visible"},
        shopkeeper2, {image: "shopkeeper2.png", position: rightSide},
		n, "You choose a pair of comfortable and fashionable yet utilitarian clothes.",
		menu, [
			"Would you like to ask the shopkeeper about your past?",
			"Yes", [jump, "yes5"],
			"No", [jump, "no5"],
		],
      	
   	 	label, "yes5",
      	scene, "shop4.png",
        hero, {visibility: "visible", image: "heroCool.png", position: leftSide},
        shopkeeper2, {visibility: "visible"},
      	n, "You give the shopkeeper a description of your hometown, and ask if he can identify the location.",
      	shopkeeper2, "Unfortunately I cannot deduce anything from your description alone. But do not despair, I am sure you will find your home.",
      	jump, "street5",
      
   		label, "no5",
      	scene, "shop4.png",
        hero, {visibility: "visible", image: "heroCool.png", position: leftSide},
        shopkeeper2, {visibility: "visible"},
      	n, "You exit the shop after Pirate Girl purchases the clothes.",
      	jump, "street5",
      
   		label, "street5",
      	scene, "street5.png",
        hero, {visibility: "visible"},
        pirategirl, {visibility: "visible"},
      	pirategirl, "You should not give up. Keep moving forwards, you are bound to find your home. And perhaps your travels will help you get your memory back as well.",
      	pirategirl, "However, I cannot go on, I must move in my life and you must continue in yours.",
      	pirategirl, "My friend is looking for a traveling companion to Shioshishio.",
      	n, "You accept her request, and she finds her friend, Stella. You part your ways.",
      	jump, "forest6",
      	
      	//scene 6
      	label, "forest6",
         scene, "forest6.png",
		audio, {src:"tenderfeeling", format:["mp3"], loop:true, action:"play"},
         stella, {image:"stella.png", position: rightSide},
         hero, {visibility: "visible"},
         stella, {visibility: "visible"},
         n, "Another forest appears. You become better friends with Stella. At the end of the forest you reach a real sea.",
         jump, "sea6",
          
         label, "sea6",
         scene, "sea6.png",
         hero, {visibility: "visible"},
         stella, {visibility: "visible"},
         n, "You arrive at a port town. You enter a harbor. There are three islands you may travel to.",
         jump, "menu6",
         
         label, "menu6",
         menu, [
            "Which island do you want to travel to?",
            "Ereve", [jump, "Ereve6"],
            "Rien", [jump, "Rien6"],
            "Victoria Island", [jump, "Vic6"],
         ],
         
        label, "Ereve6",
         hero, {visibility: "visible"},
         stella, {visibility: "visible"},
         n, "You obtain armor from a local shop.",
         n, "You do not sense any flashbacks.",
         stella, "Does this island does not trigger any memories? If not, we should try a different location.",
         jump, "menu6",
         
         label, "Rien6",
         hero, {visibility: "visible"},
         stella, {visibility: "visible"},
         n, "You obtain weapons from a local shop.",
         n, "You do not sense any flashbacks.",
         stella, "Does this island does not trigger any memories? If not, we should try a different location.",
         jump, "menu6",
         
         label, "Vic6",
         hero, {visibility: "visible"},
         stella, {visibility: "visible"},
         n, "This place seems familiar! It does not trigger any flashbacks, but you can almost feel the land calling to you.",
         hero, "I remember this place!",
         jump, "victoria island7",
      	
         //senex
      	label, "victoria island7",
      	scene, "VictoriaIsland.png",
      	hero, {visibility: "visible"},
      	senex, {image:"oldman.png", position: rightSide},
      	n,"While seperated from Stella, you meet an old man.",
      	senex, "Wait..... You're that.......!",
		audio, {src:"bloodyrabbit", format:["mp3"], loop:true, action:"play"},
      	n, "The old man charges you knife.",
      	menu, [
			"What do you do?",
			"Kill the Old Man", [jump, "kill7"],
			"Dodge the knife", [jump, "dodge7"],
		],

		label, "kill7",
		scene, "VictoriaIsland.png",
		hero, {visibility: "visible"},
		n,"You kill the old man and get blood all over your hands",
		jump, "flashback7",

		label, "dodge7",
		scene, "VictoriaIsland.png",
		hero, {visibility: "visible"},
		senex, {visibility: "visible"},
		n, "You dodge the old man's attack, who trips and faints. However, he manages to scratch and your blood drips onto your hand",
		jump, "flashback7",
		
		label, "flashback7",
		scene, "bloodyhands.png",
		audio, {src:"thousandknocks", format:["mp3"], loop:true, action:"play"},
		n, "You see the scene with your dead parents again, but this time, you also see your bloody hands, along with the horrible feeling you killed them.",
		jump, "victoria8", 
		
		//placeholder
		label, "victoria8",
		scene, "VictoriaIsland.png",
		
		
		
		label, "victoria8",
		scene, "VictoriaIsland.png",
		hero, {visibility: "visible"},
		stella, {visibility: "visible"},
		audio, {src:"horntail", format:["mp3"], loop:true, action:"play"},
		scene, "black4.png",
		hero, {visibility: "visible"},
		stella, {visibility: "visible"},
		n,"You suddently collapse after the horrible memory.",
		scene, "VictoriaIsland.png",
		hero, {visibility: "visible"},
		stella, {visibility: "visible"},
		stella, "Are you okay! You suddenly collapsed!",
		hero, "Huff, Huff......",
		hero, "I had a memory about my parents......",
		hero, "About their death......",
		hero, "But in this memory......",
		hero, "I killed them.",
		stella, "What? Don't be ridiculous....",
		hero, "My hands were stained with their blood. I killed them.",
		hero, "But why......",
		hero, "I'll go to my home. Maybe I'll find a clue there.",
		
		jump, "crater",
		
		//crater
		label, "crater",
		scene, "crater.png",
		audio, {src:"partingsong", format:["mp3"], loop:true, action:"play"},
		hero, {visibility: "visible"},
		stella, {visibility: "visible"},
		n, "Suddenly, upon seeing the remains of his home, the hero collapses, suddenly remembering everything",
		scene, "black4.png",
		hero, "I remember everything....",
		stella, "What?",
		hero, "I killed them. I killed them both.",
		hero, "My parents believed the world beyond hope",
		hero, "They sought to destroy the world by making a contract with death",
		hero, "But to make such a contract, they needed to sacrifice a village",
		hero, "I found them about to finish the ritual and to destroy the world",
		hero, "I stopped them both by absorbing the power of Death into myself.....",
		hero, "But I lost control and killed my parents and destroyed my town.",
		hero, "In my despair, I erased my own memories.",
		hero, "But luckily......", 
		hero, "Wait.......",
		hero, "You're.........",
		stella, "You remembered.......",
		jump, "finale",
		
		label, "finale",
		scene, "templeoftime.png",
		audio, {src:"stormandfire", format:["mp3"], loop:true, action:"play"},
		hero, {visibility: "visible"},
		n, "You are suddenly teleported to the Temple of Time",
		hero, "Where am I? How did I get here?",
		goddess, {image: "goddess.png", position: rightSide},
		goddess, "Stella teleported you here upon my orders.",
		hero, "Why, what have I done? Who are you?",
		goddess,"I am goddess of life, and you are the enemy of all creation. You are the living incarnation of death. Neither can live while the other survives",
		goddess,"If you die, you will grant eternal blessing to all living creatures. If I die, all life will be reduced to void.",
		menu, [
			"WHAT DO YOU DO?",
			"Kill the Goddess", [jump, "BADENDING"],
			"Sacrifice Yourself", [jump, "OTHERBADENDING"],
		],
		
		label, "BADENDING",
		scene, "black4.png",
		n, "The world fades to darkness.",
		death, {visibility: "visible"},
		n, "And death revels in the suffering of the world.",
		jump, "Death1",
		
		label, "OTHERBADENDING",
		scene, "black4.png",
        audio, {src:"unjustlife", format:["mp3"], loop:false, action:"play"},
        audio, {src:"aquaterrarium", format:["mp3"], loop:true, action:"play"},
		n, "As the light fades away, you think to yourself",
		hero, "It is a far, far better thing that I do, than I have ever done; it is a far, far better rest that I go to than I have ever known.",
		jump, "Death1",
		
		label, "Death1",
		scene, "end.png",
    ];
}
