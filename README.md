A Next.js + Fastify example.
With Fastify Swagger generation + openapi-typescript we can generate directly the types for the frontend

# How to use it

1. CD into the backend folder and run `npm run start`
2. CD into the frontend folder and run `generate-types`. This will generate the types in the `types` folder
3. Run `npm run dev`. In `app/page.tsx` you can hover on the `data` variable and see the right generated type
