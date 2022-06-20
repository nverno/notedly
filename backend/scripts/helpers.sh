#!/usr/bin/env bash

DIR="$( cd "$( dirname "${BASH_SOURCE[0]}" )" && pwd)"

HEROKU_APP=notedly-service

# heroku autocomplete setup
# shellcheck disable=SC1090
HEROKU_AC_BASH_SETUP_PATH="$HOME/.cache/heroku/autocomplete/bash_setup" &&
    test -f $HEROKU_AC_BASH_SETUP_PATH &&
    source $HEROKU_AC_BASH_SETUP_PATH;

deploy() {
    # docker-compose -f "$DIR/Dockerfile" build &&
    heroku container:login &&
        heroku container:push web --app "$HEROKU_APP" &&
        heroku container:release web --app "$HEROKU_APP"
}
