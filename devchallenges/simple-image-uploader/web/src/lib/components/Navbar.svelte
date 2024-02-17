<script lang="ts">
    import { browser } from "$app/environment";

    let theme = "";
    if (browser) {
        theme = localStorage.theme;
    }

    $: if (browser) {
        localStorage.theme = theme;
    }
</script>

<div
    class="flex justify-between py-5 px-10 border border-b-border-light dark:border-b-border-dark"
>
    <div class="flex gap-2 items-center">
        <img src="/logo-small.svg" alt="" />
        <p class="font-bold text-background-dark dark:text-background-light">
            ImageUpload
        </p>
    </div>
    <button
        on:click={() => {
            if (theme === "light") {
                theme = "dark";
            } else {
                theme = "light";
            }
            document.documentElement.classList.toggle("dark");
        }}
        class="p-2 rounded-md border border-border-light dark:border-border-dark"
    >
        {#if theme === "light"}
            <svg
                width="24"
                height="24"
                viewBox="0 0 24 24"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
            >
                <path
                    fill-rule="evenodd"
                    clip-rule="evenodd"
                    d="M15 4C15.292 4 15.438 4 15.5781 4.04183C16.192 4.22522 16.4775 4.93111 16.1637 5.48976C16.0921 5.61719 15.8744 5.82779 15.4389 6.249C13.935 7.70352 13 9.74257 13 12C13 14.2574 13.935 16.2965 15.4389 17.751C15.8744 18.1722 16.0921 18.3828 16.1637 18.5102C16.4775 19.0689 16.192 19.7748 15.5781 19.9582C15.438 20 15.292 20 15 20V20C10.5817 20 7 16.4183 7 12C7 7.58172 10.5817 4 15 4V4Z"
                    fill="#4D5562"
                />
            </svg>
        {:else}
            <svg
                width="24"
                height="24"
                viewBox="0 0 24 24"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
            >
                <circle
                    cx="12"
                    cy="12"
                    r="4"
                    fill="#F9FAFB"
                    fill-opacity="0.8"
                />
                <path
                    d="M12 5V3"
                    stroke="#F9FAFB"
                    stroke-opacity="0.8"
                    stroke-width="2"
                    stroke-linecap="round"
                />
                <path
                    d="M12 21V19"
                    stroke="#F9FAFB"
                    stroke-opacity="0.8"
                    stroke-width="2"
                    stroke-linecap="round"
                />
                <path
                    d="M16.95 7.04996L18.3643 5.63574"
                    stroke="#F9FAFB"
                    stroke-opacity="0.8"
                    stroke-width="2"
                    stroke-linecap="round"
                />
                <path
                    d="M5.63608 18.3644L7.05029 16.9502"
                    stroke="#F9FAFB"
                    stroke-opacity="0.8"
                    stroke-width="2"
                    stroke-linecap="round"
                />
                <path
                    d="M19 12L21 12"
                    stroke="#F9FAFB"
                    stroke-opacity="0.8"
                    stroke-width="2"
                    stroke-linecap="round"
                />
                <path
                    d="M3 12L5 12"
                    stroke="#F9FAFB"
                    stroke-opacity="0.8"
                    stroke-width="2"
                    stroke-linecap="round"
                />
                <path
                    d="M16.95 16.95L18.3643 18.3643"
                    stroke="#F9FAFB"
                    stroke-opacity="0.8"
                    stroke-width="2"
                    stroke-linecap="round"
                />
                <path
                    d="M5.63608 5.63559L7.05029 7.0498"
                    stroke="#F9FAFB"
                    stroke-opacity="0.8"
                    stroke-width="2"
                    stroke-linecap="round"
                />
            </svg>
        {/if}
    </button>
</div>
