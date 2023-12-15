<script>
    import sandbox_game from "$lib/sandbox/sandbox_game.js";
    import {onMount} from "svelte";
    
    onMount(() => {
        sandbox_game();
    })
</script>

<h1 class="text-3xl mb-10">
    A 
    <span class="text-yellow-300 font-bold">fun</span>
    little sandbox game
</h1>

<h2 class="font-bold tracking-widest">Controls</h2>
<div class="flex gap-8">
    <p class="text-amber-100">1 - Sand</p>
    <p class="text-gray-300">2 - Stone</p>
    <p class="text-blue-300">3 - Water</p>
    <p class="text-neutral-300">4 - Metal</p>
    <p class="text-amber-400">5 - Soil</p>
    <p class="text-red-300">6 - Lava</p>
    <p class="text-white">0 - Erase</p>
</div>
<canvas id="sandbox-canvas"></canvas>