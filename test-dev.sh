#!/bin/bash
bash -v build.sh
browserify build/index.js --debug -o public/index.js
rm -rf ~/Devs/run/app/adproject
mkdir ~/Devs/run/app/adproject
cd public
cp -r * ~/Devs/run/app/adproject
cd ..
