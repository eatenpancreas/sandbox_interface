<script lang="ts">
    import {form_api_post} from "$lib/api/php_interface";

    function postImage(event: Event) {
        event.preventDefault();

        form_api_post('images/add.php', (fd) => {
            let file: any = document.getElementById('file');
            fd.append('file', file.files[0]);
        }, (data) => {
            console.log(data);
        });
    }
</script>

<a href="./" class="absolute top-10 left-32">Ga terug</a>

<form method="post" enctype="multipart/form-data">
    <label for="file"><span>Filename:</span></label>
    <input class="text-black" type="file" name="file" id="file" />
    <br />
    <input class="underline text-blue-600 bg-white" type="submit" name="submit" value="Submit" on:click={postImage} />
</form>