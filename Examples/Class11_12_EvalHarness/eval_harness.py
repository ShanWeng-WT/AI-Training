import json
import os
import subprocess

# Class 11/12: Evaluation Harness Example
# This script simulates an automated harness that tests AI-generated code against a dataset.

def load_dataset(filepath):
    with open(filepath, 'r', encoding='utf-8') as f:
        return json.load(f)

def evaluate_ai_code(task, expected_keywords):
    print(f"Evaluating task: {task}")
    # In a real harness, we would call the LLM API here to generate code.
    # For this mock, we simulate generated code.
    generated_code = "public static MySingleton Instance { get; private set; }"
    
    # 1. Deterministic Evaluation (Keyword check or Compilation)
    score = 0
    for kw in expected_keywords:
        if kw in generated_code:
            score += 1
            
    final_score = (score / len(expected_keywords)) * 100
    return final_score

def main():
    dataset_path = "dataset.json"
    if not os.path.exists(dataset_path):
        print(f"Dataset {dataset_path} not found.")
        return
        
    dataset = load_dataset(dataset_path)
    total_score = 0
    
    for item in dataset:
        score = evaluate_ai_code(item['task'], item['expected_output_keywords'])
        print(f"Task {item['id']} Score: {score}%")
        total_score += score
        
    avg_score = total_score / len(dataset)
    print(f"--- Evaluation Complete ---")
    print(f"Average AI Performance Score: {avg_score}%")
    
    if avg_score < 80:
        print("Warning: AI Performance degraded! CI pipeline failed.")
        exit(1)
    else:
        print("Success: AI generated code passed evaluation.")
        exit(0)

if __name__ == "__main__":
    main()
