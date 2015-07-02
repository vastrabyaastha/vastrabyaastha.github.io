---
layout: default_home
title: Exsete Home Page
---
<!--home page-->
<div class="row top-pad grey-col margin-lr-0 backgrnd-img" id="home-page">
    <div id="image-text">
        <div>
            <span id="logo-name">Exsete</span>
            <br/>
            <span id="logo-phonetics">/ˈɛksɛteɪ/</span>
            <br />
            <br />
            <span id="logo-pos">noun</span>
            <ol id="logo-def-ol">
            <li class="logo-def-li">a blend of the Latin word for "following through to the end" (exsequor), and the Greek word for excellence (arete);</li>
            <li>a technology product startup;</li>
            </ol>
        </div>
    </div>
    <div>
        <!--section 1: Freidae-->
        <a href="http://www.freidae.com" id="freidae-a-out">
            <div class="col-sm-3 section-div" id="section-1">
                <div class="sec-1 div-box-bck" id="section-sub-1">
                    <span class="text-home" id="sention-h-1">
                    Freidae
                    </span>
                    <br/>
                        <div class="text-details collapse" id="section-t-1">
                        Your personal Man Friday. Lets you focus on things you love, while taking care of the routine jobs
                        </div>
                        <img src="data/img/Freidae%20Logo.png" alt="freidae symbol" id="freidae-symbol" class="symbol"/>
                </div>
            </div>
        </a>
        <div class="col-sm-1 divider-div" id="divider-div-1"></div>
        <!--section 2: Nukkad Naatak-->
        <a href="http://www.nukkadnaatak.com" id="nukkad-a-out">
        <div class="col-sm-3 section-div" id="section-2">
            <div class="sec-1 div-box-bck" id="section-sub-2">
                <span class="text-home" id="section-h-2">
                Nukkad Naatak
                </span>
                <br/>
                <div class="text-details collapse" id="section-t-2">
                Share everyday joys with the world. Live stream your talent, experience and fun.  
                <img src="data/img/n2%20logo.png" alt="Nukkad Natak symbol" id="Nukkad-Natak-symbol" class="symbol"/>
                </div>
            </div>
        </div>
        </a>
        <div class="col-sm-1 divider-div" id="divider-div-2"></div>
        <!--section 3: Daku-->
        <a href="http://www.daku.net.in" id="daku-a-out">
            <div class="col-sm-3 section-div" id="section-3">
            <div class="sec-1 div-box-bck" id="section-sub-3">
                <span class="text-home" id="section-h-3">
                Daku
                </span>
                <br/>
                    <div class="text-details collapse" id="section-t-3">
                    Get noticed and reach out to your audience with our digital marketing services
                    </div>
                    <img src="data/img/Daku%20logo.png" alt="Daku symbol" id="Daku-symbol" class="symbol"/>
            </div>
        </div>
        </a>
    </div>
</div>
<!--contact page-->
<!--Popover for message sending-->
<div id="overlay">
    <div id="popup">
        <h4 id="sndg-msg-rchus">Sending Message<br/></h4>
        <img src="/data/img/ajax-loader.GIF" id="loading-indicator-rchus" alt="ajax loader">
        <div id="reachus_message" class="notice" data-captcha-failed="Incorrect captcha!" data-error="There was an error sending the message, please try again." data-success="Message successfully sent!"></div>
    </div>
</div>
<div class="container-fluid bakgrnd-con" id="contact-page-div">
    <a id="contact"></a>
    <!--Heading-->
    <header>
        <h3 class="heading-con">Drop Us A Message</h3>
    </header>
    <!--contact us form-->
    <div class="row margin-top">
        <div class="col-sm-6" id="form-div">
            <form role="form" method="POST"  id="form_reach_us" >
                <div class="form-group">
                    <input type="email" class="form-control" id="inputEmail" placeholder="Email" name="email" title="Enter Your Email" required/>
                </div>
                <div class="form-group">
                    <textarea class="form-control" rows="5" id="comment" placeholder="Comment" name="comment" title="Enter the content" required ></textarea>
                </div>
                <div class="form-group btn-div">
                    <button id="btn-submit" type="submit" class="btn" onclick="return false;"><span id="Button-txt" title="Click to Submit">Submit</p></button>
                </div>
            </form>
        </div>
        <!--contact us Details-->
        <div class="col-sm-6" id="contact-detail-div">
            <p class="p-details" title="Exsete Contact Details">
                <span class="cont-font-col">
                    Exsete Consulting Pvt. Ltd.
                </span><br class="hide-mobile"/><br/>
                22/139 A, Vikram Vihar<br/> 
                Lajpat Nagar IV.<br/>
                New Delhi-110024<br/>
                <span class="glyphicon glyphicon-phone-alt"></span>  Tel: +91 11 4109 7988<br/>
                <span class="cont-font-col"><span class="glyphicon glyphicon-envelope"></span>  connect@exsete.com</span> <br/>
            </p>
        </div>
    </div>
    <br/>
    <!--Footer-->
    <footer class="footer">
        <p class="cont-bottom-txt" title="Copyright Exsete">
            © 2015 by Exsete Consulting Pvt. Ltd.<br class="mobile-display"/>
            <a href="http://www.rohitsant.com">
                <span class="courtesy-sml"> Image courtesy of Rohit Sant</span>
            </a>
        </p>
    </footer>
</div>