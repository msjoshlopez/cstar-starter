import { cstar } from '#lib/server/cstar.js';

export async function load() {
	const { data: tickets } = await cstar.tickets.list({ pageSize: 25 });
	return { tickets };
}
