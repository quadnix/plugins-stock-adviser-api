# plugins-stock-adviser-api
API for plugins-stock-adviser.

To play this plugin, visit [Quadnix Plugins](https://plugins.quadnix.com)
or [click here](http://stockadviser-quadnix.engine.quadnix.com).

## Endpoints
1. `/` (GET) - Responds with text "OK".
2. `/api/version` (GET) - Responds with the API version number.
3. `/api/coming-soon/lead` (GET) - Responds with a random lead text.

#### Zip Command
> zip -r plugins-stock-adviser-api-v0.0.1.zip . -x .DS_Store -x .git/\* -x .idea/\* -x node_modules/\*
