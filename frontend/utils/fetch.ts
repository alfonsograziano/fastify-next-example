import createClient from "openapi-fetch";
import type { paths } from "../types/schema";

export default createClient<paths>({ baseUrl: "http://localhost:8080/" });
