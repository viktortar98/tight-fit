import { defineConfig } from 'vite';

export default defineConfig({
  // Relative asset URLs, because a release is published twice: at the site
  // root and at a permanent /vN/ path beside the versions before it. An
  // absolute "/assets/..." resolves to the root from both, so the archived
  // copy would quietly start serving whichever build the root holds — the one
  // thing versioned paths exist to prevent.
  base: './',
});
