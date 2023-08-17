<script lang="ts">
  import type { ControlBarItem } from "$types";

  export let controlBarItem: ControlBarItem;

  const { name, icon, menu } = controlBarItem;
</script>

<span class="dropdown dropdown-hover dropdown-right">
  <label class="btn btn-square m-1" for="">
    <img src={icon} alt={name} class="invert scale-75" />
  </label>

  <ul class="dropdown-content z-[1] pl-3">
    <menu class="menu p-2 shadow bg-base-200 rounded-box w-52">
      {#each menu as { text, action }}
        <button class="btn" on:click={action}>
          <span class="text-left mr-auto">{text}</span>
        </button>
      {/each}
    </menu>
  </ul>
</span>
