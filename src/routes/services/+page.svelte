<svelte:head>
    <link rel="stylesheet" href="css/services.css">
</svelte:head>

<script>
    let personalTrainingEmail = "mailto:jake@breakthroughfitco.com?subject=Personal%20Training%20Session%20Inquiry&body=Hey%21%0A%0AMy%20name%20is%20%28NAME%29%2C%20and%20I%27m%20interested%20in%20your%20Personal%20Training%20Sessions.%0AMy%20goals%20are%20%28GOALS%29.%0AThe%20days%20and%20times%20that%20would%20work%20best%20for%20me%20are%20%28DAYS%20AND%20TIMES%29.%0AIf%20you%20would%20like%20to%20talk%2C%20my%20phone%20number%20is%20%28NUMBER%29.%0A%0AI%20look%20forward%20to%20hearing%20from%20you%21"
    let igniteEmail = "mailto:jake@breakthroughfitco.com?subject=IGNITE%20Inquiry&body=Hey%21%0A%0AMy%20name%20is%20%28NAME%29%2C%20and%20I%27m%20interested%20in%20your%20IGNITE%20Program.%0AMy%20goals%20are%20%28GOALS%29.%0AThe%20spots%20that%20would%20work%20best%20for%20me%20are%20%28DAYS%20AND%20TIMES%29.%0AIf%20you%20would%20like%20to%20talk%2C%20my%20phone%20number%20is%20%28NUMBER%29.%0A%0AI%20look%20forward%20to%20hearing%20from%20you%21"
</script>

<div id="servicesBanner">
    <h1>Services</h1>
</div>
<div id="CAS">
    <h4>Commit. Achieve. Succeed.</h4>
    <p>There is no good or bad, strong or weak. There is only you, as you are today, and where you are going. Through consistency, you will start to achieve. And those achievements will create your success story. Begin your journey, no fear, no looking back, only forward.</p>
</div>
<div id="services" class="centerBox" style="margin-bottom: 0;">
    <div class="service">
        <div class="serviceTop">
            <img loading="lazy" alt="" src="Pictures/personalTraining.webp">
            <h4>Personal Training</h4>
            <p>
                First session on us!
                <br>
                <br>
                <b>Single Session Rates:</b>
                <br>
                60 mins: $120/session
                <br>
                30 mins: $75/session
                <br>
                <br>
                <b>Packages:</b>
                <br>
                <u>&nbsp;60 mins&nbsp;</u>
                <br>
                1x Per Week: $108/session
                <br>
                2x Per Week: $99/session
                <br>
                3x Per Week: $95/session
                <br>
                <br>
                <u>&nbsp;30 mins&nbsp;</u>
                <br>
                1x Per Week: $70/session
                <br>
                2x Per Week: $65/session
                <br>
                3x Per Session: $60/session
            </p>
        </div>
        <a class="greyButton" href={personalTrainingEmail} target="_blank" rel="noreferrer">Contact us now</a>
    </div>
    <div class="service">
        <div class="serviceTop">
            <img loading="lazy" src="Pictures/IGNITE.webp" alt="" style="width: 75%; padding: 12.5%;">
            <h4>IGNITE</h4>
            <p>
                IGNITE offers fun, inclusive, and structured programming to create community and enhance the lives of those we work with.
                <br>
                <br>
                <b>Single Class Rate:</b>
                <br>
                $60/class
                <br>
                <br>
                <b>Packages:</b>
                <br>
                1x Per Week: $199/month
                <br>
                2x Per Week: $299/month
                <br>
                3x Per Week: $359/month
                <br>
                <br>
                <b>Includes:</b>
                <br>
                Weekly classes
                <br>
                Complimentary Introductory Training Session
                <br>
                Community Nights
                <br>
                <br>
                <span class="asterisks">
                    *Classes will have always 2 qualified coaches and never exceed 5 participants to ensure personalization, progress, and results.
                    <br>
                    **Reimbursement and direct pay options available via self-direction
                    <br>
                    <!-- svelte-ignore a11y-missing-attribute -->
                    ***Spots filling quickly, get yours now!!!
                </span>
            </p>
        </div>
        <a class="greyButton" href={igniteEmail} target="_blank" rel="noreferrer">Reserve your spot</a>
    </div>
</div>