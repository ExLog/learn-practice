<script lang="ts">
</script>

<div
    class="py-10 px-24 w-[90%] md:w-[40%] text-center rounded-lg bg-accent-light dark:bg-accent-dark shadow-lg"
>
    <div class="space-y-4 dark:text-border-light">
        <span class="font-semibold text-background-dark dark:text-accent-light"
            >Uploading</span
        >, please wait...
        <div
            class="overflow-hidden w-full h-2 rounded-lg bg-border-light dark:bg-border-dark"
        >
            <div class="loading h-full w-[15%] rounded bg-custom-blue"></div>
        </div>
    </div>
</div>

<style>
    .loading {
        animation: move 3s linear infinite;
    }

    @keyframes move {
        0% {
            transform: translateX(-5rem);
        }
        100% {
            transform: translateX(25rem);
        }
    }
</style>
