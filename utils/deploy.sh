#!/bin/bash

set -eux

trizen -Syu --noconfirm nodejs npm
npm install org

git config --global user.name "Gazaunga"
git config --global user.email "jeremy.ottley@gmail.com"
git config --global core.autocrlf input
git config --global core.safecrlf true

wget https://raw.githubusercontent.com/Gazaunga/.dots/master/.profile -O ~/.bash_profile
source ~/.bash_profile

sudo gem install rails

rails new OrgEdit
cd OrgEdit
git init
git add --all
git commit -m "Initial Commit"
git push -u origin master
