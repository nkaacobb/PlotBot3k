import os
import sys

def create_directory_structure(base_path):
    """Create the PlotBot3k directory structure."""
    directories = [
        'client/public',
        'client/src/auth',
        'client/src/components/editor',
        'client/src/components/nav',
        'client/src/components/ai',
        'client/src/components/charts',
        'client/src/layouts',
        'client/src/pages/dashboard',
        'client/src/pages/properties',
        'client/src/pages/summary',
        'client/src/pages/world',
        'client/src/pages/characters',
        'client/src/pages/chapters',
        'client/src/pages/analysis',
        'client/src/pages/export',
        'client/src/services',
        'client/src/store',
        'server/api',
        'server/auth',
        'server/models',
        'server/services',
        'server/websocket',
        'processing/api/generate',
        'processing/api/analyze',
        'processing/services/ai',
        'processing/services/analysis',
        'processing/services/export/formats',
        'processing/services/reports',
        'docs/api',
        'docs/user',
        'tests/unit',
        'tests/integration'
    ]

    for directory in directories:
        full_path = os.path.join(base_path, directory)
        os.makedirs(full_path, exist_ok=True)
        print(f"Created directory: {full_path}")

    # Create placeholder files
    files = {
        '.gitignore': """
node_modules/
__pycache__/
*.pyc
.env
.env.local
.venv/
dist/
build/
*.sqlite
*.db
""",
        'README.md': '# PlotBot3k\n\nAI-powered writing assistant application.',
    }

    for filename, content in files.items():
        filepath = os.path.join(base_path, filename)
        with open(filepath, 'w') as f:
            f.write(content.strip())
        print(f"Created file: {filepath}")

if __name__ == '__main__':
    base_path = 'D:\\AI\\PlotBot3k'
    create_directory_structure(base_path)
