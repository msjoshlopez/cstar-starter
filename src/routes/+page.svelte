<script>
	let { data } = $props();
</script>

<svelte:head><title>Tickets</title></svelte:head>

<h1>Tickets</h1>
{#if data.tickets.length === 0}
	<p>No tickets yet. Make one in cStar, or from the chat on your site, and it shows up here.</p>
{:else}
	<ul>
		{#each data.tickets as ticket (ticket.id)}
			<li>
				<a href="/tickets/{ticket.id}">
					<strong>{ticket.title}</strong>
					<span>{ticket.customerName ?? 'Unknown customer'}, {ticket.status}</span>
				</a>
			</li>
		{/each}
	</ul>
{/if}

<style>
	ul {
		display: grid;
		gap: 0.5rem;
		margin: 0;
		padding: 0;
		list-style: none;
	}
	a {
		display: grid;
		gap: 0.125rem;
		padding: 0.75rem 1rem;
		background: #fff;
		border: 2px solid #1c1c1c;
		border-radius: 0.75rem;
		color: inherit;
		text-decoration: none;
		overflow-wrap: anywhere;
	}
	span {
		color: #555;
		font-size: 0.875rem;
	}
</style>
