test-summary example: Java with JUnit
=====================================

This produces a test summary for a Java project using the JUnit test framework.

GitHub Actions Workflow
-----------------------

An example GitHub Actions workflow that builds a Java project using ant, runs the tests, runs the test-summary action and uploads the test summary markdown as an artifact.

```yaml
name: Build and Test Java

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
          ant
      - name: Create test summary
        uses: test-summary/action@dist
        with:
          paths: results/**/*.xml
          output: results/test-summary.md
        if: always()
      - name: Upload test summary
        uses: actions/upload-artifact@v3
        with:
          name: test-summary
          path: results/test-summary.md
        if: always()
```
