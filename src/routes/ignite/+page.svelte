<script lang="ts">
	import { schedule_update } from "svelte/internal";

    const igniteSchedule = [
        {
            day: "Monday",
            isFull: false,
            times: ["4pm - 5pm"]
        },
        {
            day: "Tuesday",
            isFull: false,
            times: ["4pm - 5pm"]
        },
        {
            day: "Wednesday",
            isFull: true,
            times: ["4pm - 5pm"]
        },
        {
            day: "Thursday",
            isFull: false,
            times: ["4pm - 5pm"],
            specials: [
                {
                    time: "4:30pm - 5:30pm", 
                    place: "Shames JCC",
                    website: "https://shamesjcc.org"
                }
            ]
        },
        {
            day: "Friday",
            isFull: true,
            times: ["4pm - 5pm"]
        },
    ]
</script>

<div class="igniteBanner">
    <h1>IGNITE</h1>
    <p>Ignite your purpose.  Ignite your power.  Ignite your potential.</p>
    <a class="greyButton" id="endItem" href="mailto:jake@breakthroughfitco.com?subject=IGNITE">Find Out More</a>
</div>
<div id="igniteInfo" class="centerBox" style="margin-bottom: 0;">
    <div class="igniteBox">
        <h4>What is IGNITE?</h4>
        <img loading="lazy" alt="" style="border-radius:0" src="Pictures/IGNITE.webp">
        <p>IGNITE offers progressive, fun, and adaptive fitness programs to promote inclusion in Westchester county, working with ages 12 through adulthood.</p>
        <p>Through IGNITE's fitness assessment process, members are aligned based on their abilities, to ensure a structured and nurturing environment.</p>
        <p id=endItem>IGNITE serves a broad spectrum of abilities and aims to empower each individual through exercise and positive experiences, enhancing social skills, and making new friends within our community.</p>
    </div>
    <div class="igniteBox">
        <h4>Our Mission</h4>
        <img loading="lazy" alt="Jake posing with a client" src="Pictures/ourMission.webp">
        <p id="endItem">Breakthrough Fit Co exists to create equal opportunity to health and fitness, enhancing the lives of those with "different abilities" through a high-quality, progressive, community-based fitness program. We aim to create fun and inclusive moments, creating a positive impact on the lives of each individual.</p>
    </div>
</div>
<div id="igniteSchedule" class="centerBox paddingPadder">
    <h2>Ignite Schedule</h2>
    <div>
        {#each igniteSchedule as schedule}
            <span>
                <h3>{schedule.day}</h3>
                <p>
                    {#each schedule.times as time}
                        {time}<br>
                    {/each}
                    {#if schedule.specials}
                        {#each schedule.specials as special}
                            {special.time} @ <a href="{special.website}" target="_blank">{special.place}</a><br>
                        {/each}
                    {/if}
                </p>
                {#if schedule.isFull}
                    <div class="soldOut">
                        <h1>SOLD OUT</h1>
                    </div>
                {/if}
            </span>
        {/each}
    </div>
</div>
<div class="igniteBanner" style="margin-bottom: 0;">
    <div class="centerSmallBox paddingPadder" style="margin: 0 auto;">
        <h3>IGNITE COMMUNITY NIGHTS</h3>
        <span id="endItem">IGNITE nights are the best nights. Throughout the year, we host fully staffed and supervised community nights. Partnering with local businesses, IGNITE community nights will be filled with food, music, and fun!</span>
    </div>
</div>