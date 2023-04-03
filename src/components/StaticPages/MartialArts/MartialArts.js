import React from "react";
import DefaultPage from "../../UI/DefaultPage/DefaultPage";

import martialarts from "../../../assets/images/martialarts.jpg";

import lollyKarate from "../../../assets/images/loly_karate.png";
import styles from './MartialArts.module.css';

function MartialArts() {
    return (
        <>
            <DefaultPage image={lollyKarate} title="Martial Arts">
                <img src={martialarts} alt="Martial Arts" className={styles.bodyImage} />
                <p>
                    I've been interested in martial arts ever since I was a young kid. Back in the '80s,
                    martial arts shows ran rampant. Since the 2nd grade, I was one of the kids that got picked
                    on by pretty much everyone. As 'getting picked on' grew into 'bullying', I frequently asked
                    my dad if I could take martial arts, and was always responded to with a resounding "No".
                </p>
                <p>
                    My first taste of martial arts was in 1993. I got accepted to attend DeVry University in Columbus, Ohio.
                    There were 2 different martial arts classes available, Tae Kwon Do (for $30/mo) and Karate (for $5/mo).  I 
                    decided to take Tae Kwon Do. That lasted only for a few months, but it was very fun to practice. I am not
                    sure how long I took martial arts there before I pretty much got kicked out of college.
                </p>
                <p>
                    My next jaunt through martial arts occurred while I was (once again) in college. This time, the school
                    was Wheeling Jesuit University (now Wheeling University). I took Judo for several months. I was very
                    excited to take this form of martial arts as it seemed to be extremely more useful in a fight than just
                    Tae Kwon Do. We learned how to throw, how to fall, and how to work on the ground *grappling*. I got injured
                    while I was taking Judo, so, for about 2 months, I was unable to do anything. When I had healed from my
                    injury and wanted to get back into the swing of things, the class had disbanded as the professor that
                    taught it had moved on to another university. Kung Fu was also offered at the university. I wish I would
                    have taken it as well!
                </p>
                <p>
                    Now, I take Karate. I've only been with it for about a month. I like it, but unlike the other 2 previous
                    encounters with martial arts that I have had, this one seems to feel a lot less 'natural'. The way you
                    stand and move while executing some of the moves contorts your body a bit, at least that is what it feels like
                    to me. I know that with time, patience, and practice, it won't feel as foreign to me. An old work buddy teaches
                    classes there. I don't know her full rank, but it is at the minimum, 4th degree black belt. I have a long road 
                    ahead of me to get that far.
                </p>
            </DefaultPage>
        </>
    );
}

export default MartialArts;