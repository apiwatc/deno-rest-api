import { Application } from "https://deno.land/x/oak/mod.ts";
import { yellow } from "https://deno.land/std@0.53.0/fmt/colors.ts";
import router from "./route.ts";
import notFound from "./middlewares/notFound.ts";

const port: number = 5000;
const app = new Application();

app.use(router.routes());
app.use(router.allowedMethods());

// it will first match/check routes from our router,
// if none are found, it will then execute app.use(notFound);.
app.use(notFound);

// console.log(`Server running on ${port}`);
console.log(`${yellow("Listening on port:")} ${port}`);

await app.listen({ port });
