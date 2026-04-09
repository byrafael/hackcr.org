#!/usr/bin/env bash
set -euo pipefail

BUILD_DIR="${BUILD_DIR:-dist}"
DEPLOY_PATH="${DEPLOY_PATH:-/home/rsrdev/hackcr.org}"
TARGET_ENV_PATH="$DEPLOY_PATH/api/env.php"
INCOMING_ENV_PATH="$BUILD_DIR/api/env.php"

if [ ! -d "$BUILD_DIR" ]; then
  echo "Build directory '$BUILD_DIR' does not exist."
  exit 1
fi

mkdir -p "$DEPLOY_PATH"

# Preserve production env.php if it already exists.
preserved_env_path=""
if [ -f "$TARGET_ENV_PATH" ]; then
  preserved_env_path="$(mktemp)"
  /bin/cp "$TARGET_ENV_PATH" "$preserved_env_path"
fi

# Safety check before destructive cleanup.
if [ -z "$DEPLOY_PATH" ] || [ "$DEPLOY_PATH" = "/" ]; then
  echo "Refusing to deploy: invalid DEPLOY_PATH '$DEPLOY_PATH'."
  exit 1
fi

# Replace the entire deployed tree with the new build output.
/usr/bin/find "$DEPLOY_PATH" -mindepth 1 -exec /bin/rm -rf {} +

# Copy all build output into the deploy path.
/bin/cp -R "$BUILD_DIR/." "$DEPLOY_PATH"

# If production env.php existed, keep it and write incoming env.php to env-new.php.
if [ -n "$preserved_env_path" ]; then
  if [ -f "$INCOMING_ENV_PATH" ]; then
    /bin/cp "$INCOMING_ENV_PATH" "$DEPLOY_PATH/api/env-new.php"
  fi
  /bin/cp "$preserved_env_path" "$TARGET_ENV_PATH"
  /bin/rm -f "$preserved_env_path"
fi
