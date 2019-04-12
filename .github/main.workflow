workflow "Build README" {
  on = "push"
  resolves = ["actions/bin/filter@46ffca7632504e61db2d4cb16be1e80f333cb859"]
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

action "Commit it!" {
  uses = "docker://cdssnc/auto-commit-github-action"
  needs = "Build"
  args = "This is an automatic build of the README based on the data JSON."
  secrets = ["GITHUB_TOKEN"]
}
