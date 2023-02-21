<svelte:head>
    <link rel="stylesheet" href="css/index.css">
</svelte:head>

<script lang="ts">
    let imageCount = 7;
    let images: (HTMLImageElement | HTMLAnchorElement)[][] = Array.from(Array(imageCount)).map(() => []);
    let currentImage = 0;
    let isChanging = false;
    let interacted = false;

    function sleep(ms: number) {
       return new Promise(resolve => setTimeout(resolve, ms));
    }
    
    const imageChange = async (imgNum: number) => {
        if (isChanging) return;
        isChanging = true;
        for (let i = 0; i < imageCount; i++) {
            if (currentImage == i || imgNum == i) continue;
            if (images[i][1]) images[i][1].style.backgroundColor = "";
            if (images[i][0]) images[i][0].style.opacity = "0";
            if (images[i][0]) images[i][0].style.display = "none";
        }

        if (images[currentImage][1]) images[currentImage][1].style.backgroundColor = "";
        if (images[imgNum][1]) images[imgNum][1].style.backgroundColor = "rgb(175,175,175)";
        if (images[currentImage][0]) images[currentImage][0].style.opacity = "0";
        if (images[imgNum][0]) images[imgNum][0].style.opacity = "0";

        await sleep(200);

        if (images[currentImage][0]) images[currentImage][0].style.display = "none";
        if (images[imgNum][0]) images[imgNum][0].style.display = "block";

        await sleep(150);

        if (images[imgNum][0]) images[imgNum][0].style.opacity = "1";

        await sleep(150);

        currentImage = imgNum;
        isChanging = false;
    }

    setInterval(() => {
        if (interacted) return;
        if (currentImage == imageCount - 1) imageChange(0);
        else imageChange(currentImage+1);
    }, 5 * 1000);

    const imageChangeLeft = () => {
        console.log("left");
        interacted = true;
        if (currentImage == 0) imageChange(imageCount - 1);
        else imageChange(currentImage-1);
    }

    const imageChangeRight = () => {
        console.log("right");
        interacted = true;
        if (currentImage == imageCount - 1) imageChange(0);
        else imageChange(currentImage+1);
    }
</script>

