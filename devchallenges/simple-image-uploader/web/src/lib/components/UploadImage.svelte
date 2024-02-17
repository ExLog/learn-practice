<script lang="ts">
    import { createEventDispatcher } from "svelte";

    export let image: File;

    let form: HTMLFormElement;

    const dispatch = createEventDispatcher();

    async function handleUpload() {
        dispatch("uploading");
        const formData = new FormData();
        formData.append("image", image);
        const res = await fetch("/upload", {
            method: "POST",
            body: formData,
        });

        if (res.status === 200) {
            dispatch("uploaded", await res.json());
        }
    }
</script>

<!-- svelte-ignore a11y-no-static-element-interactions -->
<form bind:this={form} on:submit|preventDefault={handleUpload}>
    <label
        on:dragover|preventDefault
        on:drop|preventDefault={(e) => {
            if (e.dataTransfer?.files[0]) {
                image = e.dataTransfer.files[0];
            }
            form.requestSubmit();
        }}
        for="image"
    >
        <input
            on:change={(e) => {
                // @ts-ignore
                image = e.target?.files[0];
                form.requestSubmit();
            }}
            hidden
            type="file"
            id="image"
        />
        <div
            class="p-2 rounded-md shadow-lg bg-accent-light dark:bg-accent-dark"
        >
            <div
                class="flex flex-col items-center border-2 border-dashed dark:text-white bg-accent-light before:outer-border py-[8em] px-[12em] border-border-light dark:text-text dark:bg-accent-dark dark:border-border-dark"
            >
                <img class="mb-3 w-8" src="exit.svg" alt="" />
                <div class="font-semibold text-[14px]">
                    Drag & drop a file or <span class="text-custom-blue"
                        >browse files</span
                    >
                </div>
                <div class="font-light text-[12px]">
                    JPG, PNG or GIF - Max file size 2MB
                </div>
            </div>
        </div>
    </label>
</form>
