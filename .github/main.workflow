workflow "Build README" {
  on = "push"
  resolves = [
    "Commit",
    "Build",
  ]
}

action "Install" {
  uses = "actions/npm@master"
  args = "install"
}

action "Lint" {
  needs = "Install"
  uses = "actions/npm@master"
  args = "run lint"
}

action "Build" {
  needs = "Lint"
  uses = "actions/npm@master"
  args = "run build"
}

action "Commit" {
  uses = "docker://cdssnc/auto-commit-github-action"
  needs = "Build"
  args = "This is an automatic build of the README based on the data JSON."
  secrets = ["GITHUB_TOKEN"]
}
