import { CStarClient } from '@cstar.help/js';
import { CSTAR_BASE_URL, CSTAR_SECRET_KEY, CSTAR_TEAM_ID } from '$app/env/private';

/** The one place this app talks to cStar. It runs on the server, with your secret key. */
export const cstar = new CStarClient({
	apiKey: CSTAR_SECRET_KEY,
	teamId: CSTAR_TEAM_ID,
	...(CSTAR_BASE_URL ? { baseUrl: CSTAR_BASE_URL } : {})
});
