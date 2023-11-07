import {api_url} from "$lib/api/settings_stored";
import {get} from "svelte/store";

export default function () {
    if (get(api_url) === "") {
        api_url.set(window.location.origin + '/api/');
        console.log("local_url set to " + window.location.origin + '/api/');
    }
}