<script>
	import { onMount } from "svelte";

    const defaultCalendar = "https://calendar.google.com/calendar/embed?height=600&wkst=1&bgcolor=%23ffffff&ctz=America%2FNew_York&showTitle=0&showNav=1&showDate=1&showTabs=0&showCalendars=0&showTz=0&showPrint=0&mode=MONTH&src=ZTBhN2EzODkxYzYwOWZmZjM0OGY5ODg2NGNlMTVjYzYxNmIzOWE3YTcwZmZkODk1YWFlYzZlMGUxYzRiOTMxOEBncm91cC5jYWxlbmRhci5nb29nbGUuY29t&color=%23D50000";
    const mobileCalendar = "https://calendar.google.com/calendar/embed?height=600&wkst=1&bgcolor=%23ffffff&ctz=America%2FNew_York&showTitle=0&showNav=1&showDate=1&showTabs=0&showCalendars=0&showTz=0&showPrint=0&mode=AGENDA&src=ZTBhN2EzODkxYzYwOWZmZjM0OGY5ODg2NGNlMTVjYzYxNmIzOWE3YTcwZmZkODk1YWFlYzZlMGUxYzRiOTMxOEBncm91cC5jYWxlbmRhci5nb29nbGUuY29t&color=%23D50000";

    onMount(() => {
        const calendar = document.getElementById("calendar");

        let current = 0;

        const resize = () => {
            if (!calendar) return;
            if (window.innerWidth < 650) {
                if (current === 1) return;
                // @ts-ignore
                calendar.src = mobileCalendar;
                current = 1;
            } else {
                if (current === 2) return;
                // @ts-ignore
                calendar.src = defaultCalendar;
                current = 2;
            }
        };
        window.addEventListener("resize", resize);
        resize();
    });
</script>
<svelte:head>
    <link rel="stylesheet" href="css/events.css"/>
</svelte:head>

<iframe title="Events" id="calendar" src={defaultCalendar} frameborder="0" scrolling="no"></iframe>