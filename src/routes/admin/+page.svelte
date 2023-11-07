<script lang="ts">
    import {onMount} from "svelte";
    import {form_api_post} from "$lib/api/php_interface";
    import {session_id, user} from "$lib/api/settings_stored";

    let login_status = "";
    function login(e: Event) {
        e.preventDefault();
        
        form_api_post("auth/login.php", (fd) => {
            let pass: any = document.getElementById('pass');
            let user: any = document.getElementById('user');

            fd.append('user', user.value);
            fd.append('pass', pass.value);
        }, (data) => {
            login_status = data.status;
            if (data.status === "Ok") {
                user.set(data.user);
                session_id.set(data.session);
            }
        }, false)
    }
</script>

<a href="./" class="absolute top-10 left-32">Ga terug</a>

<form method="post">
    <label for="user"><span>Username:</span></label>
    <input class="text-black" type="text" name="user" id="user" />
    <br />
    <label for="pass"><span>Password:</span></label>
    <input class="text-black" type="password" name="pass" id="pass" />
    <br />
    <input class="underline text-blue-600 bg-white" type="submit" name="submit" value="Submit" on:click={login} />
</form>

<a class="underline text-amber-200" href="admin/upload_raw">Uploaden</a>
<a class="underline text-amber-200" href="admin/settings">Settings</a>

{#if login_status === "Ok"}
    <h1>Ur logged in</h1>
{:else if login_status === "Err"}
    <h1>Nah, u not logged in</h1>
{/if}
