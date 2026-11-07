<script>
	import { enhance } from '$app/forms';

	let { data, form } = $props();
	const closed = $derived(Boolean(data.ticket.closedAt));
</script>

<svelte:head><title>{data.ticket.title}</title></svelte:head>

<a href="/">All tickets</a>
<h1>{data.ticket.title}</h1>
<p class="meta">{data.ticket.customerName ?? 'Unknown customer'}, {data.ticket.status}</p>

<ol>
	{#each data.messages as message (message.id)}
		<li class:agent={message.sender === 'agent'}>
			<strong>{message.senderName ?? message.sender}</strong>
			<p>{message.content}</p>
		</li>
	{/each}
</ol>

<form method="POST" action="?/reply" use:enhance>
	<label for="content">Your reply</label>
	<textarea id="content" name="content" rows="4" required></textarea>
	{#if form?.problem}<p role="alert">{form.problem}</p>{/if}
	<div>
		<button>Send reply</button>
		{#if !closed}<button formaction="?/resolve" formnovalidate class="quiet">Resolve</button>{/if}
	</div>
</form>

<style>
	a {
		color: inherit;
	}
	h1 {
		margin: 0.5rem 0 0;
		overflow-wrap: anywhere;
	}
	.meta {
		margin-top: 0;
		color: #555;
	}
	ol {
		display: grid;
		gap: 0.5rem;
		padding: 0;
		list-style: none;
	}
	li {
		padding: 0.75rem 1rem;
		background: #fff;
		border: 2px solid #1c1c1c;
		border-radius: 0.75rem;
		overflow-wrap: anywhere;
	}
	li.agent {
		background: #e8f5ee;
	}
	li p {
		margin: 0.25rem 0 0;
		white-space: pre-wrap;
	}
	form {
		display: grid;
		gap: 0.5rem;
	}
	label {
		font-weight: 600;
	}
	textarea {
		box-sizing: border-box;
		width: 100%;
		padding: 0.5rem 0.75rem;
		border: 2px solid #1c1c1c;
		border-radius: 0.5rem;
		font: inherit;
	}
	[role='alert'] {
		margin: 0;
		color: #b91c1c;
	}
	form div {
		display: flex;
		gap: 0.5rem;
	}
	button {
		min-height: 42px;
		padding: 0.5rem 1rem;
		background: #1c1c1c;
		border: 2px solid #1c1c1c;
		border-radius: 0.5rem;
		color: #fff;
		font: inherit;
		font-weight: 600;
		cursor: pointer;
	}
	button.quiet {
		background: #fff;
		color: #1c1c1c;
	}
</style>
