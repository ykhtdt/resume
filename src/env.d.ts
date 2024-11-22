/// <reference path="../.astro/types.d.ts" />

interface ImportMetaEnv {
  readonly PDF_VIEW: string;
  readonly FORCE_THEME: string;
}

interface ImportMeta {
  readonly env: ImportMetaEnv;
}
