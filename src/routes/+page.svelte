<script>
    import CategoryButton from '$lib/CategoryButton.svelte';
    import { SeedStore } from '../stores.js';

    let seed;
    let friendSeed = '';

    // Subscribe to SeedStore to get the current seed value
    const unsubscribe = SeedStore.subscribe(value => {
        seed = value;
    });

    // Cleanup the subscription when the component is destroyed
    import { onDestroy } from 'svelte';
    onDestroy(() => {
        unsubscribe();
    });

    // Generate a new seed if the current one is null
    if (seed === null) {
        SeedStore.set(Math.random().toString(36).substring(2, 15) + Math.random().toString(36).substring(2, 15));
    }

    // Update the seed in the store if the friendSeed input is changed
    function updateSeed() {
        SeedStore.set(friendSeed);
    }
</script>

<h1><code>wikitoc</code></h1>
<h3>Guess Wikipedia articles based on their Tables Of Contents</h3>
<hr/>
<i>Click PLAY to start. To play along with a friend tell them this <u>seed: {seed}</u>. Or enter your friend's seed below:</i>
<input type="text" bind:value={friendSeed} placeholder="Enter friend's seed" />
<button on:click={updateSeed}>Set Seed</button>

<CategoryButton />
