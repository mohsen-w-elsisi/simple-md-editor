<script lang="ts">
  import COntrolBarItem from "./COntrolBarItem.svelte";
  import controlBarItems from "./controlBarItems.js";
</script>

<aside class="bg-base-200 w-16 pt-1">
  {#each controlBarItems as controlBarItem}
    <COntrolBarItem {controlBarItem} />
  {/each}
</aside>
