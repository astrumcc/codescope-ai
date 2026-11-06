# CodeScope AI

Early-stage browser-based Python code review prototype. Currently uses transparent heuristic rules; AI analysis is a future goal, not a current capability.

## Run

Open `index.html` through a local HTTP server:

```sh
python -m http.server 8000
```

Visit http://localhost:8000/ . No dependencies or API keys are required.

## Test

```sh
node --test analyzer.test.mjs
```

## Deploy

Create a public GitHub repository, upload `index.html` and `analyzer.mjs`, then enable GitHub Pages from the repository root on the default branch. Do not publish secrets or personal data.

## Roadmap

- Add a Python AST-backed parser for deeper analysis.
- Evaluate AI-assisted review with Amazon Bedrock after obtaining authorized API access.

## Status

Prototype. Not affiliated with AWS or Anthropic.
