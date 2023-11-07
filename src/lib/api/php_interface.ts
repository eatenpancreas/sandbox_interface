
import {api_url, session_id, user} from "$lib/api/settings_stored";
import {get} from "svelte/store";

export function api_get(url: string, query_body: object, callback: (text: any) => void, require_auth: boolean = true) {
    const keys = Object.keys(query_body);
    // @ts-ignore
    const query = keys.map(key => key + '=' + query_body[key]).join('&');
    
    const _session_id = get(session_id);
    const _user = get(user);
    
    if (require_auth && (_session_id === "" || _user === "")) {
        window.location.href = "/login";
        return;
    }
    
    const full_url = get(api_url) + url + '?' + query;
    
    fetch(full_url, {
        method: 'GET',
        headers: {
            'Content-Type': 'application/json',
            'AUTH_KEY': _session_id,
            'AUTH_USER': _user
        },
        redirect: 'follow'
    })
        .then(res => res.json())
        .then(json => {
            if (require_auth && json.status === "Err" && json.message === "Invalid credentials.") {
                window.location.href = "/admin?from_page=" + window.location.pathname;
                return;
            }
            callback(json)
        })
        .catch(err => console.log(err));
}

export function form_api_post(url: string, appender: (fd: FormData) => void, callback: (data: any) => void, require_auth: boolean = true) {
    const full_url = get(api_url) + url;

    const _session_id = get(session_id);
    const _user = get(user);

    if (require_auth && (_session_id === "" || _user === "")) {
        window.location.href = "/admin";
        return;
    }
    
    let formData = new FormData();
    appender(formData);
    
    fetch(full_url, {
        method: 'POST',
        headers: {
            'AUTH_KEY': _session_id,
            'AUTH_USER': _user
        },
        body: formData
    })
        .then(res => res.json())
        .then(json => {
            if (require_auth && json.status === "Err" && json.message === "Invalid credentials.") {
                window.location.href = "/admin?from_page=" + window.location.pathname;
                return;
            }
            callback(json)
        })
        .catch(err => console.log(err));
}