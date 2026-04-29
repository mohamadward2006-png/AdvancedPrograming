#!/bin/bash

TODAY=$(date +"%Y-%m-%d")
FILE="notes/report-$TODAY.txt"

mkdir -p notes
mkdir -p data

echo "User: $(whoami)" > $FILE
echo "Path: $(pwd)" >> $FILE
echo "Files in data/: $(ls data | wc -l)" >> $FILE

echo "good"
