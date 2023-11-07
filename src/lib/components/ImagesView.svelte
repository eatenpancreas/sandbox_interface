<script lang="ts">

    import {onMount} from "svelte";
    import {api_get} from "$lib/api/php_interface";

    let imagesData: { file: string, name: string }[] = [];
    function viewImage() {
        api_get("images/view.php", {index: 0, count: 10}, (data) => {
            console.log(data)
            imagesData = data.images.map((image: any) => {
                return {file: `data:image/jpeg;base64,${image.data}`, name: image.name}
            })
        }, false)
    }

    onMount(() => {
        viewImage()
    });
    
    let clicked_image: string = "";
</script>

{#if imagesData.length <= 0}
    Nog niks
{:else }
    <div class="overflow-x-scroll max-w-full">
        <div class="flex gap-8 w-max">
            {#each imagesData as {file, name}}
                <button on:click={() => {
                clicked_image = file
            }} >
                    <img class="rounded p-2 hover:p-0 hover:m-2 transition-all h-96" src={file} alt={name}/>
                </button>
            {/each}
        </div>
    </div>
{/if}

{#if clicked_image !== ""}
    <button class="fixed top-0 left-0 w-full h-full bg-black bg-opacity-50 flex justify-center items-center" on:click={() => {
        clicked_image = "";
    }}>
        <img class="max-h-full max-w-full" src={clicked_image} alt="clicked image" />
    </button>
{/if}