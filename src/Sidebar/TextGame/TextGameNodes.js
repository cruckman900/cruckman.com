export default [
    {
        id: 0,
        text: `Do you want to play a game?`,
        options: [
            {
                text: `Yes, please!`,
                nextText: 1
            },
            {
                text: `No thanks.`,
                nextText: 5000
            }
        ]
    },
    {
        id: 1,
        text: `You wake up and notice that you are lying in a puddle of blood in the woods.
        You hear men talking faintly a short distance away.`,
        options: [
            {
                text: `Get closer so you can hear what they are saying.`,
                nextText: 2
            },
            {
                text: `Look around for something to defend yourself with in case of trouble.`,
                nextText: 3
            }
        ]
    },
    {
        id: 2,
        text: `You attempt to get closer and are noticed. The group of men are headed your way.`,
        options: [
            {
                text: `Stay and fight!`,
                nextText: 4
            },
            {
                text: `Call out for help!!`,
                nextText: 5
            },
            {
                text: `Run like hell!!!`,
                nextText: 6
            }
        ]
    },
    {
        id: 3,
        text: `You spot a very big stick. One that could crush skulls. Do you want to pick it up?`,
        options: [
            {
                text: `Pick it up and take a few practice swings!`,
                nextText: 7
            },
            {
                text: `You weigh less than the stick. You see some nice-sized rocks and pick up a handful
                    of those instead.`,
                setState: { rocks: true },
                nextText: 8
            }
        ]
    },
    {
        id: 4,
        text: `You try to stand your ground. There are 3 men in black robes: 1 has a knife, the other 2 are empty-handed
            but look much more muscular.`,
        options: [
            {
                text: `Go for the one with the knife. If you can get the knife, you'll stand a better chance with the other 2.`,
                nextText: 9
            },
            {
                text: `Go for the biggest one! Maybe it's like prison: take out the big one, the others will leave you alone!`,
                nextText: 10
            }
        ]
    },
    {
        id: 5,
        text: `You call out for help, but there is nobody here to hear your screams. You are afraid of what is about to happen.`,
        options: [
            {
                text: `You find a bush and crawl into it, hoping to stay safe,`,
                nextText: 11
            },
            {
                text: `You keep thinking about a stick that you saw.  You decide to go back and grab it.`,
                nextText: 7
            }
        ]
    },
    {
        id: 6,
        text: `You start booking it, but they are much faster. You are feeling the pain
            from whatever happened to you before you woke up.`,
        options: [
            {
                text: `There is a large tree up ahead with a hollow trunk. Attempt to hide in it.`,
                nextText: 11
            },
            {
                text: `You don't get very far but have lost the men. You remember seeing a stick nearby. Go pick it up!`,
                nextText: 7
            }
        ]
    },
    {
        id: 7,
        text: `As you pick up the stick, you feel a great power from it. It becomes straight and narrow... 
            black and mighty with a golden dragon insignia.`,
        setState: {dragonstaff: true},
        options: [
            {
                text: `You go back to where you heard the men talking and start to approach them. 
                    They look anxious as you get closer.`,
                nextText: 12
            },
            {
                text: `You see light off in the distance, away from where the men are. You decide to go have a look.`,
                nextText: 13
            }
        ]
    },
    {
        id: 8,
        text: `You hear some noises coming from the wilderness behind you.  You feel safe with your handful of rocks.`,
        options: [
            {
                text: `Throw a rock in the direction of the noises.`,
                nextText: 14
            },
            {
                text: `You start rethinking yourself with your handful of rocks.  Something nice and heavy would make you feel safer.`,
                nextText: 15
            }
        ]
    },
    {
        id: 9,
        text: `You lunge toward the man with the knife in a furious flurry of blows and quickly subdue him.  The other 2 men 
            just watch in awe.`,
        options: [
            {
                text: `Grab the knife and square off against the other 2 men.`,
                nextText: 16
            },
            {
                text: `Look up to see the sight of the other 2 men and then turn away and walk toward the glowing light behind you.`,
                nextText: 17
            }
        ]
    },
    {
        id: 10,
        text: `You opt to go for the biggest of the 3 men.  The man in the knife seems afraid to fight, but the other 2 are looking at you
            like a piece of meat.`,
        options: [
            {
                text: `Unphased, you go for one's throat and mash him into the ground.  Not bad for a bean pole like you!  As you get up, 
                    the other guy comes at you.`,
                nextText: 18
            },
            {
                text: `Look up at the other guy, nod, and walk away to head toward the lit area of the forest around you.`,
                nextText: 19
            }
        ]
    },
    {
        id: 11,
        text: `As you lay in wait for the men in black (not the movie) to pass you by, a large, seemingly poisonous snake approaches you.`,
        options: [
            {
                text: `Attempt to communicate to the snake that you are not a threat.`,
                nextText: 20
            },
            {
                text: `Snap its neck!!!`,
                nextText: 21
            }
        ]
    },
    {
        id: 12,
        text: `Just as you get to a circlet of bushes hiding you from the men you hear talking, you contemplate your next course of action.`, 
        options: [
            {
                text: `Wait where you are and see if you can figure out what they are talking about.`,
                nextText: 2
            },
            {
                text: `Walk out behind the bushes, introduce yourself and inquire as to whether they know what happened to you.`,
                nextText: 22
            }
        ]
    },
    {
        id: 13,
        text: `As you emerge from the last line of trees and brush, you come to a small group of grass huts and huge bonfire surrounded
            by people.  Women, men, children all huddle around the fire.`,
        options: [
            {
                text: `As you approach, the group of people start to notice you as you get closer.  Introduce yourself and look non-threating.`,
                nextText: 23
            },
            {
                text: `Stay near the bushes and trees in case the tribe sees you as a direct threat.`,
                nextText: 24
            }
        ]
    },
    {
        id: 5000,
        text: `Fine then! I didn't want you to play it anyway! *pbbbbbbbbt!* >:3`,
        options: [
            {
                text: `Reset this graphically intensive game!`,
                nextText: 0
            }
        ]
    },
];