<div class="padder"> <!-- Padder for welcome box -->
    <div id="Welcome" class="centerBox">
        {#each Array(imageCount) as _, i}
            {#if i == 0}
                <img id="WI{i+1}" class="WI" src="Pictures/WelcomeImages/{i+1}.webp" alt="" style="display: block" bind:this={images[i][0]}>
            {:else}
                <img id="WI{i+1}" class="WI" src="Pictures/WelcomeImages/{i+1}.webp" alt="" bind:this={images[i][0]}>
            {/if}
        {/each}
        <p id="Welcome_Text">Where all are Welcome</p>
        <div class="SlideshowSkipButtons">
            <div>
                {#each Array(imageCount) as _, i}
                    <!-- svelte-ignore a11y-missing-content -->
                    {#if i == 0}
                        <!-- svelte-ignore a11y-click-events-have-key-events -->
                        <a id="WB{i+1}" class="WB" on:click={() => {imageChange(i)}} style="background-color: rgb(175,175,175)" bind:this={images[i][1]} />
                    {:else}
                        <!-- svelte-ignore a11y-click-events-have-key-events -->
                        <a id="WB{i+1}" class="WB" on:click={() => {imageChange(i)}} bind:this={images[i][1]} />
                    {/if}
                {/each}
            </div>
        </div>
        <!-- svelte-ignore a11y-click-events-have-key-events -->
        <div class="Arrow" id="ArrowLeft" on:click={imageChangeLeft}><span>&lt;</span></div>
        <!-- svelte-ignore a11y-click-events-have-key-events -->
        <div class="Arrow" id="ArrowRight" on:click={imageChangeRight}><span>&gt;</span></div>
        <div id="ArrowFiller"></div>
    </div>
</div>
<div id="readytobreakthrough">
    <div class="padder">
        <div class="centerBox" id="rtbt_contents">
            <div>
                <h4>The Breakthrough Difference</h4>
                <p>
                We all need fitness in our lives.
                <br><br>
                Some of us need a little motivation and guidance.
                <br><br>
                Some of us may have Autism or Down Syndrome.
                <br><br>
                Some of us have experienced injuries or setbacks, such as a knee or hip replacement.
                <br><br>
                Some of us are athletes who are looking to excel in a particular sport.
                <br><br>
                Regardless of where you are starting, your story is not done yet, so come as you are;  all are welcome.
                <br><br>
                Let’s work together to unlock your purpose, power, and potential.
                <br><br>
                We are an appointment-based fitness facility that exists to create equal access to health and fitness for all.  Exercise and a balanced lifestyle are the first line of defense against an array of things that life can throw at us.  We want you to not only achieve your goals but live with the better quality of life we all deserve.
                </p>
            </div>
            <div id="rtbt_image">
                <img loading="lazy" alt="Staff and a client posing" src="Pictures/readytobreakthrough.webp" style="width: 100%;border-radius:15px;">
                <noscript>
                Map requires JavaScript
                </noscript>
                <!-- svelte-ignore a11y-missing-attribute -->
                <iframe id="subMap" src="https://www.google.com/maps/embed/v1/place?q=place_id:EisyNTEgUyBDZW50cmFsIEF2ZSwgSGFydHNkYWxlLCBOWSAxMDUzMCwgVVNBIlESTwo0CjIJId7v2oSUwokRKS008ohLrDAaHgsQ7sHuoQEaFAoSCff-j5mNlMKJETEGzo5b6aauDBD7ASoUChIJB4HnyWOTwokRxagot0SsYA4&amp;key=AIzaSyBUfeT7PQBpFnDokkCq4FMR7N2Fbk4tyYw" style="border:0" loading="lazy"></iframe>
            </div>
        </div>
    </div>
</div>
<div id="map">
    <noscript>
        Map requires JavaScript
    </noscript>
    <!-- svelte-ignore a11y-missing-attribute -->
    <iframe id="mapFrame" src="https://www.google.com/maps/embed/v1/place?q=place_id:EisyNTEgUyBDZW50cmFsIEF2ZSwgSGFydHNkYWxlLCBOWSAxMDUzMCwgVVNBIlESTwo0CjIJId7v2oSUwokRKS008ohLrDAaHgsQ7sHuoQEaFAoSCff-j5mNlMKJETEGzo5b6aauDBD7ASoUChIJB4HnyWOTwokRxagot0SsYA4&amp;key=AIzaSyBUfeT7PQBpFnDokkCq4FMR7N2Fbk4tyYw" style="border:0" loading="lazy"></iframe>
</div>
<div id="social">
    <div class="padder">
        <div class="centerBox">
            <h2>Connect with us</h2>
            <div id="socials">
                <a href="tel:9143584575" target="_blank">
                    <svg viewBox="0 0 16 16" fill="currentColor" width="32px" height="32px">
                        <g fill="#000000">
                            <path d="M3.654 1.328a.678.678 0 0 0-1.015-.063L1.605 2.3c-.483.484-.661 1.169-.45 1.77a17.568 17.568 0 0 0 4.168 6.608 17.569 17.569 0 0 0 6.608 4.168c.601.211 1.286.033 1.77-.45l1.034-1.034a.678.678 0 0 0-.063-1.015l-2.307-1.794a.678.678 0 0 0-.58-.122l-2.19.547a1.745 1.745 0 0 1-1.657-.459L5.482 8.062a1.745 1.745 0 0 1-.46-1.657l.548-2.19a.678.678 0 0 0-.122-.58L3.654 1.328zM1.884.511a1.745 1.745 0 0 1 2.612.163L6.29 2.98c.329.423.445.974.315 1.494l-.547 2.19a.678.678 0 0 0 .178.643l2.457 2.457a.678.678 0 0 0 .644.178l2.189-.547a1.745 1.745 0 0 1 1.494.315l2.306 1.794c.829.645.905 1.87.163 2.611l-1.034 1.034c-.74.74-1.846 1.065-2.877.702a18.634 18.634 0 0 1-7.01-4.42 18.634 18.634 0 0 1-4.42-7.009c-.362-1.03-.037-2.137.703-2.877L1.885.511z"></path>
                        </g>
                    </svg>
                </a>
                    <a href="mailto:jake@breakthroughfitco.com">
                    <svg viewBox="0 0 16 16" fill="currentColor" width="32px" height="32px">
                        <g fill="#000000">
                            <path d="M0 4a2 2 0 0 1 2-2h12a2 2 0 0 1 2 2v8a2 2 0 0 1-2 2H2a2 2 0 0 1-2-2V4zm2-1a1 1 0 0 0-1 1v.217l7 4.2 7-4.2V4a1 1 0 0 0-1-1H2zm13 2.383-4.758 2.855L15 11.114v-5.73zm-.034 6.878L9.271 8.82 8 9.583 6.728 8.82l-5.694 3.44A1 1 0 0 0 2 13h12a1 1 0 0 0 .966-.739zM1 11.114l4.758-2.876L1 5.383v5.73z"/>
                        </g>
                    </svg>
                </a>
                <a href="https://www.facebook.com/BreakthroughFitCo" target="_blank" rel="noreferrer">
                    <svg viewBox="4 4 16 16" fill="currentColor" width="32px" height="32px">
                        <g>
                            <path d="M20 12a8 8 0 10-9.25 7.903v-5.59H8.719V12h2.031v-1.762c0-2.005 1.194-3.113 3.022-3.113.875 0 1.79.156 1.79.156V9.25h-1.008c-.994 0-1.304.617-1.304 1.25V12h2.219l-.355 2.313H13.25v5.59A8.002 8.002 0 0020 12z" fill="#1877F2"></path>
                        </g>
                    </svg>
                </a>
                <a href="https://www.instagram.com/breakthroughfitco/" target="_blank" rel="noreferrer">
                    <svg viewBox="4 4 16 16" fill="currentColor" width="32px" height="32px">
                        <g fill="#E1306C">
                        <path d="M14.667 12a2.57 2.57 0 0 0-.782-1.885A2.57 2.57 0 0 0 12 9.333a2.57 2.57 0 0 0-1.885.782A2.57 2.57 0 0 0 9.333 12c0 .736.26 1.365.782 1.885.52.521 1.149.782 1.885.782a2.57 2.57 0 0 0 1.885-.782c.521-.52.782-1.149.782-1.885zm1.437 0c0 1.139-.4 2.108-1.198 2.906-.798.799-1.767 1.198-2.906 1.198-1.139 0-2.108-.4-2.906-1.198-.799-.798-1.198-1.767-1.198-2.906 0-1.139.4-2.108 1.198-2.906.798-.799 1.767-1.198 2.906-1.198 1.139 0 2.108.4 2.906 1.198.799.798 1.198 1.767 1.198 2.906zm1.125-4.27c0 .263-.094.489-.281.676a.923.923 0 0 1-.677.282.923.923 0 0 1-.677-.282.923.923 0 0 1-.281-.677c0-.264.093-.49.28-.677a.923.923 0 0 1 .678-.281c.264 0 .49.094.677.281a.923.923 0 0 1 .281.677zM12 5.437l-.797-.006a56.514 56.514 0 0 0-1.099 0c-.25.004-.585.014-1.005.032-.42.017-.778.052-1.073.104a4.177 4.177 0 0 0-.745.192c-.347.14-.653.34-.916.605-.264.263-.466.569-.605.916-.076.202-.14.45-.192.745a8.255 8.255 0 0 0-.104 1.073c-.018.42-.028.755-.032 1.005-.003.25-.003.616 0 1.1l.006.796-.006.797c-.003.483-.003.849 0 1.099.004.25.014.585.032 1.005.017.42.052.778.104 1.073.052.295.116.543.192.745.14.347.34.653.605.916.263.264.569.466.916.605.202.076.45.14.745.192.295.052.653.087 1.073.104.42.018.755.028 1.005.032.25.003.616.003 1.1 0l.796-.005.797.005c.483.003.849.003 1.099 0 .25-.004.585-.014 1.005-.032.42-.017.778-.052 1.073-.104.295-.052.543-.116.745-.192.347-.14.653-.34.916-.605.264-.263.466-.569.605-.916.076-.202.14-.45.192-.745.052-.295.087-.653.104-1.073.018-.42.028-.755.032-1.005.003-.25.003-.616 0-1.1L18.562 12l.006-.797c.003-.483.003-.849 0-1.099a38.59 38.59 0 0 0-.032-1.005 8.255 8.255 0 0 0-.104-1.073 4.177 4.177 0 0 0-.192-.745 2.703 2.703 0 0 0-.605-.916 2.703 2.703 0 0 0-.916-.605 4.177 4.177 0 0 0-.745-.192 8.255 8.255 0 0 0-1.073-.104c-.42-.018-.755-.028-1.005-.032-.25-.003-.616-.003-1.1 0L12 5.438zM20 12c0 1.59-.017 2.691-.052 3.302-.07 1.445-.5 2.563-1.292 3.354-.791.792-1.91 1.222-3.354 1.292-.611.035-1.712.052-3.302.052s-2.691-.017-3.302-.052c-1.445-.07-2.563-.5-3.354-1.292-.792-.791-1.222-1.91-1.292-3.354C4.017 14.691 4 13.59 4 12s.017-2.691.052-3.302c.07-1.445.5-2.563 1.292-3.354.791-.792 1.91-1.222 3.354-1.292C9.309 4.017 10.41 4 12 4s2.691.017 3.302.052c1.445.07 2.563.5 3.354 1.292.792.791 1.222 1.91 1.292 3.354.035.611.052 1.712.052 3.302z"></path>
                        </g>
                    </svg>
                </a>
            </div>
        </div>
    </div>
</div>