test-summary example: C with Clar
=================================

This produces a test summary for a C project using the [Clar test framework](https://github.com/clar-test/clar).

GitHub Actions Workflow
-----------------------

An example GitHub Actions workflow that builds a C project, runs the clar tests, runs the test-summary action and uploads the test summary markdown as an artifact.

```yaml
name: Build and Test .NET Core

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
          make
          ./test -rresults/tests.xml
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
