workflow "Build README" {
  on = "push"
  resolves = ["GitHub Action for npm"]
}

action "Install" {
  uses = "actions/npm@master"
  args = "install"
}

action "Build" {
  needs = "Install"
  uses = "actions/npm@master"
  args = "build"
}
