genrule(
  name = "build",
  srcs = ["server.js"],
  cmd = "cat $(location server.js) > $(location server.build.js)",
  outs = ["server.build.js"]
)
