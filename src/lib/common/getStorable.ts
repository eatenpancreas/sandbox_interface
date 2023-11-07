import {type Writable, writable} from "svelte/store";
import { browser } from "$app/environment"

export default function<T>(obj: T, key: string): Writable<T> {
    const writable = getWritable(obj, key);

    writable.subscribe(value => {
        if (!browser) return;
        localStorage.setItem(key, JSON.stringify(value));
    });

    return writable;
}

function getWritable<T>(obj: T, key: string) {
    if (!browser) return writable(obj);

    console.log("Persistent: getting storage for key", key);

    const stored_raw = localStorage.getItem(key);
    if (!stored_raw) { return writable(obj); }

    try {
        const stored = JSON.parse(stored_raw);
        return writable(stored as T);
    } catch (e) { return writable(obj); }
}