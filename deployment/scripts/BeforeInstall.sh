#!/bin/bash

# preserve the previous version and create a new empty target directory
[[ -d /var/www/html ]] && mv /var/www/html /var/www/html.backup.${DEPLOYMENT_ID}
mkdir -p /var/www/html
