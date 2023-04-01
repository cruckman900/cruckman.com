import React from "react";
import DefaultPage from '../../UI/DefaultPage/DefaultPage';
import Card from '../../UI/Card/Card';
import lolly_tv2 from "../../../assets/images/lolly_tv2.png";

import styles from "./About.module.css";

function ThisSite() {
    return (
        <DefaultPage image={lolly_tv2} title="About This Site">
            <p>
                This website is completely coded from scratch (sorta - I'm not building things that aren't available from React itself).  
                I am learning ReactJS and building a website from the ground up as I learn React from a course on 
                Udemy <a href="https://www.udemy.com/course-dashboard-redirect/?course_id=1362070" className={styles.link} alt="Udemy Course" target="_blank" rel="noreferrer">
                    React - The Complete Guide (incl Hooks, React Router, Redux)
                </a>.
            </p>
            <p>
                All of the pages on this site are currently static 'html' in files.  I will soon be converting the site to be a little more data-driven.  That 
                is a little way down the road yet.
            </p>
            <p>
                I've had to scour the web to find information about a lot of things on this site. The tutorial I am watching
                covers a lot of stuff, but most of the examples are tiny building blocks of a site. I'll put here things that
                I had to research to figure out.
            </p>
            <Card header="404 error on browser refresh" showToggle={true} expanded={false}>
                <Card header=".htaccess" showToggle={false} expanded={true}>
                    <p>
                        I put this issue off for a while.  I'd google for the fix, but never tried to implement it until now.
                        The first "fix" I found was an anwer to a person having the problem.  His answer did say that you need
                        to add to (or create a new file) .htaccess file a few lines of code.  I tried this using his code and my site stopped
                        loading.  I googled again, this time adding 2023 to my query.  I found a similar result, but with
                        different code in the .htaccess file he posted.  This code worked for me.  There were no other tasks that
                        I had to perform for it to work.  My site is hosted on a server that uses CPanel.  Going to post the .htaccess
                        code you need if you want to try to use this solution below.
                    </p>
                    <p>
                        <code className={styles.code}>
                            RewriteEngine On<br />
                            RewriteCond %{"{DOCUMENT_ROOT}%{REQUEST_URI}"} -f [OR]<br />
                            RewriteCond %{"{DOCUMENT_ROOT}%{REQUEST_URI}"} -d<br />
                            RewriteRule ^ - [L]<br />
                            <br />
                            RewriteRule ^ /index.html [L]
                        </code>
                    </p>
                </Card>
            </Card>
            <Card header="NavBar" showToggle={true} expanded={false}>
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
                        Things that I still want to be able to style is the <s>background and font color for active links, both in the
                        top level menu as well as the dropdown menu items</s>.  Right now, I can't figure out how to change them, so 
                        they are using the default styles.  I also want to be able to <s>change the color of the carat glyph for the 
                        dropdown buttons</s>.
                    </p>
                    <p>
                        I am slowly solving styling of navbar and other components inside it.  Some can be solved using other elements
                        to wrap text in, but some of the things that I wanted to fix are the carets for navdropdown, styles for
                        active menu items, etc.  I was able to finally get these to work by adding the compiled class names in my index.css
                        file.  So, go to my Github project and check that stuff out!
                    </p>
                </Card>
            </Card>
            <Card header="Dropdown" showToggle={true} expanded={false}>
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
                <Card header="Dropdown Direction" showToggle={false} expanded={true}>
                    <p>
                        I didn't have to look too hard for this, but it was a fix that I didn't think about when designing the menu system.
                        Look at what my app looks like in landscape mode on a smart phone, the About menu would expand normally, but was 
                        badly chopped off at the right edge of the screen.  Setting the <code className={styles.code}>drop</code> direction 
                        to <code className={styles.code}>start</code> now has the dropdown loading off to the before the dropdown link instead
                        of directly below it.  No more cutoff menu options!  Check here for this and other options available to you for 
                        Dropdown items <a href="https://react-bootstrap.github.io/components/dropdowns/" className={styles.link} alt="Components/Dropdowns" target="_blank" rel="noreferrer">Components/Dropdowns</a>
                    </p>
                    <p>
                        Check out my GitHub repository for Navigation.js to see this in code.
                    </p>
                </Card>
            </Card>
            <Card header="WaveSurfer implementation" showToggle={true} expanded={false}>
                <Card header="Noob to Pro (kinda)" showToggle={false} expanded={true}>
                    <p>
                        I wanted to implement a waveform for my audio files for a while, but for a long time, I just had a button that would
                        change text from 'Play' to 'Pause', and that was it.  Then, I happened across this Medium article,
                        <a href="https://medium.com/trackstack/simple-audio-waveform-with-wavesurfer-js-and-react-ae6c0653b240" className={styles.link} alt="WaveSurfer" target="_blank" rel="noreferrer">Wavesurfer.js and React</a>
                    </p>
                    <p>
                        First thing that I did was change from styled components to normal components.  This worked well except for the actual waveform component.
                        The application needs to append child elements to the div inside the component.  Instead of figuring out how to make that possible,
                        I just made a standard div with id 'waveform' in my js file.  A small hurdle was being able to access that div in the rest of the code.  I figured
                        out how to access it using <code className={styles.code}>useRef</code>.
                    </p>
                    <p>
                        Another hurdle was trying to duplicate the code from the link above, but instead of making a class-based component, I made mine with
                        a function-based component.  So, I had to use <code className={styles.code}>useState and useEffect</code> alot.  Also, I wanted to
                        be able to perform other operations on my waveform, like loading another song into it.  Also, the sample that I was using as 
                        reference didn't handle anything after the song was over.  I wanted to have the play/pause button switch state, and I wanted to
                        start the wave back at the beginning of the song after it played all the way through.  I did this by simply reloading the component
                        altogether... simple fix.
                    </p>
                    <p>
                        The documentation for WaveSurfer can be found at 
                        <a href="https://wavesurfer-js.org/" className={styles.link} alt="WaveSurfer.js" target="_blank" rel="noreferrer">WaveSurfer Website</a>
                    </p>
                    <p>
                        There are a few components that I added to my UI folder for this, but the meat and potatoes is in a file called Waveform.js inside of my
                        Music folder.  Have a look in my GitHub repository.
                    </p>
                </Card>
            </Card>
        </DefaultPage>
    );
}

export default ThisSite;