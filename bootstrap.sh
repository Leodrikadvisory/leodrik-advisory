#!/usr/bin/env bash

# ---------------------------
# Leodrik Advisory Bootstrap (Python + Node.js)
# ---------------------------

set -e
set -o pipefail

# --- CONFIGURATION ---
GITHUB_USER="Leodrikadvisory"
REPO_NAME="leodrik-advisory"
if [ -z "$GITHUB_PAT" ]; then
  echo "❌ ERROR: Please set your GitHub PAT first:"
  echo "   export GITHUB_PAT='ghp_xxx'"
  exit 1
fi
REMOTE_URL="https://$GITHUB_USER:$GITHUB_PAT@github.com/$GITHUB_USER/$REPO_NAME.git"
COMMIT_MESSAGE="${1:-Initial project setup}"

# --- 1. Create project structure ---
mkdir -p src assets docs
touch README.md .gitignore
echo "venv/" >> .gitignore
echo "node_modules/" >> .gitignore
echo "__pycache__/" >> .gitignore
echo ".env" >> .gitignore
echo ".DS_Store" >> .gitignore

# --- 2. Python setup ---
python3 -m venv venv
source venv/bin/activate
pip install --upgrade pip
pip install requests flask
touch requirements.txt
pip freeze > requirements.txt

# Python example file
cat << 'EOF' > src/main.py
def main():
    print("Hello, Leodrik Advisory! (Python)")

if __name__ == "__main__":
    main()
EOF

# --- 3. Node.js setup ---
if ! command -v npm >/dev/null 2>&1; then
    echo "❌ Node.js is not installed. Please install it first."
else
    npm init -y
    npm install express
    # Node example file
    mkdir -p src/node
    cat << 'EOF' > src/node/index.js
console.log("Hello, Leodrik Advisory! (Node.js)");
EOF
fi

# --- 4. Git initialization & sync ---
git config --global user.name "$GITHUB_USER"
git config --global user.email "$GITHUB_USER@users.noreply.github.com"
git config --global credential.helper store

if [ ! -d ".git" ]; then
    git init
fi

git remote get-url origin >/dev/null 2>&1 || git remote add origin "$REMOTE_URL"
git fetch origin || true
git merge -X theirs origin/main --allow-unrelated-histories -m "Auto-merge remote main" || true

git add .
git diff --cached --quiet || git commit -m "$COMMIT_MESSAGE"
git branch -M main
git push -u origin main || echo "⚠️ Push may require your PAT"

echo "✅ Bootstrap complete! Python + Node.js project ready and pushed to GitHub."
#!/usr/bin/env bash

# ---------------------------
# Leodrik Advisory Bootstrap
# ---------------------------

set -e  # Exit on errors
set -o pipefail

# --- CONFIGURATION ---
GITHUB_USER="Leodrikadvisory"
REPO_NAME="leodrik-advisory"
REMOTE_URL="https://$GITHUB_USER:$GITHUB_PAT@github.com/$GITHUB_USER/$REPO_NAME.git"
COMMIT_MESSAGE="${1:-Initial project setup}"

# --- 1. Create project structure ---
mkdir -p src assets docs
touch README.md requirements.txt .gitignore

# Add basic .gitignore entries
echo "venv/" >> .gitignore
echo "__pycache__/" >> .gitignore
echo ".env" >> .gitignore
echo ".DS_Store" >> .gitignore
echo "node_modules/" >> .gitignore

# --- 2. Python virtual environment ---
python3 -m venv venv
source venv/bin/activate

# Example: Install initial Python packages
pip install --upgrade pip
pip install requests flask
pip freeze > requirements.txt

# --- 3. Initialize Git ---
git config --global user.name "$GITHUB_USER"
git config --global user.email "$GITHUB_USER@users.noreply.github.com"
git config --global credential.helper store

if [ ! -d ".git" ]; then
    git init
fi

# Add remote if missing
git remote get-url origin >/dev/null 2>&1 || git remote add origin "$REMOTE_URL"

# Fetch and merge remote to avoid non-fast-forward
git fetch origin || true
git merge -X theirs origin/main --allow-unrelated-histories -m "Auto-merge remote main" || true

# Stage, commit, push
git add .
git diff --cached --quiet || git commit -m "$COMMIT_MESSAGE"
git branch -M main
git push -u origin main || echo "Push may require PAT authentication."

# --- 4. Create starter Python file ---
MAIN_FILE="src/main.py"
if [ ! -f "$MAIN_FILE" ]; then
    cat <<EOL > "$MAIN_FILE"
#!/usr/bin/env python3

def main():
    print("Hello, Leodrik Advisory!")

if __name__ == "__main__":
    main()
EOL
fi

echo "✅ Bootstrap complete! Your Python project is ready and pushed to GitHub."

