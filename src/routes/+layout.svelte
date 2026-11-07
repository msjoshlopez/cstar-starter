<script>
	let { children } = $props();
</script>

<header>
	<a href="/">My help desk</a>
	<span>Built on the cStar SDK</span>
</header>
<main>{@render children()}</main>

<style>
	:global(body) {
		margin: 0;
		background: #f7f6f2;
		color: #1c1c1c;
		font: 16px/1.5 system-ui, sans-serif;
	}
	header {
		display: flex;
		flex-wrap: wrap;
		gap: 0.25rem 1rem;
		align-items: baseline;
		justify-content: space-between;
		padding: 1rem;
		background: #fff;
		border-bottom: 2px solid #1c1c1c;
	}
	header a {
		color: inherit;
		font-weight: 700;
		text-decoration: none;
	}
	header span {
		color: #555;
		font-size: 0.875rem;
	}
	main {
		box-sizing: border-box;
		width: 100%;
		max-width: 44rem;
		margin: 0 auto;
		padding: 1rem;
	}
</style>
