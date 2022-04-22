test-summary example: JavaScript with Node Tap
==============================================

This produces a test summary for a Java project using the Node TAP test framework.

GitHub Actions Workflow
-----------------------

An example GitHub Actions workflow that builds a JavaScript project using npm, runs the tests, runs the test-summary action and uploads the test summary markdown as an artifact.

```yaml
name: Build and Test JavaScript

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
          paths: results/**/*.tap
        if: always()
```
