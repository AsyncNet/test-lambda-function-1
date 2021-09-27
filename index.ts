import printer from "./printer"

function run() {
  printer("Hello")
}

export const handler = (event, context) => {
  run()
}
