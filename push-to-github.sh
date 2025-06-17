#!/bin/bash

# Script to automatically push changes to GitHub
# Usage: ./push-to-github.sh "Your commit message"

# Colors for output
GREEN='\033[0;32m'
YELLOW='\033[1;33m'
RED='\033[0;31m'
NC='\033[0m' # No Color

# Check if commit message is provided
if [ -z "$1" ]; then
    echo -e "${YELLOW}No commit message provided. Using default message.${NC}"
    COMMIT_MSG="Update project files"
else
    COMMIT_MSG="$1"
fi

echo -e "${GREEN}🚀 Starting GitHub push process...${NC}"

# Check if there are any changes
if git diff --quiet && git diff --staged --quiet; then
    echo -e "${YELLOW}No changes detected. Nothing to commit.${NC}"
    exit 0
fi

# Add all changes
echo -e "${GREEN}📁 Adding all changes...${NC}"
git add .

# Show what will be committed
echo -e "${GREEN}📋 Files to be committed:${NC}"
git diff --staged --name-only

# Commit changes
echo -e "${GREEN}💾 Committing changes with message: '${COMMIT_MSG}'${NC}"
git commit -m "$COMMIT_MSG"

# Check if commit was successful
if [ $? -eq 0 ]; then
    echo -e "${GREEN}✅ Commit successful!${NC}"
else
    echo -e "${RED}❌ Commit failed!${NC}"
    exit 1
fi

# Push to GitHub
echo -e "${GREEN}🌐 Pushing to GitHub...${NC}"
git push

# Check if push was successful
if [ $? -eq 0 ]; then
    echo -e "${GREEN}🎉 Successfully pushed to GitHub!${NC}"
    echo -e "${GREEN}Repository: https://github.com/thejwx/hello-nextjs-app${NC}"
else
    echo -e "${RED}❌ Push failed!${NC}"
    exit 1
fi

echo -e "${GREEN}✨ All done!${NC}"