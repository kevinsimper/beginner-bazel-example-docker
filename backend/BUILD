genrule(
  name = "build",
  srcs = ["Dockerfile", "server.js"],
  cmd = "tar -czh . | docker build -q -t backend -f backend/Dockerfile - > $@",
  outs = ["imagesha.txt"]
)
