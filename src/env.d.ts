/// <reference types="astro/client" />

interface ImportMetaEnv {
	readonly EXAMPLE_ENV_VAR: string
}

interface ImportMeta {
	readonly env: ImportMetaEnv
}
