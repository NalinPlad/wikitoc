<script>
    import CategoryButton from '$lib/CategoryButton.svelte';
    import StartGame from '../lib/StartGame.svelte';
    import { onDestroy, onMount } from 'svelte';
    import { SeedStore } from '../stores.js';

    let seed;
    let friendSeed = '';

    // Subscribe to SeedStore to get the current seed value
    const unsubscribe = SeedStore.subscribe(value => {
        seed = value;
    });

    onDestroy(() => {
        unsubscribe();
    });

    onMount(() => {
        // Generate a new seed if the current one is null
        if (seed === null) {
            const ns = "xxxxx".split('').map(() => Math.floor(Math.random() * 10));
            SeedStore.set(ns.join(''));
        }
    });

    // Update the seed in the store if the friendSeed input is changed
    function updateSeed() {
        SeedStore.set(friendSeed);
    }
</script>

<h1><code>wiki<u>toc</u></code></h1>
<h3>Guess Countries based on their Wikipedia Table Of Contents</h3>
<hr/>
<i>Click PLAY to start. To play along with a friend tell them this <u>seed: {seed}</u>. Or enter your friend's seed:</i>
<input type="text" bind:value={friendSeed} placeholder="Enter friend's seed" />
<button on:click={updateSeed}>Set Seed</button>

<StartGame bind:seed={seed}/>