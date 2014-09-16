module.exports.parse = function (pkgId) {
  var hasNamespace = /^@[\w\-\.]+\/[\w\-\.]+/.test(pkgId);
  var parts;
  if (hasNamespace) {
    parts = pkgId.replace(/^@/, "").split("@");
    parts[0] = "@" + parts[0];
  } else {
    parts = pkgId.split("@");
  }
  return {
    name: parts[0],
    version: parts[1]
  };
};

module.exports.create = function (name, version) {
  return name + "@" + version;
};
