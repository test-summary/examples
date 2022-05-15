test-summary example: Go with JUnit
=====================================

This produces a test summary for a Go module using the JUnit test framework.

To output a native Go test into a JUnit compatible XML file, you will need to use an additional package. [go-junit-report](https://github.com/jstemmer/go-junit-report) is one such package that can be used to generate a JUnit compatible XML file from a Go test output.

The sample go module is based on the documentation from the [Go tutorial docs](https://go.dev/doc/tutorial/add-a-test).

GitHub Actions Workflow
-----------------------

An example GitHub Actions workflow that builds a Go project, runs the tests and converts them using the go-junit-report, then runs the test-summary action and uploads the test summary markdown as an artifact.

```yaml
name: Build and Test Go with JUnit

on:
  push:
    branches: [ main ]
  pull_request:
    branches: [ main ]
  workflow_dispatch:

env:
  EXAMPLE_PATH: "go-junit"

jobs:
  build:
    name: Build and Test
    runs-on: ubuntu-latest
    steps:
      - name: Check out repository
        uses: actions/checkout@v3
      - name: Build the code
        working-directory: ${{ env.EXAMPLE_PATH }}
        run: |
          go build .
      - name: Run the tests
        working-directory: ${{ env.EXAMPLE_PATH }}
        run: |
          export GOPATH="$HOME/go/"
          export PATH=$PATH:$GOPATH/bin
          go install github.com/jstemmer/go-junit-report@latest
          go test -v ./... | go-junit-report -set-exit-code > report.xml
      - name: Create test summary
        uses: test-summary/action@dist
        with:
          paths: ${{ env.EXAMPLE_PATH }}/report.xml
        if: always()
```
