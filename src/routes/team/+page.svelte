<svelte:head>
    <link rel="stylesheet" href="css/team.css">
</svelte:head>

<script lang="ts">
    var staff = [
        {
            name: "Jake",
            title: "President & CEO",
            img: "Jake.webp",
            email: "jake@breakthroughfitco.com",
            bio: `Jake is the founder and CEO of Breakthrough Fit Co. With 8 years of experience, Jake specializes in exercise programming to establish proper biomechanics and correct movement patterns within a wide variety of goals. Jake also has a great deal of experience with the special needs community and it is his passion to create equal access to health and fitness for that community. His favorite food is sushi and you can often find him listening to Frank Sinatra. A quote he lives by is "if you can dream it, you can achieve it."`,
            certifications: [
                "NASM CPT",
                "NASM PES",
                "NASM CES",
                "NASM FNS",
                "AFFA GFI",
                "AUTISM FITNESS",
                "USAW STRENGTH COACH",
                "MADDOG SPINNING",
                "DAS SPONSORED ATHLETE",
            ]
        }, // Jake
        {
            name: "Steve",
            title: "CFO & COO",
            img: "Steve.webp",
            email: "steve@breakthroughfitco.com",
            bio: `Steve is our CFO at Breakthrough Fit Co. He holds his Bachelor's Degree in Kinesiology from SUNY Cortland, as well as his MBA from Mercy College, graduating Summa Cum Laude. Steve is a life-long resident of Westchester, and in his free time, enjoys exploring the beautiful nature the county has to offer, from hiking Bear Mountain, to the scenic Riverwalk in Tarrytown. Steve is also a head coach for the Sound Shore Stars Special Olympics Team. His favorite food is Chicken Parmigiana! A quote he lives by is "those who say they can and those that say they can't are both usually right."`,
            certifications: [
                "NASM CPT",
            ]
        }, // Steve
        {
            name: "Alexis",
            title: "Director of Client Relations",
            img: "Alexis.webp",
            email: "alexis@breakthroughfitco.com",
            bio: `Alexis has been working with the special needs community since 2012. She has a passion for working with children and families, fitness, and filmmaking. Her goal is to allow individuals to explore their physical and creative abilities, building self esteem and confidence in their ability to positively express themselves. She credits working as an Adaptive Special Needs Trainer and Behavioral Therapist as one of the most rewarding experiences in her career to date.`,
            certifications: [
                "ADAPTIVE SPECIAL NEEDS GROUP INSTRUCTOR CERTIFICATION",
                "ADAPTIVE SPECIAL NEEDS NUTRITION COACH CERTIFICATION",
                "ADAPTIVE SPECIAL NEEDS TRAINER CERTIFICATION - LEVEL 1",
                "ADAPTIVE SPECIAL NEEDS TRAINER CERTIFICATION - LEVEL 2",
            ]
        }, // Alexis
        {
            name: "Chris",
            title: "Coach",
            img: "Chris.webp",
            email: "chris@breakthroughfitco.com",
            bio: ``,
        }, // Chris
        {
            name: "Vadid",
            title: "Coach",
            img: "Vadid.webp",
            bio: `Vadid is from Haiti and has been working as a trainer since 2018. He has prior experience working with the special needs community in their group homes. He has a deep passion for fitness that he'd love to share with everyone, no matter their abilities. He enjoys running in his free time and his favorite food is pizza.`,
            certifications: [
                "ADAPTIVE SPECIAL NEEDS GROUP INSTRUCTOR CERTIFICATION",
                "ADAPTIVE SPECIAL NEEDS NUTRITION COACH CERTIFICATION",
                "ADAPTIVE SPECIAL NEEDS TRAINER CERTIFICATION - LEVEL 1",
                "ADAPTIVE SPECIAL NEEDS TRAINER CERTIFICATION - LEVEL 2",
            ]
        }, // Vadid
        {
            name: "Janie",
            title: "Coach",
            img: "Janie.webp",
            bio: ``
        }, // Janie
        {
            name: "James",
            title: "Coach",
            img: "James.webp",
            bio: ``
        }, // James
        {
            name: "Dave",
            title: "Coach",
            img: "Dave.webp",
            bio: ``
        }, // Dave
        {
            name: "Amy",
            title: "Coach",
            img: "Amy.webp",
            bio: ``
        }, // Amy
        /*{
            name: "Heidi",
            title: "Coach",
            img: "Heidi.webp",
            bio: ``
        }, // Heidi*/
        {
            name: "Rich",
            title: "Coach",
            img: "Rich.webp",
            bio: ``
        }, // Rich
        {
            name: "Deb",
            title: "Coach",
            img: "Deb.webp",
            bio: ``
        }, // Deb
    ]
</script>

<div id="ourteam">
    <div id="teamContents" class="paddingPadder centerBox" style="margin-bottom: 0">
        {#each staff as member}
            <div class="teamMember">
                <img loading="lazy" alt="" src="Pictures/Staff/{member.img}">
                <div class="teamMemberText">
                    <h1 class="teamMemberName">{member.name} - {member.title}</h1>
                    <div class="teamMemberTextExtra">
                        <p>{member.bio}</p>
                        {#if member.certifications}
                            <h1>Certifications</h1>
                            <div class="teamMemberCerts">
                                {#each member.certifications as certification, i}
                                    <span class="teamMemberCertChip">{certification}</span>
                                {/each}
                            </div>
                        {/if}
                    </div>
                    {#if member.email}
                        <a class="teamMemberContact" target="_blank" rel="noreferrer" href="mailto:{member.email}?subject=Breakthrough%20Fit%20Co">Contact</a>
                    {/if}
                </div>
            </div>
        {/each}
    </div>
</div>
<div class="padder">
    <div class="centerBox">
        <h2>Partners</h2>
        <div id="partners" style="margin-bottom: 0;">
            <div class="partner">
                <div>
                <img loading="lazy" alt="" src="Pictures/SpecialOlympicsNY.webp">
                <h4>Special Olympics NY</h4>
                <p>Special Olympics is changing the lives of people with intellectual disabilities.</p>
                </div>
                <a class="greyButton" target="_blank" rel="noreferrer" href="https://www.specialolympics-ny.org/">Learn More</a>
            </div>
            <div class="partner">
                <div>
                <img loading="lazy" alt="" src="Pictures/ShamesJCC.webp">
                <h4>Shames JCC</h4>
                <p>Shames JCC is a Jewish community center in Tarrytown.</p>
                </div>
                <a class="greyButton" target="_blank" rel="noreferrer" href="https://www.shamesjcc.org/">Learn More</a>
            </div>
            <div class="partner">
                <div>
                <img loading="lazy" alt="" src="Pictures/MidWestchesterJCC.webp">
                <h4>Mid-Westchester JCC</h4>
                <p>Mid-Westchester JCC is a Jewish community center in Scarsdale.</p>
                </div>
                <a class="greyButton" target="_blank" rel="noreferrer" href="https://jccmw.org/">Learn More</a>
            </div>
        </div>
    </div>
</div>