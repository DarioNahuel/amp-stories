#!/bin/bash

if [ 'main' == `git rev-parse --abbrev-ref HEAD` ]; then
    exit 0
fi

echo 'You must be on the "main" branch to do this'
exit 1