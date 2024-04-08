export async function register() {
  console.log(process.env.NEXT_RUNTIME);
  if (process.env.NEXT_RUNTIME === "nodejs") {
    const server = (await import("./mocks/server")).default;
    server.listen();
  }
}
