import { error, fail } from '@sveltejs/kit';
import { cstar } from '#lib/server/cstar.js';

export async function load({ params }) {
	try {
		const [ticket, { data: messages }] = await Promise.all([
			cstar.tickets.get(params.id),
			cstar.tickets.messages.list(params.id)
		]);
		return { ticket, messages };
	} catch (cause) {
		if (cause?.statusCode === 404) error(404, 'That ticket is not here.');
		throw cause;
	}
}

export const actions = {
	reply: async ({ params, request }) => {
		const content = String((await request.formData()).get('content') ?? '').trim();
		if (!content) return fail(400, { problem: 'Write a reply first.' });
		await cstar.tickets.messages.create(params.id, { content, sender: 'agent' });
		return { sent: true };
	},
	resolve: async ({ params }) => {
		await cstar.tickets.update(params.id, { status: 'resolved' });
		return { resolved: true };
	}
};
