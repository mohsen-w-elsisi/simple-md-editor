import { isNil } from "ramda";
import type { RequestHandler } from "./$types.js";
import { error } from "@sveltejs/kit";

export const POST: RequestHandler = async ({ request }) => {
    return new Response("testing now :)")
};
