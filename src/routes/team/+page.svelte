<script lang="ts">
    var staff = [
        {
            "name": "Jake Allyne",
            "title": "President & CEO",
            "img": "JakeAllyne.webp",
            "email": "jake@breakthroughfitco.com",
            "bio": `Jake Allyne is the founder and CEO of Breakthrough Fit Co. With 8 years of experience, Jake specializes in exercise programming to establish proper biomechanics and correct movement patterns within a wide variety of goals. Jake also has a great deal of experience with the special needs community and it is his passion to create equal access to health and fitness for that community. His favorite food is sushi and you can often find him listening to Frank Sinatra. A quote he lives by is "if you can dream it, you can achieve it."`,
            "certifications": [
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
            "name": "Stephen Goodman",
            "title": "CFO & COO",
            "img": "StephenGoodman.webp",
            "email": "steve@breakthroughfitco.com",
            "bio": `Stephen is our CFO at Breakthrough Fit Co. He holds his Bachelor's Degree in Kinesiology from SUNY Cortland, as well as his MBA from Mercy College, graduating Summa Cum Laude. Stephen is a life-long resident of Westchester, and in his free time, enjoys exploring the beautiful nature the county has to offer, from hiking Bear Mountain, to the scenic Riverwalk in Tarrytown. Stephen is also a head coach for the Sound Shore Stars Special Olympics Team. His favorite food is Chicken Parmigiana! A quote he lives by is "those who say they can and those that say they can't are both usually right."`,
        }, // Stephen
        {
            "name": "Alexis Grier",
            "title": "Coach",
            "img": "AlexisGrier.webp",
            "email": "jake@breakthroughfitco.com",
            "bio": `Alexis has been working with the special needs community since 2012. She has a passion for working with children and families, fitness, and filmmaking. Her goal is to allow individuals to explore their physical and creative abilities, building self esteem and confidence in their ability to positively express themselves. She credits working as an Adaptive Special Needs Trainer and Behavioral Therapist as one of the most rewarding experiences in her career to date.`,
            "certifications": [
                "SPECIAL STRONG CERTIFIED",
            ]
        }, // Alexis
        {
            "name": "Vadid Bienaime",
            "title": "Coach",
            "img": "VadidBienaime.webp",
            "email": "jake@breakthroughfitco.com",
            "bio": `Vadid is from Haiti and has been working as a trainer since 2018. He has prior experience working with the special needs community in their group homes. He has a deep passion for fitness that he'd love to share with everyone, no matter their abilities. He enjoys running in his free time and his favorite food is pizza.`,
            "certifications": [
                "SPECIAL STRONG CERTIFIED",
            ]
        }, // Vadid
        {
            "name": "Taje Champagnie",
            "title": "Coach",
            "img": "TajeChampagnie.webp",
            "email": "taje@breakthroughfitco.com",
            "bio": `As a professional with 6 years of training experience, Taje has come to the understanding that the greatest limiter is choice. He is a NASM certified Personal Trainer and specializes in balance and stability. Regardless of client goals, balance is the lowest common denominator, so his specialty is broad enough to facilitate a variety of physiological needs. He does this in order to remove as many obstacles as possible for his clients so that they get closer to that great limiter; choice. Once he helps his clients get there, they feel secure enough to make the decisions they need to regain, retain, or expand their health. A quote he lives by is "those who ask for help -earnestly- deserve help."`,
        }, // Taje
        {
            "name": "Michelle Pachon",
            "title": "Massage Therapist",
            "img": "MichellePachon.webp",
            "email": "michellesmassages14@gmail.com",
            "bio": `Meet Michelle Pachon, our NYS Licensed Massage Therapist and 200-hour Yoga Alliance Certified Instructor! Michelle has been a practicing Massage Therapist since 2015 and has extensive background in different restorative and regenerative massage styles such as Swedish, Myofascial release, Sport, Lymphatic, Prenatal, and Geriatric massage. She’s also known for her amazing Hatha, Power flow, Vinyasa flow and deep stretch yoga classes. Michelle is the best addition to your self-care routine!`,
        }, // Michelle
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
                    <a class="teamMemberContact" target="_blank" href="mailto:{member.email}?subject=Breakthrough%20Fit%20Co">Contact</a>
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
                <a class="greyButton" target="_blank" href="https://www.specialolympics-ny.org/">Learn More</a>
            </div>
            <div class="partner">
                <div>
                <img loading="lazy" alt="" src="Pictures/Chewma.webp">
                <h4>Chewma</h4>
                <p>The all-day snack that won't set you back!</p>
                </div>
                <a class="greyButton" target="_blank" href="https://www.chewma.com/">Learn More</a>
            </div>
            <div class="partner">
                <div>
                <img loading="lazy" alt="" src="Pictures/CBDAllNatural.webp">
                <h4>CBD All Natural</h4>
                <p>Helping you live natural, one drop at a time.</p>
                </div>
                <a class="greyButton" target="_blank" href="https://cbdlivenatural.com/">Learn More</a>
            </div>
        </div>
    </div>
</div>