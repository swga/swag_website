#!/bin/bash

# Remove deployment files, copied by the standard copying process (doesn't support exclusions unfortunately)
rm -f /var/www/html/appspec.yml
rm -rf /var/www/html/scripts

exit 0

