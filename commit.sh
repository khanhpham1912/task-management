#!/bin/bash

current_branch=$(git branch --show-current)
echo "Enter commit message:"
read message

git add .
git commit -m "$message"
git pull origin $current_branch
git push origin $current_branch
echo Commit and push $current_branch success!