/**
 * The first thing that goes wrong is usually the key, so say so.
 * @type {import('@sveltejs/kit').HandleServerError}
 */
export function handleError({ error }) {
	console.error(error);
	const status = /** @type {{ statusCode?: number }} */ (error)?.statusCode;
	if (status === 401 || status === 403) {
		return { message: 'cStar refused your key. Check CSTAR_SECRET_KEY and CSTAR_TEAM_ID in .env.' };
	}
	return { message: 'Something went wrong talking to cStar. Try again.' };
}
