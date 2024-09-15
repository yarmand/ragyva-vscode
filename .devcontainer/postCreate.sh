#!/bin/bash

username=$1

ln -s /home/${username}/dotfiles ~/
cd ~/dotfiles
./setup.sh

