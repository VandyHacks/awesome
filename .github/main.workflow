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

action "Build" {
  needs = "Install"
  uses = "actions/npm@master"
  args = "run build"
}

action "Lint" {
  needs = "Build"
  uses = "actions/npm@master"
  args = "run lint"
}

action "Commit" {
  uses = "docker://cdssnc/auto-commit-github-action"
  needs = "Lint"
  args = "This is an automatic build of the README based on the data JSON."
  secrets = ["GITHUB_TOKEN"]
}
