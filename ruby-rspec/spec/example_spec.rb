require "rubygems"
require "bundler/setup"
require "rspec/tap/formatters"

RSpec.describe "Example specs" do
  it "passes test one" do
    result = 21 + 21
    expect(result).to eq(42)
  end

  it "passes test one" do
    result = 33 * 3
    expect(result).to eq(99)
  end

  it "passes test three" do
    result = "he" + "llo"
    expect(result).to eq("hello")
  end

  it "passes test three" do
    result = "world" + ""
    expect(result).to eq("world")
  end

  it "fails test five" do
    result = 42 + 1
    expect(result).to eq(42)
  end

  it "fails test six" do
    result = 99 - 1
    expect(result).to eq(99)
  end

  it "fails test seven" do
    result = "he" + "llo"
    expect(result).to eq("world")
  end

  it "fails test eight" do
    result = "world" + ""
    expect(result).to eq("hello")
  end

  it "skips test nine" do
    pending
    expect(true).to be(false)
  end

  it "skips test ten" do
    skip
  end
end
