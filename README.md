# module-require

Run with `npm run start'.

While running, every 3 seconds the accompanying module will be `require`d and the exported function `exec` will be called.

Note that changes to the module will NOT be reflected while the app is running, and requires a full restart to have changes acknowledged!

Check the [clear-cache](https://github.com/CodexHere/module-require/tree/clear-cache) branch for an implementation that supports runtime modifications.
