#!/bin/bash

if [ 'master' == `git rev-parse --abbrev-ref HEAD` ]; then
    exit 0
fi

echo 'You must be on the "master" branch to do this'
exit 1