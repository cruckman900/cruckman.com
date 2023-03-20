const textNodes = [
    {
        id: 0,
        text: `Do you want to play a game?`,
        options: [
            {
                text: `Yes, please!`,
                requiredState: null,
                nextText: 1
            },
            {
                text: `No thanks.`,
                requiredState: null,
                nextText: 0
            },
            {
                text: null
            },
            {
                text: null
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
                requiredState: null,
                nextText: 2
            },
            {
                text: `Look around for something to defend yourself with in case of trouble.`,
                requiredState: null,
                nextText: 3
            }
        ]
    },
    {
        id: 2,
        text: `You attempt to get closer and are noticed. The group of men are headed your way.`,
        options: [
            {
                text: `Stay and fight`,
                requiredState: null,
                nextText: 4
            },
            {
                text: `Call out for help`,
                requiredState: null,
                nextText: 5
            },
            {
                text: `Run like hell!`,
                requiredState: null,
                nextText: 6
            }
        ]
    }
];

export default textNodes