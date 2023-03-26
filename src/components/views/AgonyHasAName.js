import React from "react";
import Card from "../UI/Card/Card";
import classes from './Writings.module.css';

function Resurrection() {
    return (
        <Card showToggle={false} expanded={true}
            header="Agony Has a Name"
        >
            <div className={classes.stanza}>
                <p>You always take advantage of my nightmares</p>
                <p>And you smash all of my hopeless dreams.</p>
                <p>The point I am making is that nobody cares.</p>
                <p>My desolate cries become desperate screams.</p>
            </div>
            <div className={classes.stanza}>
                <p>In the midst of my agony you stand tall.</p>
                <p>You oversee the torture that you put me through.</p>
                <p>I can't take it. I need to get away from it all.</p>
                <p>Why must all of my suffering be related to you?</p>
            </div>
            <div className={classes.stanza}>
                <p>An end to your reign must be found.</p>
                <p>The torment has become too much to bear.</p>
                <p>I thought it would be ok without you around.</p>
                <p>Now that I think abou tit, I don't think you care.</p>
            </div>
            <div className={classes.stanza}>
                <p>But I care. There was something special going on.</p>
                <p>I enjoyed every moment that we had together.</p>
                <p>What I dread most is the fact that you are gone.</p>
                <p>You've drifted away like a wind-blown feather.</p>
            </div>
            <div className={classes.date}>06/17/2001</div>
        </Card>
    );
}

export default Resurrection;