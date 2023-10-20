# module-require

Run with `npm run start'.

While running, every 3 seconds the accompanying module will be `require`d and the exported function `exec` will be called.

Unlike the `main` branch, changes to the module *WILL* be acknowledged during runtime, because the `require` cache is cleared for the module.
