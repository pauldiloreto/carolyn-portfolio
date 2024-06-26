<script lang="ts">
	export let current: string;
	export let options: string[];
	export let onChange: (option: string) => void;

	let dropdownOpen = false;
	const close = (event: MouseEvent | TouchEvent) => {
		if (event.target instanceof HTMLElement && !event.target.closest('.dropdown')) {
			dropdownOpen = false;
		}
	};
</script>

<svelte:document on:click={close} on:touchstart={close} />
<div class="dropdown">
	<button
		class="menu-button"
		aria-label="Choose a filter"
		aria-haspopup="true"
		aria-expanded={dropdownOpen}
		on:click={() => (dropdownOpen = !dropdownOpen)}
	>
		{current}
		<svg inline-src="dropdown" />
	</button>
	<div class="dropdown-menu" role="menu" aria-hidden={!dropdownOpen}>
		{#each options as option}
			<button
				aria-label={`Choose filter: ${option}`}
				on:click={() => {
					onChange(option);
					dropdownOpen = false;
				}}
			>
				{option}
			</button>
		{/each}
	</div>
</div>

<style lang="postcss">
	.dropdown {
		display: inline-block;
		position: relative;
		width: auto;
		margin-top: 0.5rem;
		padding-bottom: 0.5rem;
	}
	.dropdown button {
		cursor: pointer;
		border: none;
		background-color: transparent;
		font-family: var(--body-font);
		font-size: 1rem;
		line-height: 1.75rem;
		color: var(--dark-color);
	}
	.menu-button {
		display: flex;
		align-items: center;
	}
	.menu-button svg {
		fill: var(--dark-color);
		margin-left: 0.5rem;
		width: 1rem;
		height: 1rem;
	}
	.dropdown-menu {
		visibility: visible;
		scale: 1;
		transition: all 0.2s ease-in-out;
		display: grid;
		z-index: 1;
		position: absolute;
		top: 0;
		left: 0;
		background-color: var(--light-text);
		color: var(--dark-color);
		overflow: hidden;
		box-shadow: 0 0 0.5rem rgba(var(--dark-color-rgb), 0.25);
	}
	.dropdown-menu[aria-hidden='true'] {
		visibility: hidden;
		scale: 0;
		transition: all 0.2s ease-in-out;
	}
	.dropdown-menu button {
		padding: 1rem 2rem;
	}
	.dropdown-menu button:not(:last-child) {
		border-bottom: 1px solid rgba(var(--dark-color-rgb), 0.25);
	}
</style>
