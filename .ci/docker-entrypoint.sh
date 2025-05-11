#!/usr/bin/env sh

# Get environment variables and filter NEXT_ ones.
printenv | grep NEXT_ | while read -r ENV_LINE ; do
  # Separate the key and value parts from the found lines.
  ENV_KEY=$(echo $ENV_LINE | cut -d "=" -f1)
  ENV_VALUE=$(echo $ENV_LINE | cut -d "=" -f2)

  # Find .js and .html files in .next directory and server.js in /app
  find /app/.next /app/server.js -type f \( -name "*.js" -o -name "*.html" \) -exec sed -i.bak "s|_${ENV_KEY}_|${ENV_VALUE}|g" {} \; -exec rm {}.bak \;
  echo "Replacing _${ENV_KEY}_ with ${ENV_VALUE} in app files"
done

# Execute the application main command.
echo "Starting Nextjs"
exec "$@"