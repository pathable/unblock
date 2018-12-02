Package.describe({
  summary: "A utils to unblock subscriptions, a this.unblock inside for Meteor Publications",
  version: "1.0.0",
  git: "https://github.com/lamhieu-vk/unblock.git",
  name: "lamhieu:unblock",
});

Package.onUse(function(api, where) {
  configurePackages(api);
});

Package.onTest(function(api) {
  configurePackages(api);
  api.use("tinytest");
  api.add_files("test/unblock.js", "server");
});

function configurePackages(api) {
  api.versionsFrom("METEOR@1.0");
  api.use("lamhieu:meteorx@2.0.1");
  api.add_files("src/unblock.js", "server");
}
