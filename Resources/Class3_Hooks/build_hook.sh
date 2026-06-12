#!/bin/bash
# Class 3: Build Hook Example
# This script intercepts a build process, and if it fails, sends the error to an AI endpoint for suggested fixes.

echo "Running build..."
# Simulate a dotnet build command
dotnet build > build_output.log 2>&1
BUILD_STATUS=$?

if [ $BUILD_STATUS -ne 0 ]; then
    echo "Build failed! Intercepting error..."
    ERROR_LOG=$(cat build_output.log | tail -n 20)
    
    echo "Sending error to AI Assistant for analysis..."
    # Mock API call to AI
    curl -X POST https://api.openai.com/v1/chat/completions \
         -H "Content-Type: application/json" \
         -H "Authorization: Bearer \$OPENAI_API_KEY" \
         -d '{
               "model": "gpt-4",
               "messages": [
                 {"role": "system", "content": "You are a senior C#/.NET expert. Analyze this build error and suggest a fix."},
                 {"role": "user", "content": "Build Error:\n'"$ERROR_LOG"'\n\nHow do I fix this?"}
               ]
             }' > ai_response.json
    
    echo "AI Suggestion received (saved to ai_response.json):"
    cat ai_response.json | jq '.choices[0].message.content'
    
    exit 1
fi

echo "Build succeeded!"
exit 0
