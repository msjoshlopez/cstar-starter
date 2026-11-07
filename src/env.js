import { defineEnvVars } from '@sveltejs/kit/env';

/** @param {string | undefined} value */
const optional = (value) => value;

/** @param {string} name @returns {(value: string | undefined) => string} */
const required = (name) => (value) => {
	if (!value) throw new Error(`${name} is missing. Copy .env.example to .env and fill it in.`);
	return value;
};

export const variables = defineEnvVars({
	CSTAR_SECRET_KEY: { schema: required('CSTAR_SECRET_KEY') },
	CSTAR_TEAM_ID: { schema: required('CSTAR_TEAM_ID') },
	CSTAR_BASE_URL: { schema: optional }
});
