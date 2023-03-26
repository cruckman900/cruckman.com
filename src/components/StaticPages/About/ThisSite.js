import React from "react";
import DefaultPage from '../../UI/DefaultPage/DefaultPage';
import Card from '../../UI/Card/Card';
import lolly_tv2 from "../../../assets/images/lolly_tv2.png";

import styles from "./About.module.css";

function ThisSite() {
    return (
        <DefaultPage image={lolly_tv2} title="About This Site">
            <p>
                I've had to scour the web to find information about a lot of things on this site. The tutorial I am watching
                covers a lot of stuff, but most of the examples are tiny building blocks of a site. I'll put here things that
                I had to research to figure out.
            </p>
            <Card header="NavBar" showToggle={true} expanded={false}>
                <Card header="Routing" showToggle={false} expanded={true}>
                    <p>
                        The only decent article I could find on how to set up a NavBar with routing had everything all
                        together in one big file... the links, the routes, all of it.  Following that design, while having
                        a sidebar container had my website all sorts of messed up.  I have a top navigation menu bar, 
                        a left side container holding modules, my right side container set up to hold my page content, and
                        a footer.
                    </p>
                    <p>
                        The includes within the Routes is where the page content will be displayed.  So all bundled up with my NavBar,
                        these contents were getting rendered in the same location as my sidebar.  I had to do flips to position
                        items on the page, and as resizing the page would mess with all of these components, it became a disaster.
                    </p>
                    <p>
                        Finally, I stumbled upon a Stack Overflow article that told about how to work with the Render function of 
                        the <code className={styles.code}>react-router-dom</code> component.  It wasn't until I found this particular article that I realized that the Routes
                        could be contained separately from the Links file.
                    </p>
                    <p>
                        If you go to my GitHub repository for cruckman.com, you can take a look at the Navigation.js file and the 
                        MainContentWindow.js file to see how I implemented this.
                    </p>
                </Card>
                <Card header="Styling" showToggle={false} expanded={true}>
                    <p>
                        I am still struggling with styles on NavBar components.
                    </p>
                    <p>
                        Check out my GitHub repository to see how I implemented the styles that I DO have working.
                        Things that I still want to be able to style is the background and font color for active links, both in the
                        top level menu as well as the dropdown menu items.  Right now, I can't figure out how to change them, so 
                        they are using the default styles.  I also want to be able to change the color of the carat glyph for the 
                        dropdown buttons.
                    </p>
                </Card>
                <Card header="Active Links" showToggle={false} expanded={true}>
                    <p>
                        This characteristic has a ton of dead-end posts all over the web.  I finally found an article that discusses 
                        using <code className={styles.code}>activeKey</code> in conjunction with the relative URL to the page.  What you want to 
                        do is set your <code className={styles.code}>eventKey</code> to be the same 
                        as the link's relative path.  You import <code className={styles.code}>useLocation</code> from <code className={styles.code}>react-router-dom</code>.
                    </p>
                    <p>
                        Check my GitHub repository and look in the Navigation.js file to see how I implement these things for active links.
                    </p>
                </Card>
            </Card>
            <Card header="DropDown" showToggle={true} expanded={false}>
                <Card header="Styling" showToggle={false} expanded={true}>
                    <p>
                        This was a head-scratcher for sure.  Seemingly, you can style this object rather easily, but
                        before you publish your code, refresh the page and see if your styles stick!  I had to include
                        the term <code className={styles.code}>!important</code> to each attribute that I wanted to change to 
                        make the styles stick.
                    </p>
                    <p>
                        Check out my GitHub repository in the files related to CreativeWriting.js and its .css file for a better understanding.
                    </p>
                </Card>
            </Card>
        </DefaultPage>
    );
}

export default ThisSite;