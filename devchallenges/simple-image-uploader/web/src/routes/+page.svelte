<script lang="ts">
    import Navbar from "$lib/components/Navbar.svelte";
    import UploadImage from "$lib/components/UploadImage.svelte";
    import UploadLoader from "$lib/components/UploadLoader.svelte";
    import UploadSuccess from "$lib/components/UploadSuccess.svelte";

    let image: File;
    let loading = false;

    let uploadedUrl: string;
</script>

<Navbar />
<main class="flex flex-col gap-5 justify-center items-center min-h-[85vh]">
    {#if !image}
        <UploadImage
            on:uploading={() => (loading = true)}
            on:uploaded={(e) => {
                loading = false;
                uploadedUrl = e.detail.url;
            }}
            bind:image
        />
    {:else if image && loading}
        <UploadLoader />
    {:else}
        <UploadSuccess {uploadedUrl} />
    {/if}
</main>
