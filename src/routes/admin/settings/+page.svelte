<script lang="ts">
    import {api_url} from "$lib/api/settings_stored";
    import type {Writable} from "svelte/store";
    
    function setStoredValue(e: any, writable: Writable<any>) {
        writable.set(e.target.value);
    }
</script>

<a href="./" class="absolute top-10 left-32">Ga terug</a>

<p>
    Database Url: 
    <input type="text" class="bg-gray-200" value="{$api_url}" on:input={(e) => setStoredValue(e, api_url)} />
</p>