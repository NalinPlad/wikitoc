<script>
    export let seed;
    function start() {
        window.location.href = '/play/' + seed;
    }
</script>

<input type="button" value="START" on:click={start}/>

<style>
    input {
        margin-top: 3rem;
        padding: 1rem;
        font-family: 'Times New Roman', Times, serif;
        font-weight: bold;
        font-size: 1.5rem;
        display: block;
        border-style: double;
        border-width: 0.5rem;
        cursor: pointer;
    }
</style>