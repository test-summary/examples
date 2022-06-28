test-summary example: Python with pytest
========================================

This produces a test summary for a Python project using the Pytest test framework.

GitHub Actions Workflow
-----------------------

An example GitHub Actions workflow that builds a Python project, runs the tests, runs the test-summary action and uploads the test summary markdown as an artifact.

```yaml
name: Build and Test Python

on:
  push:
    branches: [ main ]
  pull_request:
    branches: [ main ]
  workflow_dispatch:

jobs:
  build:
    name: Build and Test
    runs-on: ubuntu-latest

    steps:
      - name: Check out repository
        uses: actions/checkout@v3
      - name: Build and test
        run: |
          npm ci
          npm run test
      - name: Create test summary
        uses: test-summary/action@dist
        with:
          paths: results/**/*.xml
        if: always()
```
