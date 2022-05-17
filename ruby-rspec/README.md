test-summary example: Ruby with RSpec
==============================================

This produces a test summary for a Ruby project using the RSpec and [rspec-tap-formatters](https://github.com/avmnu-sng/rspec-tap-formatters).

Project Setup
-------------

Add the following line to your Gemfile:

```ruby
gem "rspec-tap-formatters", require: false
````

Ensure it works locally by running:

```bash
bundle exec rspec --format RSpec::TAP::Formatters::Default
```

GitHub Actions Workflow
-----------------------

An example GitHub Actions workflow that builds a Ruby project using RSpec, runs the tests, runs the test-summary action and uploads the test summary markdown as an artifact.

```yaml
name: Build and Test Ruby

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

      - name: Set up Ruby
        uses: ruby/setup-ruby@v1
        with:
          ruby-version: '3.1.2'

      - name: Run Tests
        run: bundle exec rspec --format RSpec::TAP::Formatters::Flat --out spec/results.tap

      - name: Test Summary
        uses: test-summary/action@v1
        with:
          paths: "spec/results.tap"
        if: always()
```
