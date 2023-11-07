<script>
    import "../app.css";
    import {onMount} from "svelte";
    import init from "./init";
    onMount(init);
</script>

<div class="fixed inset-0 -z-50 bg-gradient-to-br from-primary-900 from-10%
to-primary-800 min-h-screen "></div>

<img src="covatitle.jpeg" alt="logo" class="fixed top-0 left-0 w-16 m-4 z-50 rounded-full shadow shadow-primary-900" />

<div class="min-h-screen flex flex-col justify-center items-center text-white py-20">
    <slot />
</div>